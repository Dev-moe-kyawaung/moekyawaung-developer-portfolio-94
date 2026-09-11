import { useEffect, useState } from "react";

/**
 * Typewriter that cycles through phrases: types, holds, deletes, moves on.
 * Respects prefers-reduced-motion — falls back to just the first phrase.
 */
export function useTypewriter(
  phrases: string[],
  options: { typeSpeed?: number; deleteSpeed?: number; holdMs?: number } = {}
) {
  const { typeSpeed = 55, deleteSpeed = 28, holdMs = 1600 } = options;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(reduce ? phrases[0] ?? "" : "");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduce || phrases.length === 0) {
      setText(phrases[0] ?? "");
      return;
    }

    const full = phrases[phraseIndex % phrases.length];

    // finished typing and holding? start deleting
    if (!isDeleting && text === full) {
      const t = setTimeout(() => setIsDeleting(true), holdMs);
      return () => clearTimeout(t);
    }

    // finished deleting? move to next phrase
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      setText((curr) =>
        isDeleting
          ? full.slice(0, Math.max(0, curr.length - 1))
          : full.slice(0, curr.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, holdMs, reduce]);

  return text;
}

/** Reveal-on-scroll via IntersectionObserver. */
export function useReveal(threshold = 0.15) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [threshold]);
}
