import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COPY_LAB_LOCAL_EXCAVATION } from "@/lib/ground-level/home-copy-lab-content";

/** Keyword-rich internal links to Barrie and Orillia excavation geo landers. */
export function HomeLocalExcavationLinks() {
  const c = COPY_LAB_LOCAL_EXCAVATION;

  return (
    <section
      id="local-excavation"
      className="section-major band-light-field relative isolate z-[5] scroll-mt-[var(--header)] overflow-hidden border-t border-[color:var(--g200)] bg-[rgb(255_255_255/0.97)] py-[var(--section-v)] view-reveal"
      aria-labelledby="local-excavation-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.05),transparent_55%)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-right" mode="default" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{c.eyebrow}</p>
          <h2
            id="local-excavation-heading"
            className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
          >
            {c.heading}
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-[1.72] text-ink sm:text-base">{c.intro}</p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {c.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-[48px] items-center border border-[color:var(--g200)] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-[color:var(--y)] hover:bg-[rgb(242_183_5/0.08)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
