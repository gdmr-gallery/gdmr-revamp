"use client";
export default function DigitalSection() {
  return (
    <section id="digital" className="py-32 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="chapter-label mb-6">Chapter 04 — Digital Marketing, Web & IT Solutions</p>
            <h2
              className="font-light mb-8"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
            >
              We Build Websites<br />
              & Digital Experiences<br />
              <em style={{ color: "var(--gold)" }}>That Convert</em>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.6)", maxWidth: "440px" }}>
              From blazing-fast websites and custom web applications to full IT solutions, SEO,
              social media and performance marketing — we engineer your entire digital presence.
              Your website is your best salesperson. We build it right.
            </p>
          </div>

          {/* Right: browser mockup */}
          <div
            className="rounded-none border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex gap-1.5">
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div
                className="flex-1 mx-4 px-3 py-1 text-xs rounded-sm"
                style={{ background: "var(--surface-2)", color: "var(--muted)" }}
              >
                startup.io
              </div>
            </div>
            {/* Content area */}
            <div className="p-8 space-y-3">
              <div className="h-3 rounded-sm w-3/4" style={{ background: "var(--border)" }} />
              <div className="h-3 rounded-sm w-1/2" style={{ background: "var(--border)" }} />
              <div className="h-20 rounded-sm mt-4" style={{ background: "var(--surface-2)" }} />
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-12 rounded-sm" style={{ background: "var(--surface-2)" }} />
                ))}
              </div>
              <div className="h-3 rounded-sm w-2/3 mt-2" style={{ background: "var(--border)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
