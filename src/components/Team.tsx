"use client";
import Image from "next/image";

const team = [
  {
    name: "Sundar Swamy", role: "Founder", init: "SS",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Visionary entrepreneur with 20+ years shaping brands across India.",
  },
  {
    name: "Githi Sreenivasan", role: "MD & Co-Founder", init: "GS",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Strategic leader driving GDMR's multi-disciplinary growth engine.",
  },
  {
    name: "Gina Vijayabhaskar", role: "Partner & Exec. Director", init: "GV",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Creative force behind GDMR's award-winning brand identities.",
  },
];

export default function Team() {
  return (
    <section id="team" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p className="chapter-label reveal" style={{ marginBottom: "1.5rem" }}>Chapter 08 — The Visionaries</p>
          <h2 className="reveal" style={{ fontFamily: "var(--font-h)", fontWeight: 400, fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.05, color: "var(--fg)" }}>
            The People<br /><em style={{ color: "var(--gold)" }}>Behind GDMR</em>
          </h2>
          <p className="reveal" style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted)" }}>Three visionaries. One mission. Build brands that last.</p>
        </div>

        <div className="stagger-parent" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
          {team.map(m => (
            <div key={m.name} style={{ cursor: "none" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".team-img") as HTMLElement).style.transform = "scale(1.05)";
                (el.querySelector(".team-line") as HTMLElement).style.width = "100%";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                (el.querySelector(".team-img") as HTMLElement).style.transform = "scale(1)";
                (el.querySelector(".team-line") as HTMLElement).style.width = "2rem";
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", marginBottom: "1.5rem" }}>
                <Image
                  className="team-img"
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.6s ease", filter: "grayscale(20%)" }}
                />
                {/* Gold overlay tint */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(201,168,76,0.15) 0%, transparent 60%)" }} />
                {/* Corner accents */}
                <div style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderLeft: "1px solid var(--gold)", borderTop: "1px solid var(--gold)", opacity: 0.7 }} />
                <div style={{ position: "absolute", bottom: 12, right: 12, width: 20, height: 20, borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", opacity: 0.7 }} />
              </div>
              {/* Info */}
              <div>
                <div className="team-line" style={{ height: 1, background: "var(--gold)", width: "2rem", marginBottom: "1rem", transition: "width 0.4s ease" }} />
                <h3 style={{ fontFamily: "var(--font-h)", fontSize: "1.4rem", fontWeight: 500, color: "#fff", marginBottom: "0.3rem" }}>{m.name}</h3>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>{m.role}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
