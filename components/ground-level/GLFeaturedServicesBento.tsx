"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import type { GLFeaturedServicesContent } from "@/components/ground-level/GLFeaturedServices";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandableCopy } from "@/components/ui/ExpandableCopy";
import { FEATURED_SERVICES } from "@/lib/ground-level/homepage-copy";
import { SERVICE_LAYOUT_LAB_ITEMS } from "@/lib/ground-level/service-layout-lab-data";
import { ServiceLabImg } from "@/components/ground-level/service-layout-lab/ServiceLabImg";
import { serviceTitleTone } from "@/components/ground-level/service-layout-lab/serviceLayoutLabShared";
import { GROUND_LEVEL_SERVICES, type GroundLevelService } from "@/lib/ground-level/services";
import { getServiceImageAlt } from "@/lib/site/service-images";

const MotionLink = motion.create(Link);
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

function toneSplit(text: string) {
  const [left, right] = text.split("/");
  if (!right) return <>{text}</>;
  return (
    <>
      <span className="text-ink">{left.trim()}</span>{" "}
      <span className="text-[color:var(--y)]">{right.trim()}</span>
    </>
  );
}

export type GLFeaturedServicesBentoProps = {
  sectionId?: string;
  headingId?: string;
  content?: GLFeaturedServicesContent;
  /** Defaults to `GROUND_LEVEL_SERVICES`. */
  services?: readonly GroundLevelService[];
  showProgressRail?: boolean;
  showStepNumbers?: boolean;
};

const defaultFeaturedContent: GLFeaturedServicesContent = {
  eyebrow: FEATURED_SERVICES.eyebrow,
  heading: FEATURED_SERVICES.heading,
  intro: FEATURED_SERVICES.intro,
  cta: FEATURED_SERVICES.cta,
  ctaHref: "/contact",
};

