/**
 * Slice of content/types.ts — navigation + mega menu types only.
 * Canonical source: ../../content/types.ts (keep in sync when extending NavigationConfig).
 */

export type NavLink = {
  label: string;
  href: string;
};

/** Rich row for mobile drawer service lines (icon + title + short blurb). */
export type MobileMegaServiceRow = {
  href: string;
  slug: string;
  title: string;
  description: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type FooterConfig = {
  tagline: string;
  columns: FooterColumn[];
  legal: NavLink[];
};

export type MobileNavCloneConfig = {
  topLinks: NavLink[];
  services: NavLink[];
  company: NavLink[];
  phoneDisplay: string;
  phoneHref: string;
  quoteHref: string;
  quoteLabel: string;
};

export type MegaMenuCard = {
  slug: string;
  num: string;
  title: string;
  description: string;
  /** Lines for the homepage services grid `h3` (line breaks between). */
  gridTitle: string[];
  /** Long description under the service grid card title. */
  gridDescription: string;
};

export type CompanyMegaColumn = {
  title: string;
  links: NavLink[];
};

export type CompanyMegaConfig = {
  kicker: string;
  intro: string;
  columns: CompanyMegaColumn[];
  dispatchBand: {
    kicker: string;
    title: string;
    sub: string;
    phoneDisplay: string;
    phoneHref: string;
  };
};

export type NavigationConfig = {
  utility: {
    locationLine: string;
    phoneDisplay: string;
    phoneHref: string;
  };
  utilityRotator: string[];
  primary: NavLink[];
  megaMenu: {
    kicker: string;
    intro: string;
    viewAllHref: string;
    viewAllLabel: string;
    cards: MegaMenuCard[];
  };
  companyMega: CompanyMegaConfig;
  mobile: {
    links: NavLink[];
  };
  footer: FooterConfig;
};
