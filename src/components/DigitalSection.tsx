"use client";

export default function DigitalSection() {
  return (
    <section id="digital" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 04 — Digital & Web</p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)", marginBottom: "2rem" }}>
              We Build Websites<br />& Digital Experiences<br /><em style={{ color: "var(--gold)" }}>That Convert</em>
            </h2>
            <p className="reveal" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", maxWidth: 440, marginBottom: "2rem" }}>
              From blazing-fast websites and custom web applications to full IT solutions, SEO,
              social media and performance marketing — we engineer your entire digital presence.
            </p>
            <div className="gold-line" style={{ height: 1, background: "var(--gold)", width: "100%" }} />
          </div>

          {/* Animated browser mockup */}
          <div className="reveal-right" style={{ border: "1px solid var(--border)", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)", background: "var(--surface2)" }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              <div style={{ flex: 1, margin: "0 0.75rem", padding: "0.25rem 0.75rem", background: "var(--border)", borderRadius: 3, fontSize: "0.7rem", color: "var(--muted)" }}>startup.io</div>
            </div>
            <div style={{ padding: "1.5rem" }}>
              {/* Simulated UI skeleton */}
              <div style={{ height: 12, width: "60%", background: "var(--border)", borderRadius: 3, marginBottom: 8 }} />
              <div style={{ height: 8, width: "40%", background: "var(--surface2)", borderRadius: 3, marginBottom: 20 }} />
              <div style={{ height: 100, background: `linear-gradient(135deg, var(--surface2), var(--border))`, borderRadius: 4, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 40, height: 40, border: "1px solid var(--gold)", opacity: 0.3, transform: "rotate(45deg)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[1,2,3].map(i => <div key={i} style={{ height: 48, background: "var(--surface2)", borderRadius: 4 }} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
