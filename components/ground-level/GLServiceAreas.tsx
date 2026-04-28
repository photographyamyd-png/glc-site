import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COVERAGE } from "@/lib/ground-level/homepage-copy";

function headingToneDark(text: string, accentKey: string) {
  if (!text.includes(accentKey)) return <>{text}</>;
  const [before, after] = text.split(accentKey);
  return (
    <>
      <span className="text-white">{before}</span>
      <span className="text-[color:var(--y)]">{accentKey}</span>
      <span className="text-white">{after}</span>
    </>
  );
}

function headingToneLight(text: string, accentKey: string) {
  if (!text.includes(accentKey)) return <span className="text-ink">{text}</span>;
  const [before, after] = text.split(accentKey);
  return (
    <>
      <span className="text-ink">{before}</span>
      <span className="text-[color:var(--y)]">{accentKey}</span>
      <span className="text-ink">{after}</span>
    </>
  );
}

export type GLServiceAreasContent = {
  eyebrow: string;
  heading: string;
  headingAccentKey?: string;
  body: string;
  areas: readonly string[];
};

function defaultCoverage(): GLServiceAreasContent {
  return {
    eyebrow: COVERAGE.eyebrow,
    heading: COVERAGE.heading,
    body: COVERAGE.body,
    areas: COVERAGE.areas,
  };
}

export type GLServiceAreasProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLServiceAreasContent;
  /** `light` breaks long dark runs (e.g. after `GLProcess`); default `dark` matches original territory band. */
  surface?: "dark" | "light";
};

export function GLServiceAreas({
  sectionId = "coverage",
  headingId = "coverage-heading",
  content,
  surface = "dark",
}: GLServiceAreasProps = {}) {
  const cov = content ?? defaultCoverage();
  const accent = cov.headingAccentKey ?? "Simcoe County";
  const isLight = surface === "light";

  return (
    <section
      id={sectionId}
      className={`section-major relative scroll-mt-[var(--header)] overflow-hidden view-reveal ${
        isLight ? "band-light" : "band-dark"
      }`}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <ClaudeLogicWatermark placement="center-left" mode={isLight ? "default" : "on-dark"} />
      </div>
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p className={`mb-3 ${isLight ? "label-overline" : "label-overline-on-dark"}`}>{cov.eyebrow}</p>
        <h2
          id={headingId}
          className={`font-serif text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl ${
            isLight ? "text-ink" : "text-white"
          }`}
        >
          {isLight ? headingToneLight(cov.heading, accent) : headingToneDark(cov.heading, accent)}
        </h2>
        <div className="mt-[var(--s7)] max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.16)] sm:p-5">
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{cov.body}</p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {cov.areas.map((line, i) => (
            <li
              key={line}
              className={`border border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-base font-medium leading-snug text-ink shadow-[0_16px_40px_rgb(0_0_0/0.2)] sm:p-6 ${
                isLight ? "border-[color:var(--g200)]" : "border-white/18"
              } ${i === 1 ? "lg:-translate-y-2" : i === 2 ? "lg:translate-y-2" : ""}`}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
