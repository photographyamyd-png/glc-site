/**
 * Master Project Bible §II — Design DNA extracted for the homepage laboratory.
 * Mathematical spacing: strict 4px base; use multiples only (§XIII).
 * Reference from components via this module + `app/globals.css` variables.
 */
export const DNA = {
  canvas: "#fafafa",
  spacingPx: {
    /** 4px base unit — all gaps/padding should be n × 4 */
    base: 4,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 48,
  },
  type: {
    /** §VIII — approximate 5:1 hero H1 max vs body (tuned in SectionImpactHorizon) */
    heroH1MaxRem: 5.5,
    heroBodyMaxRem: 1,
    /** §IX — heading vs description weight target */
    boutiqueHeadingToBody: "1:3",
  },
  semantics: {
    primaryCtaClass: "cta-pop",
    secondaryCtaClass: "cta-outline-light",
    panelClass: "panel-machined",
  },
} as const;

/** §III Decision matrix — proof pattern selection */
export type ProofPattern = "pedigree" | "boutique" | "workhorse";

export const DECISION_MATRIX = {
  /** Business intent classification for this homepage */
  intent: "workhorse" as ProofPattern,
  /** Maps intent → proof treatment (stamps, metrics, narrative density) */
  proofPattern:
    "Monochrome third-party marks at 40% opacity; roster, bonding, and trade-union credibility over lifestyle gloss.",
} as const;
