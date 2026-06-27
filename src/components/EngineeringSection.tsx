"use client";
import Image from "next/image";

const clients = ["Shoppers Stop","Titan","Fastrack","Lakme","Tommy Hilfiger","Kenneth Cole","Coach","Anne Klein"];

const galleryImgs = [
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80",
];

export default function EngineeringSection() {
  return (
    <section id="engineering" style={{ padding: "8rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          {/* Image grid */}
          <div className="reveal-left" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {galleryImgs.map((img, i) => (
              <div key={i} style={{
                position: "relative", aspectRatio: "1", overflow: "hidden",
                transition: "transform 0.4s ease", cursor: "none",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <Image src={img} alt="Engineering work" fill sizes="300px" style={{ objectFit: "cover", filter: "grayscale(30%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", transition: "opacity 0.3s" }} />
                <div style={{ position: "absolute", top: 8, left: 8, width: 14, height: 14, borderLeft: "1px solid var(--gold)", borderTop: "1px solid var(--gold)", opacity: 0.6 }} />
              </div>
            ))}
          </div>

          <div>
            <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 05 — Engineering & Visual Merchandising</p>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)", marginBottom: "2rem" }}>
              We Build<br /><em style={{ color: "var(--gold)" }}>Spaces That Sell</em>
            </h2>
            <p className="reveal" style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(240,235,224,0.55)", maxWidth: 440, marginBottom: "2.5rem" }}>
              Our engineering team designs and builds physical spaces — retail interiors, store fit-outs,
              display systems and visual merchandising setups that turn browsers into buyers.
            </p>
            <div className="stagger-parent" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {clients.map(c => (
                <span key={c} style={{
                  fontSize: "0.65rem", padding: "0.4rem 0.8rem", border: "1px solid var(--border)",
                  color: "rgba(240,235,224,0.4)", letterSpacing: "0.1em", transition: "all 0.2s", cursor: "none",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "rgba(240,235,224,0.4)"; }}
                >{c}</span>
              ))}
            </div>
            <a href="#portfolio" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "0.4rem", cursor: "none",
            }}>See Our Work <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
