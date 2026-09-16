/**
 * Faithful port of the original `makeArchScene(tone, accentColor)` —
 * same mountain-scene SVG, same fills, same dashed connector line.
 * (The original's gradient `id` used Math.random() but the gradient itself
 * is never referenced by any fill in the SVG, so it's dead markup — here
 * it's given a stable id instead, purely to avoid an SSR/client hydration
 * mismatch. Nothing about the rendered output changes.)
 */
export function ArchScene({
  tone,
  accentColor = "#5a5b60",
  idSeed,
}: {
  tone: "dark" | "light";
  accentColor?: string;
  idSeed: string;
}) {
  const sky = tone === "dark" ? "#25262a" : "#dcdde0";
  const mtn1 = tone === "dark" ? "#1b1c1f" : "#b2b3b8";
  const mtn2 = tone === "dark" ? "#121215" : "#8a8a90";

  return (
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id={`g_${idSeed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={sky} />
          <stop offset="100%" stopColor={mtn1} />
        </linearGradient>
      </defs>
      <rect width="600" height="380" fill={sky} />
      <path d="M0 380 L120 180 L240 290 L380 140 L520 280 L600 200 L600 380 Z" fill={mtn2} opacity="0.6" />
      <path d="M0 380 L180 220 L300 320 L440 180 L600 340 L600 380 Z" fill={mtn1} />
      <circle cx="480" cy="110" r="45" fill={accentColor} opacity="0.3" />
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="50" y1="380" x2="300" y2="180" />
        <line x1="300" y1="180" x2="550" y2="380" />
        <circle cx="300" cy="180" r="6" fill="#fff" />
      </g>
    </svg>
  );
}
