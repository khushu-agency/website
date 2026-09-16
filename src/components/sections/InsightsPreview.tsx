import Link from "next/link";
import { insights } from "@/data/insights";
import { InsightCard } from "@/components/ui/InsightCard";

export function InsightsPreview() {
  const featured = insights.slice(0, 4);
  return (
    <section className="bg-section section-pad" id="insights" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="insights-grid">
          <div className="insights-copy">
            <div className="eyebrow">
              <span className="dot" />
              INSIGHTS &amp; LABS
            </div>
            <h2 className="head">
              Practical notes on <em>design, software and AI</em>.
            </h2>
            <p style={{ margin: "16px 0 24px", fontSize: "14.5px", color: "var(--text-body)", lineHeight: 1.6 }}>
              Short, structured write-ups on what actually works when you connect design, software and AI to a real
              business problem.
            </p>
            <Link href="/insights" className="btn btn-ghost">
              View All Insights
              <span className="ic">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="insight-cards">
            {featured.map((insight, i) => (
              <InsightCard insight={insight} index={i} key={insight.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
