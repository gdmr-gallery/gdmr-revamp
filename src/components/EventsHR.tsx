"use client";
const items = [
  "Corporate Events","Product Launches","Brand Activations","Live Experiences",
  "Talent Acquisition","Workforce Planning","Training & Dev","HR Strategy",
];

export default function EventsHR() {
  return (
    <section id="events" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 06 — Events & HR Solutions</p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)", marginBottom: "2rem" }}>
              We Bring<br /><em style={{ color: "var(--gold)" }}>People Together</em>
            </h2>
            <p className="reveal" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", maxWidth: 420, marginBottom: "2.5rem" }}>
              From concept to curtain call, our events team produces experiences that leave lasting impressions.
              Our HR solutions help you find, hire, and retain the people who will build your business.
            </p>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "0.4rem", cursor: "none",
            }}>Explore Events <span>→</span></a>
          </div>
          <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
            {items.map(item => (
              <div key={item} style={{
                padding: "1.5rem", background: "var(--surface)", transition: "background 0.3s", cursor: "none",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
              >
                <div style={{ width: 6, height: 6, background: "var(--gold)", marginBottom: "0.75rem" }} />
                <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "rgba(240,235,224,0.8)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
