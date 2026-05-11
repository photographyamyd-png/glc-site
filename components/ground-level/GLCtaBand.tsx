import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { CTA_BAND, EMAIL_MAILTO, PHONE_TEL } from "@/lib/ground-level/homepage-copy";

function headingTone(heading: string, accentKey?: string) {
  if (!accentKey || !heading.includes(accentKey)) {
    return <>{heading}</>;
  }
  const [before, after] = heading.split(accentKey);
  return (
    <>
      <span className="text-ink">{before}</span>
      <span className="text-[color:var(--y)]">{accentKey}</span>
      <span className="text-ink">{after}</span>
    </>
  );
}

export type GLCtaBandContent = {
  eyebrow: string;
  heading: string;
  /** Substring of `heading` to emphasize in brand yellow (optional). */
  headingAccentKey?: string;
  sub: string;
  phoneLabel: string;
  phoneHref: string;
  emailCta: string;
  emailHref: string;
};

function defaultCtaContent(): GLCtaBandContent {
  return {
    eyebrow: CTA_BAND.eyebrow,
    heading: CTA_BAND.heading,
    headingAccentKey: CTA_BAND.headingAccentKey,
    sub: CTA_BAND.sub,
    phoneLabel: CTA_BAND.phoneLabel,
    phoneHref: PHONE_TEL,
    emailCta: CTA_BAND.emailCta,
    emailHref: `${EMAIL_MAILTO}?subject=Site%20consultation%20request`,
  };
}

export type GLCtaBandProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLCtaBandContent;
  /** Match main homepage overlap into previous section (default true). */
  overlap?: boolean;
};

export function GLCtaBand({
  sectionId = "consultation",
  headingId = "cta-band-heading",
  content,
  overlap = true,
}: GLCtaBandProps = {}) {
  const c = content ?? defaultCtaContent();
  const overlapClass = overlap
    ? "-mt-10 sm:-mt-12 lg:-mt-14 shadow-[0_-20px_56px_rgb(0_0_0/0.18)]"
    : "shadow-[0_-12px_40px_rgb(0_0_0/0.12)]";

  return (
    <section
      id={sectionId}
      className={`band-light-field relative z-20 border-y border-[color:var(--g200)] border-t-[color:var(--y)] bg-[rgb(255_255_255/0.96)] backdrop-blur-xl ${overlapClass}`}
      data-accent-family="cta"
      data-accent-zone="conversion-endband"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute -left-12 top-0 h-full w-28 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--y)_35%,transparent),transparent_62%)]"
        data-motif-id="cta3__diag"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--y)_4%,transparent),transparent_40%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-right" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto flex max-w-[min(100%,var(--max))] flex-col gap-[var(--s6)] px-[var(--s4)] py-[var(--s5)] sm:px-[var(--s6)] lg:flex-row lg:items-end lg:justify-between lg:px-[var(--s10)]">
        <div>
          <p className="mb-3 flex items-center gap-2 eyebrow text-ink-muted">
            <span>{c.eyebrow}</span>
            <span
              className="inline-block h-[2px] w-10 bg-[color:var(--y)]/70"
              data-motif-id="cta3__eyebrow-line"
              aria-hidden
            />
          </p>
          <h2
            id={headingId}
            className="font-serif text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-3xl"
          >
            {headingTone(c.heading, c.headingAccentKey)}
          </h2>
          <div className="mt-4 max-w-xl border border-[color:var(--g200)] bg-[color:var(--g100)] px-4 py-3 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.85)] sm:px-5 sm:py-4">
            <ExpandableCopy text={c.sub} className="text-[15px] leading-[1.72] text-ink sm:text-base" />
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={c.phoneHref}
            className="border-2 border-ink px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-[color:var(--y)] hover:text-[color:var(--ink-deep)]"
          >
            {c.phoneLabel}
          </a>
          <span
            className="hidden h-8 w-px bg-[color:var(--g200)] sm:inline-block"
            data-motif-id="cta3__divider"
            aria-hidden
          />
          <a href={c.emailHref} className="cta-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
            {c.emailCta}
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--y)_35%,transparent),var(--y),color-mix(in_srgb,var(--y)_35%,transparent))]"
        data-motif-id="cta3__bottom-bar"
        aria-hidden
      />
    </section>
  );
}
