export function GLGhostTestSection({
  sectionId = "ghost-test",
  headingId = "ghost-test-heading",
}: {
  sectionId?: string;
  headingId?: string;
}) {
  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className="section-major band-light relative isolate overflow-hidden border-t border-[color:var(--g200)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,color-mix(in_srgb,var(--y)_11%,transparent),transparent_54%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-10 h-[68%] w-24 border-r border-[color:var(--y)]/40"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-[var(--s4)] sm:px-[var(--s6)] lg:px-[var(--s10)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14">
          <div className="relative">
            <div className="-ml-4 border border-[color:var(--g200)] bg-white px-5 py-4 shadow-[0_16px_34px_rgb(0_0_0/0.08)] sm:-ml-8 sm:px-6 sm:py-5">
              <p className="mb-3 eyebrow text-ink">
                Final scope alignment
              </p>
              <h2 id={headingId} className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                Project Ready
                <span className="text-[color:var(--y)]"> Without Surprises</span>
              </h2>
            </div>

            <div className="bespoke-surface relative mt-6 ml-2 border border-[color:var(--g200)] bg-[rgb(255_255_255/0.9)] px-5 py-5 sm:ml-8 sm:px-7">
              <p className="text-[15px] leading-[1.72] text-ink sm:text-base">
                We lock scope, sequencing, and site constraints in one coordination pass so your crew can move forward with clear timing,
                clear expectations, and one accountable contact.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-block border-2 border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-[color:var(--y)]"
              >
                Book final site consultation
              </a>
            </div>
          </div>

          <div className="relative lg:translate-y-[var(--dna-stagger-sm)]">
            <div className="relative z-10 border border-[color:var(--g200)] bg-[color:var(--ink-deep)] p-6 text-white shadow-[0_24px_50px_rgb(0_0_0/0.24)] sm:p-7">
              <p className="eyebrow text-[color:var(--y)]">Coordination window</p>
              <p className="mt-2 font-serif text-4xl font-bold leading-none tracking-[-0.04em]">48h</p>
              <p className="mt-3 text-sm leading-relaxed text-white/78">
                Typical turnaround from confirmed scope to scheduling and mobilization planning.
              </p>
            </div>

            <div className="absolute -left-6 -top-6 z-0 h-16 w-16 border border-[color:var(--y)]/50 bg-[color-mix(in_srgb,var(--y)_8%,transparent)]" />

            <div className="relative z-20 -mt-5 ml-10 border border-[color:var(--g200)] bg-white px-4 py-3 shadow-[0_12px_28px_rgb(0_0_0/0.12)] sm:ml-14">
              <p className="eyebrow text-[color:var(--y)]">Built for field clarity</p>
              <p className="mt-1 text-sm text-ink">One schedule, one communication lane, one accountable team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
