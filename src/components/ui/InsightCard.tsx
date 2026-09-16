import Link from "next/link";
import type { Insight } from "@/types";
import { ArchScene } from "./ArchScene";

export function InsightCard({ insight, index = 0 }: { insight: Insight; index?: number }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="insight-card">
      <div className="insight-thumb">
        <ArchScene tone={index % 2 === 0 ? "dark" : "light"} idSeed={insight.slug} />
      </div>
      <div className="insight-tag">
        {insight.category} · {insight.readingTime}
      </div>
      <div className="insight-title">{insight.title}</div>
      <div className="insight-link">
        <span>Read Insight</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}
