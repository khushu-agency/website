import Link from "next/link";
import { RoiTeaser } from "./RoiTeaser";

export function RoiSection() {
  return (
    <section className="roi-calculator-section" id="roi-calc">
      <div className="wrap">
        <div className="roi-grid">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              VALUE ESTIMATOR
            </div>
            <h2 className="head">
              Calculate your projected <em>annual AI ROI</em>.
            </h2>
            <p style={{ margin: "20px 0 28px", fontSize: "15.5px", lineHeight: 1.65, color: "var(--text-body)" }}>
              See how automating repetitive analytical and operational workflows with Khushu&apos;s AI systems can
              impact your bottom line.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Built Around Real Business Needs",
                "Zero Retraining Lock-in · Full IP Ownership",
                "Appropriate Permissions, Validation & Human Approval",
              ].map((line) => (
                <div
                  key={line}
                  style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: 600, color: "var(--text-heading)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {line}
                </div>
              ))}
            </div>
            <Link href="/roi-impact" className="btn btn-solid" style={{ marginTop: "36px" }}>
              Open the Full Calculator
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </div>

          <RoiTeaser />
        </div>
      </div>
    </section>
  );
}
