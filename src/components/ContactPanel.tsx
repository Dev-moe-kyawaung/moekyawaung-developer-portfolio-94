import { useState } from "react";
import { Check, Copy, FolderGit2, Mail, MapPin, MessageSquare, User } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore, the number is visible & callable
    }
  };

  return (
    <section id="contact" className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* heading */}
        <div className="reveal">
          <p className="pixel-label mb-2 text-purple">05 / contact</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let's <span className="text-neon">build</span> together
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Open to senior Android and full-stack roles, contract work, and architecture
            consultation. I reply within one business day.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* channels */}
          <div className="surface pixel-frame p-6">
            <h3 className="font-display text-base font-semibold text-ink">Direct channels</h3>
            <p className="mono mt-1 text-[11px] text-muted">
              Choose any channel — fastest is WhatsApp.
            </p>

            <div className="mt-5 space-y-3">
              {/* phone + copy */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                  className="inline-flex flex-1 items-center gap-3 border border-line bg-panel px-4 py-3 transition-colors duration-200 hover:border-cobalt"
                >
                  <MessageSquare className="h-4 w-4 shrink-0 text-cobalt" />
                  <span>
                    <span className="mono block text-[10px] uppercase tracking-wider text-muted">
                      Phone / WhatsApp
                    </span>
                    <span className="font-display text-sm font-semibold text-ink">
                      {PROFILE.phone}
                    </span>
                  </span>
                </a>
                <button
                  onClick={copyPhone}
                  className="inline-flex items-center gap-1.5 border border-line bg-panel px-3 py-3 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-neon hover:text-neon"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              {/* whatsapp */}
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-line bg-panel px-4 py-3 transition-colors duration-200 hover:border-neon"
              >
                <MessageSquare className="h-4 w-4 shrink-0 text-neon" />
                <span>
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted">
                    WhatsApp chat
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    Start a conversation
                  </span>
                </span>
              </a>

              {/* github */}
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-line bg-panel px-4 py-3 transition-colors duration-200 hover:border-purple"
              >
                <FolderGit2 className="h-4 w-4 shrink-0 text-purple" />
                <span>
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted">
                    Source code
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    github.com/{PROFILE.github}
                  </span>
                </span>
              </a>

              {/* gravatar */}
              <a
                href={PROFILE.gravatar}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-line bg-panel px-4 py-3 transition-colors duration-200 hover:border-cobalt"
              >
                <User className="h-4 w-4 shrink-0 text-cobalt" />
                <span>
                  <span className="mono block text-[10px] uppercase tracking-wider text-muted">
                    Verified identity
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    Gravatar profile
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* profile card */}
          <div className="surface pixel-frame flex flex-col p-6">
            <div className="flex items-center gap-4">
              <div className="pixel-corners-sm h-16 w-16 shrink-0 overflow-hidden border border-line">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{PROFILE.name}</h3>
                <p className="mono text-xs text-cobalt">{PROFILE.role}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-purple" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Mail className="h-3.5 w-3.5 shrink-0 text-neon" />
                <span>Replies within 24h</span>
              </div>
            </dl>

            {/* philosophy quote */}
            <blockquote className="mt-6 border-l-2 border-purple pl-4 font-display text-sm italic text-ink">
              “{PROFILE.philosophy}”
            </blockquote>

            {/* availability */}
            <div className="mt-auto pt-6">
              <div className="inline-flex items-center gap-2 border border-neon/40 bg-neon/5 px-3 py-1.5 font-mono text-[11px] text-neon">
                <span className="anim-pulse-dot h-1.5 w-1.5 rounded-full bg-neon" />
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
