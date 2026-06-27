"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "5rem 2rem 3rem" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-h)", marginBottom: "1rem" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "0.15em", color: "#fff", lineHeight: 1 }}>GDMR</div>
              <div style={{ fontSize: "0.5rem", letterSpacing: "0.4em", color: "var(--gold)", fontFamily: "var(--font-b)", fontWeight: 500, textTransform: "uppercase" }}>Foundation</div>
            </div>
            <p style={{ fontSize: "0.8rem", color: "rgba(240,235,224,0.4)", lineHeight: 1.8, maxWidth: 260 }}>
              Your brand&apos;s full-service partner — from idea to impact. Thiruvananthapuram, Kerala, India.
            </p>
          </div>
          <div>
            <p className="chapter-label" style={{ marginBottom: "1.2rem" }}>Address</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(240,235,224,0.4)", lineHeight: 1.8 }}>
              GDMR Building, Samithy Nagar<br />Peroorkada, Thiruvananthapuram<br />Kerala, India
            </p>
          </div>
          <div>
            <p className="chapter-label" style={{ marginBottom: "1.2rem" }}>Reach Us</p>
            {["info@gdmrfoundation.com","careers@gdmrfoundation.com"].map(email => (
              <a key={email} href={`mailto:${email}`} style={{
                display: "block", fontSize: "0.75rem", color: "rgba(240,235,224,0.4)",
                textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s", cursor: "none",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(240,235,224,0.4)"; }}
              >{email}</a>
            ))}
          </div>
          <div>
            <p className="chapter-label" style={{ marginBottom: "1.2rem" }}>Follow Us</p>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              {["Facebook","Instagram","LinkedIn"].map(s => (
                <a key={s} href="#" style={{
                  fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--muted)",
                  textDecoration: "none", transition: "color 0.2s", cursor: "none",
                  textTransform: "uppercase",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                >{s.slice(0,2)}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>© 2025 GDMR Foundation</p>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>Thiruvananthapuram · Kerala · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
