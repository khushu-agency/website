"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

/**
 * Server action for the contact form.
 *
 * Client-side validation (React Hook Form + Zod) already runs in
 * ContactForm.tsx, but per the spec that is never trusted alone — every
 * field is re-validated here against the same Zod schema before anything
 * else happens.
 *
 * LEAD DELIVERY — Google Sheets via Apps Script:
 * If GOOGLE_SHEETS_WEBHOOK_URL is set (see .env.example), every validated
 * submission is POSTed to that URL, which is expected to be a Google Apps
 * Script Web App deployment (`doPost(e)`) that appends a row to a Sheet —
 * the same approach already used elsewhere in this project's history, with
 * one deliberate improvement:
 *
 * The earlier version of this integration ran client-side with
 * `mode: "no-cors"`, which is the standard workaround for calling an Apps
 * Script Web App directly from the browser (its responses don't carry CORS
 * headers) — but it means the page can never actually read whether Google
 * accepted the submission; it just assumes success if no network exception
 * was thrown.
 *
 * Here the POST happens from this server action instead, which runs on the
 * server, not in the browser. Server-to-server requests aren't subject to
 * CORS at all, so `no-cors` isn't needed — this can read the real response
 * status and body, and only reports success when Apps Script actually
 * confirms the row was written (or at minimum, responds with a 2xx status).
 *
 * If your Apps Script's `doPost(e)` reads different field/column names than
 * the ones sent below, either adjust the script to match these, or adjust
 * the `params.append(...)` calls below to match the script — whichever is
 * less friction on your end.
 *
 * If GOOGLE_SHEETS_WEBHOOK_URL is not set (e.g. local dev without it
 * configured yet), this falls back to a no-op success so the form still
 * works end-to-end during development.
 *
 * STILL STUBBED — optional, wire up if you want them:
 *   1. Also persist to Postgres/Supabase for querying/reporting beyond
 *      what a Sheet gives you.
 *   2. Also send a notification email via Resend.
 *   3. Real spam protection (Cloudflare Turnstile / hCaptcha) in addition
 *      to the honeypot field already checked below.
 */
export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Some fields need a second look." };
  }

  // Honeypot: a real visitor never fills this hidden field in.
  if (parsed.data.companyWebsite) {
    return { success: false, error: "Submission rejected." };
  }

  const data = parsed.data;
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    // No Sheets webhook configured yet — succeed locally so the form and
    // its validation can still be exercised end-to-end in development.
    // TODO: set GOOGLE_SHEETS_WEBHOOK_URL (see .env.example) before
    // treating this as production-ready lead capture.
    return { success: true };
  }

  try {
    const params = new URLSearchParams();
    params.append("name", data.name);
    params.append("email", data.email);
    params.append("company", data.company ?? "");
    params.append("projectTitle", data.projectTitle);
    params.append("serviceArea", data.serviceArea); // the "capability area" field
    params.append("problem", data.problem);
    params.append("description", data.description);
    params.append("timeline", data.timeline);
    params.append("budget", data.budget ?? "");
    params.append("additionalContext", data.additionalContext ?? "");
    params.append("submittedAt", new Date().toISOString());
    params.append("source", "khushu.ai/contact");

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      return { success: false, error: "Something went wrong sending your brief. Please try again." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong sending your brief. Please try again." };
  }
}
