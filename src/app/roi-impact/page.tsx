import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RoiCalculatorFull } from "@/components/sections/RoiCalculatorFull";

export const metadata: Metadata = {
  title: "ROI Impact",
  description: "Calculate a projected, illustrative estimate of what automation and AI could return for your team.",
  alternates: { canonical: "/roi-impact" },
};

export default function RoiImpactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "ROI Impact" }]}
        eyebrow="VALUE ESTIMATOR"
        title={
          <>
            Calculate what
            <br />
            automation could return.
          </>
        }
        lede="Adjust the inputs below for a projected, illustrative estimate — not a guaranteed financial result."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoiCalculatorFull />
        </div>
      </section>
    </>
  );
}
