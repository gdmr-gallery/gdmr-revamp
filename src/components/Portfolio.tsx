"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = ["All", "Digital Marketing", "Branding & Printing", "Graphics"];

const projects = [
  { title: "Aieque", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80" },
  { title: "Neelam", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80" },
  { title: "Dr Gins", cat: "Digital Marketing", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
  { title: "Titan Edge Camo", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80" },
  { title: "Titan Raga", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1598531147738-b2a56bf9e27d?w=600&q=80" },
  { title: "Shoppers Stop Elevation", cat: "Digital Marketing", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80" },
  { title: "Kenneth Cole", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80" },
  { title: "PUIG", cat: "Graphics", img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80" },
  { title: "Sharvv", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80" },
  { title: "Casio", cat: "Digital Marketing", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { title: "121 Fit Out", cat: "Branding & Printing", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80" },
  { title: "GDMR × Titan", cat: "Graphics", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="portfolio" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 07 — Our Portfolio</p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem" }}>
            <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
              A Showcase of<br /><em style={{ color: "var(--gold)" }}>Excellence</em>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tabs.map(tab => (
                <button key={tab} onClick={() => setActive(tab)} style={{
                  fontSize: "0.6rem", padding: "0.5rem 1rem", letterSpacing: "0.15em", textTransform: "uppercase",
                  background: active === tab ? "var(--gold)" : "transparent",
                  color: active === tab ? "#000" : "var(--muted)",
                  border: `1px solid ${active === tab ? "var(--gold)" : "var(--border)"}`,
                  transition: "all 0.2s", cursor: "none",
                }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 3 }}>
          {filtered.map(project => (
            <div
              key={project.title}
              style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden", cursor: "none" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".proj-img") as HTMLElement).style.transform = "scale(1.08)";
                (el.querySelector(".proj-overlay") as HTMLElement).style.opacity = "1";
                (el.querySelector(".proj-info") as HTMLElement).style.transform = "translateY(0)";
                (el.querySelector(".proj-info") as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".proj-img") as HTMLElement).style.transform = "scale(1)";
                (el.querySelector(".proj-overlay") as HTMLElement).style.opacity = "0";
                (el.querySelector(".proj-info") as HTMLElement).style.transform = "translateY(16px)";
                (el.querySelector(".proj-info") as HTMLElement).style.opacity = "0";
              }}
            >
              <Image
                className="proj-img"
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
              />
              {/* Dark overlay always */}
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
              {/* Hover overlay */}
              <div className="proj-overlay" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(201,168,76,0.12) 100%)",
                opacity: 0, transition: "opacity 0.4s",
              }} />
              {/* Gold corner accents */}
              <div style={{ position: "absolute", top: 12, left: 12, width: 18, height: 18, borderLeft: "1px solid var(--gold)", borderTop: "1px solid var(--gold)", opacity: 0.6 }} />
              <div style={{ position: "absolute", bottom: 12, right: 12, width: 18, height: 18, borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", opacity: 0.6 }} />
              {/* Default title */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.2rem", background: "linear-gradient(transparent,rgba(0,0,0,0.7))" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "rgba(240,235,224,0.7)" }}>{project.title}</p>
              </div>
              {/* Hover info */}
              <div className="proj-info" style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.2rem",
                opacity: 0, transform: "translateY(16px)", transition: "all 0.35s ease",
              }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>{project.cat}</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", fontFamily: "var(--font-h)" }}>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
