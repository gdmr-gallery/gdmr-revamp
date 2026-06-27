"use client";
const clients = [
  "Shoppers Stop", "Titan", "Fastrack", "Lakme",
  "Tommy Hilfiger", "Kenneth Cole", "Coach", "Anne Klein",
];

export default function EngineeringSection() {
  return (
    <section id="engineering" className="py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center"
                  style={{ background: i % 2 === 0 ? "var(--surface-2)" : "var(--background)" }}
                >
                  <div
                    className="w-8 h-8 border"
                    style={{ borderColor: "var(--gold)", opacity: 0.4 + i * 0.1 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <p className="chapter-label mb-6">Chapter 05 — Engineering & Visual Merchandising</p>
            <h2
              className="font-light mb-8"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
            >
              We Build<br />
              <em style={{ color: "var(--gold)" }}>Spaces That Sell</em>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.6)", maxWidth: "440px" }}>
              Our engineering team designs and builds physical spaces — retail interiors, store fit-outs,
              display systems and visual merchandising setups that turn browsers into buyers.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {clients.map(c => (
                <span
                  key={c}
                  className="text-xs px-3 py-1.5 border tracking-wider"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {c}
                </span>
              ))}
            </div>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase py-3 border-b cursor-pointer transition-colors duration-200"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
