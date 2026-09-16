"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArchScene } from "@/components/ui/ArchScene";

type Filter = "all" | "knowledge" | "action" | "growth";
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "knowledge", label: "Knowledge" },
  { key: "action", label: "Action" },
  { key: "growth", label: "Growth" },
];

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleFilter(filter: Filter) {
    setActiveFilter(filter);
    if (filter === "all") return;
    const matchIndex = projects.findIndex((p) => p.filterCategories.includes(filter));
    if (matchIndex !== -1) setCurrentSlide(matchIndex);
  }

  function prevSlide() {
    setCurrentSlide((i) => (i - 1 + projects.length) % projects.length);
  }
  function nextSlide() {
    setCurrentSlide((i) => (i + 1) % projects.length);
  }

  return (
    <section className="featured-work-section" id="work">
      <div className="wrap">
        <div className="fw-top">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              PORTFOLIO
            </div>
            <h2 className="head">Featured Portfolio Systems</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div className="fw-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`filter-btn${activeFilter === f.key ? " active" : ""}`}
                  onClick={() => handleFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="fw-pager">
              <button className="icon-circle-btn" onClick={prevSlide} aria-label="Previous Slide">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button className="icon-circle-btn" onClick={nextSlide} aria-label="Next Slide">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <span style={{ marginLeft: "6px" }}>
                {String(currentSlide + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="fw-card-container">
          {projects.map((project, i) => (
            <div
              className={`fw-slide${currentSlide === i ? " active" : ""}`}
              key={project.id}
            >
              <div className="fw-info">
                <div>
                  <div className="fw-tag">{project.category} · Portfolio Build</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="fw-impact-chips">
                    {project.impact.map((chip) => (
                      <div className="fw-impact-chip" key={chip.label}>
                        <div className="val">{chip.label}</div>
                        <div className="lbl">{chip.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Link href={`/work/${project.slug}#architecture`} className="btn btn-ghost on-dark">
                    View Full Architecture
                    <span className="ic">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="fw-visual">
                <ArchScene tone={project.scheme} accentColor={project.accentColor} idSeed={project.slug} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
