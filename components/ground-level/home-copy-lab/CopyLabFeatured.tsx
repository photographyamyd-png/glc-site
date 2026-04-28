import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import {
  COPY_LAB_FEATURED_SERVICES,
  COPY_LAB_SERVICE_GRID_SLUGS,
} from "@/lib/ground-level/home-copy-lab-content";

export function CopyLabFeatured() {
  const f = COPY_LAB_FEATURED_SERVICES;
  return (
    <section
      id="copy-lab-featured"
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby="copy-lab-featured-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.75fr)] lg:items-start lg:gap-14">
          <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
            <p className="label-overline mb-3">{f.eyebrow}</p>
            <h2
              id="copy-lab-featured-heading"
              className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {f.h2Line1}{" "}
              <span className="text-[color:var(--y)]">{f.h2Line2}</span>
            </h2>
            <p className="mt-[var(--s7)] text-sm leading-relaxed text-ink-muted sm:text-base">{f.body}</p>
            <a
              href={f.primaryCta.href}
              className="cta-primary mt-8 inline-block px-8 py-4 text-sm font-semibold tracking-wide"
            >
              {f.primaryCta.label}
            </a>
          </div>
          <div
            className="relative min-h-[220px] overflow-hidden border border-[color:var(--g200)] shadow-[0_20px_50px_rgb(0_0_0/0.1)] sm:min-h-[280px] lg:min-h-[320px] [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%,0_12%)]"
            style={{ transform: "translateY(var(--dna-stagger-sm))" }}
          >
            <Image
              src="/ground-level/hero-primary.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0_0_0/0.45)] via-transparent to-[rgb(0_0_0/0.12)]" aria-hidden />
          </div>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {f.itemTitles.map((title, i) => {
            const slug = COPY_LAB_SERVICE_GRID_SLUGS[i];
            return (
              <li key={title}>
                <Link
                  href={`/services/${slug}`}
                  className="flex h-full items-center justify-between gap-3 border border-[color:var(--g200)] bg-white px-4 py-4 text-sm font-semibold text-ink shadow-[0_8px_24px_rgb(0_0_0/0.06)] transition-colors hover:border-[color:var(--y)]/45"
                >
                  <span>{title}</span>
                  <span className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--y)]">
                    View
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
