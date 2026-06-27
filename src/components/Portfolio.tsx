"use client";
import { useState } from "react";

const tabs = ["All", "Digital Marketing", "Branding & Printing", "Graphics"];

const projects = [
  { title: "Aieque", cat: "Branding & Printing", color: "#1a1209" },
  { title: "Neelam", cat: "Branding & Printing", color: "#0a1020" },
  { title: "Dr Gins", cat: "Digital Marketing", color: "#0f1a0f" },
  { title: "Titan Edge Camo Focal Point", cat: "Branding & Printing", color: "#151510" },
  { title: "Titan Raga Beautiful Together", cat: "Branding & Printing", color: "#1a1015" },
  { title: "Shoppers Stop Brand Elevation", cat: "Digital Marketing", color: "#0a1020" },
  { title: "Kenneth Cole Focal Point", cat: "Branding & Printing", color: "#100a0a" },
  { title: "PUIG", cat: "Graphics", color: "#0f0f1a" },
  { title: "Shoppers Stop", cat: "Digital Marketing", color: "#0a1020" },
  { title: "Kenneth Cole BTL Elements", cat: "Branding & Printing", color: "#100a0a" },
  { title: "Sharvv", cat: "Branding & Printing", color: "#1a0a0a" },
  { title: "Casio", cat: "Digital Marketing", color: "#0a0a1a" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="portfolio" className="py-32 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="chapter-label mb-4">Chapter 07 — Our Portfolio</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <h2
              className="font-light"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
            >
              A Showcase of<br />
              <em style={{ color: "var(--gold)" }}>Excellence</em>
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className="text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200 cursor-pointer"
                  style={{
                    background: active === tab ? "var(--gold)" : "transparent",
                    color: active === tab ? "#0a0a0a" : "var(--muted)",
                    border: `1px solid ${active === tab ? "var(--gold)" : "var(--border)"}`,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-square flex items-end p-4 cursor-pointer overflow-hidden"
              style={{ background: project.color }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(201,168,76,0.1)" }}
              />
              {/* Category */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <p className="chapter-label mb-1">{project.cat}</p>
                <p className="text-sm font-medium text-white">{project.title}</p>
              </div>
              {/* Default title (always visible) */}
              <div className="absolute inset-0 flex items-end p-4 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-sm font-medium text-white/70">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
