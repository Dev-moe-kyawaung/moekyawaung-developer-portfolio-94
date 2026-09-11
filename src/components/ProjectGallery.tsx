import { ExternalLink, FolderGit2, Layers } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import { DeviceMockup } from "./DeviceMockup";

export function ProjectGallery() {
  return (
    <section id="projects" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="pixel-label mb-2 text-purple">02 / gallery</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Project <span className="text-cobalt">gallery</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              Android applications and web builds shown on device. Each entry links to its
              repository so you can review the implementation.
            </p>
          </div>
          <span className="mono inline-flex items-center gap-1.5 border border-line bg-panel px-3 py-1.5 text-xs text-muted">
            <Layers className="h-3.5 w-3.5 text-cobalt" />
            {PROJECTS.length} builds
          </span>
        </div>

        {/* gallery grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="reveal group surface pixel-frame p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${Math.min(i * 45, 260)}ms` }}
            >
              {/* device */}
              <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                <DeviceMockup>
                  <img
                    src={p.screenshot}
                    alt={`${p.name} app screenshot`}
                    className="aspect-[9/16] w-full object-cover"
                    loading="lazy"
                  />
                </DeviceMockup>
              </div>

              {/* meta */}
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                  <span className="mono text-[10px] text-neon">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mono mt-1 text-[11px] text-cobalt">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

                {/* stack chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-line bg-panel-2 px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* repo link */}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-line bg-panel px-3 py-2 font-mono text-[11px] text-ink transition-colors duration-200 hover:border-neon hover:text-neon"
                >
                  <FolderGit2 className="h-3.5 w-3.5" />
                  Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
