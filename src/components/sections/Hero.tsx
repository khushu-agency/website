"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Loaded async, after the hero's text/buttons are already interactive —
// Three.js is a large (~500KB+) library and shouldn't block the page from
// responding to clicks while it downloads. The canvas is a pure background
// decoration, so rendering nothing until it's ready causes no layout shift.
const HeroScene = dynamic(() => import("@/components/three/HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  return (
    <section className="hero" id="heroSection">
      <HeroScene />
      <div className="hero-gradient-overlay" />

      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" />
              Digital Systems &amp; AI Agency
            </div>
            <h1>
              Digital experiences,
              <br />
              intelligent <em>systems</em>.
            </h1>
            <p>
              Khushu combines design, software, AI and automation to help businesses create better experiences,
              reduce repetitive work, connect their systems and turn complex workflows into useful products.
            </p>

            <div className="btn-row">
              <Link href="/contact" className="btn btn-solid">
                Start a Project
                <span className="ic">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
              <Link href="/work" className="btn btn-ghost">
                Explore Case Studies
                <span className="ic">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="hero-meta-chips">
              <span className="meta-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Digital Experience &amp; Design
              </span>
              <span className="meta-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                AI + Intelligent Systems
              </span>
              <span className="meta-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Automation &amp; Software
              </span>
            </div>

            <div className="scroll-indicator">
              <span className="circ">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </span>
              Scroll to discover capabilities
            </div>
          </div>

          <div className="hero-interactive-deck">
            <div className="stats-float-card" id="heroTiltCard">
              <div className="deck-header">
                <span className="deck-title">Agency Snapshot</span>
                <span className="deck-pulse">Live</span>
              </div>
              <div className="deck-stats-grid">
                <div className="deck-stat-item">
                  <div className="num">08</div>
                  <div className="label">Portfolio Systems</div>
                </div>
                <div className="deck-stat-item">
                  <div className="num">08</div>
                  <div className="label">Core Capabilities</div>
                </div>
                <div className="deck-stat-item">
                  <div className="num">01</div>
                  <div className="label">Flagship Agency</div>
                </div>
                <div className="deck-stat-item">
                  <div className="num">100%</div>
                  <div className="label">Business-Outcome Focus</div>
                </div>
              </div>
            </div>
            <div className="interactive-3d-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Interactive 3D Space · Move Cursor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
