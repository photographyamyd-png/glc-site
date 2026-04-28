/**
 * Archetype — Tethered interlock (§VI).
 * MOBILE_ALTER_EGO: horizontal snap reel; DESKTOP: overlap + translate-x.
 */
export function SectionTetheredInterlock() {
  return (
    <section
      id="services-interlock"
      className="section-major relative scroll-mt-24 bg-canvas px-4 sm:px-8"
    >
      <div className="view-reveal mx-auto max-w-[min(100%,1200px)]">
        <div className="flex flex-row gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:block lg:overflow-visible lg:pb-0">
          <div className="relative z-10 min-w-[min(88vw,420px)] max-w-xl shrink-0 snap-center cluster-surface p-8 backdrop-blur-md panel-machined sm:p-10 lg:min-w-0 lg:max-w-xl lg:snap-none">
            <div className="border-l-4 border-structural/40 pl-6 sm:pl-8">
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2rem]">
                How we help — interlocked delivery
              </h2>
              <p className="mt-6 font-serif text-base leading-[1.75] text-ink-muted">
                Preconstruction with supers in the room. Long-lead decisions locked before
                they become owner emergencies.
              </p>
            </div>
          </div>

          <div className="relative z-20 min-w-[min(88vw,420px)] max-w-md shrink-0 snap-center cluster-surface p-8 max-lg:-ml-12 sm:p-10 lg:mt-[-3.5rem] lg:min-w-0 lg:max-w-md lg:translate-x-24 lg:px-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/55">
              Offer stack
            </p>
            <ul className="mt-6 space-y-5 font-serif text-sm leading-[1.75] text-ink sm:text-base">
              <li className="border-b border-black/[0.06] pb-4">
                Design-assist and VE that respects intent
              </li>
              <li className="border-b border-black/[0.06] pb-4">
                Self-performed earthwork, concrete, select interiors
              </li>
              <li>Field reporting owners actually read</li>
            </ul>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
              <span
                className="h-2 w-2 shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-from), var(--brand-yellow-mid))",
                }}
                aria-hidden
              />
              <span className="text-xs font-medium text-ink-muted">
                §V accent seam — not a panel wash
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
