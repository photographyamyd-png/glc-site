import Link from "next/link";
import { getAllGeoLocationDefs } from "@/lib/site/geo-locations";

/** Geo chips for the services index — links to all location landers. */
export function ServicesIndexGeoChips() {
  const locations = getAllGeoLocationDefs();

  return (
    <section
      className="section-major band-light relative border-t border-[color:var(--g200)]"
      aria-labelledby="services-geo-coverage"
    >
      <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
        <div className="border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">Coverage</p>
          <h2
            id="services-geo-coverage"
            className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
          >
            Service areas across Simcoe County
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.72] text-ink-muted sm:text-base">
            Browse city and regional pages for excavation, grading, foundations, and commercial snow operations.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}/`}
                className="inline-flex min-h-[44px] items-center border border-[color:var(--g200)] bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:border-[color:var(--y)] sm:px-4 sm:text-xs"
              >
                {loc.serviceHubLabel} — {loc.placeName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
