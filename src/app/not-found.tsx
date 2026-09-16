import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="dot" />
          404
        </div>
        <h1 className="head">Page not found.</h1>
        <p className="lede" style={{ margin: "16px auto 0" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div style={{ marginTop: "28px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-solid">
            Back to Home
            <span className="ic">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </Link>
          <Link href="/work" className="btn btn-ghost">
            Explore Case Studies
            <span className="ic">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
