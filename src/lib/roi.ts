/**
 * Lightweight, typed ROI calculation helpers.
 * All outputs are illustrative estimates, not guaranteed results —
 * every caller must label them as "Projected" / "Estimated".
 */

export type HomeRoiInputs = {
  teamSize: number; // 5-300
  hoursPerWeek: number; // 2-35
  hourlyRate: number; // 30-250
};

export type HomeRoiResult = {
  annualHoursSaved: number;
  annualSavings: number;
  speedMultiplier: number;
};

const WEEKS_PER_YEAR = 52;
const EFFICIENCY_CAPTURE = 0.72; // conservative capture rate of automatable hours

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function calculateHomeRoi({
  teamSize,
  hoursPerWeek,
  hourlyRate,
}: HomeRoiInputs): HomeRoiResult {
  const size = clamp(teamSize, 1, 5000);
  const hours = clamp(hoursPerWeek, 0, 80);
  const rate = clamp(hourlyRate, 0, 2000);

  const annualHoursSaved = Math.round(size * hours * WEEKS_PER_YEAR * EFFICIENCY_CAPTURE);
  const annualSavings = Math.round(annualHoursSaved * rate);
  const speedMultiplier = 3.2 + hours / 10;

  return {
    annualHoursSaved,
    annualSavings,
    speedMultiplier: Math.round(speedMultiplier * 10) / 10,
  };
}

export type FullRoiInputs = {
  teamSize: number;
  hoursPerWeek: number;
  hourlyRate: number;
  repetitiveWorkloadPct: number; // 0-100, share of the role that's repetitive
  automationCoveragePct: number; // 0-100, share of that repetitive work automation could remove
};

export type FullRoiResult = {
  annualHoursAffected: number;
  annualHoursReclaimed: number;
  annualLaborValue: number;
  productivityGainPct: number;
  roiLow: number;
  roiHigh: number;
};

export function calculateFullRoi({
  teamSize,
  hoursPerWeek,
  hourlyRate,
  repetitiveWorkloadPct,
  automationCoveragePct,
}: FullRoiInputs): FullRoiResult {
  const size = clamp(teamSize, 1, 5000);
  const hours = clamp(hoursPerWeek, 0, 80);
  const rate = clamp(hourlyRate, 0, 2000);
  const repetitivePct = clamp(repetitiveWorkloadPct, 0, 100) / 100;
  const automationPct = clamp(automationCoveragePct, 0, 100) / 100;

  const annualHoursAffected = Math.round(size * hours * WEEKS_PER_YEAR * repetitivePct);
  const annualHoursReclaimed = Math.round(annualHoursAffected * automationPct);
  const annualLaborValue = Math.round(annualHoursReclaimed * rate);
  const productivityGainPct = Math.round(repetitivePct * automationPct * 100);

  // Illustrative range, not a guarantee — +/-18% band around the point estimate.
  const roiLow = Math.round(annualLaborValue * 0.82);
  const roiHigh = Math.round(annualLaborValue * 1.18);

  return {
    annualHoursAffected,
    annualHoursReclaimed,
    annualLaborValue,
    productivityGainPct,
    roiLow,
    roiHigh,
  };
}

export function formatCurrency(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

export function formatHours(value: number): string {
  return `${value.toLocaleString("en-US")} hrs`;
}
