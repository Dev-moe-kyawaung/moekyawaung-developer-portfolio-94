import { Award, Building2, Rocket } from "lucide-react";
import { TIMELINE } from "../data/portfolio";

const KIND_META = {
  work: { icon: Building2, color: "text-cobalt", ring: "border-cobalt", bg: "bg-cobalt" },
  learning: { icon: Award, color: "text-purple", ring: "border-purple", bg: "bg-purple" },
  build: { icon: Rocket, color: "text-neon", ring: "border-neon", bg: "bg-neon" },
} as const;

export function JourneyTimeline() {
  return (
    <section id="timeline" className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* heading */}
        <div className="reveal">
          <p className="pixel-label mb-2 text-neon">04 / journey</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Career <span className="text-cobalt">timeline</span>
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            How I grew from first production apps to senior Android delivery and on-device AI work.
          </p>
        </div>

        {/* timeline */}
        <ol className="relative mt-12 border-l border-line pl-8 sm:pl-10">
          {TIMELINE.map((item, i) => {
            const meta = KIND_META[item.kind];
            const Icon = meta.icon;
            return (
              <li
                key={`${item.year}-${item.title}`}
                className="reveal relative pb-10 last:pb-0"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* node */}
                <span
                  className={`absolute -left-[2.35rem] top-0 grid h-9 w-9 place-items-center border bg-void sm:-left-[2.85rem] ${meta.ring}`}
                >
                  <Icon className={`h-4 w-4 ${meta.color}`} />
                </span>
                {/* connector dot pulse */}
                <span
                  className={`absolute -left-[2.35rem] top-0 h-9 w-9 rounded-full opacity-25 sm:-left-[2.85rem] ${meta.bg}`}
                  aria-hidden="true"
                />

                <div className="surface pixel-frame p-5 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className={`font-display text-lg font-bold ${meta.color}`}>
                      {item.year}
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <span className="mono text-[11px] text-muted">{item.org}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
