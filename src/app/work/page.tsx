import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Eight portfolio builds demonstrating how Khushu combines design, software, AI and automation to solve real business workflows.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
        eyebrow="PORTFOLIO"
        title={
          <>
            Featured systems built
            <br />
            around real workflows.
          </>
        }
        lede="These are Khushu portfolio builds — demonstration systems built to show how a specific business problem can be solved, not case studies from a named client engagement unless stated otherwise."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <WorkGrid />
        </div>
      </section>
    </>
  );
}
