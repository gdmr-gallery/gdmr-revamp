"use client";
export default function CtaSection() {
  return (
    <section
      id="contact"
      className="py-40 px-6 relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          color: "rgba(201,168,76,0.03)",
          fontWeight: 700,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        GDMR
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="chapter-label mb-8">Chapter 09 — Your Turn</p>
        <h2
          className="font-light mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4rem, 12vw, 10rem)",
            lineHeight: 0.9,
            color: "var(--foreground)",
          }}
        >
          Ready<br />
          <em style={{ color: "var(--gold)" }}>to</em><br />
          Grow?
        </h2>
        <p
          className="text-base mb-12 mx-auto max-w-md"
          style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.7 }}
        >
          You&apos;ve seen what we do. Now let&apos;s talk about what we can do for you.
          From a single service to a full brand transformation — we&apos;re ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@gdmrfoundation.com"
            className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-widest uppercase px-10 py-4 cursor-pointer transition-all duration-200"
            style={{ background: "var(--gold)", color: "#0a0a0a" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-light)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; }}
          >
            Start a Project
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-widest uppercase px-10 py-4 border cursor-pointer transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--foreground)"; }}
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
}
