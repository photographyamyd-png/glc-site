import Link from "next/link";
import { GROUND_LEVEL_SERVICES } from "@/lib/ground-level/services";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { SERVICES_GRID } from "@/lib/ground-level/homepage-copy";

/** Display line on light canvas intro (dark band). */
function headingToneCanvas(text: string) {
  const [first, ...rest] = text.split(" ");
  if (!rest.length) return <span className="text-ink">{text}</span>;
  return (
    <>
      <span className="text-ink">{first}</span>{" "}
      <span className="text-[color:var(--y)]">{rest.join(" ")}</span>
    </>
  );
}

function serviceTitleTone(title: string) {
  const [left, right] = title.split("&");
  if (!right) return <>{title}</>;
  return (
    <>
      <span>{left.trim()} &</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

export function GLServices() {
  return (
    <section
      id="services"
      className="section-major band-dark relative z-[11] scroll-mt-[var(--header)] overflow-visible pb-6 view-reveal sm:pb-8 lg:pb-10"
      data-accent-family="featured"
      data-accent-zone="premium-showcase"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_40%)]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[210px] w-[540px] rotate-[-14deg] opacity-20"
        style={{
          backgroundImage:
            "url('/images/Accents-and-Motifs/watermarks/glc-wm-03-horizontal-stack.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        data-motif-id="glc-wm-03-horizontal-stack"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="mb-10 max-w-xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-5 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-6 lg:mb-12">
          <p className="label-overline mb-3">{SERVICES_GRID.eyebrow}</p>
          <h2
            id="services-heading"
            className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {headingToneCanvas(SERVICES_GRID.heading)}
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {GROUND_LEVEL_SERVICES.map((s, i) => (
            <li key={s.slug} className={i === 4 ? "lg:relative lg:z-[1] lg:translate-x-1" : ""} style={i === 4 ? { transform: "translateY(var(--dna-stagger-sm))" } : undefined}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full min-h-[260px] flex-col border border-white/12 bg-[rgb(255_255_255/0.98)] p-[var(--s5)] text-ink shadow-[0_12px_40px_rgb(0_0_0/0.2)] transition-[transform,box-shadow,border-color] duration-300 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--y)_50%,transparent)] before:transition-opacity hover:-translate-y-1 hover:border-[color:var(--y)]/40 hover:shadow-[0_24px_56px_rgb(0_0_0/0.25)] hover:before:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]"
              >
                <span className="eyebrow text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative z-[1] mt-3 font-serif text-xl font-bold uppercase leading-tight tracking-[0.04em] text-ink transition-colors group-hover:text-[color:var(--ink-deep)]">
                  {serviceTitleTone(s.title)}
                </span>
                <span className="relative z-[1] mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {s.short}
                </span>
                <span className="relative z-[1] mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]">
                  View service →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
