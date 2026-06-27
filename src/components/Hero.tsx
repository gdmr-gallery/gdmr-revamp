"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ default: gsap }) => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(".hero-line", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" })
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-location", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6");
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative", minHeight: "100svh", display: "flex",
        flexDirection: "column", justifyContent: "flex-end",
        padding: "0 2rem 5rem", overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <ThreeCanvas />

      {/* Gradient vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%), linear-gradient(to bottom, transparent 40%, var(--bg) 100%)",
      }} />

      <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto", width: "100%" }}>
        <p className="hero-location chapter-label" style={{ marginBottom: "2.5rem", opacity: 0 }}>
          Thiruvananthapuram · Kerala · India
        </p>

        <div style={{ overflow: "hidden" }}>
          <h1 style={{ fontFamily: "var(--font-h)", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            {["We Design", "We Build", "We Make It", "Happen"].map((line, i) => (
              <div key={i} style={{ overflow: "hidden", display: "block" }}>
                <span
                  className="hero-line"
                  style={{
                    display: "block", fontSize: "clamp(3.5rem,9vw,8.5rem)",
                    color: i === 1 ? "var(--gold)" : "var(--fg)",
                    opacity: 0,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "2rem", marginTop: "3rem" }}>
          <p className="hero-sub" style={{
            fontSize: "1rem", color: "rgba(240,235,224,0.5)", lineHeight: 1.8,
            maxWidth: 320, fontWeight: 300, opacity: 0,
          }}>
            Your brand&apos;s full-service partner —<br />from idea to impact.
          </p>
          <a
            className="hero-cta"
            href="#services"
            style={{
              display: "inline-flex", alignItems: "center", gap: "1rem",
              fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase",
              padding: "1rem 2rem", background: "var(--gold)", color: "#000",
              textDecoration: "none", cursor: "none", opacity: 0,
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#e8c96a"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold)"; el.style.transform = "translateY(0)"; }}
          >
            Begin the Story
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", right: "2rem", bottom: "4rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span className="chapter-label" style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}>Scroll</span>
        <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>
    </section>
  );
}
