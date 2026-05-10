import Image from "next/image";
import Link from "next/link";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { DrainageFaqAccordion } from "@/components/drainage-hardscaping/DrainageFaqAccordion";
import { DrainageHardscapingJsonLd } from "@/components/seo/DrainageHardscapingJsonLd";
import { ExpandSection } from "@/components/drainage-hardscaping/ExpandSection";
import { CTAButton, SectionEyebrow, YellowRule } from "@/components/drainage-hardscaping/primitives";
import { ServiceCard } from "@/components/drainage-hardscaping/ServiceCard";
import { SiteDrainageDesignClient } from "@/components/drainage-hardscaping/SiteDrainageDesignClient";
import { GoogleReviewsPanel } from "@/components/drainage-hardscaping/GoogleReviewsPanel";
import { StickyTabBox } from "@/components/drainage-hardscaping/StickyTabBox";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";
import {
  DRAINAGE_FINAL_CTA,
  DRAINAGE_HERO,
  DRAINAGE_IMAGES,
  DRAINAGE_INTEGRATION,
  DRAINAGE_INTRO_EXPAND,
  DRAINAGE_INTRO_EXPAND_TRIGGER,
  DRAINAGE_INTRO_INLINE_CTA,
  DRAINAGE_INTRO_PANEL_EYEBROW,
  DRAINAGE_INTRO_PANEL_LIST,
  DRAINAGE_INTRO_VISIBLE,
  DRAINAGE_MID_CTA,
  DRAINAGE_PATIOS,
  DRAINAGE_PROCESS,
  DRAINAGE_RELATED_CARDS,
  DRAINAGE_RETAINING_WALLS,
  DRAINAGE_SERVICE_AREAS,
  DRAINAGE_SERVICE_CARDS,
  DRAINAGE_SERVICE_CARDS_EYEBROW,
  DRAINAGE_TRUST_BAR,
  DRAINAGE_TRUST_SIGNALS,
  DRAINAGE_WHY_CHOOSE,
  DRAINAGE_DRAIN_TILE,
  DRAINAGE_FAQ,
  DRAINAGE_INTRO_EYEBROW,
  DRAINAGE_SITE_DRAINAGE,
  drainageHeroPhoneCta,
} from "@/lib/site/drainage-hardscaping-landing-content";
import { substituteGoogleReviewPlaceholders } from "@/lib/site/google-business-env";
import type { ServiceDef } from "@/lib/site/registry";
import { cn } from "@/lib/utils";

const bodyLight = "text-[15px] leading-[1.72] text-ink sm:text-base";
const bodyDark = "text-[15px] leading-[1.72] text-white/90 sm:text-base";

type Props = { service: ServiceDef; related: ServiceDef[] };

function cardIconDroplet() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M20 6c-6 10-10 14-10 20a10 10 0 1020 0c0-6-4-10-10-20z" />
    </svg>
  );
}
function cardIconGrid() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 8h10v10H8zM22 8h10v10H22M8 22h10v10H8M22 22h10v10H22" />
    </svg>
  );
}
function cardIconWall() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M6 32V12l6-4 6 4 6-4 6 4v20H6z" />
    </svg>
  );
}
function cardIconPatio() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 28h24V12H8v16zm4-12h6v6h-6v-6zm8 0h6v6h-6v-6zm8 0h6v6h-6v-6z" />
    </svg>
  );
}
function cardIconMerge() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="14" cy="14" r="6" />
      <circle cx="26" cy="14" r="6" />
      <path d="M20 20v10M14 26h12" />
    </svg>
  );
}
function cardIconClipboard() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 8h16v28H12V8zm4-4h8v6h-8V4z" />
    </svg>
  );
}

const SERVICE_ICONS = [cardIconDroplet, cardIconGrid, cardIconWall, cardIconPatio, cardIconMerge, cardIconClipboard];

function renderBoldLines(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const m = line.match(/^- \*\*(.+?)\*\* — (.+)$/);
    if (m) {
      return (
        <p key={i} className="mt-2">
          <strong className="font-semibold text-ink">{m[1]}</strong> — {m[2]}
        </p>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    return (
      <p key={i} className="mt-2">
        {line}
      </p>
    );
  });
}

