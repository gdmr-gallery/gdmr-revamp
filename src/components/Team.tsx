const team = [
  { name: "Sundar Swamy", role: "Founder", initial: "SS" },
  { name: "Githi Sreenivasan", role: "MD & Co-Founder", initial: "GS" },
  { name: "Gina Vijayabhaskar", role: "Partner & Exec. Director", initial: "GV" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="chapter-label mb-4">Chapter 08 — The Visionaries</p>
          <h2
            className="font-light"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, color: "var(--foreground)" }}
          >
            The People<br />
            <em style={{ color: "var(--gold)" }}>Behind GDMR</em>
          </h2>
          <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
            Three visionaries. One mission. Build brands that last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {team.map((member) => (
            <div
              key={member.name}
              className="group p-8 flex flex-col gap-6"
              style={{ background: "var(--surface)" }}
            >
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 flex items-center justify-center text-sm font-medium"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                }}
              >
                {member.initial}
              </div>
              <div>
                <h3
                  className="text-xl font-medium text-white mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
