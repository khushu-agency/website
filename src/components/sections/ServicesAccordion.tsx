"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { services } from "@/data/services";

const SynapticWaveScene = dynamic(
  () => import("@/components/three/SynapticWaveScene").then((m) => m.SynapticWaveScene),
  { ssr: false, loading: () => null }
);

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-section section-pad" id="services">
      <div className="wrap">
        <div className="whatwedo-grid">
          <div className="wwd-copy">
            <div className="eyebrow">
              <span className="dot" />
              WHAT WE DO
            </div>
            <h2 className="head">
              Design what people experience. Build what businesses run <em>on</em>.
            </h2>
            <p>
              Khushu solves business problems using the right combination of design, software, AI and automation —
              adding intelligence where it creates leverage, not because it&apos;s trendy.
            </p>
            <Link href="/services" className="btn btn-ghost">
              View All Services
              <span className="ic">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="wwd-visual-container">
            <SynapticWaveScene />
            <div className="wwd-visual-overlay">3D Neural Latent Field · Hover to Perturb</div>
          </div>

          <div className="service-accordion-list" id="serviceAccordion">
            {services.map((service, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`service-accordion-item${isOpen ? " active" : ""}`} key={service.id}>
                  <div
                    className="service-accordion-header"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenIndex(isOpen ? -1 : i);
                      }
                    }}
                  >
                    <div className="service-header-left">
                      <span className="service-num">{service.number}</span>
                      <span className="service-title">{service.title}</span>
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
                      {service.description}
                      <div className="service-tech-tags">
                        {service.tags.map((tag) => (
                          <span className="tech-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          marginTop: "14px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--text-heading)",
                        }}
                      >
                        Explore Service
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <p style={{ marginTop: "20px", fontSize: "13px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "640px" }}>
              Every system is designed with appropriate permissions, validation, evaluation, monitoring and human
              approval for sensitive actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
