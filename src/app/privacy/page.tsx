import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Khushu collects, uses and protects information.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you submit the contact form, we collect the information you provide directly — your name, email address, company, and the details you share about your project. We may also collect standard technical data (such as pages visited and general device/browser information) through privacy-conscious analytics.",
  },
  {
    title: "2. How We Use Information",
    body: "We use the information you submit to respond to your inquiry, evaluate whether we're a good fit for your project, and, if you opt in, to send occasional updates. We do not sell personal information to third parties.",
  },
  {
    title: "3. Data Retention",
    body: "We retain contact submissions for as long as reasonably necessary to respond to your inquiry and maintain business records, after which they may be deleted or anonymized.",
  },
  {
    title: "4. Third-Party Services",
    body: "We may use third-party service providers (for example, email delivery, hosting and analytics providers) to operate this site. These providers process data on our behalf and are expected to handle it securely.",
  },
  {
    title: "5. Your Rights",
    body: "Depending on your jurisdiction, you may have rights to access, correct or request deletion of your personal information. To make a request, contact us using the details on our Contact page.",
  },
  {
    title: "6. Changes to This Policy",
    body: "We may update this policy from time to time. Material changes will be reflected by updating the date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        eyebrow="LEGAL"
        title="Privacy Policy"
        lede="This page is a structural template — have it reviewed by qualified legal counsel before treating it as your binding policy. Last updated: not yet published."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap article-body" style={{ maxWidth: "760px" }}>
          {SECTIONS.map((s) => (
            <div key={s.title} style={{ marginBottom: "30px" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "19px", fontWeight: 600, color: "var(--text-heading)", marginBottom: "10px" }}>
                {s.title}
              </h2>
              <p style={{ marginBottom: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
