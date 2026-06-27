"use client";
const team = [
  { name: "Sundar Swamy", role: "Founder", init: "SS" },
  { name: "Githi Sreenivasan", role: "MD & Co-Founder", init: "GS" },
  { name: "Gina Vijayabhaskar", role: "Partner & Exec. Director", init: "GV" },
];

export default function Team() {
  return (
    <section id="team" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 08 — The Visionaries</p>
          <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
            The People<br /><em style={{ color: "var(--gold)" }}>Behind GDMR</em>
          </h2>
          <p className="reveal" style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted)" }}>Three visionaries. One mission. Build brands that last.</p>
        </div>

        <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "var(--border)" }}>
          {team.map(m => (
            <div key={m.name} style={{
              padding: "3rem 2rem", background: "var(--surface)", transition: "background 0.3s", cursor: "none",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
            >
              <div style={{
                width: 64, height: 64, border: "1px solid var(--border)", marginBottom: "1.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-h)", fontSize: "1rem", color: "var(--gold)", letterSpacing: "0.1em",
                position: "relative",
              }}>
                {m.init}
                <div style={{ position: "absolute", top: -4, left: -4, width: 12, height: 12, borderLeft: "1px solid var(--gold)", borderTop: "1px solid var(--gold)" }} />
                <div style={{ position: "absolute", bottom: -4, right: -4, width: 12, height: 12, borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1.3rem", fontWeight: 500, color: "#fff", marginBottom: "0.5rem" }}>{m.name}</h3>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
