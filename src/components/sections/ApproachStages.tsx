"use client";

import { useState } from "react";

const STAGES = [
  {
    num: "STAGE 01",
    title: "Discover & Align",
    desc: "A deep look at your business, users and current systems to find where design, software and AI can create the most value.",
    points: ["Business goals", "User needs", "Workflow discovery", "Current-system analysis", "Constraints", "Success criteria"],
  },
  {
    num: "STAGE 02",
    title: "Blueprint & Design",
    desc: "Architecting the right combination of experience design, software structure and AI workflows for the specific problem at hand.",
    points: ["UX architecture", "System architecture", "Data flows", "Technical decisions", "Prototypes", "AI workflow design"],
  },
  {
    num: "STAGE 03",
    title: "Build & Validate",
    desc: "Agile development sprints with structured testing and evaluation, refined against real usage and feedback.",
    points: ["Implementation", "Integrations", "AI systems", "Testing", "Evaluation", "Security", "Performance", "Human approval flows"],
  },
  {
    num: "STAGE 04",
    title: "Deploy & Scale",
    desc: "Production rollout with appropriate permissions and monitoring in place, then continuous improvement based on real usage.",
    points: ["Deployment", "Monitoring", "Analytics", "Optimization", "Iteration", "Scaling"],
  },
];

export function ApproachStages() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {STAGES.map((stage, i) => {
        const isOpen = open === i;
        return (
          <div
            key={stage.num}
            className={`service-accordion-item${isOpen ? " active" : ""}`}
            style={{ borderTop: i === 0 ? "1px solid var(--line-strong)" : undefined }}
          >
            <div
              className="service-accordion-header"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(isOpen ? -1 : i);
                }
              }}
            >
              <div className="service-header-left">
                <span className="service-num">{stage.num.replace("STAGE ", "")}</span>
                <span className="service-title">{stage.title}</span>
              </div>
              <span className="service-icon-box">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            <div className="service-accordion-body">
              <div className="service-body-inner">
                {stage.desc}
                <div className="service-tech-tags">
                  {stage.points.map((point) => (
                    <span className="tech-tag" key={point}>
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
