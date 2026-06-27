const stats = [
  { value: "20+", label: "Years Building Brands" },
  { value: "200+", label: "Brands Served" },
  { value: "6", label: "Core Divisions" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="chapter-label mb-6">Chapter 02 — Who We Are</p>
            <h2
              className="font-light mb-8"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "var(--foreground)" }}
            >
              One Agency.<br />
              <em style={{ color: "var(--gold)" }}>Infinite Possibilities.</em>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.6)", maxWidth: "480px" }}>
              GDMR Foundation is a multi-disciplinary powerhouse that helps businesses plan, build, promote, and grow.
              We are not just an agency — we are your strategic partner, your creative engine, and your growth catalyst.
              From startup to enterprise — we take you where you need to go.
            </p>
            <div className="w-12 h-px" style={{ background: "var(--gold)" }} />
          </div>

          <div className="grid grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 text-center"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="font-light mb-3"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--gold)" }}
                >
                  {stat.value}
                </div>
                <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
