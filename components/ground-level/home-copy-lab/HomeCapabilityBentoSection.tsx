import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { COPY_LAB_CAPABILITY_BENTO, COPY_LAB_SERVICE_GRID_SLUGS } from "@/lib/ground-level/home-copy-lab-content";
import { groundLevelServicesWithCopyLabDescriptions } from "@/lib/ground-level/merge-copy-lab-services";
import { SERVICE_LAYOUT_LAB_ITEMS } from "@/lib/ground-level/service-layout-lab-data";
import type { GroundLevelService } from "@/lib/ground-level/services";
import { cn } from "@/lib/utils";

const labBySlug = new Map(SERVICE_LAYOUT_LAB_ITEMS.map((item) => [item.slug, item]));

type ServiceWithImages = GroundLevelService & {
  imageUrl: string;
  fallbackImageUrl: string;
};

function mergeLabImages(services: readonly GroundLevelService[]): ServiceWithImages[] {
  const fallback = SERVICE_LAYOUT_LAB_ITEMS[0];
  return services.map((s) => {
    const lab = labBySlug.get(s.slug);
    return {
      ...s,
      imageUrl: lab?.imageUrl ?? fallback.imageUrl,
      fallbackImageUrl: lab?.fallbackImageUrl ?? fallback.fallbackImageUrl,
    };
  });
}

const c = COPY_LAB_CAPABILITY_BENTO;

/**
 * `#capabilities` — complements `#services` (featured bento): same six lines in registry order,
 * but **field-level** blurbs (`megaBlurb`) and compact thumbs so the band does not repeat the hero card grid.
 */
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

        <ul className="mt-12 list-none space-y-3 sm:space-y-4">
          {withImages.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className={cn(
                  "group flex gap-4 overflow-hidden border border-[color:var(--g200)] bg-white/90 p-4 shadow-[0_8px_24px_rgb(0_0_0/0.06)] outline-none transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "sm:gap-6 sm:p-5",
                  "hover:-translate-y-0.5 hover:border-[color:var(--y)]/45 hover:shadow-[0_14px_36px_rgb(0_0_0/0.1)] focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  "motion-reduce:transform-none motion-reduce:hover:transform-none",
                )}
              >
                <div className="relative h-[4.5rem] w-[6.5rem] shrink-0 overflow-hidden border border-[color:var(--g200)] sm:h-[5.25rem] sm:w-[7.75rem]">
                  <ServiceLabImg
                    src={item.imageUrl}
                    fallbackSrc={item.fallbackImageUrl}
                    alt=""
                    sizes="(max-width:640px)104px,124px"
                    className="h-full w-full object-cover opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-base font-bold uppercase leading-snug tracking-[0.04em] text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-[color:var(--text-600)] sm:line-clamp-2 sm:text-[15px]">
                    {item.megaBlurb}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                    View service →
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
