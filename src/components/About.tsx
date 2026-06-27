"use client";
const stats = [
  { value: 20, suffix: "+", label: "Years Building Brands" },
  { value: 200, suffix: "+", label: "Brands Served" },
  { value: 6, suffix: "", label: "Core Divisions" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 2rem", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* Background text */}
      <div style={{
        position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)",
        fontFamily: "var(--font-h)", fontSize: "clamp(8rem,18vw,16rem)",
        color: "rgba(201,168,76,0.025)", fontWeight: 700, lineHeight: 1,
        whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
      }}>WHO WE ARE</div>

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 02 — Who We Are</p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 1.0, color: "var(--fg)", marginBottom: "2rem" }}>
              One Agency.<br /><em style={{ color: "var(--gold)" }}>Infinite<br />Possibilities.</em>
            </h2>
            <p className="reveal" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", maxWidth: 460, marginBottom: "2rem" }}>
              GDMR Foundation is a multi-disciplinary powerhouse that helps businesses plan, build, promote, and grow.
              We are not just an agency — we are your strategic partner, your creative engine, and your growth catalyst.
              From startup to enterprise — we take you where you need to go.
            </p>
            <div className="gold-line" style={{ height: 1, background: "var(--gold)", width: "100%", transformOrigin: "left" }} />
          </div>

          <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "var(--border)" }}>
            {stats.map(stat => (
              <div key={stat.label} style={{ padding: "2.5rem 1.5rem", background: "var(--surface)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--gold)", marginBottom: "0.75rem" }}>
                  <span className="count-up" data-target={stat.value} data-suffix={stat.suffix}>0{stat.suffix}</span>
                </div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
