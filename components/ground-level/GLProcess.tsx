import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { PROCESS } from "@/lib/ground-level/homepage-copy";

function headingToneCanvas(text: string) {
  const key = "Final Grade";
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
    <section
      id={sectionId}
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      data-accent-family="process"
      data-accent-zone="timeline-sequence"
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_45%)]" aria-hidden />
      <div
        className="pointer-events-none absolute right-2 top-12 font-serif text-[100px] font-semibold leading-none text-white/[0.06] sm:right-6 sm:text-[140px]"
        data-motif-id="proc3__count-mark"
        aria-hidden
      >
        {String(p.steps.length).padStart(2, "0")}
      </div>
      <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="max-w-3xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-6">
          <p className="label-overline mb-3">{p.eyebrow}</p>
          <h2
            id={headingId}
            className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {headingToneCanvas(p.heading)}
          </h2>
          {p.intro ? (
            <div className="mt-4 border-l-2 border-[color:var(--y)]/60 pl-4">
              <ExpandableCopy text={p.intro} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
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
                <p className="mt-2 font-serif text-sm font-semibold uppercase tracking-[0.06em] text-ink">
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
                <p className="mt-2 font-serif text-sm font-semibold uppercase tracking-[0.06em] text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </li>
            ),
          )}
          </ol>
        </div>
      </div>
    </section>
  );
}
