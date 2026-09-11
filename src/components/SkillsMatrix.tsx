import { Cpu } from "lucide-react";
import { SKILLS } from "../data/portfolio";

const CATEGORY_COLOR: Record<string, string> = {
  Language: "text-cobalt",
  UI: "text-purple",
  Architecture: "text-neon",
  State: "text-cobalt",
  Data: "text-purple",
  Async: "text-cobalt",
  Backend: "text-neon",
  Network: "text-cobalt",
  Web: "text-purple",
  AI: "text-neon",
  DevOps: "text-cobalt",
  Security: "text-purple",
};

export function SkillsMatrix() {
  return (
    <section id="skills" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="reveal">
          <p className="pixel-label mb-2 text-cobalt">03 / stack</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Skills <span className="text-purple">matrix</span>
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Core tools I use to ship production systems. Proficiency reflects hands-on delivery
            across Android, backend integration, and web work.
          </p>
        </div>

        {/* matrix grid */}
        <div className="reveal mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => {
            const accent = CATEGORY_COLOR[s.category] ?? "text-cobalt";
            return (
              <div
                key={s.name}
                className="group bg-panel p-5 transition-colors duration-200 hover:bg-panel-2"
                style={{ transitionDelay: `${Math.min(i * 25, 200)}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{s.name}</h3>
                    <p className={`mono mt-0.5 text-[10px] uppercase tracking-wider ${accent}`}>
                      {s.category}
                    </p>
                  </div>
                  <span className="mono text-xs text-muted">{s.years}y</span>
                </div>

                {/* level bar — micro-interaction on hover */}
                <div className="mt-4 h-1.5 w-full overflow-hidden bg-void">
                  <div
                    className="h-full bg-gradient-to-r from-cobalt via-purple to-neon transition-[width] duration-700 ease-out group-hover:brightness-125"
                    style={{ width: `${s.level}%` }}
                    role="img"
                    aria-label={`${s.name} proficiency ${s.level} percent`}
                  />
                </div>
                <p className="mono mt-2 text-right text-[10px] text-muted">{s.level}%</p>
              </div>
            );
          })}
        </div>

        {/* footnote */}
        <div className="reveal mt-6 inline-flex items-center gap-2 border border-line bg-panel px-3 py-2 font-mono text-[11px] text-muted">
          <Cpu className="h-3.5 w-3.5 text-neon" />
          Continuously learning — 82+ certified modules across nine domains.
        </div>
      </div>
    </section>
  );
}
