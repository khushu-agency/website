import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InsightCard } from "@/components/ui/InsightCard";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Structured, practical notes on AI agents, RAG, document intelligence and digital experience design from the Khushu team.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        eyebrow="INSIGHTS & LABS"
        title={
          <>
            Practical notes on
            <br />
            design, software and AI.
          </>
        }
        lede="Structured write-ups on what actually works when you connect design, software and AI to a real business problem — not industry news."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-grid">
            {insights.map((insight, i) => (
              <InsightCard insight={insight} index={i} key={insight.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
