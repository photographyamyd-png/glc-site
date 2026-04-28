import { LogoWatermark } from "@/components/ui/LogoWatermark";

/**
 * Archetype — Editorial atomizer (§IX).
 * MOBILE_ALTER_EGO: horizontal snap reel + stagger; sm+: broken grid.
 */
const chunks = [
  {
    title: "Schedule truth",
    body: "Lookahead in plain language — not Gantt theater. You see what moves critical path.",
  },
  {
    title: "Safety as pace",
    body: "Tight morning loops so crews don’t improvise risk. Fast jobs, sharp corners.",
  },
  {
    title: "Cost clarity",
    body: "Change orders ship with scope, photo context, options — not Friday surprises.",
  },
  {
    title: "Turnover craft",
    body: "Punch as habit. Fit-and-finish early so your brand isn’t debugging paint at cut.",
  },
];

export function SectionEditorialAtomizer() {
  return (
    <section
      id="proof-points"
      className="section-major relative scroll-mt-24 overflow-hidden bg-canvas px-4 sm:px-8"
    >
      <div className="pointer-events-none absolute -left-32 bottom-0 w-[min(100vw,24rem)] text-ink opacity-[0.07]">
        <LogoWatermark className="h-auto w-full -scale-x-100" />
      </div>

      <div className="view-reveal relative mx-auto max-w-[min(100%,1200px)]">
        <div className="mb-16 max-w-xl border-l-4 border-structural/35 pl-6 sm:mb-20 sm:pl-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight">
            Proof in short beats
          </h2>
          <p className="mt-6 font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
            Atomized copy — headings carry mass; serif carries nuance (§VIII–IX).
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {chunks.map((c, i) => {
            const mobileStagger = i % 2 === 1 ? "max-sm:translate-y-4" : "max-sm:translate-y-0";
            const smStagger = i % 2 === 1 ? "sm:translate-y-10" : "sm:translate-y-0";
            const lgA = i === 2 ? "lg:-translate-y-4" : "";
            const lgB = i === 3 ? "lg:translate-y-8" : "";
            return (
              <article
                key={c.title}
                className={`w-[min(85vw,300px)] shrink-0 snap-start cluster-surface p-8 backdrop-blur-sm panel-machined sm:w-auto sm:min-w-0 sm:snap-none ${mobileStagger} ${smStagger} ${lgA} ${lgB}`}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/80">
                  {c.title}
                </h3>
                <p className="mt-6 font-serif text-sm leading-[1.75] text-ink-muted sm:text-base">
                  {c.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
