import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";

/**
 * Visual bridge between `#services` (GLFeaturedServicesBento, band-light) and `#about` (GLWhoWeServe).
 * Decorative only; keeps tonal rhythm without adding a landmark heading.
 */
export function CopyLabServicesAboutDivider() {
  return (
    <section
      id="services-about-divider"
      className="relative isolate z-[1] w-full overflow-hidden scroll-mt-[var(--header)] border-y border-[color:var(--g200)] bg-[rgb(10_12_11)]"
      aria-label="Transition from services to about"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(242_183_5/0.06),transparent_42%,rgb(242_183_5/0.05))]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-right" mode="on-dark" className="opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[3px] bg-[linear-gradient(to_bottom,var(--ink-deep)_0,var(--ink-deep)_2px,var(--y)_2px,var(--y)_3px)]" aria-hidden />
      <div className="relative z-[3] mx-auto flex min-h-[3.5rem] max-w-[min(100%,var(--max))] items-center px-4 py-3 sm:px-6 lg:px-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--y)]/85 to-transparent"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-px bg-[color:var(--y)]/70" aria-hidden />
    </section>
  );
}
