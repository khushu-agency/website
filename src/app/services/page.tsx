import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Khushu combines digital experience design, software, AI and automation to turn complex business needs into useful digital systems. Explore all 8 services.",
  alternates: { canonical: "/services" },
};

const PROGRESSION = ["Design", "Build", "Intelligence", "Automation", "Growth"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="WHAT WE BUILD"
        title={
          <>
            Systems built around
            <br />
            how your business works.
          </>
        }
        lede="Khushu combines digital experience design, software, AI and automation to turn complex business needs into useful digital systems."
      />

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            SERVICE PHILOSOPHY
          </div>
          <h2 className="head" style={{ marginTop: "14px" }}>
            The right technology for the <em>actual problem</em>.
          </h2>
          <p className="lede">
            Khushu chooses technology based on the business problem in front of it — not the other way around. Most
            engagements move through the same progression, though not every project needs every stage.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "28px" }}>
            {PROGRESSION.map((stage, i) => (
              <span key={stage} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="tech-tag" style={{ fontSize: "13.5px", padding: "9px 18px" }}>
                  {stage}
                </span>
                {i < PROGRESSION.length - 1 && <span className="arch-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="head">
            Have a system in <em>mind</em>?
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
