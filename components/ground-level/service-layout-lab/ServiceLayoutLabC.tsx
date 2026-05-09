import Link from "next/link";
import type { ServiceLayoutLabItem } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";

type Props = { items: ServiceLayoutLabItem[] };

const SATELLITE_PLACE =
  "lg:col-span-2 lg:row-span-1 flex flex-col overflow-hidden border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] shadow-[0_8px_28px_rgb(0_0_0/0.06)] transition-shadow hover:shadow-[0_12px_36px_rgb(0_0_0/0.1)]";

/** One dominant 4×2 cell + five satellites in a 6-column bento. */
export function ServiceLayoutLabC({ items }: Props) {
  const [hero, ...rest] = items;
  if (!hero || rest.length !== 5) return null;

  const [s0, s1, s2, s3, s4] = rest;

  return (
    <section
      id="service-layout-lab-c"
      className="section-major band-light scroll-mt-[var(--header)] view-reveal"
      aria-labelledby="service-layout-lab-c-heading"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <p className="label-overline mb-2">Layout option C — Bento grid</p>
        <h2
          id="service-layout-lab-c-heading"
          className="font-serif text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl"
        >
          <span className="text-ink">Mixed-span grid: one anchor tile + </span>
          <span className="text-[color:var(--y)]">five satellites</span>
        </h2>
        <div className="mt-10 flex flex-col gap-4 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:gap-4">
          <Link
            href={`/services/${hero.slug}`}
            className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden border border-[color:var(--g200)] bg-ink-deep p-5 text-white shadow-[0_24px_56px_rgb(0_0_0/0.18)] lg:col-span-4 lg:row-span-2 lg:row-start-1 lg:col-start-1 sm:min-h-[300px]"
          >
            <ServiceLabImg
              src={hero.imageUrl}
              fallbackSrc={hero.fallbackImageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.88)] via-[rgb(0_0_0/0.4)] to-transparent" aria-hidden />
            <span className="relative eyebrow text-[color:var(--y)]">
              01 — Featured line
            </span>
            <h3 className="relative mt-2 font-serif text-xl font-semibold uppercase leading-tight tracking-tight sm:text-2xl">
              {serviceTitleTone(hero.title)}
            </h3>
            <p className="relative mt-2 text-sm text-white/85">{hero.short}</p>
          </Link>

          <Link
            href={`/services/${s0.slug}`}
            className={`group ${SATELLITE_PLACE} lg:row-start-1 lg:col-start-5`}
          >
            <SatelliteBody item={s0} index={2} />
          </Link>
          <Link
            href={`/services/${s1.slug}`}
            className={`group ${SATELLITE_PLACE} lg:row-start-2 lg:col-start-5`}
          >
            <SatelliteBody item={s1} index={3} />
          </Link>
          <Link
            href={`/services/${s2.slug}`}
            className={`group ${SATELLITE_PLACE} lg:row-start-3 lg:col-start-1`}
          >
            <SatelliteBody item={s2} index={4} />
          </Link>
          <Link
            href={`/services/${s3.slug}`}
            className={`group ${SATELLITE_PLACE} lg:row-start-3 lg:col-start-3`}
          >
            <SatelliteBody item={s3} index={5} />
          </Link>
          <Link
            href={`/services/${s4.slug}`}
            className={`group ${SATELLITE_PLACE} lg:row-start-3 lg:col-start-5`}
          >
            <SatelliteBody item={s4} index={6} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SatelliteBody({ item, index }: { item: ServiceLayoutLabItem; index: number }) {
  return (
    <>
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <ServiceLabImg
          src={item.imageUrl}
          fallbackSrc={item.fallbackImageUrl}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <span className="font-label text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-serif text-sm font-semibold uppercase leading-snug tracking-tight text-ink sm:text-base">
          {serviceTitleTone(item.title)}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">{item.short}</p>
      </div>
    </>
  );
}
