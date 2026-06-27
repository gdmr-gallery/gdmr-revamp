"use client";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const fpos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Cursor
    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);

    // Follower lerp
    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animateFollower = () => {
      fpos.current.x = lerp(fpos.current.x, pos.current.x, 0.1);
      fpos.current.y = lerp(fpos.current.y, pos.current.y, 0.1);
      if (followerRef.current) {
        followerRef.current.style.left = fpos.current.x + "px";
        followerRef.current.style.top = fpos.current.y + "px";
      }
      raf = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover scale cursor on links/buttons
    const onEnter = () => {
      if (followerRef.current) {
        followerRef.current.style.width = "60px";
        followerRef.current.style.height = "60px";
        followerRef.current.style.borderColor = "var(--gold)";
      }
    };
    const onLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.width = "32px";
        followerRef.current.style.height = "32px";
        followerRef.current.style.borderColor = "rgba(201,168,76,0.5)";
      }
    };
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Lenis smooth scroll
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      const lenisRaf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(lenisRaf);
      };
      requestAnimationFrame(lenisRaf);
    });

    // GSAP ScrollTrigger reveal
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      // Reveal elements
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal-right").forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach(el => {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      // Stagger children inside .stagger-parent
      gsap.utils.toArray<HTMLElement>(".stagger-parent").forEach(parent => {
        const children = parent.querySelectorAll<HTMLElement>(":scope > *");
        gsap.fromTo(children,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: parent, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      });

      // Horizontal parallax on section backgrounds
      gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach(el => {
        gsap.to(el, {
          yPercent: -20, ease: "none",
          scrollTrigger: { trigger: el.parentElement, scrub: true },
        });
      });

      // Number counter animation
      gsap.utils.toArray<HTMLElement>(".count-up").forEach(el => {
        const target = parseInt(el.dataset.target || "0");
        gsap.fromTo({ val: 0 }, { val: target }, {
          duration: 2, ease: "power2.out",
          onUpdate: function () { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || ""); },
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Gold line reveal
      gsap.utils.toArray<HTMLElement>(".gold-line").forEach(el => {
        gsap.fromTo(el, { scaleX: 0, transformOrigin: "left" }, {
          scaleX: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", moveCursor);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      {children}
    </>
  );
}
