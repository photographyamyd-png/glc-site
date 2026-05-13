import Image from "next/image";
import Link from "next/link";
import type { LocationDef } from "@/lib/site/registry";
import { LOCATION_COPY_MODEL, LOCATION_NAMES } from "@/lib/site/copy";
import { SnowLocationJsonLd } from "@/components/seo/SnowLocationJsonLd";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { SNOW_MEDIA } from "@/lib/site/snow-removal-media";

/** Snow location pages — `public/images/services/Snow Removal/` (spaces encoded). */
const LOCATION_HERO_IMAGE_SRC =
  "/images/services/Snow%20Removal/Ground%20Level%20Contracting%20barrie%20snow%20removal23.JPG";

const LOCATION_IMAGE_ALT =
  "Commercial snow removal truck operating on a lot — Ground Level Contracting, Simcoe County";

const LOCATION_SPLIT_IMAGE = SNOW_MEDIA.barrieSnow2;

export function LocationPageTemplate({ location }: { location: LocationDef }) {
  const place = LOCATION_NAMES[location.slug];
  const title = LOCATION_COPY_MODEL.h1Pattern.replace("{PlaceName}", place);
  const lede = LOCATION_COPY_MODEL.ledePattern.replace("{PlaceName}", place);

  return (
    <article className="relative">
      <SnowLocationJsonLd location={location} />
      <section className="section-major band-dark relative min-h-[260px] scroll-mt-[var(--header)] overflow-hidden sm:min-h-[300px] view-reveal">
        {/* Substrate + scrims */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={LOCATION_HERO_IMAGE_SRC}
            alt={LOCATION_IMAGE_ALT}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.76)] to-[rgb(10_12_11/0.45)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.65)] via-transparent to-[rgb(10_12_11/0.28)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_35%,rgb(255_255_255/0.06),transparent_58%)]"
            aria-hidden
          />
        </div>
        <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.14] sm:opacity-[0.17]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <p className="eyebrow text-white">Service Area</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.72] text-white/88 sm:text-base">{lede}</p>
        </div>
      </section>

      <section id="service-area" className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(242_183_5/0.06),transparent_52%)]"
          aria-hidden
        />
        <ClaudeLogicWatermark placement="top-right" mode="default" className="z-[1] opacity-[0.08] sm:opacity-[0.1]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-stretch">
            <div className="relative min-h-[200px] overflow-hidden border border-[color:var(--g200)] lg:col-span-5 lg:min-h-0">
              <Image
                src={LOCATION_SPLIT_IMAGE.src}
                alt={LOCATION_SPLIT_IMAGE.alt}
                fill
                className="object-cover object-[center_40%]"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgb(250_250_250/0.35)] lg:to-[rgb(250_250_250/0.08)]"
                aria-hidden
              />
            </div>
            <div className="bespoke-surface panel-machined flex flex-col justify-center border border-[color:var(--g200)] bg-white p-6 lg:col-span-7 lg:p-8">
              <p className="eyebrow text-ink">Local Coverage</p>
              <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
                Dispatch coverage for {place}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.72] text-ink-muted sm:text-base">
                {LOCATION_COPY_MODEL.supportLine}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {LOCATION_COPY_MODEL.ctas.map((cta) => (
                  <Link key={cta.href} href={cta.href} className="cta-primary inline-flex min-h-[44px] items-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]">
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
