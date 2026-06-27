"use client";
export default function Footer() {
  return (
    <footer className="px-6 py-16" style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <div className="mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              <div className="text-white font-bold text-2xl tracking-widest leading-none">GDMR</div>
              <div className="text-xs font-medium tracking-[0.3em]" style={{ color: "var(--gold)" }}>FOUNDATION</div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Your brand&apos;s full-service partner —<br />from idea to impact.
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="chapter-label mb-4">Address</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              GDMR Building, Samithy Nagar<br />
              Peroorkada, Thiruvananthapuram<br />
              Kerala, India
            </p>
          </div>

          {/* Reach us */}
          <div>
            <p className="chapter-label mb-4">Reach Us</p>
            <div className="space-y-2">
              <a
                href="mailto:info@gdmrfoundation.com"
                className="block text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)"; }}
              >
                info@gdmrfoundation.com
              </a>
              <a
                href="mailto:careers@gdmrfoundation.com"
                className="block text-sm transition-colors duration-200"
                style={{ color: "rgba(245,240,232,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)"; }}
              >
                careers@gdmrfoundation.com
              </a>
            </div>
          </div>

          {/* Follow us */}
          <div>
            <p className="chapter-label mb-4">Follow Us</p>
            <div className="flex gap-4">
              {[
                { label: "Facebook", short: "FB", href: "#" },
                { label: "Instagram", short: "IG", href: "#" },
                { label: "LinkedIn", short: "IN", href: "#" },
              ].map(s => (
                <a
                  key={s.short}
                  href={s.href}
                  aria-label={s.label}
                  className="text-xs font-medium tracking-widest transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
            © 2025 GDMR Foundation
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
            Thiruvananthapuram · Kerala · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
