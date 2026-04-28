import Image from "next/image";
import { siteImages } from "@/lib/site-images";

/**
 * Archetype — Minimalist float (§XI).
 * MOBILE_ALTER_EGO: center card carries image + gradient; desktop = overlapping row.
 */
export function SectionMinimalistFloat() {
  return (
    <section
      id="process"
      className="section-major relative scroll-mt-24 overflow-hidden bg-canvas px-4 sm:px-8"
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 border-2 border-structural/20 sm:right-10" />

      <div className="view-reveal relative mx-auto max-w-[min(100%,1200px)]">
        <div className="max-w-2xl border-l-4 border-structural/35 pl-6 sm:pl-8">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-tight">
            Process you can audit
          </h2>
          <p className="mt-6 max-w-md font-serif text-base leading-[1.75] text-ink-muted sm:text-lg">
            Three layers: plan, field, proof. Mobile emphasizes the center plane — job
            trailer logic, not generic stacking.
          </p>
        </div>

        <div className="relative mt-16 flex flex-col gap-10 lg:mt-24 lg:flex-row lg:items-start lg:gap-0">
          <div className="relative z-10 w-full cluster-surface p-8 backdrop-blur-lg panel-machined lg:max-w-[38%] lg:translate-y-12">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">
              01 · Mobilization
            </p>
            <p className="mt-6 font-serif text-sm leading-[1.75] text-ink sm:text-base">
              Logistics plan, safety stand-up, two-week lookahead frozen with the owner
              team — before first pour.
            </p>
          </div>

          <div className="relative z-20 w-full cluster-surface shadow-xl backdrop-blur-xl lg:-ml-10 lg:max-w-[42%] lg:translate-y-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/10">
              <Image
                src={siteImages.portfolio02.src}
                alt={siteImages.portfolio02.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="space-y-4 p-8">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">
                02 · Production
              </p>
              <p className="font-serif text-sm leading-[1.75] text-ink sm:text-base">
                Supers who can reorder work — not only log delays. Daily photo context in
                your inbox.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full border border-black/12 bg-canvas/95 p-8 backdrop-blur-md lg:-ml-8 lg:max-w-[34%] lg:-translate-y-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">
              03 · Closeout
            </p>
            <p className="mt-6 font-serif text-sm leading-[1.75] text-ink sm:text-base">
              Startup, training, punch in batches — not a frantic finish line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
