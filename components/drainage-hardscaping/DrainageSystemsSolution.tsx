import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { SectionEyebrow, YellowRule } from "@/components/drainage-hardscaping/primitives";
import { DRAINAGE_IMAGES, DRAINAGE_SYSTEMS_SOLUTION } from "@/lib/site/drainage-hardscaping-landing-content";

type SystemsImageField = (typeof DRAINAGE_SYSTEMS_SOLUTION.steps)[number]["imageField"];

function systemsImage(field: SystemsImageField) {
  return DRAINAGE_IMAGES[field];
}

/**
 * Three-lane drainage systems — heavy Oswald titles + per-step raster anchors.
 */
export function DrainageSystemsSolution() {
  return (
    <section
      className="section-major band-light relative isolate scroll-mt-[var(--header)] overflow-hidden border-t-4 border-[color:var(--y)] border-b border-[color:var(--g200)] px-0"
      aria-labelledby="drainage-systems-h2"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_12%_0%,rgb(242_183_5/0.06),transparent_50%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-left" className="z-0 opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.95)] p-6 shadow-[0_16px_48px_rgb(0_0_0/0.08)] backdrop-blur-sm sm:p-8">
          <YellowRule className="mb-6 sm:mb-8" />
          <SectionEyebrow text={DRAINAGE_SYSTEMS_SOLUTION.eyebrow} band="light" />
          <h2
            id="drainage-systems-h2"
            className="mt-[var(--s7)] max-w-4xl font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.2vw,48px)]"
          >
            {DRAINAGE_SYSTEMS_SOLUTION.h2}
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.72]">
            {DRAINAGE_SYSTEMS_SOLUTION.intro}
          </p>
        </div>

        <ol className="mt-10 grid list-none gap-8 sm:mt-12 lg:grid-cols-3 lg:gap-10">
          {DRAINAGE_SYSTEMS_SOLUTION.steps.map((step, i) => {
            const img = systemsImage(step.imageField);
            return (
              <li key={step.title} className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center" sizes="(min-width:1024px) 30vw, 100vw" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.45)] to-transparent" aria-hidden />
                  <span className="absolute left-3 top-3 eyebrow text-white">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.72] text-ink-muted sm:text-base">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
