"use client";
const brands = [
  "Shoppers Stop", "Titan", "Anne Klein", "Fastrack", "Lakme",
  "Coach", "Kenneth Cole", "Tommy Hilfiger", "Casio", "Puig",
  "Neelam", "Aieque", "Sharvv", "Faith PT", "Dr Gins",
];

export default function BrandingSection() {
  const doubled = [...brands, ...brands];

  return (
    <section id="branding" className="py-32 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="px-6 max-w-7xl mx-auto mb-16">
        <p className="chapter-label mb-4">Chapter 03 — Branding & Identity</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <h2
            className="font-light"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
          >
            Your Brand<br />
            <em>Is Your Story</em>
          </h2>
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.6)" }}>
              We craft identities that speak before you do. Logos, brand systems, print, packaging, campaigns —
              everything built to make your brand unforgettable. We&apos;ve shaped identities for the biggest names in retail across India.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase py-3 border-b cursor-pointer transition-all duration-200"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Explore Branding
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden py-6" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="ticker-track flex whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span
                className="text-sm font-medium tracking-widest uppercase mx-8"
                style={{ color: i % 3 === 1 ? "var(--gold)" : "rgba(245,240,232,0.3)" }}
              >
                {brand}
              </span>
              <span style={{ color: "var(--gold)", opacity: 0.3 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
