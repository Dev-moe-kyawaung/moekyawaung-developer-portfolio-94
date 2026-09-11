import { FolderGit2 } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function RetroFooter() {
  return (
    <footer className="border-t border-line px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {PROFILE.name} · Built with React + Tailwind
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-cobalt"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            GitHub
          </a>
          <span className="mono text-[10px] text-muted/70">v2026.1</span>
        </div>
      </div>
    </footer>
  );
}
