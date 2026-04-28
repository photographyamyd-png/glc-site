import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { TESTIMONIALS } from "@/lib/ground-level/homepage-copy";

export type TestimonialEntry = { quote: string; attribution: string };

function headingTone(text: string) {
  const key = "PMs";
  if (!text.includes(key)) return <>{text}</>;
  const [before, after] = text.split(key);
  return (
    <>
      <span className="text-white">{before}</span>
      <span className="text-[color:var(--y)]">{key}</span>
      <span className="text-white">{after}</span>
    </>
  );
}

function introTone(text: string) {
  const key = "commercial relationships";
  if (!text.toLowerCase().includes(key)) return <>{text}</>;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(key);
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + key.length);
  const after = text.slice(idx + key.length);
  return (
    <>
      {before}
      <span className="font-semibold text-[color:var(--ink-deep)]">{match}</span>
      {after}
    </>
  );
}

export const TESTIMONIAL_PREVIEW_VARIANTS = [
  {
    id: "solid-card",
    label: "Solid card",
    cardClass:
      "border border-white/22 bg-[rgb(18_18_18/0.95)] p-6 shadow-[0_18px_40px_rgb(0_0_0/0.42)]",
    textClass: "text-white/90",
    attrClass: "text-white/78",
  },
  {
    id: "split-chip",
    label: "Split chip",
    cardClass:
      "border border-white/20 bg-[rgb(20_20_20/0.92)] p-0 shadow-[0_18px_40px_rgb(0_0_0/0.4)] overflow-hidden",
    textClass: "text-white/88",
    attrClass: "text-white/85",
    chipClass:
      "border-b border-white/18 bg-[rgb(255_255_255/0.12)] px-6 py-3 font-label text-[10px] uppercase tracking-[0.16em] text-white/90",
  },
  {
    id: "accent-rail",
    label: "Accent rail",
    cardClass:
      "border border-white/18 border-l-[5px] border-l-[color:var(--y)] bg-[rgb(22_22_22/0.94)] p-6 shadow-[0_16px_38px_rgb(0_0_0/0.4)]",
    textClass: "text-white/88",
    attrClass: "text-white/80",
  },
  {
    id: "inverse-card",
    label: "Inverse card",
    cardClass:
      "border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-6 text-ink shadow-[0_16px_36px_rgb(0_0_0/0.16)]",
    textClass: "text-ink",
    attrClass: "text-ink/75",
  },
  {
    id: "inverse-yellow-rail",
    label: "Inverse + yellow rail",
    cardClass:
      "border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-6 text-ink shadow-[0_16px_36px_rgb(0_0_0/0.16)] sm:p-7",
    textClass: "text-ink",
    attrClass: "text-ink/75",
  },
  {
    id: "hybrid-inverse-rail-chip",
    label: "Hybrid (rail + inverse + chip)",
    cardClass:
      "overflow-hidden border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-0 text-ink shadow-[0_16px_36px_rgb(0_0_0/0.16)]",
    textClass: "text-ink",
    attrClass: "text-ink/75",
    chipClass:
      "border-b border-[color:var(--y)]/35 bg-[color:var(--ink-deep)] px-6 py-3 font-label text-[10px] uppercase tracking-[0.16em] text-white",
  },
  {
    id: "hybrid-floating-chip",
    label: "Hybrid floating chip",
    cardClass: "",
    textClass: "text-ink",
    attrClass: "text-ink/75",
  },
  {
    id: "hybrid-floating-chip-charcoal",
    label: "Hybrid floating chip (charcoal)",
    cardClass: "",
    textClass: "text-ink",
    attrClass: "text-ink/75",
  },
] as const;

export type TestimonialPreviewVariant = (typeof TESTIMONIAL_PREVIEW_VARIANTS)[number];
export type TestimonialPreviewVariantId = TestimonialPreviewVariant["id"];

