"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateFullRoi, formatCurrency, formatHours } from "@/lib/roi";

export function RoiCalculatorFull() {
  const [teamSize, setTeamSize] = useState(45);
  const [hoursPerWeek, setHoursPerWeek] = useState(14);
  const [hourlyRate, setHourlyRate] = useState(85);
  const [repetitiveWorkloadPct, setRepetitiveWorkloadPct] = useState(40);
  const [automationCoveragePct, setAutomationCoveragePct] = useState(60);

  const result = calculateFullRoi({
    teamSize,
    hoursPerWeek,
    hourlyRate,
    repetitiveWorkloadPct,
    automationCoveragePct,
  });

  return (
    <div className="roi-grid">
      <div className="roi-card">
        <div className="roi-slider-group">
          <div className="roi-slider-header">
            <span className="roi-slider-title">Knowledge Workers / Team Members</span>
            <span className="roi-slider-val">{teamSize} People</span>
          </div>
          <input type="range" min={5} max={500} value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} />
        </div>

        <div className="roi-slider-group">
          <div className="roi-slider-header">
            <span className="roi-slider-title">Manual Hours / Worker / Week</span>
            <span className="roi-slider-val">{hoursPerWeek} Hours</span>
          </div>
          <input type="range" min={2} max={40} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} />
        </div>

        <div className="roi-slider-group">
          <div className="roi-slider-header">
            <span className="roi-slider-title">Average Hourly Loaded Cost ($/hr)</span>
            <span className="roi-slider-val">${hourlyRate} / hr</span>
          </div>
          <input type="range" min={20} max={300} step={5} value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
        </div>

        <div className="roi-slider-group">
          <div className="roi-slider-header">
            <span className="roi-slider-title">Current Repetitive Workload</span>
            <span className="roi-slider-val">{repetitiveWorkloadPct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={repetitiveWorkloadPct}
            onChange={(e) => setRepetitiveWorkloadPct(Number(e.target.value))}
          />
        </div>

        <div className="roi-slider-group">
          <div className="roi-slider-header">
            <span className="roi-slider-title">Expected Automation Coverage</span>
            <span className="roi-slider-val">{automationCoveragePct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={automationCoveragePct}
            onChange={(e) => setAutomationCoveragePct(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="roi-card">
        <div className="roi-results-box" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="roi-stat-block">
            <div className="roi-big-num">{formatHours(result.annualHoursAffected)}</div>
            <div className="roi-stat-label">Annual Hours Affected (Projected)</div>
          </div>
          <div className="roi-stat-block">
            <div className="roi-big-num">{formatHours(result.annualHoursReclaimed)}</div>
            <div className="roi-stat-label">Annual Hours Reclaimed (Estimated)</div>
          </div>
          <div className="roi-stat-block">
            <div className="roi-big-num">{formatCurrency(result.annualLaborValue)}</div>
            <div className="roi-stat-label">Estimated Annual Labor Value</div>
          </div>
          <div className="roi-stat-block">
            <div className="roi-big-num">{result.productivityGainPct}%</div>
            <div className="roi-stat-label">Illustrative Productivity Gain</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "22px",
            padding: "18px 20px",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-md)",
            background: "var(--bg-section)",
          }}
        >
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
            Illustrative ROI Range
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "22px", fontWeight: 700, color: "var(--text-heading)", marginTop: "6px" }}>
            {formatCurrency(result.roiLow)} – {formatCurrency(result.roiHigh)}
          </div>
        </div>

        <p style={{ fontSize: "11.5px", color: "var(--text-muted)", marginTop: "16px" }}>
          These figures are projected, estimated and illustrative only — not a guaranteed financial result. Actual
          outcomes depend on your specific workflows, data and adoption.
        </p>

        <Link href="/contact" className="btn btn-solid" style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}>
          Generate Custom Feasibility Report
          <span className="ic">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
