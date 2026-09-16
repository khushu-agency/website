import Link from "next/link";
import { faqs } from "@/data/faqs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function FaqPreview() {
  const featured = faqs.slice(0, 4);
  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              FREQUENTLY ASKED
            </div>
            <h2 className="head">
              Everything you need to know about <em>working with us</em>.
            </h2>
            <p style={{ marginTop: "18px", fontSize: "15px", color: "var(--text-body)" }}>
              Have questions about your project, timeline or which combination of design, software and AI is the
              right fit? We&apos;re happy to talk it through.
            </p>
            <Link href="/faq" className="btn btn-ghost" style={{ marginTop: "24px" }}>
              View All FAQs
              <span className="ic">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </Link>
          </div>

          <FaqAccordion items={featured} />
        </div>
      </div>
    </section>
  );
}