export function TestimonialEntriesGrid({
  variant,
  entries,
}: {
  variant: TestimonialPreviewVariant;
  entries?: readonly TestimonialEntry[];
}) {
  const list = entries ?? TESTIMONIALS.entries;

  return (
    <ul className="mt-6 grid gap-6 lg:grid-cols-3">
      {list.map((entry, i) => {
        const hasChip = "chipClass" in variant && variant.chipClass;
        const isFloatingChip =
          variant.id === "hybrid-floating-chip" || variant.id === "hybrid-floating-chip-charcoal";
        const isCharcoalFloating = variant.id === "hybrid-floating-chip-charcoal";
        const showFooterAttribution = !hasChip && !isFloatingChip;

        if (isFloatingChip) {
          const panelRail = isCharcoalFloating
            ? "border-l-[5px] border-l-[rgb(30_28_26/0.16)]"
            : "border-l-[5px] border-l-[color:var(--y)]";
          const chipTone = isCharcoalFloating
            ? "border border-white/15 bg-[color:var(--ink-mid)] text-white shadow-[0_12px_28px_rgb(0_0_0/0.35)]"
            : "border border-[color:var(--brand-black)]/15 bg-[color:var(--y)] text-[color:var(--brand-black)] shadow-[0_10px_24px_rgb(0_0_0/0.25)]";
          const chipClasses = `absolute left-0 top-0 z-30 max-w-[min(calc(100%-0.5rem),18rem)] -translate-x-3 -translate-y-2 px-4 py-2.5 font-label text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] ${chipTone}`;

          return (
            <li
              key={`${variant.id}-${entry.attribution}-${i}`}
              className={`relative overflow-visible pt-6 sm:pt-7 ${
                i === 1 ? "relative z-[1] lg:-translate-y-2" : ""
              }`}
            >
              <p className={chipClasses}>{entry.attribution}</p>
              <div
                className={`relative z-10 overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-0 text-ink shadow-[0_16px_36px_rgb(0_0_0/0.16)] ${panelRail}`}
              >
                <div className="px-6 py-5 sm:px-6 sm:py-6">
                  {entry.quote ? (
                    <blockquote className={`text-sm leading-relaxed ${variant.textClass}`}>
                      <p>&ldquo;{entry.quote}&rdquo;</p>
                    </blockquote>
                  ) : null}
                </div>
              </div>
            </li>
          );
        }

        return (
          <li
            key={`${variant.id}-${entry.attribution}-${i}`}
            className={`${variant.cardClass} ${
              i === 1 &&
              variant.id !== "inverse-card" &&
              variant.id !== "inverse-yellow-rail" &&
              variant.id !== "hybrid-inverse-rail-chip"
                ? "relative z-[1] lg:-translate-y-2"
                : ""
            }`}
          >
            {hasChip ? <p className={variant.chipClass}>{entry.attribution}</p> : null}
            <div className={hasChip ? "px-6 py-5" : ""}>
              {entry.quote ? (
                <blockquote className={`text-sm leading-relaxed ${variant.textClass}`}>
                  <p>&ldquo;{entry.quote}&rdquo;</p>
                </blockquote>
              ) : null}
              {showFooterAttribution ? (
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.12em] ${variant.attrClass} ${
                    entry.quote ? "mt-4" : ""
                  }`}
                >
                  {entry.attribution}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export type GLTestimonialsBlockContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  entries: readonly TestimonialEntry[];
};

/** Inverse canvas + yellow rail — strongest light-on-dark figure for production blocks. */
const DEFAULT_BLOCK_VARIANT = TESTIMONIAL_PREVIEW_VARIANTS[5];

/** Production-style testimonials: one variant, shared shell with main `GLTestimonials`. */
export function GLTestimonialsBlock({
  sectionId = "testimonials",
  headingId = "testimonials-heading",
  content,
  variant = DEFAULT_BLOCK_VARIANT,
}: {
  sectionId?: string;
  headingId?: string;
  content: GLTestimonialsBlockContent;
  variant?: TestimonialPreviewVariant;
}) {
  return (
    <section
      id={sectionId}
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p className="label-overline-on-dark mb-3">{content.eyebrow}</p>
        <h2
          id={headingId}
          className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
        >
          {headingTone(content.headline)}
        </h2>
        <div className="mt-4 max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-5">
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{introTone(content.intro)}</p>
        </div>
        <TestimonialEntriesGrid variant={variant} entries={content.entries} />
      </div>
    </section>
  );
}

/** Single-variant sandbox block (full-width section) for side-by-side DNA review. */
export function GLTestimonialsVariantLab({ variantId }: { variantId: TestimonialPreviewVariantId }) {
  const variant = TESTIMONIAL_PREVIEW_VARIANTS.find((v) => v.id === variantId);
  if (!variant) return null;

  return (
    <section
      id={`testimonials-lab-${variantId}`}
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-label={`Testimonials preview: ${variant.label}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/55">Testimonials · DNA lab</p>
        <h2 className="mt-2 font-serif text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
          <span className="text-white/85">{variant.label.split(" — ")[0]}</span>
          {variant.label.includes(" — ") ? (
            <>
              {" "}
              <span className="text-[color:var(--y)]">— {variant.label.split(" — ").slice(1).join(" — ")}</span>
            </>
          ) : null}
        </h2>
        <div className="mt-4 max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] px-4 py-3 text-ink shadow-[0_12px_32px_rgb(0_0_0/0.14)] sm:px-5 sm:py-4">
          <p className="text-xs leading-relaxed text-ink-muted sm:text-sm">
            Same testimonial entries as the main homepage; card styling matches this variant only.
          </p>
        </div>
        <TestimonialEntriesGrid variant={variant} />
      </div>
    </section>
  );
}

export function GLTestimonials() {
  return (
    <section
      id="testimonials"
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-right" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p className="label-overline-on-dark mb-3">{TESTIMONIALS.eyebrow}</p>
        <h2
          id="testimonials-heading"
          className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-4xl"
        >
          {headingTone(TESTIMONIALS.heading)}
        </h2>
        <div className="mt-4 max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-5">
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{introTone(TESTIMONIALS.sub)}</p>
        </div>
        <TestimonialEntriesGrid variant={DEFAULT_BLOCK_VARIANT} />
      </div>
    </section>
  );
}
