"use client";
import { useState } from "react";

const tabs = ["All", "Digital Marketing", "Branding & Printing", "Graphics"];

const projects = [
  { title: "Aieque", cat: "Branding & Printing", accent: "#1a1209" },
  { title: "Neelam", cat: "Branding & Printing", accent: "#0a1020" },
  { title: "Dr Gins", cat: "Digital Marketing", accent: "#0f1a0f" },
  { title: "Titan Edge Camo", cat: "Branding & Printing", accent: "#151510" },
  { title: "Titan Raga", cat: "Branding & Printing", accent: "#1a1015" },
  { title: "Shoppers Stop Elevation", cat: "Digital Marketing", accent: "#0a1020" },
  { title: "Kenneth Cole", cat: "Branding & Printing", accent: "#100a0a" },
  { title: "PUIG", cat: "Graphics", accent: "#0f0f1a" },
  { title: "Sharvv", cat: "Branding & Printing", accent: "#1a0a0a" },
  { title: "Casio", cat: "Digital Marketing", accent: "#0a0a1a" },
  { title: "121 Fit Out", cat: "Branding & Printing", accent: "#121212" },
  { title: "GDMR x Titan", cat: "Graphics", accent: "#1a150a" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="portfolio" style={{ padding: "8rem 2rem", background: "var(--surface)" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 2, background: "var(--border)" }}>
          {filtered.map(project => (
            <div
              key={project.title}
              style={{
                aspectRatio: "1", background: project.accent, position: "relative",
                overflow: "hidden", cursor: "none",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".proj-overlay") as HTMLElement).style.opacity = "1";
                (el.querySelector(".proj-info") as HTMLElement).style.transform = "translateY(0)";
                (el.querySelector(".proj-info") as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".proj-overlay") as HTMLElement).style.opacity = "0";
                (el.querySelector(".proj-info") as HTMLElement).style.transform = "translateY(12px)";
                (el.querySelector(".proj-info") as HTMLElement).style.opacity = "0";
              }}
            >
              {/* Gold corner accent */}
              <div style={{ position: "absolute", top: 12, left: 12, width: 16, height: 16, borderLeft: "1px solid var(--gold)", borderTop: "1px solid var(--gold)", opacity: 0.4 }} />
              <div style={{ position: "absolute", bottom: 12, right: 12, width: 16, height: 16, borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", opacity: 0.4 }} />

              {/* Default label */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem", background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "rgba(240,235,224,0.6)" }}>{project.title}</p>
              </div>

              {/* Hover overlay */}
              <div className="proj-overlay" style={{
                position: "absolute", inset: 0, background: "rgba(201,168,76,0.08)",
                opacity: 0, transition: "opacity 0.3s",
              }} />
              <div className="proj-info" style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem",
                opacity: 0, transform: "translateY(12px)", transition: "all 0.3s",
              }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>{project.cat}</p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
