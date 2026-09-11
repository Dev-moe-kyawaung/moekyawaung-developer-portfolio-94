import type { ReactNode } from "react";

/**
 * Android device mockup — CSS phone frame used to present app screenshots.
 * Purely presentational; keeps images crisp with a notch + bezel.
 */
export function DeviceMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[230px]">
      {/* outer bezel */}
      <div className="pixel-frame relative rounded-[1.9rem] border border-line bg-gradient-to-b from-panel-2 to-void p-2 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
        {/* screen */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-void">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-20 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-void" />
          <div className="absolute left-1/2 top-1.5 z-20 h-1 w-8 -translate-x-1/2 rounded-full bg-line" />
          {children}
          {/* screen scanline sheen */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_3px)]" />
        </div>
        {/* home indicator */}
        <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-line" />
      </div>

      {/* side buttons */}
      <span className="absolute -right-[3px] top-20 h-8 w-[3px] rounded-r bg-line" />
      <span className="absolute -left-[3px] top-16 h-5 w-[3px] rounded-l bg-line" />
    </div>
  );
}
