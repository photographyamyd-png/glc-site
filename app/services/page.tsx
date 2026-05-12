import type { Metadata } from "next";
import { GLFeaturedServicesBento } from "@/components/ground-level/GLFeaturedServicesBento";
import { SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";
import { groundLevelServicesWithCopyLabDescriptions } from "@/lib/ground-level/merge-copy-lab-services";
import { buildPageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: SEO_TITLES.services,
  description: CORE_COPY.servicesIndex.lede,
  path: "/services/",
});

export default function ServicesIndexPage() {
  const services = groundLevelServicesWithCopyLabDescriptions();
  return (
    <>
      <section
        id="services-overview"
        className="band-dark-field relative overflow-hidden border-b border-white/10"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(10_12_11/0.92),rgb(10_12_11/0.74))]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_76%_58%_at_75%_28%,rgb(255_255_255/0.08),transparent_58%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 pb-12 pt-[calc(var(--header)+2.5rem)] sm:px-6 sm:pb-14 lg:px-10 lg:pt-[calc(var(--header)+3rem)]">
          <p className="eyebrow text-white">
            Home / Services
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Six <span className="text-[color:var(--y)]">Core</span> Service Lines
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.72] text-white/90 sm:text-base">
            {CORE_COPY.servicesIndex.heroLede}
          </p>
        </div>
      </section>

      <GLFeaturedServicesBento
        sectionId="services-grid"
        headingId="services-heading"
        content={{
          eyebrow: "Our Services",
          heading: "Six Core Service Lines",
          intro: CORE_COPY.servicesIndex.lede,
          cta: "Request a quote",
          ctaHref: "/contact/",
        }}
        services={services}
        showProgressRail={false}
        showStepNumbers={false}
      />
    </>
  );
}
