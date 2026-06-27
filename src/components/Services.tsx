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
    <section id="services" style={{ padding: "8rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }}>
          <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 01 — Everything We Do</p>
          <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
            Six Ways We<br /><em>Make Your Business Win</em>
          </h2>
        </div>

        <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 1, background: "var(--border)" }}>
          {services.map(s => (
            <div
              key={s.num}
              style={{ padding: "2.5rem", background: "var(--surface)", display: "flex", flexDirection: "column", gap: "1rem", transition: "background 0.3s", cursor: "none", minHeight: 220 }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface2)";
                (el.querySelector(".svc-num") as HTMLElement).style.color = "var(--gold)";
                (el.querySelector(".svc-link") as HTMLElement).style.opacity = "1";
                (el.querySelector(".svc-link") as HTMLElement).style.transform = "translateX(0)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--surface)";
                (el.querySelector(".svc-link") as HTMLElement).style.opacity = "0";
                (el.querySelector(".svc-link") as HTMLElement).style.transform = "translateX(-8px)";
              }}
            >
              <span className="svc-num" style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "var(--gold)", letterSpacing: "0.15em", transition: "color 0.3s" }}>{s.num}</span>
              <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1.25rem", fontWeight: 500, color: "#fff" }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
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
