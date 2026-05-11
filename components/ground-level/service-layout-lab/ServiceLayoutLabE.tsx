import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

/** Dominant first service + five satellites in a separate sub-grid. */
export function ServiceLayoutLabE({ items }: Props) {
  const [featured, ...satellites] = items;
  if (!featured) return null;

  return (
    <section
      id="service-layout-lab-e"
      className="section-major band-light scroll-mt-[var(--header)] view-reveal"
      aria-labelledby="service-layout-lab-e-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline mb-2">Layout option E — Magazine hero + satellites</p>
        <h2
          id="service-layout-lab-e-heading"
          className="font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
        >
          <span className="text-ink">One lead story, then a </span>
          <span className="text-[color:var(--y)]">supporting grid</span>
        </h2>

        <div className="mt-10 overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] shadow-[0_20px_50px_rgb(0_0_0/0.08)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-[380px]">
              <ServiceLabImg
                src={featured.imageUrl}
                fallbackSrc={featured.fallbackImageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center border-t border-[color:var(--g200)] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <span className="eyebrow text-[color:var(--y)]">
                Lead service line
              </span>
              <h3 className="mt-3 font-serif text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-ink sm:text-3xl">
                {serviceTitleTone(featured.title)}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{featured.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{featured.megaBlurb}</p>
              <Link
                href={`/services/${featured.slug}`}
                className="mt-6 inline-block w-fit text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--y)] underline decoration-[color:var(--y)]/40 underline-offset-4"
              >
                View service →
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {satellites.map((item, i) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-[color:var(--g200)] bg-[linear-gradient(180deg,rgb(255_255_255),rgb(250_250_250))] shadow-[0_8px_24px_rgb(0_0_0/0.05)] transition-shadow hover:shadow-[0_14px_36px_rgb(0_0_0/0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ServiceLabImg
                    src={item.imageUrl}
                    fallbackSrc={item.fallbackImageUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-2 top-2 rounded bg-[color:var(--ink-deep)] px-2 py-0.5 font-label text-[9px] font-bold uppercase tracking-wider text-white">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-sm font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-base">
                    {serviceTitleTone(item.title)}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted">{item.short}</p>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--y)]">
                    View →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
