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
    <section id="services" className="py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="chapter-label mb-4">Chapter 01 — Everything We Do</p>
          <h2
            className="font-light"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--foreground)" }}
          >
            Six Ways We<br />
            <em>Make Your Business Win</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="group p-8 flex flex-col gap-4 cursor-pointer transition-all duration-300"
              style={{ background: "var(--surface)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface-2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
            >
              <span
                className="text-xs font-mono font-bold"
                style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
              >
                {s.num}
              </span>
              <h3
                className="text-xl font-medium text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {s.desc}
              </p>
              <div
                className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--gold)" }}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
