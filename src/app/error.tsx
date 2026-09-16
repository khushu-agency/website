"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with real error monitoring (e.g. Sentry) before production —
    // deliberately not logging error.message/stack anywhere a user could see it.
    console.error(error);
  }, [error]);

  return (
    <section className="page-hero" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="dot" />
          Something went wrong
        </div>
        <h1 className="head">That didn&apos;t load correctly.</h1>
        <p className="lede" style={{ margin: "16px auto 0" }}>
          Please try again, or head back to the homepage.
        </p>
        <div style={{ marginTop: "28px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-solid" onClick={() => reset()}>
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
