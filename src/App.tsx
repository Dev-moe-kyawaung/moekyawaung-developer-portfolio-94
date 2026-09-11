import { RetroNav } from "./components/RetroNav";
import { RetroHero } from "./components/RetroHero";
import { ProjectGallery } from "./components/ProjectGallery";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { ContactPanel } from "./components/ContactPanel";
import { RetroFooter } from "./components/RetroFooter";
import { useReveal } from "./hooks/useTypewriter";

/**
 * Retro-Futuristic 2026 Portfolio — Moe Kyaw Aung
 * Black canvas · neon cobalt · hot purple · luminous green
 * Grain + scan lines + pixel accents, kept readable and recruiter-friendly.
 */
export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-void text-ink">
      {/* ambient overlays (non-interactive) */}
      <div className="fx-grain" aria-hidden="true" />
      <div className="fx-scanlines" aria-hidden="true" />

      <RetroNav />

      <main>
        <RetroHero />
        <ProjectGallery />
        <SkillsMatrix />
        <JourneyTimeline />
        <ContactPanel />
      </main>

      <RetroFooter />
    </div>
  );
}
