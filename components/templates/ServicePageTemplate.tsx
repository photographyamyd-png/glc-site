import Link from "next/link";
import type { ServiceDef } from "@/lib/site/registry";
import type { PrimaryServiceSlug } from "@/lib/site/registry";
import { SERVICE_DETAILS } from "@/lib/site/copy";
import { CardSurface } from "@/components/ui/CardSurface";

type ServicePageTemplateProps = {
  service: ServiceDef;
  related: ServiceDef[];
};

export function ServicePageTemplate({ service, related }: ServicePageTemplateProps) {
  const detail = service.category === "primary" ? SERVICE_DETAILS[service.slug as PrimaryServiceSlug] : null;
  const isSnowHub = service.slug === "snow-removal";
  const snowModuleIds = [
    "svc-parking-lot",
    "svc-industrial",
    "svc-ice",
    "svc-emergency",
    "svc-hauling",
    "svc-retail",
    "svc-property-management",
    "svc-office-campus",
  ];
  return (
    <article className="relative">
      <section id="overview" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">Service Overview</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            {detail ? (
              <>
                {detail.hero.titleBefore} <span className="text-[color:var(--y)]">{detail.hero.titleEmphasis}</span>
              </>
            ) : (
              service.title
            )}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/82">{detail?.hero.lede ?? service.description}</p>
          <div className="mt-4 space-y-2">
            {(detail?.hero.body ?? [service.description]).slice(0, 3).map((p) => (
              <p key={p} className="max-w-4xl text-sm leading-relaxed text-white/82">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="scope" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] border border-[color:var(--g200)] bg-white p-6 sm:p-8">
          <p className="label-overline">Scope</p>
          <div className="mt-3 space-y-2">
            {(detail?.intro ?? ["Mobilization, staging, and production execution are configured per site constraints and handoff schedule."]).map((p) => (
              <p key={p} className="text-sm leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="field-capabilities" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto grid max-w-[min(100%,var(--max))] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(detail?.deliverables ?? ["Site Analysis", "Field Execution", "Quality Controls"]).map((cap) => (
            <CardSurface key={cap}>
              <p className="font-serif text-xl font-semibold uppercase tracking-tight text-ink">{cap}</p>
              <Link href="/contact/" className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:text-[color:var(--y)]">
                Request this scope {"->"}
              </Link>
            </CardSurface>
          ))}
        </div>
      </section>

      <section id="process" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">{detail?.process.eyebrow ?? "Process"}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {detail?.process.heading ?? "Discovery, planning, execution, and turnover"}
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {(detail?.process.steps ?? []).map((step) => (
              <li key={step.id} className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--y)]">{step.id}</p>
                <p className="mt-1 font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-white/82">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] space-y-3">
          {(detail?.faq ?? []).map((item) => (
            <details key={item.q} className="border border-[color:var(--g200)] bg-white p-4">
              <summary className="cursor-pointer font-semibold text-ink">{item.q}</summary>
              <p className="mt-2 text-sm text-ink-muted">{item.a}</p>
            </details>
          ))}
          {!detail ? (
            <details className="border border-[color:var(--g200)] bg-white p-4">
              <summary className="cursor-pointer font-semibold text-ink">Need detailed scope?</summary>
              <p className="mt-2 text-sm text-ink-muted">
                This sub-service has dedicated scope alignment on the snow hub. Use the active link below to open its full context.
              </p>
            </details>
          ) : null}
        </div>
      </section>

      <section id="related-services" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline">Related Services</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <CardSurface key={r.slug} as="li" className="p-4">
                <Link href={`/services/${r.slug}/`} className="font-semibold text-ink hover:text-[color:var(--y)]">
                  {r.title}
                </Link>
              </CardSurface>
            ))}
          </ul>
        </div>
      </section>

      {isSnowHub ? (
        <section id="service-area" className="section-major band-light scroll-mt-[var(--header)]">
          <div className="mx-auto max-w-[min(100%,var(--max))]">
            <p className="label-overline">Snow service modules</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(detail?.extra?.snowHub?.lineBlockHeadings ?? []).map((label, idx) => (
                <CardSurface id={snowModuleIds[idx]} key={label} className="p-4">
                  <p className="font-semibold uppercase tracking-[0.12em] text-ink">{label}</p>
                  <Link href="/contact/" className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:text-[color:var(--y)]">
                    Request this service {"->"}
                  </Link>
                </CardSurface>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-muted">{detail?.extra?.snowHub?.faqLongFormTodo}</p>
          </div>
        </section>
      ) : null}

      <section id="request-site-visit" className="section-major band-light scroll-mt-[var(--header)]">
        <div id="cta-band" className="mx-auto max-w-[min(100%,var(--max))] border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-white p-6">
          <p className="label-overline">Request Site Visit</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {detail?.ctaOverride.supporting ?? "Share site address, scope context, and target timeline to receive a scoped dispatch response."}
          </p>
          <Link href="/contact/" className="cta-primary mt-4 inline-block px-5 py-3 text-xs tracking-wide">
            {detail?.ctaOverride.buttonLabel ?? "Request Dispatch"}
          </Link>
          {service.moreHref ? (
            <Link href={service.moreHref} className="cta-secondary mt-3 inline-block px-5 py-3 text-xs tracking-wide">
              Open Snow Hub Section
            </Link>
          ) : null}
        </div>
      </section>
    </article>
  );
}
