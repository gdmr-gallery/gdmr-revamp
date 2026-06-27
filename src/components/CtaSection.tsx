"use client";

export default function CtaSection() {
  return (
    <section id="contact" style={{ padding: "10rem 2rem", background: "var(--surface)", position: "relative", overflow: "hidden" }}>
      {/* BG text */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-h)", fontSize: "clamp(6rem,18vw,16rem)",
        color: "rgba(201,168,76,0.03)", fontWeight: 700, lineHeight: 1,
        whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
      }}>GDMR</div>

      {/* Gold grid lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)`,
        backgroundSize: "120px 120px", opacity: 0.3,
      }} />

      <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p className="chapter-label reveal" style={{ marginBottom: "2rem" }}>Chapter 09 — Your Turn</p>
        <h2 className="reveal" style={{
          fontFamily: "var(--font-h)", fontWeight: 400,
          fontSize: "clamp(4rem,12vw,9rem)", lineHeight: 0.9, color: "var(--fg)",
          marginBottom: "2.5rem",
        }}>
          Ready<br />
          <em style={{ color: "var(--gold)" }}>to</em><br />
          Grow?
        </h2>
        <p className="reveal" style={{ fontSize: "0.9rem", color: "rgba(240,235,224,0.5)", lineHeight: 1.9, maxWidth: 400, margin: "0 auto 3rem" }}>
          You&apos;ve seen what we do. Now let&apos;s talk about what we can do for you.
          From a single service to a full brand transformation — we&apos;re ready when you are.
        </p>
        <div className="reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:info@gdmrfoundation.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase",
            padding: "1rem 2.5rem", background: "var(--gold)", color: "#000",
            textDecoration: "none", cursor: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#e8c96a"; el.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold)"; el.style.transform = "translateY(0)"; }}
          >
            Start a Project
          </a>
          <a href="#about" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase",
            padding: "1rem 2.5rem", border: "1px solid var(--border)", color: "var(--fg)",
            textDecoration: "none", cursor: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--fg)"; }}
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
}
