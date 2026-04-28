import Link from "next/link";
import type { LocationDef } from "@/lib/site/registry";
import { LOCATION_COPY_MODEL, LOCATION_NAMES } from "@/lib/site/copy";

export function LocationPageTemplate({ location }: { location: LocationDef }) {
  const place = LOCATION_NAMES[location.slug];
  const title = LOCATION_COPY_MODEL.h1Pattern.replace("{PlaceName}", place);
  const lede = LOCATION_COPY_MODEL.ledePattern.replace("{PlaceName}", place);

  return (
    <article className="relative">
      <section className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">Service Area</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/82">{lede}</p>
        </div>
      </section>

      <section id="service-area" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] border border-[color:var(--g200)] bg-white p-6">
          <p className="label-overline">Local Coverage</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{LOCATION_COPY_MODEL.supportLine}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {LOCATION_COPY_MODEL.ctas.map((cta) => (
              <Link key={cta.href} href={cta.href} className="cta-primary inline-block px-5 py-3 text-xs tracking-wide">
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
