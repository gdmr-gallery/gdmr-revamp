"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { num: "01", label: "Home", href: "#hero" },
  { num: "02", label: "About Us", href: "#about" },
  { num: "03", label: "Services", href: "#services" },
  { num: "04", label: "Events", href: "#events" },
  { num: "05", label: "Blog", href: "#blog" },
  { num: "06", label: "Get In Touch", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.2em", color: "#fff" }}>GDMR</span>
            <span style={{ fontFamily: "var(--font-b)", fontSize: "0.5rem", letterSpacing: "0.4em", color: "var(--gold)", fontWeight: 500, textTransform: "uppercase" }}>Foundation</span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a href="#contact" style={{
              fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "0.6rem 1.4rem", border: "1px solid var(--gold)", color: "var(--gold)",
              textDecoration: "none", transition: "all 0.25s", cursor: "none",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold)"; el.style.color = "#000"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "var(--gold)"; }}
            >Contact</a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              style={{ background: "none", border: "none", cursor: "none", padding: "0.5rem", display: "flex", flexDirection: "column", gap: 5 }}
            >
              {[6, 4, 6].map((w, i) => (
                <span key={i} style={{ display: "block", height: 1, background: "#fff", width: w * 4, transition: "all 0.3s" }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "#050505",
        transition: "opacity 0.5s, transform 0.5s cubic-bezier(0.77,0,0.175,1)",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: open ? "all" : "none",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span style={{ fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.2em", color: "#fff" }}>GDMR</span>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "none", color: "#fff", fontSize: "0.65rem", letterSpacing: "0.25em", fontFamily: "var(--font-b)", textTransform: "uppercase" }}>
            ✕ &nbsp;Close
          </button>
        </div>

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1400, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          {menuItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "baseline", gap: "1.5rem",
                padding: "1rem 0", borderBottom: "1px solid var(--border)",
                textDecoration: "none", cursor: "none",
                transition: `all 0.3s ${i * 0.04}s`,
              }}
              onMouseEnter={e => { (e.currentTarget.querySelector(".menu-title") as HTMLElement)!.style.transform = "translateX(12px)"; (e.currentTarget.querySelector(".menu-title") as HTMLElement)!.style.color = "var(--gold)"; }}
              onMouseLeave={e => { (e.currentTarget.querySelector(".menu-title") as HTMLElement)!.style.transform = "translateX(0)"; (e.currentTarget.querySelector(".menu-title") as HTMLElement)!.style.color = "#fff"; }}
            >
              <span style={{ fontFamily: "var(--font-b)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.15em", minWidth: 24 }}>{item.num}</span>
              <span className="menu-title" style={{ fontFamily: "var(--font-h)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, color: "#fff", transition: "all 0.3s ease" }}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "1.5rem 2rem 2.5rem", width: "100%", display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          <div>
            <p className="chapter-label" style={{ marginBottom: "0.5rem" }}>Address</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(240,235,224,0.5)", lineHeight: 1.7 }}>GDMR Building, Samithy Nagar,<br />Peroorkada, Thiruvananthapuram, Kerala</p>
          </div>
          <div>
            <p className="chapter-label" style={{ marginBottom: "0.5rem" }}>Inquiries</p>
            <p style={{ fontSize: "0.8rem", color: "var(--gold)" }}>info@gdmrfoundation.com</p>
          </div>
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-end" }}>
            {["FB", "IG", "IN"].map(s => (
              <a key={s} href="#" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(240,235,224,0.3)", textDecoration: "none", transition: "color 0.2s", cursor: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(240,235,224,0.3)"; }}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
