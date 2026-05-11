import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { ShardWatermark } from "@/components/process/ShardWatermark";
import {
  ClaudeLogicWatermark,
  type ClaudeWatermarkPlacement,
} from "@/components/ui/ClaudeLogicWatermark";
import { cn } from "@/lib/utils";

/**
 * Template 1 — Dark raster authority band (see SECTION_TEMPLATE_PLAYBOOK.txt).
 *
 * Shell only: `section-major band-dark`, full-bleed raster, dual scrims (preset),
 * optional atmosphere watermark, then `children` (headings, glass panels, grids).
 * Caller owns copy, heading levels, and inner max-width / padding — pass your own
 * `relative z-10 mx-auto max-w-[min(100%,var(--max))] px-*` wrapper when needed.
 *
 * When to use: mid-page or closing authority bands over photography (readability scrims).
 * When not to use: full 100dvh H1 service heroes (use ServicePageTemplate / GLHero), or
 * layouts that are not raster-led (e.g. flat band-dark + light cards only — unless you
 * add a raster intentionally as here).
 */
export type GLDarkRasterScrimPreset = "processShowcase";

export type GLDarkRasterFeatureSectionProps = Omit<
  ComponentPropsWithoutRef<"section">,
  "children"
> & {
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  scrimPreset: GLDarkRasterScrimPreset;
  watermark?: "none" | "claude" | "shard";
  claudeWatermarkPlacement?: ClaudeWatermarkPlacement;
  /** z-layer above scrims; keep low so content `z-10` stays on top */
  claudeWatermarkClassName?: string;
  shardWatermarkPlacement?: ComponentPropsWithoutRef<typeof ShardWatermark>["placement"];
  shardWatermarkOpacity?: number;
  shardWatermarkClassName?: string;
  children: ReactNode;
};

function ProcessShowcaseScrims() {
  return (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgb(10_12_11/0.92)] via-[rgb(10_12_11/0.6)] to-[rgb(10_12_11/0.35)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.7)] via-transparent to-[rgb(10_12_11/0.2)]"
        aria-hidden
      />
    </>
  );
}

export function GLDarkRasterFeatureSection({
  id,
  className,
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  priority = false,
  sizes = "100vw",
  scrimPreset,
  watermark = "none",
  claudeWatermarkPlacement = "bottom-right",
  claudeWatermarkClassName = "z-[1] opacity-[0.14] sm:opacity-[0.17]",
  shardWatermarkPlacement = "top-right",
  shardWatermarkOpacity = 0.06,
  shardWatermarkClassName = "text-[#f2b705]",
  children,
  ...sectionRest
}: GLDarkRasterFeatureSectionProps) {
  const scrims =
    scrimPreset === "processShowcase" ? <ProcessShowcaseScrims /> : null;

  return (
    <section
      id={id}
      className={cn(
        "section-major band-dark relative overflow-hidden view-reveal",
        className,
      )}
      {...sectionRest}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(imageClassName)}
      />
      {scrims}
      {watermark === "claude" ? (
        <ClaudeLogicWatermark
          placement={claudeWatermarkPlacement}
          mode="on-dark"
          className={claudeWatermarkClassName}
        />
      ) : null}
      {watermark === "shard" ? (
        <ShardWatermark
          placement={shardWatermarkPlacement}
          opacity={shardWatermarkOpacity}
          className={shardWatermarkClassName}
        />
      ) : null}
      {children}
    </section>
  );
}
