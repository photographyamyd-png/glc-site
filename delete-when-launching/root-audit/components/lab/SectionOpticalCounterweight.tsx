import { FragmentBullet } from "@/components/ui/StructuralFragments";
import { LogoWatermark } from "@/components/ui/LogoWatermark";

/**
 * Archetype — 70/30 optical weight (§VI) + §X watermark.
 * MOBILE_ALTER_EGO: quote first (order-1), dense column second.
 */
export function SectionOpticalCounterweight() {
  return (
    <section
      id="difference"
      className="section-major relative scroll-mt-24 overflow-hidden bg-canvas px-4 sm:px-8"
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 w-[min(100vw,28rem)] -translate-y-1/2 text-ink opacity-[0.08] sm:right-0">
        <LogoWatermark className="h-auto w-full" />
      </div>

      <div className="view-reveal relative mx-auto grid max-w-[min(100%,1200px)] gap-12 lg:grid-cols-10 lg:gap-16">
        <div className="order-2 space-y-10 lg:order-none lg:col-span-7">
          <div className="accent-punctuation-l max-w-3xl">
            <h2 className="text-[clamp(1.875rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              What sets Claude-Logic apart
            </h2>
          </div>
          <div className="space-y-6 border-l-2 border-black/10 pl-6 font-serif text-base leading-[1.75] text-ink-muted sm:pl-8 sm:text-lg">
            <p>
              Most GCs optimize the bid. We optimize the handoff — clean turnovers,
              drama-free closeout, field culture that treats adjacent trades as customers.
            </p>
            <p className="max-w-2xl text-sm text-ink sm:text-base">
              Seventy percent density on facts; thirty percent air — per §IX boutique
              ratio.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {[
              "Superintendents with P&L sense",
              "Owned fleet = predictable tempo",
              "Subcontractor bench battle-tested",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border border-black/10 bg-white/50 py-4 pl-4 pr-4 text-sm font-semibold text-ink"
              >
                <FragmentBullet />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-none lg:col-span-3">
          <blockquote className="cluster-surface border border-dashed border-structural/35 p-8 font-serif text-lg italic leading-[1.6] text-ink backdrop-blur-sm sm:p-10 sm:text-xl">
            “They protected the opening weekend like it was their own capital.”
          </blockquote>
          <p className="mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
            Development partner · mixed-use
          </p>
        </div>
      </div>
    </section>
  );
}
