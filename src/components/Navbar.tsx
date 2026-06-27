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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col leading-none cursor-pointer"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white font-bold text-lg tracking-widest">GDMR</span>
            <span style={{ color: "var(--gold)", fontSize: "0.55rem", letterSpacing: "0.3em", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              FOUNDATION
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:block text-xs font-medium tracking-widest uppercase px-5 py-2 border transition-all duration-200 cursor-pointer"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
            >
              Contact
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-white transition-all duration-200" />
              <span className="block w-4 h-px bg-white transition-all duration-200" />
              <span className="block w-6 h-px bg-white transition-all duration-200" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500"
        style={{
          background: "#0a0a0a",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transform: open ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between w-full">
          <span
            className="flex flex-col leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white font-bold text-lg tracking-widest">GDMR</span>
            <span style={{ color: "var(--gold)", fontSize: "0.55rem", letterSpacing: "0.3em", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              FOUNDATION
            </span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-sm tracking-widest uppercase flex items-center gap-3 cursor-pointer"
            aria-label="Close menu"
          >
            <span className="font-light" style={{ fontFamily: "var(--font-body)" }}>✕ CLOSE</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 max-w-7xl mx-auto w-full">
          <nav className="space-y-1">
            {menuItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-6 py-4 border-b cursor-pointer block"
                style={{
                  borderColor: "var(--border)",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--gold)", letterSpacing: "0.1em" }}
                >
                  {item.num}
                </span>
                <span
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-white group-hover:translate-x-3 transition-transform duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="chapter-label mb-2">Address</p>
              <p className="text-sm text-white/60 leading-relaxed">
                GDMR Building, Samithy Nagar,<br />
                Peroorkada, Thiruvananthapuram, Kerala
              </p>
            </div>
            <div>
              <p className="chapter-label mb-2">Inquiries</p>
              <p className="text-sm" style={{ color: "var(--gold)" }}>info@gdmrfoundation.com</p>
            </div>
            <div className="flex gap-5">
              {["FB", "IG", "IN"].map(s => (
                <a key={s} href="#" className="text-xs font-medium tracking-widest text-white/40 hover:text-white transition-colors duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 max-w-7xl mx-auto w-full">
          <p className="text-xs text-white/20 tracking-widest uppercase">© 2025 GDMR Foundation</p>
        </div>
      </div>
    </>
  );
}
