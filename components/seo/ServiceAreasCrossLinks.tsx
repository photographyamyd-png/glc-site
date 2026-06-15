import Link from "next/link";
import type { GeoLocationKind } from "@/lib/site/geo-locations";
import { getAllGeoLocationDefs } from "@/lib/site/geo-locations";
import { getGeoLinkLabel } from "@/lib/site/geo-location-content";
import type { PrimaryServiceSlug } from "@/lib/site/registry";

const KIND_BY_SERVICE: Partial<Record<PrimaryServiceSlug, GeoLocationKind>> = {
  "excavation-site-preparation": "excavation",
  "site-preparation-grading": "grading",
  "foundations-civil-infrastructure": "foundations",
  "snow-removal": "snow",
};

type Props = {
  serviceSlug: PrimaryServiceSlug;
  className?: string;
};

/** Cross-links primary service pages to matching geo location landers. */
export function ServiceAreasCrossLinks({ serviceSlug, className }: Props) {
  const kind = KIND_BY_SERVICE[serviceSlug];
  if (!kind) return null;

  const locations = getAllGeoLocationDefs().filter((l) => l.kind === kind);
  if (locations.length === 0) return null;

  return (
    <section
      className={className}
      aria-labelledby={`service-areas-${serviceSlug}`}
    >
      <div className="border-l-4 border-[color:var(--y)] pl-5">
        <p className="eyebrow text-ink">Areas we serve</p>
        <h2
          id={`service-areas-${serviceSlug}`}
          className="mt-3 font-serif text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl"
        >
          Local coverage
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.72] text-ink-muted sm:text-base">
          City-specific excavation pages for Barrie, Orillia, and Simcoe County — scope, local context, and mobilization FAQs for procurement teams.
        </p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {locations.map((loc) => (
          <li key={loc.slug}>
            <Link
              href={`/locations/${loc.slug}/`}
              className="inline-flex min-h-[44px] items-center border border-[color:var(--g200)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-[color:var(--y)]"
            >
              {getGeoLinkLabel(kind, loc.placeName)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
