"use client";

const brands = [
  "Shoppers Stop","Titan","Anne Klein","Fastrack","Lakme","Coach",
  "Kenneth Cole","Tommy Hilfiger","Casio","Puig","Neelam","Aieque","Sharvv","Faith PT","Dr Gins",
];

export default function BrandingSection() {
  const doubled = [...brands, ...brands];
  return (
    <section id="branding" style={{ padding: "8rem 0", background: "var(--bg)", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem", marginBottom: "4rem" }}>
        <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 03 — Branding & Identity</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end" }}>
          <h2 className="reveal-left" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
            Your Brand<br /><em>Is Your Story</em>
          </h2>
          <div>
            <p className="reveal-right" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", marginBottom: "2rem" }}>
              We craft identities that speak before you do. Logos, brand systems, print, packaging, campaigns —
              everything built to make your brand unforgettable. We&apos;ve shaped identities for the biggest names in retail across India.
            </p>
            <a href="#contact" className="reveal-right" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)",
              paddingBottom: "0.4rem", cursor: "none", transition: "gap 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "16px"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
            >
              Explore Branding <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Double ticker rows */}
      {[false, true].map((reverse, ri) => (
        <div key={ri} style={{ overflow: "hidden", padding: "0.8rem 0", borderTop: ri === 0 ? "1px solid rgba(201,168,76,0.1)" : undefined, borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
          <div className="ticker-track" style={{ display: "flex", whiteSpace: "nowrap", animation: `ticker ${reverse ? 40 : 30}s linear infinite ${reverse ? "reverse" : ""}` }}>
            {doubled.map((brand, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
                <span style={{
                  fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: i % 4 === 1 ? "var(--gold)" : "rgba(240,235,224,0.2)", margin: "0 2rem",
                }}>{brand}</span>
                <span style={{ color: "var(--gold)", opacity: 0.2, fontSize: "0.5rem" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
