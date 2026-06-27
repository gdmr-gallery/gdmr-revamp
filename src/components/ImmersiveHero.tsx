"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

/* ─── CSS corridor layers ──────────────────────────────────────────────── */
const ARCH_LAYERS = [
  { id: "l1", depth: -2400, size: 7,   opacity: 0.18, gold: false },
  { id: "l2", depth: -1800, size: 14,  opacity: 0.22, gold: true  },
  { id: "l3", depth: -1200, size: 22,  opacity: 0.30, gold: false },
  { id: "l4", depth: -700,  size: 34,  opacity: 0.40, gold: true  },
  { id: "l5", depth: -300,  size: 52,  opacity: 0.55, gold: false },
  { id: "l6", depth: -80,   size: 75,  opacity: 0.70, gold: true  },
];

export default function ImmersiveHero() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: typeof import("gsap")["default"];
    let ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"];

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, st]) => {
      gsap = g.default;
      ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const scene = sceneRef.current;
      const wrap  = wrapRef.current;
      if (!scene || !wrap) return;

      /* ── Pin the hero for 5 full screen-heights ─────────────────────── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=500%",
          scrub: 1.4,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* 0 → 1  zoom into corridor (perspective scale) */
      tl.to(scene, { scale: 1.7, ease: "none" }, 0)
        .to(scene, { scale: 3.0, ease: "none" }, 0.4)
        .to(scene, { scale: 5.5, ease: "none" }, 0.8);

      /* Corridor layer parallax at different depths */
      ARCH_LAYERS.forEach((_, i) => {
        const speed = 0.4 + i * 0.12;
        tl.to(`#layer-${i}`, { scale: 1 + speed, opacity: i > 3 ? 0 : undefined, ease: "none" }, 0);
      });

      /* Hero text: fade out as we move forward */
      tl.to(".hero-glass", { opacity: 0, y: -40, ease: "power2.in" }, 0.2);

      /* Chapter panels slide in at different scroll depths */
      tl.fromTo(".panel-services",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0,  filter: "blur(0px)", ease: "power3.out" }, 0.35);
      tl.to(".panel-services",
        { opacity: 0, y: -40, filter: "blur(8px)", ease: "power2.in" }, 0.6);

      tl.fromTo(".panel-about",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0,  filter: "blur(0px)", ease: "power3.out" }, 0.65);
      tl.to(".panel-about",
        { opacity: 0, y: -40, filter: "blur(8px)", ease: "power2.in" }, 0.9);

      /* Vignette darkens as we pass through */
      tl.to(".vignette-in", { opacity: 1, ease: "none" }, 0.75)
        .to(".vignette-in", { opacity: 0, ease: "none" }, 0.85);

      /* Entrance flash at full zoom */
      tl.to(".flash", { opacity: 0.6, ease: "none" }, 0.88)
        .to(".flash", { opacity: 0,   ease: "none" }, 0.95);

      /* ── Intro hero text entrance ──────────────────────────────────── */
      gsap.fromTo(".hero-line",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, stagger: 0.14, duration: 1.3, ease: "power4.out", delay: 0.4 });
      gsap.fromTo(".hero-sub, .hero-cta",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power3.out", delay: 1.1 });
    });
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", height: "100svh", overflow: "hidden", background: "#000" }}>

      {/* ── 3D Perspective scene ──────────────────────────────────────── */}
      <div
        ref={sceneRef}
        style={{
          position: "absolute", inset: 0, transformOrigin: "50% 50%",
          willChange: "transform",
          perspective: "1200px",
        }}
      >
        {/* Video + particles background */}
        <video autoPlay muted loop playsInline style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.25, zIndex: 0,
        }}>
          <source src="https://videos.pexels.com/video-files/3843442/3843442-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}><ThreeCanvas /></div>

        {/* CSS architectural corridor layers */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "center",
          perspective: "900px", perspectiveOrigin: "50% 50%",
        }}>
          {ARCH_LAYERS.map((layer, i) => (
            <div
              id={`layer-${i}`}
              key={layer.id}
              style={{
                position: "absolute",
                width: `${layer.size}vmin`,
                height: `${layer.size * 1.5}vmin`,
                border: `1px solid ${layer.gold ? "rgba(201,168,76," + layer.opacity + ")" : "rgba(255,255,255," + (layer.opacity * 0.3) + ")"}`,
                transform: `translateZ(${layer.depth}px)`,
                willChange: "transform, opacity",
                boxShadow: layer.gold
                  ? `0 0 ${60 + i * 30}px rgba(201,168,76,0.04), inset 0 0 ${30 + i * 20}px rgba(201,168,76,0.03)`
                  : "none",
              }}
            >
              {/* Corner ornaments on gold layers */}
              {layer.gold && (
                <>
                  {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
                    <div key={v+h} style={{
                      position: "absolute",
                      [v]: -1, [h]: -1,
                      width: 12, height: 12,
                      borderTop: v === "top" ? "1px solid var(--gold)" : "none",
                      borderBottom: v === "bottom" ? "1px solid var(--gold)" : "none",
                      borderLeft: h === "left" ? "1px solid var(--gold)" : "none",
                      borderRight: h === "right" ? "1px solid var(--gold)" : "none",
                      opacity: 0.6,
                    }} />
                  ))}
                </>
              )}
            </div>
          ))}

          {/* Floor and ceiling receding lines */}
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              width: "1px", height: "80vh",
              background: `linear-gradient(to bottom, transparent, rgba(201,168,76,${0.04 + i * 0.01}), transparent)`,
              transform: `rotateY(${(i - 3.5) * 8}deg) translateZ(-600px)`,
              transformOrigin: "50% 50%",
            }} />
          ))}
        </div>

        {/* Radial vignette always */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
          background: "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.75) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.95) 100%)",
        }} />
      </div>

      {/* ── Transition overlays ───────────────────────────────────────── */}
      <div className="vignette-in" style={{
        position: "absolute", inset: 0, zIndex: 10,
        background: "rgba(0,0,0,0.92)", pointerEvents: "none", opacity: 0,
      }} />
      <div className="flash" style={{
        position: "absolute", inset: 0, zIndex: 11,
        background: "rgba(201,168,76,0.08)", pointerEvents: "none", opacity: 0,
      }} />

      {/* ── HERO TEXT ────────────────────────────────────────────────── */}
      <div className="hero-glass" style={{
        position: "absolute", inset: 0, zIndex: 20,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 3rem 5rem",
      }}>
        <p className="chapter-label" style={{ marginBottom: "2rem", letterSpacing: "0.3em" }}>
          Thiruvananthapuram · Kerala · India
        </p>
        <h1 style={{ fontFamily: "var(--font-h)", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.02em" }}>
          {["We Design", "We Build", "We Make It", "Happen"].map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <span className="hero-line" style={{
                display: "block",
                fontSize: "clamp(3.5rem,8.5vw,8rem)",
                color: i === 1 ? "var(--gold)" : "var(--fg)",
                opacity: 0,
              }}>{line}</span>
            </div>
          ))}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2.5rem", alignItems: "center" }}>
          <p className="hero-sub" style={{ fontSize: "1rem", color: "rgba(240,235,224,0.5)", lineHeight: 1.8, maxWidth: 300, opacity: 0 }}>
            Your brand&apos;s full-service partner —<br />from idea to impact.
          </p>
          <a className="hero-cta" href="#services" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase",
            padding: "0.9rem 2rem", background: "var(--gold)", color: "#000",
            textDecoration: "none", cursor: "none", opacity: 0, transition: "all .2s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold-light)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold)"; el.style.transform = ""; }}
          >
            Begin the Story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* ── SERVICES GLASS PANEL (mid-scroll) ────────────────────────── */}
      <div className="panel-services" style={{
        position: "absolute", inset: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem", opacity: 0, pointerEvents: "none",
      }}>
        <div className="glass-gold" style={{ padding: "3rem", maxWidth: 700, width: "100%" }}>
          <p className="chapter-label" style={{ marginBottom: "1.5rem" }}>Chapter 01 — We Do It All</p>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "var(--fg)", marginBottom: "2rem", lineHeight: 1.1 }}>
            Six Ways We<br /><em style={{ color: "var(--gold)" }}>Make Your Business Win</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {["Branding","Digital & Web","Engineering","Visual Merch","Events","HR Solutions"].map((s, i) => (
              <div key={s} style={{ padding: "1rem 1.2rem", background: "rgba(0,0,0,0.3)" }}>
                <span style={{ fontSize: "0.55rem", color: "var(--gold)", letterSpacing: "0.15em", display: "block", marginBottom: 4 }}>0{i + 1}</span>
                <p style={{ fontSize: "0.8rem", color: "rgba(240,235,224,0.8)", fontWeight: 500 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT GLASS PANEL (late-scroll) ──────────────────────────── */}
      <div className="panel-about" style={{
        position: "absolute", inset: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem", opacity: 0, pointerEvents: "none",
      }}>
        <div className="glass-gold" style={{ padding: "3.5rem", maxWidth: 640, width: "100%", textAlign: "center" }}>
          <p className="chapter-label" style={{ marginBottom: "1.5rem" }}>Chapter 02 — Who We Are</p>
          <h2 style={{ fontFamily: "var(--font-h)", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, color: "var(--fg)", marginBottom: "2rem", lineHeight: 1.05 }}>
            One Agency.<br /><em style={{ color: "var(--gold)" }}>Infinite Possibilities.</em>
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
            {[["20+","Years"],["200+","Brands"],["6","Divisions"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: "2.5rem", color: "var(--gold)", lineHeight: 1 }}>{val}</div>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,235,224,0.4)", marginTop: 6 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", right: "2.5rem", bottom: "3.5rem", zIndex: 25, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span className="chapter-label" style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}>Scroll</span>
        <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>
    </div>
  );
}
