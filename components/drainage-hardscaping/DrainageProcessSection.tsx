import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { SectionEyebrow, YellowRule } from "@/components/drainage-hardscaping/primitives";
import { DRAINAGE_IMAGES, DRAINAGE_PROCESS } from "@/lib/site/drainage-hardscaping-landing-content";
import { cn } from "@/lib/utils";

const stepShell =
  "relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-white p-5 text-ink shadow-[0_12px_32px_rgb(0_0_0/0.08)] sm:p-6";

function headingAccent(text: string) {
  const key = "Completion";
  if (!text.includes(key)) return <span className="text-ink">{text}</span>;
  const [before, after] = text.split(key);
  return (
    <>
      <span className="text-ink">{before}</span>
      <span className="text-[color:var(--y)]">{key}</span>
      <span className="text-ink">{after}</span>
    </>
  );
}

export function DrainageProcessSection({ headingId = "process-h2" }: { headingId?: string }) {
  return (
    <section
      className="section-major band-light relative isolate scroll-mt-[var(--header)] overflow-hidden px-0 view-reveal"
      aria-labelledby={headingId}
    >
      {/* Layer: atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.92),transparent_38%)]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-[130%] w-40 -translate-y-1/2 rotate-[12deg] opacity-[0.14] motion-reduce:opacity-[0.08]"
        aria-hidden
      >
        <div className="h-full w-full bg-[linear-gradient(90deg,var(--y)_1px,transparent_1px)] bg-[length:40px_100%]" />
      </div>
      <div
        className="pointer-events-none absolute right-4 top-16 font-serif text-[clamp(64px,14vw,160px)] font-semibold leading-none text-[color:var(--y)]/[0.07] sm:right-8"
        aria-hidden
      >
        {String(DRAINAGE_PROCESS.steps.length).padStart(2, "0")}
      </div>
      <ClaudeLogicWatermark placement="bottom-right" className="pointer-events-none z-0 opacity-[0.1]" />

      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        {/* Layer: glass header cluster (interaction + structure) */}
        <div className="bespoke-surface panel-machined border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:rgb(255_255_255/0.92)] p-5 shadow-[0_16px_48px_rgb(0_0_0/0.1)] backdrop-blur-md sm:p-8">
          <YellowRule className="mb-6 sm:mb-8" />
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionEyebrow text={DRAINAGE_PROCESS.eyebrow} band="light" />
              <h2
                id={headingId}
                className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.5vw,52px)]"
              >
                {headingAccent(DRAINAGE_PROCESS.h2)}
              </h2>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[color:var(--y)]/50 pl-5 lg:col-span-7 lg:pl-8">
              <p className="eyebrow text-[color:var(--y)]">How we work</p>
              <p className="mt-3 text-[15px] leading-[1.72] text-ink-muted sm:text-base">
                Seven milestones from first visit to final grade. Each step stays in one place on the timeline — no dense wall of text.
              </p>
            </div>
          </div>
        </div>

        {/* Layer: staggered step grid (homepage GLProcess DNA, light band) */}
        <div className="relative mt-10 sm:mt-12">
          <div
            className="pointer-events-none absolute bottom-0 left-[10px] top-0 hidden w-[2px] bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--y)_55%,transparent)_12%,color-mix(in_srgb,var(--y)_65%,transparent)_88%,transparent)] sm:left-[14px] md:block lg:hidden"
            aria-hidden
          />
          <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {DRAINAGE_PROCESS.steps.map((step, i) => (
              <li
                key={step.title}
                className={cn(
                  stepShell,
                  i === 1 ? "xl:-translate-y-3" : i === 2 ? "xl:translate-y-3" : i === 5 ? "xl:-translate-y-2" : "",
                )}
              >
                <span className="eyebrow text-[color:var(--y)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-serif text-sm font-semibold uppercase tracking-[0.06em] text-ink">{step.title}</p>
                <div className="mt-3 space-y-3">
                  {step.paras.map((para) => (
                    <p key={para.slice(0, 48)} className="text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.72]">
                      {para}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Raster anchor: compositional, not decoration-only */}
        <div className="relative mt-12 min-h-[200px] w-full sm:mt-14 lg:mt-16">
          <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden border border-[color:var(--g200)] lg:aspect-[24/9]">
            <Image
              src={DRAINAGE_IMAGES.drainTileMain.src}
              alt={DRAINAGE_IMAGES.drainTileMain.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/90 via-transparent to-transparent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
