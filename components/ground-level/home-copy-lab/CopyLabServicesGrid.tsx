import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import {
  COPY_LAB_FEATURED_SERVICES,
  COPY_LAB_SERVICE_CARDS,
  COPY_LAB_SERVICE_GRID_SLUGS,
} from "@/lib/ground-level/home-copy-lab-content";

/** Headline register on light canvas island (intro block on dark band). */
function headingToneCanvas(text: string) {
  const [first, ...rest] = text.split(" ");
  if (!rest.length) return <>{text}</>;
  return (
    <>
      <span className="text-ink">{first}</span>{" "}
      <span className="text-[color:var(--y)]">{rest.join(" ")}</span>
    </>
  );
}

/**
 * Capability grid — same dark-band + inverse card language as `GLServices`, role-map copy.
 */
export function CopyLabServicesGrid() {
  const titleForHeading = `${COPY_LAB_FEATURED_SERVICES.h2Line1} ${COPY_LAB_FEATURED_SERVICES.h2Line2}`;

  return (
    <section
      id="copy-lab-services-grid"
      className="section-major band-dark relative z-[11] scroll-mt-[var(--header)] overflow-visible pb-6 view-reveal sm:pb-8 lg:pb-10"
      aria-labelledby="copy-lab-services-grid-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
      <ClaudeLogicWatermark placement="top-left" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="mb-10 max-w-xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] lg:mb-12">
          <p className="label-overline mb-3">{COPY_LAB_FEATURED_SERVICES.eyebrow}</p>
          <h2
            id="copy-lab-services-grid-heading"
            className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {headingToneCanvas(titleForHeading)}
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-ink-muted sm:text-base">Detailed capabilities by line</p>
          <p className="mt-2 text-xs font-normal leading-relaxed text-ink-muted sm:text-sm">
            Each card links to its service page.
          </p>
        </div>

        <div className="mb-8 h-px w-full max-w-md bg-gradient-to-r from-[color:var(--y)]/50 via-white/20 to-transparent" aria-hidden />

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {COPY_LAB_SERVICE_CARDS.map((card, i) => {
            const slug = COPY_LAB_SERVICE_GRID_SLUGS[i];
            return (
              <li
                key={slug}
                className={i === 4 ? "lg:relative lg:z-[1] lg:translate-x-1" : ""}
                style={i === 4 ? { transform: "translateY(var(--dna-stagger-sm))" } : undefined}
              >
                <Link
                  href={`/services/${slug}`}
                  className="group relative flex h-full min-h-[260px] flex-col border border-white/12 bg-[rgb(255_255_255/0.98)] p-[var(--s5)] text-ink shadow-[0_12px_40px_rgb(0_0_0/0.2)] transition-[transform,box-shadow,border-color] duration-300 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--y)_50%,transparent)] before:transition-opacity hover:-translate-y-1 hover:border-[color:var(--y)]/40 hover:shadow-[0_24px_56px_rgb(0_0_0/0.25)] hover:before:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]"
                >
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-[1] mt-3 font-serif text-xl font-semibold uppercase tracking-tight text-ink transition-colors group-hover:text-[color:var(--ink-deep)]">
                    {card.titleLine1}{" "}
                    <span className="text-[color:var(--y)]">{card.titleLine2}</span>
                  </span>
                  <span className="relative z-[1] mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{card.description}</span>
                  <span className="relative z-[1] mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)]">
                    {card.linkLabel} →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