/** Compositional anchor column for retaining wall tab panels (design-system §4). */
function RetainingWallTabSidecar({ tabIndex }: { tabIndex: number }) {
  if (tabIndex === 3) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
        <Image src={DRAINAGE_IMAGES.wallLake1.src} alt={DRAINAGE_IMAGES.wallLake1.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
      </div>
    );
  }
  if (tabIndex === 2) {
    return (
      <div className="grid gap-4">
        <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
          <Image src={DRAINAGE_IMAGES.wallBlock1.src} alt={DRAINAGE_IMAGES.wallBlock1.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
          <Image src={DRAINAGE_IMAGES.wallBlock2.src} alt={DRAINAGE_IMAGES.wallBlock2.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
        </div>
      </div>
    );
  }
  if (tabIndex === 1) {
    return (
      <div className="grid gap-4 sm:grid-cols-1">
        <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
          <Image src={DRAINAGE_IMAGES.wallBlock1.src} alt={DRAINAGE_IMAGES.wallBlock1.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
          <Image src={DRAINAGE_IMAGES.wallBlock2.src} alt={DRAINAGE_IMAGES.wallBlock2.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-4 sm:grid-cols-1">
      <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
        <Image src={DRAINAGE_IMAGES.wallArmour1.src} alt={DRAINAGE_IMAGES.wallArmour1.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
        <Image src={DRAINAGE_IMAGES.wallArmour2.src} alt={DRAINAGE_IMAGES.wallArmour2.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
      </div>
    </div>
  );
}

export function DrainageHardscapingPage({ service, related }: Props) {
  void service;
  void related;

  return (
    <article className="relative">
      <DrainageHardscapingJsonLd />

      {/* 01 Hero + trust metrics — single section avoids consecutive dark band vs trust (design-system §2). */}
      <section
        className="hero-stage band-dark-field relative flex scroll-mt-[var(--header)] flex-col overflow-hidden"
        aria-labelledby="drainage-hero-h1"
      >
        <div className="relative min-h-[min(100dvh,920px)] w-full">
          <div className="absolute inset-0">
            <Image
              src={DRAINAGE_IMAGES.hero.src}
              alt={DRAINAGE_IMAGES.hero.alt}
              fill
              priority
              className="hero-bg-image object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[rgb(10_12_11/0.45)]" aria-hidden />
          <ClaudeLogicWatermark placement="bottom-right" className="z-[1] opacity-[0.18]" />

          <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-[min(100%,var(--max-bleed))] flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:justify-between lg:px-10 lg:pb-16 lg:pt-[calc(var(--header)+3rem)]">
            <div className="max-w-2xl pl-5">
              <nav aria-label="Breadcrumb" className="hero-eyebrow eyebrow text-white/55">
                <Link href="/" className="hover:text-[color:var(--y)]">
                  {DRAINAGE_HERO.breadcrumbHome}
                </Link>
                <span className="mx-2" aria-hidden>
                  /
                </span>
                <Link href="/services/" className="hover:text-[color:var(--y)]">
                  {DRAINAGE_HERO.breadcrumbServices}
                </Link>
                <span className="mx-2" aria-hidden>
                  /
                </span>
                <span className="text-white">{DRAINAGE_HERO.breadcrumbCurrent}</span>
              </nav>
              <h1
                id="drainage-hero-h1"
                className="hero-caption mt-[var(--s7)] font-serif text-[clamp(58px,8vw,118px)] font-semibold uppercase leading-[0.95] tracking-tight text-white"
              >
                {DRAINAGE_HERO.h1}
              </h1>
              <p className={`hero-caption mt-[56px] max-w-2xl text-xl text-white/90`}>{DRAINAGE_HERO.sub}</p>
              <div className="hero-cta-row mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
                <CTAButton variant="primary" href="/contact/">
                  {DRAINAGE_HERO.ctaPrimary}
                </CTAButton>
                <CTAButton variant="secondary" href="/contact/">
                  {DRAINAGE_HERO.ctaSecondary}
                </CTAButton>
                <CTAButton variant="ghost" href={PHONE_TEL}>
                  {drainageHeroPhoneCta()}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t-4 border-[color:var(--y)] bg-[var(--ink-deep)]">
          <div className="mx-auto grid max-w-[min(100%,var(--max))] grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {DRAINAGE_TRUST_BAR.map((item, i) => (
              <div
                key={item.value}
                className={cn(
                  "border-b border-white/10 px-4 py-8 sm:px-6 md:border-b-0 md:py-10",
                  i > 0 && "md:border-l md:border-white/10",
                )}
              >
                <p className="font-serif text-2xl font-bold text-[color:var(--y)]">{item.value}</p>
                <p className="mt-3 eyebrow text-white">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Intro */}
      <section className="section-major band-light scroll-mt-[var(--header)] view-reveal" id="intro-value">
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="grid gap-10 lg:col-span-8 lg:grid-cols-12 lg:gap-8">
              <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:col-span-7">
                <SectionEyebrow text={DRAINAGE_INTRO_EYEBROW} band="light" />
                <div className={`mt-[var(--s7)] ${bodyLight}`}>
                  <p>{DRAINAGE_INTRO_VISIBLE}</p>
                  <ExpandSection
                    band="light"
                    triggerLabel={DRAINAGE_INTRO_EXPAND_TRIGGER}
                    className="mt-6 border-t-0"
                  >
                    <div className="space-y-6 whitespace-pre-line">{DRAINAGE_INTRO_EXPAND}</div>
                  </ExpandSection>
                  <p className="mt-8 font-semibold text-ink">{DRAINAGE_INTRO_INLINE_CTA}</p>
                </div>
              </div>
              <div className="relative min-h-[220px] lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)] lg:sticky lg:top-[calc(var(--header)+24px)] lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={DRAINAGE_IMAGES.introSidecar.src}
                    alt={DRAINAGE_IMAGES.introSidecar.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 35vw,100vw"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="bespoke-surface panel-machined border border-white/10 bg-[rgb(10_12_11/0.45)] p-6 backdrop-blur-md shadow-2xl sm:p-8 lg:sticky lg:top-[calc(var(--header)+24px)]">
                <p className="eyebrow text-[color:var(--y)]">{DRAINAGE_INTRO_PANEL_EYEBROW}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/90 sm:text-[15px]">
                  {DRAINAGE_INTRO_PANEL_LIST.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <CTAButton variant="primary" href="/contact/" className="mt-8 w-full sm:w-auto">
                  {DRAINAGE_HERO.ctaPrimary}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Service cards */}
      <section className="section-major band-dark-field relative overflow-hidden scroll-mt-[var(--header)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14] motion-reduce:opacity-[0.08]"
          aria-hidden
        >
          <div className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[linear-gradient(90deg,var(--y)_1px,transparent_1px)] bg-[length:48px_100%]" />
        </div>
        <ClaudeLogicWatermark placement="top-left" mode="on-dark" className="opacity-[0.12]" />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <p className="eyebrow text-white">{DRAINAGE_SERVICE_CARDS_EYEBROW}</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DRAINAGE_SERVICE_CARDS.map((card, i) => (
              <ServiceCard
                key={card.title}
                icon={SERVICE_ICONS[i]()}
                title={card.title}
                body={card.body}
                href={card.href}
                anchorLabel={card.anchorLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 05 Drain tile */}
      <section
        id={DRAINAGE_DRAIN_TILE.id}
        className="section-major band-light scroll-mt-[var(--header)]"
        aria-labelledby="drain-tile-h2"
      >
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <YellowRule className="mb-8" />
              <SectionEyebrow text={DRAINAGE_DRAIN_TILE.eyebrow} band="light" />
              <h2
                id="drain-tile-h2"
                className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.5vw,52px)]"
              >
                {DRAINAGE_DRAIN_TILE.h2}
              </h2>
              <ExpandSection
                band="light"
                hashId={DRAINAGE_DRAIN_TILE.id}
                summary={<p>{DRAINAGE_DRAIN_TILE.summary}</p>}
                triggerLabel={DRAINAGE_DRAIN_TILE.expandTrigger}
                className="mt-8 border-t-0"
              >
                <div className="space-y-10">
                  <div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                      {DRAINAGE_DRAIN_TILE.h3WhatIs}
                    </h3>
                    <div className={`mt-4 space-y-4 ${bodyLight}`}>
                      {DRAINAGE_DRAIN_TILE.whatIsBody.split("\n\n").map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                      {DRAINAGE_DRAIN_TILE.h3Signs}
                    </h3>
                    <p className={`mt-4 ${bodyLight}`}>{DRAINAGE_DRAIN_TILE.signsIntro}</p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-[15px] text-ink">
                      {DRAINAGE_DRAIN_TILE.signsBullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <p className={`mt-6 ${bodyLight}`}>{DRAINAGE_DRAIN_TILE.signsClosing}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                      {DRAINAGE_DRAIN_TILE.h3InteriorExterior}
                    </h3>
                    <div className={`mt-4 space-y-4 ${bodyLight}`}>
                      {DRAINAGE_DRAIN_TILE.interiorExteriorParas.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink sm:text-2xl">
                      {DRAINAGE_DRAIN_TILE.h3Process}
                    </h3>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-[15px] text-ink">
                      {DRAINAGE_DRAIN_TILE.processSteps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
                      <Image src={DRAINAGE_IMAGES.drainTileMain.src} alt={DRAINAGE_IMAGES.drainTileMain.alt} fill className="object-cover" sizes="50vw" />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
                      <Image src={DRAINAGE_IMAGES.drainTileSecondary.src} alt={DRAINAGE_IMAGES.drainTileSecondary.alt} fill className="object-cover" sizes="50vw" />
                    </div>
                  </div>
                  <Link href={DRAINAGE_DRAIN_TILE.subPageHref} className="eyebrow text-[color:var(--y)]">
                    {DRAINAGE_DRAIN_TILE.subPageLabel} →
                  </Link>
                </div>
              </ExpandSection>
              <Link href="/contact/" className="eyebrow mt-8 inline-block text-[color:var(--y)]">
                {DRAINAGE_DRAIN_TILE.ghostCta}
              </Link>
            </div>
            <div className="relative min-h-[280px] lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)] lg:sticky lg:top-[calc(var(--header)+24px)] lg:aspect-auto lg:min-h-[400px]">
                <Image src={DRAINAGE_IMAGES.drainTileMain.src} alt={DRAINAGE_IMAGES.drainTileMain.alt} fill className="object-cover" sizes="(min-width:1024px) 40vw,100vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteDrainageDesignClient sectionId={DRAINAGE_SITE_DRAINAGE.id} />

      {/* Retaining walls — intro split from md; tabs use 12-col narrative + sidecar; section-major bottom padding preserved (no pb-0). */}
      <section
        className="section-major band-light scroll-mt-[var(--header)] border-t border-[color:var(--g200)]"
        id={DRAINAGE_RETAINING_WALLS.id}
        aria-labelledby="walls-h2"
      >
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_RETAINING_WALLS.eyebrow} band="light" />
          <h2
            id="walls-h2"
            className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-[clamp(36px,3.5vw,52px)]"
          >
            {DRAINAGE_RETAINING_WALLS.h2}
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className={`min-w-0 space-y-4 md:col-span-7 ${bodyLight}`}>
              <p>{DRAINAGE_RETAINING_WALLS.intro}</p>
              <p>{DRAINAGE_RETAINING_WALLS.intro2}</p>
            </div>
            <div className="relative min-h-[200px] md:col-span-5">
              <div className="relative isolate z-0 aspect-[4/3] max-h-[min(70vh,400px)] overflow-hidden border border-[color:var(--g200)] md:sticky md:top-[calc(var(--header)+24px)] md:max-h-none md:aspect-auto md:min-h-[300px] lg:min-h-[320px]">
                <Image
                  src={DRAINAGE_IMAGES.wallArmour1.src}
                  alt={DRAINAGE_IMAGES.wallArmour1.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 40vw,100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[min(100%,var(--max))] px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:px-10">
          <StickyTabBox
            ariaLabel="Retaining wall types"
            tabs={DRAINAGE_RETAINING_WALLS.tabs.map((tab, ti) => ({
              label: tab.label,
              content: (
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="min-w-0 space-y-8 lg:col-span-7">
                    <p className={bodyLight}>{tab.summary}</p>
                    <ExpandSection band="light" summary={null} triggerLabel={tab.expandTrigger} className="border-t border-[color:var(--g200)]">
                      <div className={`space-y-4 ${bodyLight}`}>
                        {tab.expand.split("\n\n").map((p) => (
                          <p key={p.slice(0, 50)}>{p}</p>
                        ))}
                      </div>
                    </ExpandSection>
                    <Link href={tab.subHref} className="eyebrow inline-block text-[color:var(--y)]">
                      Learn more about our Retaining Wall service page →
                    </Link>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="space-y-4 lg:sticky lg:top-[calc(var(--header)+4.25rem)]">
                      <RetainingWallTabSidecar tabIndex={ti} />
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* Mid CTA */}
      <section
        className="band-dark-field relative scroll-mt-[var(--header)] border-y-4 border-[color:var(--y)] py-[var(--s14)]"
        aria-labelledby="mid-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, var(--y) 0, var(--y) 1px, transparent 1px, transparent 12px)`,
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-[min(100%,var(--max))] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2
              id="mid-cta-heading"
              className="font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-[clamp(36px,3.5vw,52px)]"
            >
              {DRAINAGE_MID_CTA.headline}
            </h2>
            <p className={`mt-[var(--s7)] max-w-xl ${bodyDark}`}>{DRAINAGE_MID_CTA.sub}</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:justify-center">
            <CTAButton variant="primary" href="/contact/">
              {DRAINAGE_MID_CTA.primary}
            </CTAButton>
            <CTAButton variant="secondary" href={PHONE_TEL}>
              {DRAINAGE_MID_CTA.secondary}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Patios */}
      <section className="section-major band-light scroll-mt-[var(--header)] pb-0" id={DRAINAGE_PATIOS.id} aria-labelledby="patios-h2">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 pb-10 sm:px-6 lg:px-10">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_PATIOS.eyebrow} band="light" />
          <h2 id="patios-h2" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase text-ink sm:text-[clamp(36px,3.5vw,52px)]">
            {DRAINAGE_PATIOS.h2}
          </h2>
          <div className={`mt-6 max-w-3xl space-y-4 ${bodyLight}`}>
            <p>{DRAINAGE_PATIOS.intro}</p>
            <p>{DRAINAGE_PATIOS.intro2}</p>
          </div>
        </div>
        <div className="mx-auto max-w-[min(100%,var(--max))] lg:px-10">
          <StickyTabBox
            ariaLabel="Patio and driveway types"
            tabs={DRAINAGE_PATIOS.tabs.map((tab, ti) => ({
              label: tab.label,
              content: (
                <div className="space-y-8">
                  <p className={bodyLight}>{tab.summary}</p>
                  {"typeLabels" in tab && tab.typeLabels ? (
                    <ul className="list-inside list-disc text-[15px] text-ink">
                      {tab.typeLabels.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  ) : null}
                  {ti === 0 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.patioInterlock1.src} alt={DRAINAGE_IMAGES.patioInterlock1.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.patioInterlock2.src} alt={DRAINAGE_IMAGES.patioInterlock2.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                    </div>
                  )}
                  {ti === 1 && (
                    <div className="relative aspect-[4/3] max-w-xl border border-[color:var(--g200)]">
                      <Image src={DRAINAGE_IMAGES.patioFlagstone.src} alt={DRAINAGE_IMAGES.patioFlagstone.alt} fill className="object-cover" sizes="100vw" />
                    </div>
                  )}
                  {ti === 2 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.patioConcrete1.src} alt={DRAINAGE_IMAGES.patioConcrete1.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.patioConcrete2.src} alt={DRAINAGE_IMAGES.patioConcrete2.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                    </div>
                  )}
                  {ti === 3 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.steps1.src} alt={DRAINAGE_IMAGES.steps1.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                      <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                        <Image src={DRAINAGE_IMAGES.steps2.src} alt={DRAINAGE_IMAGES.steps2.alt} fill className="object-cover" sizes="50vw" />
                      </div>
                    </div>
                  )}
                  <ExpandSection band="light" summary={null} triggerLabel={tab.expandTrigger} className="border-t">
                    <div className={`${bodyLight}`}>{renderBoldLines(tab.expand)}</div>
                  </ExpandSection>
                  <Link href={tab.subHref} className="eyebrow text-[color:var(--y)]">
                    Learn more about our Patios & Walkways service page →
                  </Link>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* Hardscape integration */}
      <section
        id={DRAINAGE_INTEGRATION.id}
        className="relative scroll-mt-[var(--header)] border-t-4 border-[color:var(--y)] band-dark-field"
        aria-labelledby="integration-h2"
      >
        <div className="relative min-h-[min(360px,50vh)] w-full lg:aspect-[16/5] lg:min-h-[360px]">
          <Image
            src={DRAINAGE_IMAGES.integrationHero.src}
            alt={DRAINAGE_IMAGES.integrationHero.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgb(10_12_11/0.45)]" aria-hidden />
          <ClaudeLogicWatermark placement="center-right" className="opacity-[0.18]" />
          <div className="absolute inset-x-0 bottom-0 z-10 max-w-[min(100%,var(--max))] px-4 pb-8 pl-5 sm:px-6 lg:px-10 lg:pl-[calc(28px+1.25rem)]">
            <h2
              id="integration-h2"
              className="max-w-4xl border-l-4 border-[color:var(--y)] pl-5 font-serif text-3xl font-semibold uppercase text-white sm:text-[clamp(36px,3.5vw,52px)]"
            >
              {DRAINAGE_INTEGRATION.h2}
            </h2>
          </div>
        </div>
        <div className="border-t-4 border-[color:var(--y)] bg-[var(--canvas)]">
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 py-[var(--s14)] sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <SectionEyebrow text={DRAINAGE_INTEGRATION.eyebrow} band="light" />
                <div className={`mt-6 space-y-6 ${bodyLight}`}>
                  {DRAINAGE_INTEGRATION.visibleParas.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <p className="eyebrow mt-10 text-ink">{DRAINAGE_INTEGRATION.listLeadIn}</p>
                <ul className="mt-6 space-y-6">
                  {DRAINAGE_INTEGRATION.condensedList.map((item) => (
                    <li key={item.title}>
                      <p className="font-serif text-lg font-bold uppercase tracking-[0.02em] text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-ink-muted sm:text-[15px]">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[240px] lg:col-span-5">
                <div className="grid gap-4 lg:sticky lg:top-[calc(var(--header)+24px)]">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
                    <Image
                      src={DRAINAGE_IMAGES.integrationCopy1.src}
                      alt={DRAINAGE_IMAGES.integrationCopy1.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 40vw,50vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)]">
                    <Image
                      src={DRAINAGE_IMAGES.integrationCopy2.src}
                      alt={DRAINAGE_IMAGES.integrationCopy2.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 40vw,50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact/" className="eyebrow mt-8 inline-block text-[color:var(--y)]">
              {DRAINAGE_INTEGRATION.ctaEyebrow}
            </Link>
            <ExpandSection
              band="light"
              summary={null}
              triggerLabel={DRAINAGE_INTEGRATION.expandTrigger}
              className="mt-10 border-t"
            >
              <div className={`space-y-4 whitespace-pre-line ${bodyLight}`}>{DRAINAGE_INTEGRATION.expandBody}</div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                  <Image src={DRAINAGE_IMAGES.integrationExpand1.src} alt={DRAINAGE_IMAGES.integrationExpand1.alt} fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                  <Image src={DRAINAGE_IMAGES.integrationExpand2.src} alt={DRAINAGE_IMAGES.integrationExpand2.alt} fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] border border-[color:var(--g200)]">
                  <Image src={DRAINAGE_IMAGES.integrationExpand3.src} alt={DRAINAGE_IMAGES.integrationExpand3.alt} fill className="object-cover" />
                </div>
              </div>
            </ExpandSection>
          </div>
        </div>
      </section>

      {/* Why choose — authority cluster; 4px rail above */}
      <div className="h-1 w-full bg-[color:var(--y)]" aria-hidden />
      <section className="section-major band-dark-field scroll-mt-[var(--header)]" aria-labelledby="why-h2">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_WHY_CHOOSE.eyebrow} band="dark" />
          <h2 id="why-h2" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase text-white sm:text-[clamp(36px,3.5vw,52px)]">
            {DRAINAGE_WHY_CHOOSE.h2}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {DRAINAGE_WHY_CHOOSE.points.map((pt) => (
              <div key={pt.title}>
                <YellowRule width="2px" className="mb-4" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-[0.02em] text-white">{pt.title}</h3>
                <p className={`mt-2 text-sm text-white/90 sm:text-[15px]`}>{pt.summary}</p>
                <ExpandSection band="dark" summary={null} triggerLabel={pt.expandTrigger} className="mt-4 border-white/10">
                  <p className={bodyDark}>{pt.body}</p>
                </ExpandSection>
              </div>
            ))}
          </div>
          <div className="relative mt-[60px] aspect-[16/5] min-h-[200px] w-full overflow-hidden border border-white/10">
            <Image src={DRAINAGE_IMAGES.whyChoose.src} alt={DRAINAGE_IMAGES.whyChoose.alt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
      </section>

      {/* Process — step bodies are longform; vertical list + sticky raster anchor (design-system §4). */}
      <section className="section-major band-light relative overflow-hidden scroll-mt-[var(--header)]" aria-labelledby="process-h2">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
          <div className="absolute -right-20 top-1/2 h-[120%] w-32 -translate-y-1/2 rotate-[15deg] bg-[linear-gradient(180deg,var(--y)_1px,transparent_1px)] bg-[length:100%_24px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_PROCESS.eyebrow} band="light" />
          <h2 id="process-h2" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase text-ink sm:text-[clamp(36px,3.5vw,52px)]">
            {DRAINAGE_PROCESS.h2}
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12">
            <ol className="relative list-none space-y-10 lg:col-span-7">
              {DRAINAGE_PROCESS.steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 pl-1 sm:pl-0">
                  {i < DRAINAGE_PROCESS.steps.length - 1 ? (
                    <span
                      className="absolute left-[26px] top-[3.25rem] hidden h-[calc(100%-0.5rem)] w-px border-l border-dashed border-[color:var(--y)] sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="font-serif text-5xl font-bold leading-none text-[color:var(--y)]">{i + 1}</span>
                  <div className="min-w-0 flex-1 pb-2">
                    <p className="font-serif text-base font-bold uppercase tracking-[0.02em] text-ink">{step.title}</p>
                    <p className={`mt-3 text-sm leading-[1.72] text-ink sm:text-[15px]`}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="relative min-h-[280px] lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-[color:var(--g200)] lg:sticky lg:top-[calc(var(--header)+24px)] lg:aspect-auto lg:min-h-[min(100%,560px)]">
                <Image
                  src={DRAINAGE_IMAGES.drainTileMain.src}
                  alt={DRAINAGE_IMAGES.drainTileMain.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw,100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section-major band-dark-field scroll-mt-[var(--header)]" aria-labelledby="areas-h2">
        <div className="mx-auto grid max-w-[min(100%,var(--max))] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <YellowRule className="mb-8" />
            <SectionEyebrow text={DRAINAGE_SERVICE_AREAS.eyebrow} band="dark" />
            <h2 id="areas-h2" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase text-white sm:text-[clamp(36px,3.5vw,52px)]">
              {DRAINAGE_SERVICE_AREAS.h2}
            </h2>
            <p className={`mt-6 ${bodyDark}`}>{DRAINAGE_SERVICE_AREAS.intro}</p>
            <p className="eyebrow mt-8 text-white">{DRAINAGE_SERVICE_AREAS.primaryHeading}</p>
            <ul className="mt-4 space-y-4">
              {DRAINAGE_SERVICE_AREAS.primary.map((row) => (
                <li key={row.city}>
                  <p className="font-serif text-base font-bold uppercase text-white">{row.city}</p>
                  <p className="mt-1 text-sm text-white/90">{row.note}</p>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-white">{DRAINAGE_SERVICE_AREAS.extendedHeading}</p>
            <p className="mt-2 text-sm text-white/55">{DRAINAGE_SERVICE_AREAS.extendedInline}</p>
            <p className={`mt-6 text-sm text-white/90 sm:text-[15px]`}>{DRAINAGE_SERVICE_AREAS.lakesideNote}</p>
          </div>
          <div className="relative min-h-[280px] border border-white/10">
            <Image
              src={DRAINAGE_IMAGES.serviceAreaMap.src}
              alt="Service area map drainage hardscaping landscaping Simcoe County Ontario"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw,100vw"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-major band-light scroll-mt-[var(--header)] py-[var(--s14)]" aria-labelledby="faq-h2">
        <DrainageFaqAccordion
          items={DRAINAGE_FAQ.items}
          headingId="faq-h2"
          eyebrow={DRAINAGE_FAQ.eyebrow}
          h2={DRAINAGE_FAQ.h2}
        />
      </section>

      {/* Trust */}
      <section className="section-major band-dark-field scroll-mt-[var(--header)]" aria-labelledby="trust-h2">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_TRUST_SIGNALS.eyebrow} band="dark" />
          <h2 id="trust-h2" className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase text-white sm:text-[clamp(36px,3.5vw,52px)]">
            {DRAINAGE_TRUST_SIGNALS.h2}
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DRAINAGE_TRUST_SIGNALS.items.map((item) => (
              <li key={item.label} className="flex gap-3">
                <svg className="mt-0.5 h-6 w-6 shrink-0 text-[color:var(--y)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <p className="font-serif text-base font-bold uppercase text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-white/90">{substituteGoogleReviewPlaceholders(item.sub)}</p>
                </div>
              </li>
            ))}
          </ul>
          <GoogleReviewsPanel />
        </div>
      </section>

      {/* Related */}
      <section className="section-major band-light scroll-mt-[var(--header)]" aria-labelledby="related-h2">
        <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
          <p className="eyebrow text-ink">RELATED SERVICES</p>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {DRAINAGE_RELATED_CARDS.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border border-[color:var(--g200)] border-t-[4px] border-t-[color:var(--y)] bg-white p-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-ink">{card.title}</span>
                  <p className="mt-3 text-sm text-ink-muted sm:text-[15px]">{card.body}</p>
                  <span className="eyebrow mt-auto pt-6 text-[color:var(--y)]">View Service →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id={DRAINAGE_FINAL_CTA.id}
        className="relative border-t-4 border-[color:var(--y)] scroll-mt-[var(--header)] py-[var(--s14)] band-dark-field"
        aria-labelledby="final-cta-h2"
      >
        <div className="absolute inset-0">
          <Image src={DRAINAGE_IMAGES.finalCta.src} alt={DRAINAGE_IMAGES.finalCta.alt} fill className="object-cover opacity-60" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[rgb(10_12_11/0.45)]" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))] px-4 text-center sm:px-6 lg:px-10">
          <h2 id="final-cta-h2" className="font-serif text-4xl font-semibold uppercase text-white sm:text-[48px]">
            {DRAINAGE_FINAL_CTA.line1}
          </h2>
          <p className="mt-2 font-serif text-4xl font-semibold uppercase text-[color:var(--y)] sm:text-[48px]">{DRAINAGE_FINAL_CTA.line2}</p>
          <p className={`mx-auto mt-8 max-w-2xl text-base text-white/90`}>{DRAINAGE_FINAL_CTA.sub}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton variant="primary" href="/contact/">
              {DRAINAGE_FINAL_CTA.ctaPrimary}
            </CTAButton>
            <CTAButton variant="secondary" href="/contact/">
              {DRAINAGE_FINAL_CTA.ctaSecondary}
            </CTAButton>
            <CTAButton variant="ghost" href={PHONE_TEL}>
              {DRAINAGE_FINAL_CTA.ctaPhone}
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-white/55">{DRAINAGE_FINAL_CTA.finePrint}</p>
        </div>
      </section>
    </article>
  );
}
