"use client";

const clients = ["Shoppers Stop","Titan","Fastrack","Lakme","Tommy Hilfiger","Kenneth Cole","Coach","Anne Klein"];

export default function EngineeringSection() {
  return (
    <section id="engineering" style={{ padding: "8rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          {/* Visual */}
          <div className="reveal-left">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--border)" }}>
              {[
                { label: "Retail Fit-Outs", icon: "⬛" },
                { label: "Interior Design", icon: "⬛" },
                { label: "Store Layouts", icon: "⬛" },
                { label: "Visual Display", icon: "⬛" },
              ].map((item, i) => (
                <div key={i} style={{
                  aspectRatio: "1", background: i % 2 === 0 ? "var(--bg)" : "var(--surface2)",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.5rem",
                  transition: "background 0.3s", cursor: "none",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-dim)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "var(--bg)" : "var(--surface2)"; }}
                >
                  <div style={{ width: 24, height: 24, border: "1px solid var(--gold)", opacity: 0.4, marginBottom: 8 }} />
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,224,0.4)" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 05 — Engineering & Visual Merchandising</p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)", marginBottom: "2rem" }}>
              We Build<br /><em style={{ color: "var(--gold)" }}>Spaces That Sell</em>
            </h2>
            <p className="reveal" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", maxWidth: 440, marginBottom: "2.5rem" }}>
              Our engineering team designs and builds physical spaces — retail interiors, store fit-outs,
              display systems and visual merchandising setups that turn browsers into buyers.
            </p>
            <div className="stagger-parent" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {clients.map(c => (
                <span key={c} style={{
                  fontSize: "0.65rem", padding: "0.4rem 0.8rem", border: "1px solid var(--border)",
                  color: "rgba(240,235,224,0.4)", letterSpacing: "0.1em", transition: "all 0.2s", cursor: "none",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "rgba(240,235,224,0.4)"; }}
                >{c}</span>
              ))}
            </div>
            <a href="#portfolio" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "0.4rem", cursor: "none",
            }}>See Our Work <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
