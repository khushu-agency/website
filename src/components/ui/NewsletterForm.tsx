"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: frontend-only stub. Wire this up to a real mailing-list
    // provider (e.g. Resend Audiences, Mailchimp) before shipping.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
        Thanks — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" required aria-label="Email address" />
      <button type="submit" aria-label="Subscribe">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  );
}
