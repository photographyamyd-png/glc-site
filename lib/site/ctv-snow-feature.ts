/**
 * Featured coverage — CTV News Barrie
 * Segment: "Municipalities relying on the same resource to manage winter weather"
 * Published: January 08, 2026 at 6:23 PM EST
 *
 * In-page player: YouTube mirror — CTV iframe host blocks third-party embeds.
 * @see https://www.ctvnews.ca/barrie/video/2026/01/08/municipalities-relying-on-the-same-resource-to-manage-winter-weather/
 */
export const ctvSnowFeature = {
  eyebrow: "Press proof",
  /** Legacy card title — retained for structured data / iframe title context. */
  heading: "Featured coverage — CTV News Barrie",
  /** Section heading for the CTV proof block. */
  authorityH2: "Featured on CTV News",
  /** Factual summary that does not imply an interview or expert commentary. */
  authoritySub:
    "CTV News covered rising road-salt costs and winter-response challenges facing private contractors in Simcoe County. Ground Level Contracting’s winter operations were featured in the segment.",
  /** Alternate short sub for compact layouts. */
  authoritySubShort:
    "CTV News covered winter-response challenges facing private contractors in Simcoe County.",
  segmentTitle: "Municipalities relying on the same resource to manage winter weather",
  ctvBodyParagraphs: [
    "Road salt is becoming an expensive commodity for private contractors in Simcoe County.",
    "January 08, 2026 at 6:23 PM EST",
  ],
  segmentEmbedSrc: "https://www.youtube.com/embed/IvSW_aS1T2E",
  ctvArticleUrl:
    "https://www.ctvnews.ca/barrie/video/2026/01/08/municipalities-relying-on-the-same-resource-to-manage-winter-weather/",
  /** Kicker on the video poster (pre-play). */
  posterKicker: "Record-breaking storm response",
  /** Shown on white media bar under the player. */
  asFeaturedOnLabel: "As Featured On CTV News.",
  /** Optional partner marks — add files under `public/` when assets exist; empty = CTV-only bar. */
  mediaBarPartnerSrcs: [] as const,
} as const;
