import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

/** Central accent rail with numbered nodes and cards offset to one side. */
export function ServiceLayoutLabF({ items }: Props) {
  return (
    <section
      id="service-layout-lab-f"
      className="section-major band-light scroll-mt-[var(--header)] view-reveal"
      aria-labelledby="service-layout-lab-f-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline mb-2">Layout option F — Vertical timeline rail</p>
        <h2
          id="service-layout-lab-f-heading"
          className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl"
        >
          <span className="text-ink">Numbered rail with </span>
          <span className="text-[color:var(--y)]">stacked service nodes</span>
        </h2>

        <div className="relative mt-10 pl-2 sm:pl-4">
          <div
            className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-[color:var(--y)]/35 sm:left-5"
            aria-hidden
          />
          <ol className="relative flex flex-col gap-10 sm:gap-12">
            {items.map((item, i) => (
              <li key={item.slug} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[color:var(--y)] bg-[color:var(--y)] font-label text-[10px] font-bold text-[color:var(--ink-deep)] sm:left-1 sm:h-9 sm:w-9">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] shadow-[0_12px_32px_rgb(0_0_0/0.07)]">
                  <div className="grid sm:grid-cols-[minmax(0,200px)_1fr] md:grid-cols-[minmax(0,240px)_1fr]">
                    <div className="relative aspect-[4/3] min-h-[120px] sm:min-h-[140px]">
                      <ServiceLabImg
                        src={item.imageUrl}
                        fallbackSrc={item.fallbackImageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4 sm:p-5">
                      <h3 className="font-serif text-lg font-semibold uppercase leading-snug tracking-tight text-ink sm:text-xl">
                        {serviceTitleTone(item.title)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.short}</p>
                      <Link
                        href={`/services/${item.slug}`}
                        className="mt-4 inline-block w-fit text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4"
                      >
                        View service →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
