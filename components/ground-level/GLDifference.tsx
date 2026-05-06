import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { PHONE_TEL, WHY } from "@/lib/ground-level/homepage-copy";

function headingTone(text: string) {
  const key = "Complex Ground Conditions";
  if (!text.includes(key)) return <>{text}</>;
  const [before, after] = text.split(key);
  return (
    <>
      <span className="text-ink">{before}</span>
      <span className="text-[color:var(--y)]">{key}</span>
      <span className="text-ink">{after}</span>
    </>
  );
}

export type GLDifferenceReason = string | { index: string; title: string; body: string };

export type GLDifferenceContent = {
  eyebrow: string;
  heading: string;
  body: string;
  reasons: readonly GLDifferenceReason[];
  ctaLabel: string;
  ctaHref: string;
  chipLine1: string;
  chipLine2: string;
  imageSrc?: string;
  imageAlt?: string;
};

function defaultWhy(): GLDifferenceContent {
  return {
    eyebrow: WHY.eyebrow,
    heading: WHY.heading,
    body: WHY.body,
    reasons: WHY.reasons,
    ctaLabel: WHY.cta,
    ctaHref: PHONE_TEL,
    chipLine1: WHY.floatChipLine1,
    chipLine2: WHY.floatChipLine2,
    imageSrc: "/ground-level/equipment-wide.jpg",
    imageAlt: "Heavy equipment on a graded industrial site",
  };
}

export type GLDifferenceProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLDifferenceContent;
};

export function GLDifference({
  sectionId = "difference",
  headingId = "diff-heading",
  content,
}: GLDifferenceProps = {}) {
  const w = content ?? defaultWhy();
  const imgSrc = w.imageSrc ?? "/ground-level/equipment-wide.jpg";
  const imgAlt = w.imageAlt ?? "Heavy equipment on a graded industrial site";

  return (
    <section
      id={sectionId}
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--y)_8%,transparent),transparent_65%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative order-2 min-h-[280px] lg:order-1 lg:min-h-[420px]">
            <div className="absolute -left-2 top-8 hidden h-[70%] w-1 bg-[color:var(--y)] lg:block" aria-hidden />
            <div className="relative ml-0 h-full min-h-[280px] overflow-hidden border border-[color:var(--g200)] shadow-[0_20px_50px_rgb(0_0_0/0.1)] lg:ml-4 lg:min-h-[420px] [clip-path:polygon(0_0,92%_0,100%_14%,100%_100%,0_100%)]">
              <Image src={imgSrc} alt={imgAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgb(0_0_0/0.18)] to-transparent" aria-hidden />
            </div>
            <div className="pointer-events-none absolute bottom-6 right-4 z-[2] hidden border border-[color:var(--y)]/40 bg-[rgb(255_255_255/0.92)] px-4 py-3 text-right shadow-lg sm:block">
              <p className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-ink">{w.chipLine1}</p>
              <p className="mt-1 font-serif text-sm font-bold uppercase tracking-tight text-ink">{w.chipLine2}</p>
            </div>
          </div>
          <div className="order-1 lg:order-2" style={{ transform: "translateY(var(--dna-stagger-sm))" }}>
            <p className="label-overline mb-3">{w.eyebrow}</p>
            <h2
              id={headingId}
              className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {headingTone(w.heading)}
            </h2>
            <div className="mt-6 border border-[color:var(--g200)] bg-white p-4 shadow-[0_10px_24px_rgb(0_0_0/0.08)]">
              <ExpandableCopy text={w.body} className="text-sm leading-relaxed text-ink sm:text-base" />
            </div>
            <ul className="mt-10 space-y-8">
              {w.reasons.map((r) =>
                typeof r === "string" ? (
                  <li
                    key={r}
                    className="border-l-2 border-[color:var(--y)]/50 bg-[color-mix(in_srgb,var(--y)_4%,transparent)] pl-5 pr-3 py-3"
                  >
                    <p className="text-sm leading-relaxed text-ink">{r}</p>
                  </li>
                ) : (
                  <li
                    key={r.index + r.title}
                    className="border-l-2 border-[color:var(--y)]/50 bg-[color-mix(in_srgb,var(--y)_4%,transparent)] pl-5 pr-3 py-3"
                  >
                    <span className="font-label text-[10px] uppercase tracking-[0.18em] text-[color:var(--y)]">
                      {r.index}
                    </span>
                    <p className="mt-1 font-serif text-sm font-semibold uppercase tracking-[0.06em] text-ink">{r.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
                  </li>
                ),
              )}
            </ul>
            <a
              href={w.ctaHref}
              className="mt-10 inline-block border-2 border-ink px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-[color:var(--y)]"
            >
              {w.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
