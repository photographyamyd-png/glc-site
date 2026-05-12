import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { COPY_LAB_CAPABILITY_BENTO, COPY_LAB_SERVICE_GRID_SLUGS } from "@/lib/ground-level/home-copy-lab-content";
import { groundLevelServicesWithCopyLabDescriptions } from "@/lib/ground-level/merge-copy-lab-services";
import { SERVICE_LAYOUT_LAB_ITEMS } from "@/lib/ground-level/service-layout-lab-data";
import { getServiceImageAlt } from "@/lib/site/service-images";
import type { GroundLevelService } from "@/lib/ground-level/services";
import { cn } from "@/lib/utils";

const labBySlug = new Map(SERVICE_LAYOUT_LAB_ITEMS.map((item) => [item.slug, item]));

type ServiceWithImages = GroundLevelService & {
  imageUrl: string;
  fallbackImageUrl: string;
  imageAlt: string;
};

function mergeLabImages(services: readonly GroundLevelService[]): ServiceWithImages[] {
  const fallback = SERVICE_LAYOUT_LAB_ITEMS[0];
  return services.map((s) => {
    const lab = labBySlug.get(s.slug);
    return {
      ...s,
      imageUrl: lab?.imageUrl ?? fallback.imageUrl,
      fallbackImageUrl: lab?.fallbackImageUrl ?? fallback.fallbackImageUrl,
      imageAlt: getServiceImageAlt(s.slug),
    };
  });
}

/** Explicit 12-column desktop placement: two hero spans on row 1–2, four capability tiles on row 3. */
const GRID_PLACE: Record<string, string> = {
  "excavation-site-preparation":
    "lg:col-span-6 lg:row-span-2 lg:min-h-[360px] lg:col-start-1 lg:row-start-1 lg:col-end-7 lg:row-end-3",
  "snow-removal":
    "lg:col-span-6 lg:row-span-2 lg:min-h-[360px] lg:col-start-7 lg:row-start-1 lg:col-end-13 lg:row-end-3",
  "site-preparation-grading":
    "lg:col-span-3 lg:row-span-1 lg:min-h-[220px] lg:col-start-1 lg:row-start-3 lg:col-end-4",
  "foundations-civil-infrastructure":
    "lg:col-span-3 lg:row-span-1 lg:min-h-[220px] lg:col-start-4 lg:row-start-3 lg:col-end-7",
  "drainage-hardscaping":
    "lg:col-span-3 lg:row-span-1 lg:min-h-[220px] lg:col-start-7 lg:row-start-3 lg:col-end-10",
  "hauling-site-clearing-logistics":
    "lg:col-span-3 lg:row-span-1 lg:min-h-[220px] lg:col-start-10 lg:row-start-3 lg:col-end-13",
};

function gridClassForSlug(slug: string): string {
  return GRID_PLACE[slug] ?? "lg:min-h-[220px]";
}

const c = COPY_LAB_CAPABILITY_BENTO;

export function HomeCapabilityBentoSection() {
  const merged = groundLevelServicesWithCopyLabDescriptions();
  const ordered = COPY_LAB_SERVICE_GRID_SLUGS.map((slug) => merged.find((s) => s.slug === slug)).filter(
    (s): s is GroundLevelService => Boolean(s),
  );
  const withImages = mergeLabImages(ordered);

  return (
    <section
      id="capabilities"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="capabilities-bento-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-left" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="eyebrow text-ink">{c.eyebrow}</p>
          <h2
            id="capabilities-bento-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {c.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] text-[color:var(--text-600)] sm:text-base">{c.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[repeat(3,minmax(0,auto))]">
          {withImages.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className={cn(
                "group relative flex min-h-[240px] flex-col overflow-hidden border border-[color:var(--g200)] bg-[color:var(--ink-deep)] text-left shadow-[0_12px_32px_rgb(0_0_0/0.1)] outline-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                "hover:-translate-y-0.5 hover:border-[color:var(--y)]/40 hover:shadow-[0_22px_48px_rgb(0_0_0/0.18)] motion-reduce:transform-none motion-reduce:hover:transform-none",
                gridClassForSlug(item.slug),
              )}
            >
              <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                <ServiceLabImg
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackImageUrl}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[rgb(0_0_0/0.82)] via-[rgb(0_0_0/0.35)] to-transparent"
                aria-hidden
              />
              <div className="relative z-[3] mt-auto px-5 py-6 sm:px-7 sm:py-8">
                <p className="font-serif text-lg font-bold uppercase leading-snug tracking-[0.04em] text-white sm:text-xl">
                  {item.title}
                </p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/88">{item.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                  View service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
