import Image from "next/image";
import Link from "next/link";
import type { HomeCopy } from "@/lib/site/copy";

type GLTestimonialsFeatureProps = {
  content: HomeCopy["testimonialsFeature"];
};

const FEATURE_IMAGE_SRC = "/images/services/Excavation/excavation-016.jpg";

export function GLTestimonialsFeature({ content }: GLTestimonialsFeatureProps) {
  return (
    <section
      id="testimonials-feature"
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="testimonials-feature-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <p className="label-overline-on-dark">{content.eyebrow}</p>
        <h2 id="testimonials-feature-heading" className="mt-3 font-serif text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
          {content.heading} <span className="text-[color:var(--y)]">{content.headingAccent}</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/82">{content.intro}</p>

        <div className="relative mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <article className="relative -ml-4 border border-white/18 bg-[rgb(12_12_12/0.84)] p-5 shadow-[0_22px_52px_rgb(0_0_0/0.38)] backdrop-blur-sm sm:-ml-8 sm:p-6">
            <div className="absolute -top-3 left-4 z-30 border border-[color:var(--brand-black)]/15 bg-[color:var(--y)] px-3 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-black)]">
              Featured Client Voice
            </div>
            <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] lg:items-end">
              <blockquote className="relative z-20 text-base leading-relaxed text-white/90 lg:translate-y-[var(--dna-stagger-sm)]">
                <p>{content.featuredQuote.quote}</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--y)]">
                  {content.featuredQuote.by}
                </footer>
              </blockquote>
              <figure className="relative z-10 -mr-4 border border-white/18 sm:-mr-8">
                <Image
                  src={FEATURE_IMAGE_SRC}
                  alt="Ground Level crew and heavy equipment on an active commercial site"
                  width={760}
                  height={520}
                  className="h-64 w-full object-cover sm:h-72 lg:h-80"
                />
                <figcaption className="border-t border-white/16 bg-[rgb(0_0_0/0.35)] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/78">
                  Active commercial mobilization
                </figcaption>
              </figure>
            </div>
            <div
              className="pointer-events-none absolute -bottom-4 left-10 z-30 h-[2px] w-28 bg-[color:var(--y)]/75 sm:w-36"
              aria-hidden
            />
          </article>

          <aside className="bespoke-surface relative z-40 border border-[color:var(--g200)] bg-[color:var(--brand-canvas)] p-5 text-ink lg:-ml-6 lg:translate-y-[var(--dna-stagger-md)]">
            <p className="font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65">{content.proofPanel.eyebrow}</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold uppercase tracking-tight text-ink">{content.proofPanel.heading}</h3>
            <ul className="mt-4 space-y-2">
              {content.proofPanel.items.map((item) => (
                <li key={item} className="border border-[color:var(--g200)] bg-white/70 px-3 py-2 text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
            <Link href={content.cta.href} className="cta-primary mt-5 inline-block px-5 py-3 text-xs tracking-wide">
              {content.cta.label}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
