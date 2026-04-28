import Image from "next/image";
import { siteImages } from "@/lib/site-images";

/**
 * Archetype II — Asymmetric Spine (§VI).
 * MOBILE_ALTER_EGO: horizontal spine bar + full-width image stacks; desktop = vertical spine rail.
 */
export function SectionAsymmetricSpine() {
  return (
    <section id="spine" className="section-major relative scroll-mt-24 bg-canvas px-4 sm:px-8">
      <div className="view-reveal mx-auto flex max-w-[min(100%,1200px)] flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="relative flex gap-4 lg:w-20 lg:shrink-0 lg:flex-col lg:items-center">
          <div className="hidden min-h-[260px] w-[2px] bg-gradient-to-b from-structural/0 via-structural/40 to-structural/0 lg:block" />
          <div className="h-1 flex-1 bg-structural/25 lg:hidden" aria-hidden />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink lg:[writing-mode:vertical-rl] lg:rotate-180">
            Scope
          </span>
        </div>

        <div className="grid flex-1 gap-12 lg:gap-16">
          <div className="max-w-2xl border-l-4 border-structural/30 pl-6 sm:translate-y-2 sm:pl-8">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-tight">
              What we do — in one pass
            </h2>
            <p className="mt-6 max-w-lg font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
              Ground-up shells, heavy civil support, interiors on deadline — and logistics
              we own, not rent.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            <div className="cluster-surface translate-y-0 p-8 backdrop-blur-sm panel-machined sm:translate-y-10">
              <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden border border-black/10">
                <Image
                  src={siteImages.portfolio01.src}
                  alt={siteImages.portfolio01.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 90vw"
                />
              </div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Structure & envelope
              </p>
              <p className="mt-4 font-serif text-sm leading-[1.75] text-ink sm:text-base">
                Concrete, steel, and weather-tight milestones — sequenced so trades are
                never guessing.
              </p>
            </div>
            <div className="cluster-surface translate-y-0 p-8 backdrop-blur-sm panel-machined sm:-translate-y-8">
              <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden border border-black/10">
                <Image
                  src={siteImages.equipment01.src}
                  alt={siteImages.equipment01.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 90vw"
                />
              </div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/60">
                Equipment on roster
              </p>
              <p className="mt-4 font-serif text-sm leading-[1.75] text-ink sm:text-base">
                Machines and operators on our balance sheet — rental delays don’t own
                your critical path.
              </p>
              <a
                href="#convert"
                className="mt-6 inline-flex min-h-[44px] items-center text-xs font-semibold tracking-wide text-ink underline decoration-[color:var(--brand-yellow-deep)] decoration-2 underline-offset-[6px] hover:opacity-80"
              >
                Talk with estimating →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
