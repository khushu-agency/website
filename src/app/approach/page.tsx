import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { ApproachStages } from "@/components/sections/ApproachStages";

export const metadata: Metadata = {
  title: "Approach",
  description: "The four-stage Khushu methodology: Discover & Align, Blueprint & Design, Build & Validate, Deploy & Scale.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Approach" }]}
        eyebrow="OUR PROCESS"
        title={
          <>
            A proven approach to deliver
            <br />
            systems that work.
          </>
        }
        lede="Every engagement follows the same transparent process — from early discovery to production deployment. Click a stage for detail."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <ApproachStages />
        </div>
      </section>
      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Discuss a <em>project</em>.
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-solid">
              Discuss a Project
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
