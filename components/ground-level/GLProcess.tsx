import { GLDarkRasterFeatureSection } from "@/components/glc-sections/GLDarkRasterFeatureSection";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { PROCESS } from "@/lib/ground-level/homepage-copy";

/** Grading raster — same asset family as ProcessVerticalFlow process-split / showcase lab. */
const PROCESS_BAND_RASTER =
  "/images/services/Grading/Ground%20Level%20Contracting%20grading.jpg";
const PROCESS_BAND_RASTER_ALT =
  "Crew running GPS-guided fine grading on a commercial pad, monochrome reference";

/** H2 on dark glass (Template 1 authority panel — ProcessVerticalFlow showcase). */
function headingToneOnGlass(text: string) {
  const key = "Final Grade";
  if (!text.includes(key)) return <span className="text-white">{text}</span>;
  const [before, after] = text.split(key);
  return (
    <>
      <span className="text-white">{before}</span>
      <span className="text-[color:var(--y)]">{key}</span>
      <span className="text-white">{after}</span>
    </>
  );
}

/** Light nested surfaces on dark glass (measure + steps). */
const stepIsland =
  "relative border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-ink shadow-[0_12px_32px_rgb(0_0_0/0.12)]";

export type GLProcessStep = string | { index: string; title: string; body: string };

export type GLProcessContent = {
  eyebrow: string;
  heading: string;
  intro?: string;
  steps: readonly GLProcessStep[];
};

function defaultProcess(): GLProcessContent {
  return {
    eyebrow: PROCESS.eyebrow,
    heading: PROCESS.heading,
    steps: PROCESS.steps,
  };
}

export type GLProcessProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLProcessContent;
};

export function GLProcess({
  sectionId = "process",
  headingId = "process-heading",
  content,
}: GLProcessProps = {}) {
  const p = content ?? defaultProcess();

  return (
    <GLDarkRasterFeatureSection
      id={sectionId}
      className="scroll-mt-[var(--header)]"
      data-accent-family="process"
      data-accent-zone="timeline-sequence"
      aria-labelledby={headingId}
      imageSrc={PROCESS_BAND_RASTER}
      imageAlt={PROCESS_BAND_RASTER_ALT}
      imageClassName="object-cover object-center grayscale"
      scrimPreset="processShowcase"
      watermark="shard"
      sizes="(min-width: 1024px) 70vw, 100vw"
    >
      <div
        className="pointer-events-none absolute right-2 top-12 z-[1] font-serif text-[100px] font-semibold leading-none text-white/[0.06] sm:right-6 sm:text-[140px]"
        data-motif-id="proc3__count-mark"
        aria-hidden
      >
        {String(p.steps.length).padStart(2, "0")}
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,var(--max))] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="w-full max-w-6xl border border-white/12 bg-[rgb(10_12_11/0.5)] p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
          <div
            className={
              p.intro
                ? "grid gap-6 lg:grid-cols-12 lg:gap-10 lg:gap-y-6"
                : "grid gap-6"
            }
          >
            <div className={p.intro ? "lg:col-span-6 lg:pr-2" : "max-w-3xl"}>
              <p className="eyebrow mb-3 text-white">{p.eyebrow}</p>
              <h2
                id={headingId}
                className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {headingToneOnGlass(p.heading)}
              </h2>
              <div className="mt-6 h-px max-w-md bg-[color:var(--y)]/55" aria-hidden />
            </div>
            {p.intro ? (
              <div className="max-w-[min(100%,42rem)] lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
                <div className="border-l-4 border-[color:var(--y)] pl-5">
                  <ExpandableCopy
                    text={p.intro}
                    className="text-[15px] leading-[1.72] text-white/90 sm:text-base"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative mt-10">
            <div
              className="pointer-events-none absolute bottom-0 left-[10px] top-0 w-[2px] bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--y)_60%,transparent)_14%,color-mix(in_srgb,var(--y)_70%,transparent)_86%,transparent)] sm:left-[14px] lg:hidden"
              data-motif-id="proc3__thread"
              aria-hidden
            />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {p.steps.map((step, i) =>
                typeof step === "string" ? (
                  <li
                    key={step}
                    className={`${stepIsland} ${
                      i === 1 ? "lg:-translate-y-4" : i === 2 ? "lg:translate-y-4" : ""
                    }`}
                  >
                    <span className="eyebrow text-[color:var(--y)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step}</p>
                  </li>
                ) : (
                  <li
                    key={step.index}
                    className={`${stepIsland} ${i === 1 ? "lg:-translate-y-4" : i === 2 ? "lg:translate-y-4" : ""}`}
                  >
                    <span className="eyebrow text-[color:var(--y)]">{step.index}</span>
                    <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-ink">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                  </li>
                ),
              )}
            </ol>
          </div>
        </div>
      </div>
    </GLDarkRasterFeatureSection>
  );
}