function isInternalRoute(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

type ServiceWithImages = GroundLevelService & {
  imageUrl: string;
  fallbackImageUrl: string;
  imageAlt: string;
};

function mergeLabImages(services: readonly GroundLevelService[]): ServiceWithImages[] {
  const labBySlug = new Map(SERVICE_LAYOUT_LAB_ITEMS.map((item) => [item.slug, item]));
  const fallback = SERVICE_LAYOUT_LAB_ITEMS[0];
  return services.map((s) => {
    const lab = labBySlug.get(s.slug);
    return {
      ...s,
      imageUrl: lab?.imageUrl ?? fallback.imageUrl,
      fallbackImageUrl: lab?.fallbackImageUrl ?? fallback.fallbackImageUrl,
      imageAlt: getServiceImageAlt(s.slug),
    };
  });
}

const TILE_SCROLL_MT = "scroll-mt-[calc(var(--header)+88px)]";

const YELLOW_THREAD_VERTICAL =
  "pointer-events-none absolute left-[19px] top-2 bottom-2 z-0 w-[2px] bg-[linear-gradient(180deg,transparent,color-mix(in_srgb,var(--y)_70%,transparent)_10%,color-mix(in_srgb,var(--y)_70%,transparent)_90%,transparent)] lg:hidden";

function StepNode({ index }: { index: number }) {
  return (
    <span
      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-[color:var(--ink-deep)] font-serif text-sm font-bold text-white shadow-[0_0_0_4px_rgb(255_255_255/0.92)] transition-[background,border-color,transform] duration-300 ease-[var(--ease)] group-hover:border-[color:var(--y)] group-hover:bg-[color:var(--y)] group-hover:text-[color:var(--ink-deep)]"
      aria-hidden
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}

/**
 * Layers: base, card__media (image), flat + gradient read overlays, card__overlay--solid on hover,
 * then content (card__num, card__title, card__desc, card__link). Desktop (lg+): bento placement;
 * description collapsed until hover/focus.
 */
function GlcServiceCard({
  item,
  step,
  gridClassName,
  variant,
  showStepNumber = true,
  revealDelayMs = 0,
}: {
  item: ServiceWithImages;
  step: number;
  gridClassName: string;
  variant: "hero" | "satellite";
  showStepNumber?: boolean;
  revealDelayMs?: number;
}) {
  const num = String(step).padStart(2, "0");
  const isHero = variant === "hero";

  return (
    <MotionLink
      id={`services-${item.slug}`}
      href={`/services/${item.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: revealDelayMs / 1000, ease: REVEAL_EASE }}
      className={`card group relative flex min-h-[280px] min-w-0 flex-1 flex-col overflow-hidden border border-[color:var(--g200)] bg-[color:var(--ink-deep)] text-left shadow-[0_8px_28px_rgb(0_0_0/0.1)] outline-none transition-[box-shadow,transform,border-color] duration-300 ease-[var(--ease)] focus-visible:ring-2 focus-visible:ring-[color:var(--y)] focus-visible:ring-offset-2 focus-visible:ring-offset-white max-lg:hover:-translate-y-0.5 max-lg:hover:shadow-[0_20px_48px_rgb(0_0_0/0.16)] max-lg:focus-visible:-translate-y-0.5 max-lg:focus-visible:shadow-[0_20px_48px_rgb(0_0_0/0.16)] lg:min-w-0 lg:flex-none lg:hover:-translate-y-0 lg:hover:border-[color:var(--y)]/45 lg:hover:shadow-[0_16px_40px_rgb(0_0_0/0.14)] lg:focus-visible:border-[color:var(--y)]/45 lg:focus-visible:shadow-[0_16px_40px_rgb(0_0_0/0.14)] ${
        isHero ? "lg:min-h-[460px]" : "lg:min-h-[280px]"
      } motion-reduce:transform-none motion-reduce:hover:transform-none motion-reduce:focus-visible:transform-none ${gridClassName} ${TILE_SCROLL_MT}`}
    >
      {showStepNumber ? (
        <span
          className="card__num pointer-events-none absolute right-3 top-3 z-[4] select-none font-serif text-[clamp(52px,12vw,64px)] font-bold leading-none tracking-[-0.04em] text-white/[0.11] transition-colors duration-300 ease-[var(--ease)] group-hover:text-[color:var(--y)]/30 group-focus-visible:text-[color:var(--y)]/30 sm:right-4 sm:top-4"
          aria-hidden
        >
          {num}
        </span>
      ) : null}

      <div className="card__media pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <ServiceLabImg
          src={item.imageUrl}
          fallbackSrc={item.fallbackImageUrl}
          alt={item.imageAlt}
          className="h-full w-full object-cover opacity-95 transition-[transform] duration-500 ease-[var(--ease)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
        />
      </div>

      <div
        className="card__overlay card__overlay--read pointer-events-none absolute inset-0 z-[2] bg-[rgb(0_0_0/0.32)]"
        aria-hidden
      />
      <div
        className="card__overlay card__overlay--read pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[rgb(0_0_0/0.78)] via-[rgb(0_0_0/0.28)] to-transparent"
        aria-hidden
      />

      <div
        className="card__overlay card__overlay--solid pointer-events-none absolute inset-0 z-[2] bg-black opacity-0 transition-opacity duration-300 ease-[var(--ease)] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        aria-hidden
      />

      <div className="relative z-[3] mt-auto flex flex-col px-6 py-7 sm:px-8 sm:py-8">
        <h3 className="card__title font-serif text-lg font-bold uppercase leading-snug tracking-[0.04em] text-white transition-colors duration-300 ease-[var(--ease)] sm:text-xl">
          {serviceTitleTone(item.title)}
        </h3>
        <p className="card__desc mt-0 max-h-0 overflow-hidden text-sm leading-relaxed text-white/92 opacity-0 transition-[max-height,opacity,margin] duration-400 ease-[var(--ease)] group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:mt-3 group-focus-visible:max-h-32 group-focus-visible:opacity-100 motion-reduce:transition-none">
          {item.short}
        </p>
        <span className="card__link mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--y)] transition-[transform,color] duration-300 ease-[var(--ease)] group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0">
          View service →
        </span>
      </div>
    </MotionLink>
  );
}

export function GLFeaturedServicesBento({
  sectionId = "what-we-do",
  headingId = "featured-services-heading",
  content,
  services: servicesProp,
  showProgressRail = true,
  showStepNumbers = true,
}: GLFeaturedServicesBentoProps = {}) {
  const featured = content ?? defaultFeaturedContent;
  const services = servicesProp ?? GROUND_LEVEL_SERVICES;
  const servicesWithImages = useMemo(() => mergeLabImages(services), [services]);
  const [selected, setSelected] = useState(0);
  const ctaHref = featured.ctaHref ?? "#contact";

  const onShortcutClick = useCallback((e: MouseEvent<HTMLAnchorElement>, slug: string, index: number) => {
    const id = `services-${slug}`;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setSelected(index);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    history.replaceState(null, "", `#${id}`);
  }, []);

  const tiles = useMemo(() => {
    const [hero, ...rest] = servicesWithImages;
    if (!hero || rest.length !== 5) return null;
    const [s0, s1, s2, s3, s4] = rest;
    return [
      {
        item: hero,
        step: 1,
        variant: "hero" as const,
        grid: "lg:col-span-4 lg:row-span-2 lg:row-start-1 lg:col-start-1",
      },
      {
        item: s0,
        step: 2,
        variant: "satellite" as const,
        grid: "lg:col-span-2 lg:row-span-1 lg:row-start-1 lg:col-start-5",
      },
      {
        item: s1,
        step: 3,
        variant: "satellite" as const,
        grid: "lg:col-span-2 lg:row-span-1 lg:row-start-2 lg:col-start-5",
      },
      {
        item: s2,
        step: 4,
        variant: "satellite" as const,
        grid: "lg:col-span-2 lg:row-span-1 lg:row-start-3 lg:col-start-1",
      },
      {
        item: s3,
        step: 5,
        variant: "satellite" as const,
        grid: "lg:col-span-2 lg:row-span-1 lg:row-start-3 lg:col-start-3",
      },
      {
        item: s4,
        step: 6,
        variant: "satellite" as const,
        grid: "lg:col-span-2 lg:row-span-1 lg:row-start-3 lg:col-start-5",
      },
    ] as const;
  }, [servicesWithImages]);

  if (!tiles) return null;

  return (
    <section
      id={sectionId}
      className="section-major band-light relative scroll-mt-[var(--header)] overflow-hidden view-reveal"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(250_250_250),rgb(255_255_255))]"
        aria-hidden
      />
      <ClaudeLogicWatermark placement="top-left" className="opacity-[0.07]" />
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5">
          <p className="label-overline mb-3">{featured.eyebrow}</p>
          <h2
            id={headingId}
            className="font-serif text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {toneSplit(featured.heading)}
          </h2>
          <div className="mt-[var(--s7)]">
            <ExpandableCopy text={featured.intro} className="text-sm leading-relaxed text-ink-muted sm:text-base" />
          </div>
        </div>

        <nav
          aria-label="Service line shortcuts"
          className="sticky top-[var(--header)] z-20 -mx-4 mt-10 w-full min-w-0 border-y border-[color:var(--g200)] bg-[color:var(--brand-canvas)]/95 backdrop-blur-sm sm:-mx-6 sm:mt-12"
        >
          <ul className="flex w-full min-w-0 max-w-full flex-nowrap items-stretch gap-1.5 overflow-x-auto overscroll-x-contain px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-2 sm:px-6 [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center lg:gap-2 lg:overflow-x-visible lg:snap-none">
            {servicesWithImages.map((s, i) => {
              const isSel = selected === i;
              return (
                <li key={s.slug} className="snap-start shrink-0">
                  <a
                    href={`#services-${s.slug}`}
                    aria-current={isSel ? "true" : undefined}
                    onClick={(e) => onShortcutClick(e, s.slug, i)}
                    className={`inline-flex max-w-[min(100%,11.5rem)] min-h-11 items-center justify-center px-2.5 py-2 text-center font-label text-[length:clamp(0.6875rem,0.52rem+1.35vw,0.8125rem)] font-semibold uppercase leading-tight tracking-[0.08em] transition-[background,color,box-shadow] max-sm:line-clamp-2 max-sm:whitespace-normal sm:max-w-none sm:h-11 sm:min-h-0 sm:px-3.5 sm:py-0 sm:leading-none sm:tracking-[0.12em] md:px-4 ${
                      isSel
                        ? "bg-[color:var(--ink-deep)] text-white shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]"
                        : "border border-[color:var(--g200)] bg-white/80 text-ink hover:border-[color:var(--y)]/45"
                    }`}
                  >
                    {serviceTitleTone(s.title)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative mt-10 sm:mt-12 lg:mt-12">
          {showProgressRail ? <span className={YELLOW_THREAD_VERTICAL} aria-hidden /> : null}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:gap-4">
            {tiles.map((t, i) => (
              <div key={t.item.slug} className="group relative flex items-stretch gap-4 lg:contents">
                {showStepNumbers ? (
                  <div className="relative z-10 flex shrink-0 items-start pt-4 lg:hidden">
                    <StepNode index={t.step} />
                  </div>
                ) : null}
                <GlcServiceCard
                  item={t.item}
                  step={t.step}
                  gridClassName={t.grid}
                  variant={t.variant}
                  showStepNumber={showStepNumbers}
                  revealDelayMs={i * 70}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {isInternalRoute(ctaHref) ? (
            <Link href={ctaHref} className="cta-primary inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em]">
              {featured.cta}
            </Link>
          ) : (
            <a href={ctaHref} className="cta-primary inline-block px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em]">
              {featured.cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
