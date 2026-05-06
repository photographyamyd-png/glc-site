 "use client";

import { useCallback, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
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

function headingToneLight(text: string) {
  const key = "PMs";
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
                      <ExpandableCopy text={`"${entry.quote}"`} className={`text-sm leading-relaxed ${variant.textClass}`} />
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
                  <ExpandableCopy text={`"${entry.quote}"`} className={`text-sm leading-relaxed ${variant.textClass}`} />
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
}: {
  sectionId?: string;
  headingId?: string;
  content: GLTestimonialsBlockContent;
}) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const entries = content.entries;
  const stage = reducedMotion
    ? { bg: 0, eyebrow: 0, heading: 0, panel: 0, caption: 0, cta: 0 }
    : { bg: 0, eyebrow: 0.4, heading: 0.55, panel: 0.75, caption: 1.15, cta: 1.9 };

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const len = entries.length;
      if (!len) return;

      let next = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (index + 1) % len;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (index - 1 + len) % len;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = len - 1;
      } else {
        return;
      }

      setActiveIndex(next);
      queueMicrotask(() => {
        document.getElementById(`${baseId}-tab-${next}`)?.focus();
      });
    },
    [baseId, entries.length],
  );

  return (
    <section
      id={sectionId}
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 -z-[1]" aria-hidden>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(90%_65%_at_8%_12%,rgb(242_183_5/0.14),transparent_62%),radial-gradient(80%_58%_at_88%_14%,rgb(30_28_26/0.1),transparent_70%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reducedMotion ? 0.08 : 0.3, delay: stage.bg }}
        />
        <motion.div
          className="absolute -left-24 top-16 h-64 w-64 rotate-12 border border-[color:var(--y)]/18"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reducedMotion ? 0.08 : 0.3, delay: stage.bg }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 h-56 w-56 -rotate-12 border border-[color:var(--g200)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reducedMotion ? 0.08 : 0.3, delay: stage.bg + (reducedMotion ? 0 : 0.05) }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.96),rgb(247_243_238/0.94))]" />
        <div className="testimonial-atmosphere-grain absolute inset-0 opacity-[0.03] mix-blend-multiply" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--g200)]" />
        <div className="absolute left-[28px] top-[var(--s9)] h-[calc(100%-var(--s9)-var(--s12))] w-1 bg-[color:var(--y)]/92 sm:left-[40px] lg:left-[var(--s12)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden>
        <ClaudeLogicWatermark placement="top-right" mode="on-light" />
      </div>
      <motion.div
        className="relative z-10 mx-auto max-w-[min(100%,var(--max))]"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: reducedMotion ? 0.08 : 0.65,
          ease: [0.16, 1, 0.3, 1],
          delayChildren: reducedMotion ? 0 : 0.04,
          staggerChildren: reducedMotion ? 0.01 : 0.2,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: stage.eyebrow }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-1/2"
          >
            <motion.p
              className="mb-3 font-label text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-muted"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reducedMotion ? 0.08 : 0.24, delay: stage.eyebrow }}
            >
              {content.eyebrow}
            </motion.p>
            <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
              <motion.h2
                id={headingId}
                className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
                initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reducedMotion ? 0.1 : 0.4, delay: stage.heading }}
              >
                {headingToneLight(content.headline)}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reducedMotion ? 0.08 : 0.35, delay: stage.caption }}
              >
                <ExpandableCopy text={content.intro} className="mt-5 text-base leading-[1.7] text-ink-muted" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: reducedMotion ? 0.08 : 0.32, delay: stage.cta }}
              >
                <a
                  href="#cta-band"
                  className="group cta-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  Start Consultation
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.52, delay: stage.panel }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="bespoke-surface panel-machined relative mt-10 p-7 sm:mt-12 sm:p-8 lg:ml-[var(--dna-stagger-sm)] lg:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--g200)]" aria-hidden />
              <div
                role="tablist"
                aria-label="Select testimonial quote"
                className="flex flex-wrap gap-2 border-b border-[color:var(--g200)] pb-5"
              >
                {entries.map((entry, i) => {
                  const isSelected = activeIndex === i;
                  return (
                    <button
                      key={entry.attribution}
                      type="button"
                      role="tab"
                      id={`${baseId}-tab-${i}`}
                      aria-selected={isSelected}
                      aria-controls={`${baseId}-panel-${i}`}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveIndex(i)}
                      onKeyDown={(e) => onTabKeyDown(e, i)}
                      className={`min-h-[44px] border px-3 py-2 text-left font-label text-[10px] font-semibold uppercase tracking-[0.14em] transition-[background-color,color,border-color] duration-200 sm:px-4 ${
                        isSelected
                          ? "border-[color:var(--y)] bg-[color:var(--ink-deep)] text-white"
                          : "border-[color:var(--g200)] bg-white/80 text-ink-muted hover:border-[color:var(--y)]/45 hover:text-ink"
                      }`}
                    >
                      <span className="block text-[10px] tracking-[0.18em]">Quote {String(i + 1).padStart(2, "0")}</span>
                      <span className="mt-1 block line-clamp-2 text-[10px] tracking-[0.14em]">{entry.attribution}</span>
                    </button>
                  );
                })}
              </div>

              {entries.map((entry, i) => (
                <article
                  key={`${entry.attribution}-panel`}
                  role="tabpanel"
                  id={`${baseId}-panel-${i}`}
                  aria-labelledby={`${baseId}-tab-${i}`}
                  hidden={activeIndex !== i}
                  className="pt-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <svg viewBox="0 0 40 40" className="h-10 w-10 text-[color:var(--y)]" aria-hidden>
                      <path
                        d="M11 24c0-5 2.4-8.8 7.2-11.3l2.3 3.4c-3 1.7-4.3 3.6-4.3 5.8h4.8v7H11v-5Zm13 0c0-5 2.4-8.8 7.2-11.3l2.3 3.4c-3 1.7-4.3 3.6-4.3 5.8H34v7H24v-5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="font-label text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink-muted">
                      Verified Field Testimonial
                    </p>
                  </div>
                  <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                    {entry.attribution.split(",")[0] ?? entry.attribution}
                  </h3>
                  <blockquote className="mt-3 text-[13px] leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.7]">
                    <ExpandableCopy
                      text={`"${entry.quote}"`}
                      className="text-[13px] leading-relaxed text-ink-muted sm:text-[15px] sm:leading-[1.7]"
                    />
                  </blockquote>
                  {(() => {
                    const [name, ...rest] = entry.attribution.split(",");
                    const detail = rest.join(",").trim();
                    return (
                      <p className="mt-6 border-t border-[color:var(--g200)] pt-4 font-label text-[11px] font-extrabold uppercase tracking-[0.11em] text-ink leading-[1.45]">
                        <span className="block">{name?.trim() ?? entry.attribution}</span>
                        {detail ? <span className="mt-1 block text-[10px] tracking-[0.1em] text-ink-muted">{detail}</span> : null}
                      </p>
                    );
                  })()}
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
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
          <ExpandableCopy text={TESTIMONIALS.sub} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
        </div>
        <TestimonialEntriesGrid variant={DEFAULT_BLOCK_VARIANT} />
      </div>
    </section>
  );
}
