"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateHomeRoi, formatCurrency, formatHours } from "@/lib/roi";

export function RoiTeaser() {
  const [teamSize, setTeamSize] = useState(45);
  const [hoursPerWeek, setHoursPerWeek] = useState(14);
  const [hourlyRate, setHourlyRate] = useState(85);

  const result = calculateHomeRoi({ teamSize, hoursPerWeek, hourlyRate });

  return (
    <div className="roi-card">
      <div className="roi-slider-group">
        <div className="roi-slider-header">
          <span className="roi-slider-title">Knowledge Workers / Team Members</span>
          <span className="roi-slider-val">{teamSize} People</span>
        </div>
        <input
          type="range"
          min={5}
          max={300}
          value={teamSize}
          onChange={(e) => setTeamSize(Number(e.target.value))}
          aria-label="Knowledge workers / team members"
        />
      </div>

      <div className="roi-slider-group">
        <div className="roi-slider-header">
          <span className="roi-slider-title">Manual Hours / Worker / Week</span>
          <span className="roi-slider-val">{hoursPerWeek} Hours</span>
        </div>
        <input
          type="range"
          min={2}
          max={35}
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          aria-label="Manual hours per worker per week"
        />
      </div>

      <div className="roi-slider-group">
        <div className="roi-slider-header">
          <span className="roi-slider-title">Average Hourly Blended Rate ($/hr)</span>
          <span className="roi-slider-val">${hourlyRate} / hr</span>
        </div>
        <input
          type="range"
          min={30}
          max={250}
          step={5}
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
          aria-label="Average hourly blended rate"
        />
      </div>

      <div className="roi-results-box">
        <div className="roi-stat-block">
          <div className="roi-big-num">{formatCurrency(result.annualSavings)}</div>
          <div className="roi-stat-label">Projected Annual Savings</div>
        </div>
        <div className="roi-stat-block">
          <div className="roi-big-num">{formatHours(result.annualHoursSaved)}</div>
          <div className="roi-stat-label">Annual Hours Reclaimed</div>
        </div>
        <div className="roi-stat-block">
          <div className="roi-big-num">{result.speedMultiplier.toFixed(1)}x</div>
          <div className="roi-stat-label">Operational Speedup</div>
        </div>
        <div className="roi-stat-block">
          <Link href="/roi-impact" style={{ display: "block" }}>
            <div className="roi-big-num" style={{ fontSize: "20px" }}>
              Full Calculator →
            </div>
            <div className="roi-stat-label">More inputs, saved report</div>
          </Link>
        </div>
      </div>
      <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "14px" }}>
        Projected estimate for illustration only — not a guaranteed result.
      </p>
    </div>
  );
}
