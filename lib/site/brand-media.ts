/**
 * Site-wide brand video loops — paths under `public/images/services/`.
 * Encode path segments with spaces via encodeURIComponent when building URLs.
 */

export type BrandLoopVideo = {
  readonly src: string;
  readonly posterSrc: string;
  readonly ariaLabel: string;
};

const SNOW_VIDEOS_BASE = "/images/services/Snow%20Removal/Videos";

/** Muted hero/CTA background loop — commercial construction and site operations reel. */
export const GLC_PROJECT_REEL_LOOP: BrandLoopVideo = {
  src: `${SNOW_VIDEOS_BASE}/${encodeURIComponent("Ground Level Contracting - Project Video.MP4")}`,
  posterSrc: "/images/services/Excavation/excavation-016.jpg",
  ariaLabel:
    "Ground Level Contracting commercial construction and site operations in Simcoe County",
};
