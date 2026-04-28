import Image from "next/image";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { COVERAGE, CTA_BAND, EMAIL_ADDRESS, EMAIL_MAILTO, PHONE_TEL } from "@/lib/ground-level/homepage-copy";

function headingTone(text: string) {
  const key = "Site Consultation";
  if (!text.includes(key)) return <>{text}</>;
  const [before, after] = text.split(key);
  return (
    <>
      <span className="text-ink">{before}</span>
      <span className="text-[color:var(--y)]">{key}</span>
      <span className="text-ink">{after}</span>
    </>
  );
}

export function GLContact() {
  return (
    <section
      id="contact"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgb(0_0_0/0.04),transparent)]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="center-left" className="opacity-[0.06]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:translate-y-4">
            <p className="label-overline mb-3">{CTA_BAND.eyebrow}</p>
            <h2
              id="contact-heading"
              className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {headingTone(CTA_BAND.heading)}
            </h2>
            <p className="mt-[var(--s7)] text-sm leading-relaxed text-ink-muted">{CTA_BAND.sub}</p>
            <dl className="mt-8 space-y-6 border-t border-[color:var(--g200)] pt-8">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={PHONE_TEL}
                    className="text-base font-semibold text-ink underline decoration-[color:var(--y)]/40 underline-offset-4 transition-colors hover:text-[color:var(--y)]"
                  >
                    {CTA_BAND.phoneLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                  {CTA_BAND.emailCta}
                </dt>
                <dd className="mt-1">
                  <a
                    href={EMAIL_MAILTO}
                    className="text-base font-medium text-ink underline decoration-[color:var(--y)]/40 underline-offset-4 transition-colors hover:text-[color:var(--y)]"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                  {COVERAGE.eyebrow}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {COVERAGE.heading}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-4" style={{ transform: "translateY(var(--dna-stagger-sm))" }}>
            <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] shadow-[0_20px_60px_rgb(0_0_0/0.12)]">
              <Image
                src="/ground-level/hardscape-site.jpg"
                alt="Finished hardscape and grading at a commercial property"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.35)] to-transparent" aria-hidden />
            </div>
            <div className="bespoke-surface panel-machined border border-[color:var(--g200)] bg-white p-5">
              <p className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                {COVERAGE.heading}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{COVERAGE.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
