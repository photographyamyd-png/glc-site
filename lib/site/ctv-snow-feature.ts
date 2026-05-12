/**
 * Featured coverage — CTV News Barrie
 * Segment: "Municipalities relying on the same resource to manage winter weather"
 * Published: January 08, 2026 at 6:23PM EST
 *
 * In-page player: YouTube mirror — CTV iframe host blocks third-party embeds.
 * @see https://www.ctvnews.ca/barrie/video/2026/01/08/municipalities-relying-on-the-same-resource-to-manage-winter-weather/
 */
export const ctvSnowFeature = {
  eyebrow: "Press proof",
  /** Legacy card title — retained for structured data / iframe title context. */
  heading: "Featured coverage — CTV News Barrie",
  /** Authority bridge — primary H2 in cinema section. */
  authorityH2: "Recognized for Reliability: Ground Level in the News.",
  authoritySub:
    "When record-breaking storms hit Simcoe County, CTV News turned to Ground Level Contracting for insight on industrial-scale response.",
  /** Alternate short sub for compact layouts. */
  authoritySubShort:
    "See why local news relies on our expertise during peak winter emergencies.",
  segmentTitle: "Municipalities relying on the same resource to manage winter weather",
  ctvBodyParagraphs: [
    "Road salt is becoming an expensive commodity for private contractors in Simcoe County.",
    "January 08, 2026 at 6:23PM EST",
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
