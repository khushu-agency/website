"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    num: "STAGE 01",
    title: "Discover & Align",
    desc: "A deep look at your business, users and current systems to find where design, software and AI can create the most value.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "STAGE 02",
    title: "Blueprint & Design",
    desc: "Architecting the right combination of experience design, software structure and AI workflows for the specific problem at hand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    num: "STAGE 03",
    title: "Build & Validate",
    desc: "Agile development sprints with structured testing and evaluation, refined against real usage and feedback.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8M8.5 10l3.5-2 3.5 2M8.5 14l3.5 2 3.5-2" />
      </svg>
    ),
  },
  {
    num: "STAGE 04",
    title: "Deploy & Scale",
    desc: "Production rollout with appropriate permissions and monitoring in place, then continuous improvement based on real usage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
];

export function Approach() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-section section-pad" id="approach">
      <div className="wrap">
        <div className="approach-grid">
          <div className="approach-copy">
            <div className="eyebrow">
              <span className="dot" />
              OUR PROCESS
            </div>
            <h2 className="head">
              A proven approach to deliver <em>systems that work</em>.
            </h2>
            <p style={{ margin: "20px 0 28px", fontSize: "15px", lineHeight: 1.65, color: "var(--text-body)" }}>
              We follow a transparent process from early discovery to production deployment, combining design,
              software and AI wherever each adds real value.
            </p>
            <Link href="/approach" className="btn btn-ghost">
              See the Full Process
              <span className="ic">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="approach-steps">
            {STEPS.map((step, i) => (
              <div
                className={`step-card${active === i ? " active" : ""}`}
                key={step.num}
                role="button"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <div className="step-icon">{step.icon}</div>
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
