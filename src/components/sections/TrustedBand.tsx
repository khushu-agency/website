const CAPABILITIES: { name: string; icon: string }[] = [
  { name: "Digital Experience & Design", icon: '<path d="M12 2 22 8.5 12 22 2 8.5Z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>' },
  { name: "Websites & Software Products", icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/>' },
  { name: "AI Assistants & Knowledge Systems", icon: '<path d="M6.5 18a4.2 4.2 0 0 1-.6-8.35 5.5 5.5 0 0 1 10.7-1.9A4.3 4.3 0 0 1 17 18H6.5Z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>' },
  { name: "AI Agents & Automation", icon: '<path d="M9.5 14.5 14.5 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 7l1.2-1.2a3 3 0 1 1 4.2 4.2L15 11" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M13 17l-1.2 1.2a3 3 0 1 1-4.2-4.2L9 12.8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>' },
  { name: "AI Customer Support", icon: '<rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M7 13l2.5-4 2 5 2-3 2.5 2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  { name: "AI Sales & Revenue Systems", icon: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor"/>' },
  { name: "Document Intelligence & AI Search", icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="1.6" fill="none"/>' },
  { name: "AI Content Systems", icon: '<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.8" fill="none"/><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="1.8"/><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="1.8"/>' },
];

// Rendered twice back-to-back so the CSS marquee (translateX(-50%)) loops seamlessly.
const DOUBLED = [...CAPABILITIES, ...CAPABILITIES];

export function TrustedBand() {
  return (
    <section className="trusted-band" aria-label="Khushu Core Capabilities">
      <div className="wrap trusted-inner">
        <div className="trusted-label">
          BUILT AROUND
          <br />
          REAL BUSINESS NEEDS
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {DOUBLED.map((c, i) => (
              <span className="brand-pill" key={`${c.name}-${i}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  dangerouslySetInnerHTML={{ __html: c.icon }}
                />
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
