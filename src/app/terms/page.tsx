import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Khushu website and engagement with Khushu.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By using this website, you agree to these terms. If you do not agree, please do not use the site.",
  },
  {
    title: "2. Use of the Website",
    body: "This website and its content are provided for informational purposes about Khushu's services and portfolio. You agree not to misuse the site, attempt to disrupt its operation, or use it for any unlawful purpose.",
  },
  {
    title: "3. Portfolio & Content Accuracy",
    body: "Portfolio systems shown on this site are Khushu portfolio builds or demonstration systems unless explicitly identified as a named client engagement. Figures shown in the ROI calculator are illustrative estimates only and are not guarantees of any financial outcome.",
  },
  {
    title: "4. Intellectual Property",
    body: "The design, content and code of this website belong to Khushu unless otherwise noted, and may not be copied or reused without permission.",
  },
  {
    title: "5. Engagements",
    body: "Any actual project engagement with Khushu will be governed by a separate, signed agreement covering scope, fees, timelines and deliverables. Nothing on this website constitutes an offer or a binding agreement on its own.",
  },
  {
    title: "6. Limitation of Liability",
    body: "This website and its content are provided as-is, without warranties of any kind, to the fullest extent permitted by law.",
  },
  {
    title: "7. Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        eyebrow="LEGAL"
        title="Terms of Service"
        lede="This page is a structural template — have it reviewed by qualified legal counsel before treating it as binding. Last updated: not yet published."
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
