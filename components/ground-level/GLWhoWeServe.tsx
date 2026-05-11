import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { FragmentBullet } from "@/components/ui/StructuralFragments";
import { ABOUT, STATS_LINES } from "@/lib/ground-level/homepage-copy";
import { getServiceImage } from "@/lib/site/service-images";

function headingTone(text: string) {
  const [left, right] = text.split("—");
  if (!right) return <>{text}</>;
  return (
    <>
      <span className="text-white">{left.trim()}</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

export type GLWhoCredential = string | { title: string; sub: string };

export type GLWhoWeServeContent = {
  eyebrow: string;
  heading: string;
  body: string;
  credentials: readonly GLWhoCredential[];
  cta: string | { label: string; href: string };
  mediaStat: string;
  badge: string;
  imageAlt: string;
  imageSrc?: string;
};

function defaultAbout(): GLWhoWeServeContent {
  return {
    eyebrow: ABOUT.eyebrow,
    heading: ABOUT.heading,
    body: ABOUT.body,
    credentials: ABOUT.credentials,
    cta: ABOUT.cta,
    mediaStat: ABOUT.mediaStat,
    badge: ABOUT.badge,
    imageAlt: getServiceImage("excavation-site-preparation").alt,
    imageSrc: getServiceImage("excavation-site-preparation").src,
  };
}

export type GLWhoWeServeProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLWhoWeServeContent;
  /** Default true. Set false when a separate stats band follows (e.g. copy lab). */
  showStatsStrip?: boolean;
};

export function GLWhoWeServe({
  sectionId = "about",
  headingId = "about-heading",
  content,
  showStatsStrip = true,
}: GLWhoWeServeProps = {}) {
  const a = content ?? defaultAbout();
  const ctaLabel = typeof a.cta === "string" ? a.cta : a.cta.label;
  const ctaHref = typeof a.cta === "string" ? "/contact" : a.cta.href;
  const imgSrc = a.imageSrc ?? getServiceImage("excavation-site-preparation").src;
  const isInternalRoute = ctaHref.startsWith("/") || ctaHref.startsWith("#");

  return (
    <section
      id={sectionId}
      className="section-major band-dark relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.03),transparent_42%)]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--y)]/35 to-transparent"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="bottom-left" mode="on-dark" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.14fr)_minmax(280px,0.82fr)] lg:items-center lg:gap-10 xl:gap-16">
          <div className="order-2 lg:order-1 lg:pr-4">
            <p className="label-overline-on-dark mb-3">{a.eyebrow}</p>
            <h2
              id={headingId}
              className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
            >
              {headingTone(a.heading)}
            </h2>
            <div className="mt-6 max-w-2xl border border-[color:var(--g200)] border-l-[5px] border-l-[color:var(--y)] bg-[color:var(--brand-canvas)] p-4 text-ink shadow-[0_16px_40px_rgb(0_0_0/0.18)] sm:p-5">
              <ExpandableCopy text={a.body} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {a.credentials.map((c) => {
                const key = typeof c === "string" ? c : c.title;
                return (
                  <li
                    key={key}
                    className="panel-machined-dark flex gap-3 border border-white/10 px-4 py-3 text-sm leading-relaxed text-white/85 sm:text-[0.9375rem]"
                  >
                    <FragmentBullet className="mt-0.5 border-white/40 bg-[rgb(255_255_255/0.06)]" />
                    {typeof c === "string" ? (
                      <span>{c}</span>
                    ) : (
                      <span>
                        <span className="font-semibold text-white">{c.title}</span>
                        <span className="mt-0.5 block text-xs text-white/65">{c.sub}</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            {isInternalRoute ? (
              <Link href={ctaHref} className="cta-hero-fill mt-8 inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em]">
                {ctaLabel}
              </Link>
            ) : (
              <a href={ctaHref} className="cta-hero-fill mt-8 inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em]">
                {ctaLabel}
              </a>
            )}
          </div>

          <div className="order-1 lg:order-2 lg:pl-2" style={{ transform: "translateY(var(--dna-stagger-sm))" }}>
            <div className="relative">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 shadow-[0_24px_60px_rgb(0_0_0/0.45)] sm:aspect-[3/4] lg:aspect-[4/5] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_14%)]"
              >
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[rgb(0_0_0/0.36)] via-[rgb(0_0_0/0.08)] to-transparent" aria-hidden />
                <Image src={imgSrc} alt={a.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 38vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-3 border-t border-white/15 bg-[rgb(0_0_0/0.74)] px-4 py-3">
                  <p className="eyebrow text-white">{a.mediaStat}</p>
                  <span className="shrink-0 border border-[color:var(--y)]/50 bg-[color-mix(in_srgb,var(--y)_12%,transparent)] px-2 py-1 eyebrow text-[color:var(--y)]">
                    {a.badge}
                  </span>
                </div>
              </div>

              <div className="panel-machined-dark absolute -right-2 top-6 z-[3] hidden max-w-[11.5rem] border border-white/18 bg-[color:var(--ink-mid)] p-4 shadow-[0_20px_48px_rgb(0_0_0/0.4)] sm:block lg:-right-4 lg:top-10">
                <p className="font-serif text-lg font-bold leading-tight tracking-[-0.04em] text-white">{a.mediaStat}</p>
                <p className="mt-2 eyebrow leading-snug text-white">{a.badge}</p>
              </div>
            </div>
          </div>
        </div>

        {showStatsStrip ? (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {STATS_LINES.map((line, i) => (
              <li
                key={line}
                className={`border px-4 py-5 text-center text-sm font-medium leading-snug text-white/90 transition-[transform,box-shadow,border-color] ${
                  i === 0
                    ? "relative z-[1] border-[color:var(--y)]/45 bg-[rgb(255_255_255/0.08)] shadow-[0_18px_44px_rgb(0_0_0/0.35)] sm:py-6 lg:scale-[1.03] lg:-translate-y-1"
                    : "border-white/12 bg-[rgb(255_255_255/0.04)]"
                }`}
              >
                {line}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
