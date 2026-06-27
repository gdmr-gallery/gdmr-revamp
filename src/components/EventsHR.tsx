export default function EventsHR() {
  return (
    <section id="events" className="py-32 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="chapter-label mb-6">Chapter 06 — Events & HR Solutions</p>
            <h2
              className="font-light mb-8"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
            >
              We Bring<br />
              <em style={{ color: "var(--gold)" }}>People Together</em>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.6)", maxWidth: "440px" }}>
              From concept to curtain call, our events team produces experiences that leave lasting impressions.
              Our HR solutions help you find, hire, and retain the people who will build your business.
              We handle the people — so you can focus on the vision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase py-3 border-b cursor-pointer"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Explore Events
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Corporate Events", icon: "◈" },
              { label: "Product Launches", icon: "◈" },
              { label: "Brand Activations", icon: "◈" },
              { label: "Talent Acquisition", icon: "◈" },
              { label: "Workforce Planning", icon: "◈" },
              { label: "HR Strategy", icon: "◈" },
            ].map(item => (
              <div
                key={item.label}
                className="p-5 border"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>{item.icon}</span>
                <p className="mt-3 text-sm text-white font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
