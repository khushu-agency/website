import Link from "next/link";

export type PairNavTarget = {
  label: string; // e.g. "01 Khushu Studio"
  href: string;
} | null;

export function PairNav({
  previous,
  next,
  previousFallbackLabel = "Back to overview",
  nextFallbackLabel = "Back to overview",
  previousFallbackHref,
  nextFallbackHref,
}: {
  previous: PairNavTarget;
  next: PairNavTarget;
  previousFallbackLabel?: string;
  nextFallbackLabel?: string;
  previousFallbackHref: string;
  nextFallbackHref: string;
}) {
  return (
    <div className="pair-nav">
      <Link
        href={previous ? previous.href : previousFallbackHref}
        className="pair-nav-item prev"
      >
        <span className="pair-nav-label">← Previous</span>
        <span className="pair-nav-title">
          {previous ? previous.label : previousFallbackLabel}
        </span>
      </Link>
      <Link href={next ? next.href : nextFallbackHref} className="pair-nav-item next">
        <span className="pair-nav-label">Next →</span>
        <span className="pair-nav-title">{next ? next.label : nextFallbackLabel}</span>
      </Link>
    </div>
  );
}
