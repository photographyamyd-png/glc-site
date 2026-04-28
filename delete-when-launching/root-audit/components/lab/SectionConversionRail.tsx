/**
 * Archetype — Conversion rail (§V).
 * MOBILE_ALTER_EGO: structural left rail + stacked CTAs.
 * DESKTOP: row + vertical separator.
 */
export function SectionConversionRail() {
  return (
    <section id="convert" className="section-major scroll-mt-24 bg-canvas px-4 sm:px-8">
      <div className="view-reveal mx-auto max-w-[min(100%,1200px)]">
        <div className="cluster-surface relative overflow-hidden backdrop-blur-md panel-machined">
          <div className="max-sm:border-l-4 max-sm:border-l-structural/50 max-sm:pl-2">
            <div className="p-8 sm:p-12">
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                <div className="max-w-xl">
                  <p className="label-overline">Conversion rail</p>
                  <div className="accent-punctuation-l mt-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight">
                      Tell us the job. We answer with a sequence.
                    </h2>
                    <p className="mt-6 font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
                      Drawings, sketch, or site address — estimating returns with a real
                      plan, not a boilerplate PDF.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-structural/30 to-transparent lg:block lg:h-28 lg:w-px lg:bg-gradient-to-b" />
                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:bids@claude-logic.com"
                      className="cta-pop inline-flex min-h-[44px] items-center justify-center px-10 py-4 text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
                    >
                      Email plans now
                    </a>
                    <a
                      href="tel:+15555550123"
                      className="inline-flex min-h-[44px] items-center justify-center border-2 border-structural/40 bg-white px-10 py-4 text-sm font-semibold tracking-wide text-ink hover:border-structural focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-yellow-mid)]"
                    >
                      Call the desk
                    </a>
                    <p className="text-center text-[10px] font-medium uppercase tracking-wider text-ink-muted sm:text-left">
                      §V — accent reserved for primary action
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 flex items-center gap-3 sm:mt-14">
                <span className="h-px w-10 bg-structural/35" />
                <span className="h-px w-4 bg-structural/55" />
                <span className="h-px max-w-[140px] flex-1 bg-structural/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
