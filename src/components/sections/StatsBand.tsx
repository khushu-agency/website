"use client";

import dynamic from "next/dynamic";

const StatsParticlesScene = dynamic(
  () => import("@/components/three/StatsParticlesScene").then((m) => m.StatsParticlesScene),
  { ssr: false, loading: () => null }
);

const STATS = [
  { num: "08", label: "Portfolio Systems" },
  { num: "08", label: "Core Capabilities" },
  { num: "01", label: "Flagship Agency" },
  { num: "100%", label: "Business-Outcome Focus" },
];

export function StatsBand() {
  return (
    <section className="stats-band">
      <StatsParticlesScene />
      <div className="wrap">
        <div className="stats-row">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
