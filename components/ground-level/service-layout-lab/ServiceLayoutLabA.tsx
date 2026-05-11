import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

export function ServiceLayoutLabA({ items }: Props) {
  return (
    <section
      id="service-layout-lab-a"
      className="section-major band-light scroll-mt-[var(--header)] view-reveal"
      aria-labelledby="service-layout-lab-a-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline mb-2">Layout option A — Zigzag editorial</p>
        <h2
          id="service-layout-lab-a-heading"
          className="font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
        >
          <span className="text-ink">Six service lines — </span>
          <span className="text-[color:var(--y)]">alternating media and copy</span>
        </h2>
        <div className="mt-10 flex flex-col gap-14 sm:gap-16 lg:gap-20">
          {items.map((item, i) => {
            const isRev = i % 2 === 1;
            return (
              <div
                key={item.slug}
                className={`flex flex-col gap-6 lg:gap-10 ${isRev ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g100)] shadow-[0_20px_48px_rgb(0_0_0/0.08)]">
                    <ServiceLabImg
                      src={item.imageUrl}
                      fallbackSrc={item.fallbackImageUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 lg:px-2">
                  <p className="eyebrow text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold uppercase leading-tight tracking-[0.04em] text-ink sm:text-2xl lg:text-3xl">
                    {serviceTitleTone(item.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{item.short}</p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted/85 sm:text-sm">{item.megaBlurb}</p>
                  <p className="mt-3 inline-block border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] px-3 py-1 eyebrow text-[color:var(--y)]">
                    Alternating row {String(i + 1).padStart(2, "0")}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4 transition-colors hover:decoration-[color:var(--y)]"
                  >
                    View service →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
