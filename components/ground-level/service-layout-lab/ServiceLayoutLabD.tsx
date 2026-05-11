import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

/** Dense horizontal rows: thumbnail + title + blurb + link. */
export function ServiceLayoutLabD({ items }: Props) {
  return (
    <section
      id="service-layout-lab-d"
      className="section-major band-dark relative scroll-mt-[var(--header)] view-reveal"
      aria-labelledby="service-layout-lab-d-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgb(255_255_255/0.03)_50%,transparent)]" aria-hidden />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-[color:var(--y)]/25" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline-on-dark mb-2">Layout option D — Dense directory</p>
        <h2
          id="service-layout-lab-d-heading"
          className="font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl"
        >
          <span className="text-white/90">Compact </span>
          <span className="text-[color:var(--y)]">spec-sheet</span>
          <span className="text-white/90"> rows with fixed thumbnails</span>
        </h2>
        <ul className="mt-8 space-y-3">
          {items.map((item, i) => (
            <li
              key={item.slug}
              className="rounded-sm border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] px-4 py-5 text-ink shadow-[0_8px_24px_rgb(0_0_0/0.12)] sm:px-5 sm:py-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex shrink-0 items-start gap-4 sm:items-center">
                  <span className="eyebrow tabular-nums text-[color:var(--y)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-[color:var(--g200)] sm:h-24 sm:w-24">
                    <ServiceLabImg
                      src={item.imageUrl}
                      fallbackSrc={item.fallbackImageUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-base font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-lg">
                    {serviceTitleTone(item.title)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.short}</p>
                </div>
                <Link
                  href={`/services/${item.slug}`}
                  className="shrink-0 self-start text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/45 underline-offset-4 sm:self-center"
                >
                  View →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
