"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useId, useState } from "react";
import { ClaudeLogicWatermark } from "@/components/ui/ClaudeLogicWatermark";
import { ExpandSection } from "@/components/drainage-hardscaping/ExpandSection";
import { SectionEyebrow, YellowRule } from "@/components/drainage-hardscaping/primitives";
import {
  DRAINAGE_IMAGES,
  DRAINAGE_SITE_DRAINAGE,
} from "@/lib/site/drainage-hardscaping-landing-content";

const icons = [
  <svg key="1" viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M8 28h24M12 12v16M20 8v20M28 14v14" />
  </svg>,
  <svg key="2" viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M4 24c8-6 24-6 32 0" />
  </svg>,
  <svg key="3" viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="12" y="12" width="16" height="16" />
  </svg>,
  <svg key="4" viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M4 28L16 16l8 8 12-12" />
  </svg>,
  <svg key="5" viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M8 20h24M8 12v16M32 12v16" />
  </svg>,
];

export function SiteDrainageDesignClient({ sectionId }: { sectionId: string }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const headingId = useId();

  const openAndScroll = useCallback((solutionIndex: number) => {
    setDetailOpen(true);
    requestAnimationFrame(() => {
      document.getElementById(`drain-solution-${solutionIndex}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  const summary = (
    <p className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
      {DRAINAGE_SITE_DRAINAGE.summary} {DRAINAGE_SITE_DRAINAGE.summaryCont}
    </p>
  );

  const expanded = (
    <div className="space-y-8">
      {DRAINAGE_SITE_DRAINAGE.expandNarrative.split("\n\n").map((para) => (
        <p key={para.slice(0, 40)} className="text-[15px] leading-[1.72] text-white/90 sm:text-base">
          {para}
        </p>
      ))}
      <div>
        <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white sm:text-2xl">
          {DRAINAGE_SITE_DRAINAGE.whatsIncludedHeader}
        </h3>
        <ul className="mt-4 list-inside list-disc space-y-2 text-[15px] leading-[1.72] text-white/90">
          {DRAINAGE_SITE_DRAINAGE.whatsIncluded.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold uppercase tracking-[0.02em] text-white sm:text-2xl">
          {DRAINAGE_SITE_DRAINAGE.solutionsIntro}
        </h3>
        <div className="mt-6 space-y-8">
          {DRAINAGE_SITE_DRAINAGE.solutions.map((sol, i) => (
            <div key={sol.label} id={`drain-solution-${i}`} className="scroll-mt-[calc(var(--header)+24px)]">
              <p className="font-serif text-lg font-bold uppercase tracking-[0.02em] text-[color:var(--y)]">{sol.label}</p>
              <p className="mt-2 text-[15px] leading-[1.72] text-white/90">{sol.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
          <Image src={DRAINAGE_IMAGES.siteDrainage1.src} alt={DRAINAGE_IMAGES.siteDrainage1.alt} fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
          <Image src={DRAINAGE_IMAGES.siteDrainage2.src} alt={DRAINAGE_IMAGES.siteDrainage2.alt} fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
          <Image src={DRAINAGE_IMAGES.siteDrainage3.src} alt={DRAINAGE_IMAGES.siteDrainage3.alt} fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" />
        </div>
      </div>
      <Link href={DRAINAGE_SITE_DRAINAGE.subPageHref} className="eyebrow inline-block text-[color:var(--y)]">
        Learn more about our Site Drainage Design service page →
      </Link>
    </div>
  );

  return (
    <section
      id={sectionId}
      className="section-major band-dark-field relative scroll-mt-[var(--header)] overflow-hidden"
      aria-labelledby={headingId}
    >
      <ClaudeLogicWatermark placement="bottom-right" mode="on-dark" className="z-[1] opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-1/2 max-lg:hidden" aria-hidden>
        <div className="relative h-full min-h-[400px] border-l border-white/10">
          <Image src={DRAINAGE_IMAGES.siteDrainage1.src} alt="" fill className="object-cover opacity-90" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] to-transparent" aria-hidden />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[min(100%,var(--max))]">
        <div className="max-w-2xl border-l-4 border-[color:var(--y)] pl-5 lg:max-w-none">
          <YellowRule className="mb-8" />
          <SectionEyebrow text={DRAINAGE_SITE_DRAINAGE.eyebrow} band="dark" />
          <h2
            id={headingId}
            className="mt-[var(--s7)] font-serif text-3xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-[clamp(36px,3.5vw,52px)]"
          >
            {DRAINAGE_SITE_DRAINAGE.h2}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-6 border-y border-white/10 py-8 sm:gap-10">
          {DRAINAGE_SITE_DRAINAGE.solutionStripLabels.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => openAndScroll(i)}
              className="flex min-w-[100px] flex-1 flex-col items-center gap-3 text-center"
            >
              <span className="text-[color:var(--y)]">{icons[i]}</span>
              <span className="eyebrow text-white">{label}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <ExpandSection
            band="dark"
            hashId={DRAINAGE_SITE_DRAINAGE.id}
            open={detailOpen}
            onOpenChange={setDetailOpen}
            summary={summary}
            triggerLabel={DRAINAGE_SITE_DRAINAGE.expandTrigger}
          >
            {expanded}
          </ExpandSection>
        </div>
      </div>
    </section>
  );
}
