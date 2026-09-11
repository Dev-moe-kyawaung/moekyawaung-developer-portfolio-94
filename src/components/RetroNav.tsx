import { useEffect, useState } from "react";
import { FolderGit2, Menu, X } from "lucide-react";
import { NAV_SECTIONS, PROFILE } from "../data/portfolio";

export function RetroNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-void/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
        >
          <span className="pixel-corners-sm grid h-8 w-8 place-items-center bg-gradient-to-br from-cobalt via-purple to-neon font-display text-xs font-bold text-void">
            M
          </span>
          <span className="font-display text-sm font-bold tracking-wider">
            MOE<span className="text-cobalt">·</span>KYAW<span className="text-purple">·</span>AUNG
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group relative px-3 py-2 font-mono text-xs tracking-wider transition-colors ${
                active === s.id ? "text-neon" : "text-muted hover:text-ink"
              }`}
            >
              <span className="mr-1.5 text-[10px] text-muted/60">{s.index}</span>
              {s.label}
              <span
                className={`absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cobalt to-neon transition-transform duration-300 group-hover:scale-x-100 ${
                  active === s.id ? "scale-x-100" : ""
                }`}
              />
            </a>
          ))}
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-cobalt hover:text-cobalt"
          >
            <FolderGit2 className="h-3.5 w-3.5" /> GitHub
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="grid h-9 w-9 place-items-center border border-line text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-line bg-void/95 px-4 py-3 md:hidden">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-sm text-muted transition-colors hover:text-neon"
            >
              <span className="mr-2 text-[10px] text-muted/60">{s.index}</span>
              {s.label}
            </a>
          ))}
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 border border-line px-3 py-1.5 font-mono text-xs text-ink"
          >
            <FolderGit2 className="h-3.5 w-3.5" /> GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
