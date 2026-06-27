"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.3,
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Location tag */}
        <p
          className="chapter-label mb-10"
          style={{ letterSpacing: "0.25em" }}
        >
          Thiruvananthapuram · Kerala · India
        </p>

        <div ref={titleRef}>
          <h1
            className="font-light leading-[0.95] mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--foreground)",
            }}
          >
            We Design<br />
            <span style={{ color: "var(--gold)" }}>We Build</span><br />
            We Make It<br />
            Happen
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <p
              className="text-base sm:text-lg font-light max-w-sm"
              style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.7 }}
            >
              Your brand&apos;s full-service partner —<br />from idea to impact.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-4 text-xs font-medium tracking-widest uppercase px-8 py-4 cursor-pointer transition-all duration-300 self-start"
              style={{ background: "var(--gold)", color: "#0a0a0a" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-light)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; }}
            >
              Begin the Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-0 bottom-0 flex flex-col items-center gap-3">
          <span className="chapter-label" style={{ writingMode: "vertical-rl" }}>Scroll</span>
          <div className="w-px h-12" style={{ background: "var(--gold)", opacity: 0.5 }} />
        </div>
      </div>
    </section>
  );
}
