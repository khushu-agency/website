import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Khushu — services, reliability, AI agents and what happens after launch.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="FREQUENTLY ASKED"
        title="Everything you need to know."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: "760px" }}>
          <FaqAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>
      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Still have a <em>question</em>?
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-solid">
              Talk to Us
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
