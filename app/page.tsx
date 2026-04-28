import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_SERVICES, SEO_TITLES } from "@/lib/site/registry";
import { HOME_COPY } from "@/lib/site/copy";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { HomeStatsBand } from "@/components/home/HomeStatsBand";
import { GLTestimonialsFeature } from "@/components/ground-level/GLTestimonialsFeature";
import { CardSurface } from "@/components/ui/CardSurface";

export const metadata: Metadata = {
  title: SEO_TITLES.home,
  description: HOME_COPY.hero.lede,
};

export default function Home() {
  return (
    <>
      <HomeHeroSection copy={HOME_COPY.hero} />

      <HomeStatsBand band={HOME_COPY.statsBand} stats={HOME_COPY.stats} />

      <section id="services" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline">{HOME_COPY.accordion.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-ink sm:text-4xl">
            {HOME_COPY.accordion.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">{HOME_COPY.accordion.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRIMARY_SERVICES.map((service) => (
              <CardSurface key={service.slug}>
                <h3 className="font-serif text-xl font-semibold uppercase tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                <Link
                  href={`/services/${service.slug}/`}
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink hover:text-[color:var(--y)]"
                >
                  View service {"->"}
                </Link>
              </CardSurface>
            ))}
          </div>
          <Link href={HOME_COPY.accordion.cta.href} className="cta-primary mt-6 inline-block px-5 py-3 text-xs tracking-wide">
            {HOME_COPY.accordion.cta.label}
          </Link>
        </div>
      </section>

      <section id="why" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">{HOME_COPY.why.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {HOME_COPY.why.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/82">{HOME_COPY.why.body}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {HOME_COPY.why.reasons.map((reason) => (
              <Link
                key={reason.id}
                href="/about/"
                className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/15"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--y)]">{reason.id}</p>
                <p className="mt-2 font-semibold text-white">{reason.title}</p>
                <p className="mt-1 text-sm text-white/80">{reason.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">{HOME_COPY.process.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {HOME_COPY.process.heading}
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_COPY.process.steps.map((step) => (
              <li key={step.id} className="border border-white/20 bg-white/10 p-4 text-sm text-white/82 backdrop-blur-sm">
                <p className="font-semibold uppercase tracking-[0.12em] text-[color:var(--y)]">
                  {step.id}. {step.title}
                </p>
                <p className="mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="marquee-band" aria-label="Trust signals">
        <div className="marquee-track">
          {[...HOME_COPY.marquee, ...HOME_COPY.marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
              <span className="marquee-sep" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <GLTestimonialsFeature content={HOME_COPY.testimonialsFeature} />

      <section id="coverage" className="section-major band-light scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] border border-[color:var(--g200)] bg-white p-6">
          <p className="label-overline">{HOME_COPY.coverage.eyebrow}</p>
          <h2 className="mt-3 font-serif text-2xl font-semibold uppercase tracking-tight text-ink">{HOME_COPY.coverage.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{HOME_COPY.coverage.body}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {HOME_COPY.coverage.areas.map((area) => (
              <Link key={area} href="/contact/" className="border border-[color:var(--g200)] bg-white/80 px-3 py-2 text-sm text-ink">
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))]">
          <p className="label-overline-on-dark">{HOME_COPY.testimonials.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {HOME_COPY.testimonials.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/82">{HOME_COPY.testimonials.sub}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {HOME_COPY.testimonials.quotes.map((quote) => (
              <Link key={quote.by} href="/contact/" className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-white/88">{quote.quote}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[color:var(--y)]">{quote.by}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cta-band" className="section-major band-dark scroll-mt-[var(--header)]">
        <div className="mx-auto max-w-[min(100%,var(--max))] border border-[color:var(--g200)] border-l-[4px] border-l-[color:var(--y)] bg-white p-6">
          <p className="label-overline">{HOME_COPY.ctaBand.eyebrow}</p>
          <h2 className="mt-3 font-serif text-2xl font-semibold uppercase tracking-tight text-ink">{HOME_COPY.ctaBand.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{HOME_COPY.ctaBand.sub}</p>
          <Link href={HOME_COPY.ctaBand.phone.href} className="cta-primary mt-4 inline-block px-5 py-3 text-xs tracking-wide">
            {HOME_COPY.ctaBand.phoneLabel}: {HOME_COPY.ctaBand.phone.label}
          </Link>
          <Link href={HOME_COPY.ctaBand.email.href} className="cta-secondary mt-3 inline-block px-5 py-3 text-xs tracking-wide">
            {HOME_COPY.ctaBand.email.label}
          </Link>
        </div>
      </section>
    </>
  );
}
