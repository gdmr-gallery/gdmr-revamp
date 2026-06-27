"use client";

const services = [
  { num: "01", title: "Branding & Identity", desc: "Logos, brand systems, print, packaging, campaign design and full brand strategy." },
  { num: "02", title: "Digital Marketing & Web", desc: "Custom websites, IT solutions, SEO, social media and performance marketing." },
  { num: "03", title: "Engineering", desc: "Retail fit-outs, interior design, project management and construction delivery." },
  { num: "04", title: "Visual Merchandising", desc: "In-store display systems, window dressing and full retail brand experience." },
  { num: "05", title: "Events", desc: "Corporate events, product launches, brand activations and live experiences." },
  { num: "06", title: "HR Solutions", desc: "Talent acquisition, workforce planning, training and HR strategy." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "8rem 2rem", background: "var(--bg)", position: "relative" }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "40vh", background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: "5rem" }}>
          <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 01 — Everything We Do</p>
          <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
            Six Ways We<br /><em style={{ color: "var(--gold)" }}>Make Your Business Win</em>
          </h2>
        </div>

        <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1px", background: "rgba(201,168,76,0.08)" }}>
          {services.map(s => (
            <div
              key={s.num}
              className="glass"
              style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", transition: "background 0.3s, box-shadow 0.3s", cursor: "none", minHeight: 220 }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(201,168,76,0.06)";
                el.style.boxShadow = "0 0 40px rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.15)";
                (el.querySelector(".svc-num") as HTMLElement).style.color = "var(--gold)";
                (el.querySelector(".svc-link") as HTMLElement).style.opacity = "1";
                (el.querySelector(".svc-link") as HTMLElement).style.transform = "translateX(0)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "";
                el.style.boxShadow = "";
                (el.querySelector(".svc-link") as HTMLElement).style.opacity = "0";
                (el.querySelector(".svc-link") as HTMLElement).style.transform = "translateX(-8px)";
              }}
            >
              <span className="svc-num" style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "rgba(201,168,76,0.6)", letterSpacing: "0.15em", transition: "color 0.3s" }}>{s.num}</span>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1.25rem", fontWeight: 500, color: "var(--fg)" }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(240,235,224,0.45)", lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
              <span className="svc-link" style={{
                fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)",
                opacity: 0, transform: "translateX(-8px)", transition: "all 0.3s",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                Learn more <span>→</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
