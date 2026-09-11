import { useEffect, useState } from "react";
import { ArrowDown, Check, FolderGit2, Mail, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";

const BOOT_LINES = [
  "init portfolio --year 2026",
  "load profile: Moe Kyaw Aung",
  "mount modules: projects, skills, journey",
  "status: ready",
];

export function RetroHero() {
  const roleText = useTypewriter(PROFILE.roles, {
    typeSpeed: 52,
    deleteSpeed: 26,
    holdMs: 1700,
  });

  // one-shot boot bar (subtle, non-looping)
  const [booted, setBooted] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setBooted(true);
      return;
    }
    const t = setTimeout(() => setBooted(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cobalt/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-40 h-[300px] w-[300px] rounded-full bg-purple/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* status badge */}
        <div className="rise-in inline-flex items-center gap-2 border border-line bg-panel/80 px-3 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
          <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-neon" />
          <span className="text-neon">SYSTEM ONLINE</span>
          <span className="text-muted/50">·</span>
          <span>PORTFOLIO 2026</span>
        </div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* left: identity */}
          <div>
            <p className="mono mb-3 text-xs tracking-[0.3em] text-cobalt">
              // {PROFILE.nameMm}
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Moe Kyaw
              <br />
              <span className="bg-gradient-to-r from-cobalt via-purple to-neon bg-clip-text text-transparent">
                Aung
              </span>
            </h1>

            {/* animated loading text */}
            <div className="rise-in mt-5 min-h-[2.2rem] font-mono text-base text-neon sm:text-xl">
              <span className="text-muted">&gt; </span>
              {roleText}
              <span className="caret" aria-hidden="true" />
            </div>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              I build production Android systems with Kotlin, Jetpack Compose, MVVM/MVI and Clean
              Architecture — pairing resilient local storage, Firebase services, REST APIs and
              automated delivery into experiences people can rely on.
            </p>

            {/* meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple" />
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon" />
                {PROFILE.status}
              </span>
            </div>

            {/* current build chip */}
            <div className="rise-in mt-6 inline-flex max-w-full items-start gap-2 border border-line bg-panel/70 px-3 py-2 font-mono text-[11px] text-muted">
              <Sparkles className="mt-px h-3.5 w-3.5 shrink-0 text-purple" />
              <span className="min-w-0">
                <span className="text-muted/60">building:</span>{" "}
                <span className="text-ink">{PROFILE.currentBuild}</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cobalt to-purple px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                View projects
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-xs text-ink transition-colors duration-200 hover:border-cobalt hover:text-cobalt"
              >
                <FolderGit2 className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-xs text-ink transition-colors duration-200 hover:border-neon hover:text-neon"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>

            {/* stat strip */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden border border-line bg-line">
              <div className="bg-panel px-4 py-4 text-center">
                <dt className="pixel-label text-muted">Years</dt>
                <dd className="mt-2 font-display text-2xl font-bold text-neon">
                  {PROFILE.years}
                </dd>
              </div>
              <div className="bg-panel px-4 py-4 text-center">
                <dt className="pixel-label text-muted">Apps shipped</dt>
                <dd className="mt-2 font-display text-2xl font-bold text-cobalt">
                  {PROFILE.shipped}+
                </dd>
              </div>
              <div className="bg-panel px-4 py-4 text-center">
                <dt className="pixel-label text-muted">Certificates</dt>
                <dd className="mt-2 font-display text-2xl font-bold text-purple">
                  {PROFILE.certs}+
                </dd>
              </div>
            </dl>
          </div>

          {/* right: avatar + boot panel */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="anim-float relative">
              {/* neon ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cobalt via-purple to-neon opacity-70 blur-sm" />
              <div className="pixel-frame relative h-52 w-52 overflow-hidden bg-panel sm:h-60 sm:w-60">
                <img
                  src={PROFILE.avatar}
                  alt={`${PROFILE.name} — ${PROFILE.role}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                {/* subtle scan overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)]" />
              </div>

              {/* corner accents */}
              <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-neon" />
              <span className="absolute -right-2 -bottom-2 h-3 w-3 border-b-2 border-r-2 border-cobalt" />
            </div>

            {/* boot log panel */}
            <div className="w-full max-w-sm border border-line bg-panel/80 p-4 backdrop-blur">
              <div className="mb-2 flex items-center justify-between">
                <span className="pixel-label text-muted">boot.log</span>
                <span className="mono text-[10px] text-neon">{booted ? "OK" : "..."}</span>
              </div>
              <div className="space-y-1 font-mono text-[11px] text-muted">
                {BOOT_LINES.map((line, i) => (
                  <p key={line} className="flex items-center gap-2">
                    <span className="text-cobalt">$</span>
                    <span className="truncate">{line}</span>
                    <span className="ml-auto text-neon/80">
                      {booted ? <Check className="h-3 w-3" aria-hidden="true" /> : null}
                    </span>
                    <span className="sr-only">{`step ${i + 1}`}</span>
                  </p>
                ))}
              </div>
              {/* one-shot progress bar */}
              <div className="mt-3 h-1 w-full overflow-hidden bg-line">
                <div
                  className="h-full bg-gradient-to-r from-cobalt via-purple to-neon transition-[width] duration-700 ease-out"
                  style={{ width: booted ? "100%" : "12%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
