import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPageShell } from "@/components/templates/MarketingPageShell";
import { ALL_SERVICES, SEO_TITLES } from "@/lib/site/registry";
import { CORE_COPY } from "@/lib/site/copy";

export const metadata: Metadata = {
  title: SEO_TITLES.services,
  description: CORE_COPY.servicesIndex.lede,
};

export default function ServicesIndexPage() {
  return (
    <MarketingPageShell
      id="services-index"
      eyebrow={CORE_COPY.servicesIndex.breadcrumb.join(" / ")}
      title={
        <>
          {CORE_COPY.servicesIndex.title.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-[color:var(--y)]">{CORE_COPY.servicesIndex.title.split(" ").slice(2).join(" ")}</span>
        </>
      }
      lede={CORE_COPY.servicesIndex.lede}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALL_SERVICES.map((service) => (
          <article key={service.slug} className="rounded-xl border border-[color:var(--g200)] bg-white/80 p-5 backdrop-blur-sm">
            <p className="label-overline">{service.category === "primary" ? "Primary" : "Snow sub-service"}</p>
            <h2 className="mt-2 font-serif text-xl font-semibold uppercase tracking-tight text-ink">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
            <p className="mt-2 text-xs text-ink-muted">{CORE_COPY.servicesIndex.cardDescription}</p>
            <Link
              href={`/services/${service.slug}/`}
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:text-[color:var(--y)]"
            >
              {CORE_COPY.servicesIndex.cardCtaLabel} {"->"}
            </Link>
          </article>
        ))}
      </div>
    </MarketingPageShell>
  );
}
