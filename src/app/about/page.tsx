import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Khushu combines design, software, AI and automation — solving business problems rather than selling AI for its own sake.",
  alternates: { canonical: "/about" },
};

const PILLARS = ["Design", "Software", "AI", "Automation"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="ABOUT KHUSHU"
        title="Digital experiences. Intelligent systems."
        lede="Khushu is a digital systems and AI agency. We combine design, software, AI and automation to help businesses create better experiences, reduce repetitive work, connect their systems and turn complex workflows into useful products."
      />

      <section className="detail-section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {PILLARS.map((p) => (
              <span className="tech-tag" key={p} style={{ fontSize: "14px", padding: "10px 20px" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div className="t-quote" style={{ maxWidth: "720px" }}>
            <svg className="quote-mark" viewBox="0 0 40 28" fill="currentColor">
              <path d="M0 28V16.5Q0 8 4.5 3.8 9 0 15.5 0v6.2q-4 0-6 2.6-2 2.5-2 6.2h8V28H0Zm22 0V16.5Q22 8 26.5 3.8 31 0 37.5 0v6.2q-4 0-6 2.6-2 2.5-2 6.2h8V28H22Z" />
            </svg>
            <p>
              &quot;Design what people experience. Build what businesses run on. Add intelligence where it creates
              leverage.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              HOW WE THINK
            </div>
            <p className="lede" style={{ marginTop: "14px" }}>
              We position ourselves around solving business problems, not selling AI for its own sake. Every
              engagement starts with a real problem — a confusing experience, a manual process, information that
              is hard to find — and works backward to the combination of design, software, AI and automation that
              actually solves it.
            </p>
          </div>
          <div>
            <div className="eyebrow">
              <span className="dot" />
              WHAT WE WON&apos;T DO
            </div>
            <p className="lede" style={{ marginTop: "14px" }}>
              We don&apos;t publish invented employee counts, client counts, revenue figures, awards, partnerships,
              customer logos or testimonials. Where our site shows portfolio systems, they&apos;re clearly labeled
              as portfolio builds unless a real client engagement is named.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Let&apos;s work <em>together</em>.
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-solid">
              Start a Project
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
