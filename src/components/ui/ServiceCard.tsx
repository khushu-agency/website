import Link from "next/link";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="insight-card">
      <div
        className="insight-thumb"
        style={{
          background: "var(--bg-section)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "34px",
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "-0.02em",
          }}
        >
          {service.number}
        </span>
      </div>
      <div className="insight-tag">{service.tags.join(" · ")}</div>
      <div className="insight-title">{service.title}</div>
      <div className="insight-link">
        <span>Explore Service</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}
