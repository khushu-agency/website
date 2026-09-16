const BRAND_ICONS = [
  '<path d="M12 2 22 8.5 12 22 2 8.5Z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>',
  '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/>',
  '<path d="M6.5 18a4.2 4.2 0 0 1-.6-8.35 5.5 5.5 0 0 1 10.7-1.9A4.3 4.3 0 0 1 17 18H6.5Z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>',
  '<path d="M9.5 14.5 14.5 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 7l1.2-1.2a3 3 0 1 1 4.2 4.2L15 11" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M13 17l-1.2 1.2a3 3 0 1 1-4.2-4.2L9 12.8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  '<rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M7 13l2.5-4 2 5 2-3 2.5 2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
];

export function Testimonial() {
  return (
    <section className="testimonial">
      <div className="wrap">
        <div className="t-quote">
          <svg className="quote-mark" viewBox="0 0 40 28" fill="currentColor">
            <path d="M0 28V16.5Q0 8 4.5 3.8 9 0 15.5 0v6.2q-4 0-6 2.6-2 2.5-2 6.2h8V28H0Zm22 0V16.5Q22 8 26.5 3.8 31 0 37.5 0v6.2q-4 0-6 2.6-2 2.5-2 6.2h8V28H22Z" />
          </svg>
          <p>
            &quot;Design what people experience. Build what businesses run on. Add intelligence where it creates
            leverage. Every system starts with a business problem worth solving.&quot;
          </p>
          <div className="t-person">
            <div className="t-avatar">KH</div>
            <div>
              <div className="pname">Khushu</div>
              <div className="prole">Digital Systems &amp; AI Agency</div>
            </div>
          </div>
        </div>
        <div className="t-divider" />
        <div className="t-brands">
          <div className="t-brands-label">BUILT AROUND REAL BUSINESS NEEDS</div>
          <div style={{ display: "flex", gap: "36px", flexWrap: "wrap", alignItems: "center" }}>
            {BRAND_ICONS.map((icon, i) => (
              <span
                key={i}
                style={{ width: "20px", height: "20px", color: "var(--text-white-dim)", opacity: 0.85 }}
              >
                <svg viewBox="0 0 24 24" fill="none" dangerouslySetInnerHTML={{ __html: icon }} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
