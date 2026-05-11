import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

export function ServiceLayoutLabB({ items }: Props) {
  return (
    <section
      id="service-layout-lab-b"
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="service-layout-lab-b-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_45%)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline-on-dark mb-2">Layout option B — Horizontal snap filmstrip</p>
        <h2
          id="service-layout-lab-b-heading"
          className="font-serif text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl"
        >
          <span className="text-white/90">Scroll horizontally through </span>
          <span className="text-[color:var(--y)]">service cards</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/70">
          Swipe or drag the row below — each card is a full mini-story with image and copy.
        </p>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory">
          {items.map((item, i) => (
            <article
              key={item.slug}
              className="flex w-[min(85vw,22rem)] shrink-0 snap-center flex-col border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] text-ink shadow-[0_20px_40px_rgb(0_0_0/0.2)]"
            >
              <div className="relative aspect-[5/4] shrink-0 overflow-hidden border-b border-[color:var(--g200)]">
                <ServiceLabImg
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackImageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded bg-[color:var(--y)] px-2 py-0.5 font-label text-[9px] font-semibold uppercase tracking-wider text-[color:var(--ink-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-serif text-base font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-lg">
                  {serviceTitleTone(item.title)}
                </h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-ink-muted sm:text-sm">{item.short}</p>
                <Link
                  href={`/services/${item.slug}`}
                  className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/45 underline-offset-4"
                >
                  View service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
