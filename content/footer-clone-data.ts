import navigation from "@/content/navigation.json";
import site from "@/content/site.json";
import type { FooterConfig, NavigationConfig, SiteConfig } from "@/content/types";

export type FooterCloneSiteData = Pick<
  SiteConfig,
  | "name"
  | "legalName"
  | "slogan"
  | "telephone"
  | "telephoneDisplay"
  | "address"
  | "copyrightYear"
>;

export type FooterCloneNavigationData = {
  footer: FooterConfig;
};

const navData = navigation as NavigationConfig;
const siteData = site as SiteConfig;

export const footerCloneSiteData: FooterCloneSiteData = {
  name: siteData.name,
  legalName: siteData.legalName,
  slogan: siteData.slogan,
  telephone: siteData.telephone,
  telephoneDisplay: siteData.telephoneDisplay,
  address: siteData.address,
  copyrightYear: siteData.copyrightYear,
};

export const footerCloneNavigationData: FooterCloneNavigationData = {
  footer: navData.footer,
};
