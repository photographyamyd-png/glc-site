"use client";

import Link from "next/link";
import "./hauling-lane-shell.css";
import { GlcDnaLaneStyles } from "@/components/glc-dna/GlcDnaLaneStyles";
import { HeroSection } from "@/components/glc-dna/sections/hero-section";
import { AboutSection } from "@/components/glc-dna/sections/about-section";
import { ServicesGridSection } from "@/components/glc-dna/sections/services-grid-section";
import { CtaBandSection } from "@/components/glc-dna/sections/cta-band-section";
import { WhySection } from "@/components/glc-dna/sections/why-section";
import { ProcessSection } from "@/components/glc-dna/sections/process-section";
import { HaulingFaqServiceGridSection } from "@/components/services/hauling/HaulingFaqServiceGridSection";
import { HaulingLaneVisualDivision } from "@/components/services/hauling/HaulingLaneVisualDivision";
import { CoverageSection } from "@/components/glc-dna/sections/coverage-section";
import type { HaulingGlcDnaLaneProps } from "@/lib/site/hauling-glc-dna-map";

export function HaulingGlcDnaLane(props: HaulingGlcDnaLaneProps) {
  const { faqAccordion } = props;

  return (
    <>
      <GlcDnaLaneStyles />
      <div className="glc-dna-sandbox scroll-mt-[var(--header)]" id="hauling-glc-dna-lane">
        <HeroSection {...props.hero} />

        <div className="band-light section-major scroll-mt-[var(--header)]">
          <AboutSection {...props.scopeAbout} />
        </div>

        <HaulingLaneVisualDivision />

        <div className="band-dark-field section-major scroll-mt-[var(--header)]">
          <ServicesGridSection {...props.fieldGrid} />
        </div>

        <div className="band-light section-major scroll-mt-[var(--header)]">
          <CtaBandSection sectionId="mid-cta" {...props.midCta} />
        </div>

        <WhySection {...props.why} />

        <div className="band-light section-major scroll-mt-[var(--header)]">
          <ProcessSection {...props.process} />
        </div>

        <section
          id="faq"
          className="section-major scroll-mt-[var(--header)] band-dark text-white"
          aria-labelledby="hauling-faq-grid-heading"
        >
          <div className="mx-auto max-w-[min(100%,var(--max))] px-4 sm:px-6 lg:px-10">
            <details
              name="hauling-faq-bridge"
              className="group mb-8 border border-white/20 bg-[rgb(255_255_255/0.06)] p-4 backdrop-blur-sm"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold uppercase tracking-[0.04em] text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span id="hauling-faq-summary-heading">Where are detailed specifications and FAQ answers?</span>
                <span className="eyebrow text-[color:var(--y)] group-open:hidden">+</span>
                <span className="hidden eyebrow text-[color:var(--y)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.72] text-white/88 sm:text-base">
                Long-form capability notes, procurement language, and the full project FAQ live in{" "}
                <Link href="#seo-technical-basement" className="font-semibold text-[color:var(--y)] underline underline-offset-2">
                  Technical Specifications &amp; Project FAQ
                </Link>{" "}
                at the bottom of this page — same answers, organized for quick scanning.
              </p>
            </details>
          </div>

          <HaulingFaqServiceGridSection faqAccordion={faqAccordion} />
        </section>

        <CoverageSection {...props.coverage} />

        <div className="band-dark-field section-major scroll-mt-[var(--header)]">
          <ServicesGridSection {...props.relatedGrid} />
        </div>

        <div className="band-light section-major scroll-mt-[var(--header)]">
          <CtaBandSection sectionId="request-site-visit" {...props.finalCta} />
        </div>
      </div>
    </>
  );
}
