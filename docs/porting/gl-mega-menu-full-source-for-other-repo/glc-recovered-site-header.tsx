"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { UtilityRotator } from "@/components/layout/utility-rotator";
import { MegaMenuServices } from "@/components/layout/mega-menu-services";
import { MegaMenuCompany } from "@/components/layout/mega-menu-company";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import type { NavigationConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import { dedupeNavLinksPreserveOrder, navHrefKey } from "@/lib/site/nav-dedupe";

const LOGO = "/images/glc-logo.png";
/** Ground Level wordmark — matches GLC DNA hero (`/images/Logos/ground-level-logo.png`); not the compact `glc-logo` mark. */
const SITE_BRAND_WORDMARK_SRC = "/images/Logos/ground-level-logo.png";

type Props = {
  navigation: NavigationConfig;
};

type MegaMode = null | "services" | "company";

export function GlcRecoveredSiteHeader({ navigation }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const variant: "default" | "inner" = isHome ? "default" : "inner";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaMode, setMegaMode] = useState<MegaMode>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMega = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaMode(null);
    document.body.classList.remove("gl-mega-open");
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openDrawer = useCallback(() => {
    closeMega();
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  }, [closeMega]);

  useEffect(() => {
    closeMega();
    closeDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const onChange = () => {
      if (mq.matches) closeMega();
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMega]);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Keep `pt-[var(--site-header-offset)]` / `scroll-mt` aligned with fixed `#site-header` (utility + nav + mobile bar). */
  useLayoutEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return;
    const root = document.documentElement;
    const sync = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      root.style.setProperty("--site-header-offset", `${h}px`);
      root.style.setProperty("--header", `${h}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
      root.style.removeProperty("--site-header-offset");
      root.style.removeProperty("--header");
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
        closeMega();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeDrawer, closeMega]);

  useEffect(() => {
    if (megaMode) document.body.classList.add("gl-mega-open");
    else document.body.classList.remove("gl-mega-open");
  }, [megaMode]);

  const openMega = useCallback((mode: MegaMode) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaMode(mode);
  }, []);

  const scheduleMegaClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMegaMode(null);
      document.body.classList.remove("gl-mega-open");
    }, 130);
  }, []);

  const cancelMegaClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  const primary = navigation.primary;
  const about = primary[0];
  const rest = primary.slice(1);
  const mega = navigation.megaMenu;
  const companyMega = navigation.companyMega;
  const util = navigation.utility;

  const megaViewHref = variant === "inner" ? ROUTES.home : mega.viewAllHref;
  const megaViewLabel = variant === "inner" ? "Back to homepage" : mega.viewAllLabel;
  const megaIntro =
    variant === "inner"
      ? "Six core service lines for commercial excavation and civil infrastructure."
      : mega.intro;

  const mobileServiceRows = mega.cards.map((c) => ({
    href: ROUTES.service(c.slug),
    slug: c.slug,
    title: c.title,
    description: c.description,
  }));

  const mobileCompanyLinks = companyMega.columns.flatMap((c) => c.links);
  const mergedMobileLinks = dedupeNavLinksPreserveOrder([
    ...navigation.mobile.links,
    ...mobileCompanyLinks,
  ]);
  const mobileExploreLinks =
    mobileServiceRows.length > 0
      ? mergedMobileLinks.filter((l) => navHrefKey(l.href) !== "/services")
      : mergedMobileLinks;

  return (
    <>
      <header
        id="site-header"
        role="banner"
        onMouseLeave={scheduleMegaClose}
        onMouseEnter={cancelMegaClose}
      >
        <div className="gl-header__utility">
          <div className="gl-header__utility-inner">
            <div className="gl-header__utility-left">
              <span className="gl-util-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {util.locationLine}
              </span>
              <span className="gl-util-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.85 19.79 19.79 0 0 1 1.21 4.25 2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={util.phoneHref}>{util.phoneDisplay}</a>
              </span>
            </div>
            <UtilityRotator lines={navigation.utilityRotator} />
          </div>
        </div>

        <div className="gl-header__gold-strip" />

        <nav className="gl-header__nav-row" aria-label="Primary">
          <div className="gl-header__nav-inner">
            <SmartLink href={ROUTES.home} className="gl-header__logo" aria-label="Ground Level Contracting Home">
              <div className="gl-logo-mark">
                <Image src={LOGO} alt="" width={40} height={40} priority />
              </div>
              <div className="gl-header__wordmark">
                <span className="gl-wordmark-name">Ground Level</span>
                <span className="gl-wordmark-sub">Contracting Inc.</span>
              </div>
            </SmartLink>

            <div className="gl-header__nav-links">
              <SmartLink href={about.href} onMouseEnter={closeMega}>
                {about.label}
              </SmartLink>

              <div className={`gl-nav-mega-wrap${megaMode === "services" ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="gl-nav-mega-trigger"
                  aria-expanded={megaMode === "services"}
                  aria-controls="mega-services-panel"
                  aria-haspopup="true"
                  id="mega-services-trigger"
                  onMouseEnter={() => openMega("services")}
                  onClick={() => setMegaMode((m) => (m === "services" ? null : "services"))}
                >
                  Services
                </button>
              </div>

              <div className={`gl-nav-mega-wrap${megaMode === "company" ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="gl-nav-mega-trigger"
                  aria-expanded={megaMode === "company"}
                  aria-controls="mega-company-panel"
                  aria-haspopup="true"
                  id="mega-company-trigger"
                  onMouseEnter={() => openMega("company")}
                  onClick={() => setMegaMode((m) => (m === "company" ? null : "company"))}
                >
                  Company
                </button>
              </div>

              {rest.map((l) => (
                <SmartLink key={l.href} href={l.href} onMouseEnter={closeMega}>
                  {l.label}
                </SmartLink>
              ))}
            </div>

            <div className="gl-header__cta-wrap">
              <a href={util.phoneHref} className="btn-primary" aria-label="Call for a quote">
                Get a Quote
                <IconArrow />
              </a>
            </div>
          </div>
        </nav>

        <div
          id="mega-services-panel"
          className={`gl-mega-panel${megaMode === "services" ? " is-open" : ""}`}
          role="region"
          aria-label="Service lines"
          aria-labelledby="mega-services-trigger"
          onMouseEnter={cancelMegaClose}
          onMouseLeave={scheduleMegaClose}
        >
          <MegaMenuServices
            mega={mega}
            megaIntro={megaIntro}
            megaViewHref={megaViewHref}
            megaViewLabel={megaViewLabel}
          />
        </div>

        <div
          id="mega-company-panel"
          className={`gl-mega-panel gl-mega-panel--company${megaMode === "company" ? " is-open" : ""}`}
          role="region"
          aria-label="Company"
          aria-labelledby="mega-company-trigger"
          onMouseEnter={cancelMegaClose}
          onMouseLeave={scheduleMegaClose}
        >
          <MegaMenuCompany companyMega={companyMega} />
        </div>

        <div className="gl-header__mobile-bar">
          <SmartLink href={ROUTES.home} className="gl-header__logo" aria-label="Ground Level Contracting">
            <div className="gl-logo-mark" style={{ width: 32, height: 32 }}>
              <Image src={LOGO} alt="" width={40} height={40} />
            </div>
            <div className="gl-header__wordmark">
              <span className="gl-wordmark-name" style={{ fontSize: 14 }}>
                Ground Level
              </span>
              <span className="gl-wordmark-sub">Contracting</span>
            </div>
          </SmartLink>
          <button
            type="button"
            className="gl-hamburger-icon"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => (drawerOpen ? closeDrawer() : openDrawer())}
          >
            {drawerOpen ? (
              <span className="text-2xl font-light leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="text-xl font-light leading-none" aria-hidden>
                ≡
              </span>
            )}
          </button>
        </div>
      </header>

      <div id="gl-mega-backdrop" className="gl-mega-backdrop" aria-hidden="true" onClick={closeMega} role="presentation" />

      <MobileDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        mobileLinks={mobileExploreLinks}
        serviceRows={mobileServiceRows}
        brandLogoSrc={SITE_BRAND_WORDMARK_SRC}
        dispatchBand={{
          kicker: companyMega.dispatchBand.kicker,
          title: companyMega.dispatchBand.title,
          sub: companyMega.dispatchBand.sub,
        }}
        utilityPhoneDisplay={util.phoneDisplay}
        utilityPhoneHref={util.phoneHref}
        primaryCtaLabel="Get a Quote"
        primaryCtaHref={util.phoneHref}
      />
    </>
  );
}
