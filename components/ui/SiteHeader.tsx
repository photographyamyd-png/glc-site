"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import type { NavigationConfig } from "@/content/types";
import navigation from "@/content/navigation.json";

const headerMax = "max-w-[min(100%,var(--max))]" as const;

const nav = navigation as NavigationConfig;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rotatorIndex, setRotatorIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setCompanyOpen(false);
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const utilityLine = useMemo(
    () => nav.utilityRotator[rotatorIndex % nav.utilityRotator.length],
    [rotatorIndex],
  );

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setCompanyOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setInterval(() => setRotatorIndex((v) => v + 1), 4000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  });

  const { megaMenu, companyMega } = nav;
  const { dispatchBand } = companyMega;

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-40">
      <div ref={wrapRef} className="pointer-events-auto">
        <div className="site-header-utility-bar px-3 py-2 sm:px-6">
          <div className={`mx-auto flex ${headerMax} items-center justify-between gap-3`}>
            <p className="eyebrow text-white">{nav.utility.locationLine}</p>
            <div className="flex items-center gap-4 eyebrow text-white">
              <a href={nav.utility.phoneHref} className="text-white hover:text-[color:var(--y)]">
                {nav.utility.phoneDisplay}
              </a>
              <span className="hidden text-white/70 sm:inline">{utilityLine}</span>
            </div>
          </div>
        </div>

        <div
          className="site-header-nav-shell px-3 sm:px-6"
          data-scrolled={scrolled ? "true" : "false"}
        >
          <div className={`mx-auto flex ${headerMax} items-center justify-between gap-3 py-3 sm:py-4`}>
            <LogoMark priority />

            <nav
              className="hidden items-center gap-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted xl:flex"
              aria-label="Primary"
            >
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-ink transition-colors hover:text-[color:var(--y)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="mega-services-panel"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCompanyOpen(false);
                    setServicesOpen((v) => !v);
                  }}
                >
                  Services
                  <span className="text-[10px] font-normal text-ink-muted" aria-hidden>{servicesOpen ? "▲" : "▼"}</span>
                </button>
              </div>
              {nav.primary.map((item) => (
                <Link key={item.href} href={item.href} className="px-3 py-2 transition-colors hover:text-[color:var(--y)]">
                  {item.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-ink transition-colors hover:text-[color:var(--y)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--y)]"
                  aria-expanded={companyOpen}
                  aria-haspopup="true"
                  aria-controls="mega-company-panel"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(false);
                    setCompanyOpen((v) => !v);
                  }}
                >
                  Company{" "}
                  <span className="text-[10px] font-normal text-ink-muted">{companyOpen ? "▲" : "▼"}</span>
                </button>
              </div>
              <Link href="/contact" className="cta-primary ml-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]">
                Site consultation
              </Link>
            </nav>

            <div className="flex items-center gap-2 xl:hidden">
              <Link href="/contact" className="cta-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] sm:px-4 sm:text-[11px]">
                Site consultation
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-popover/90 text-xl font-light text-ink"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-gl"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span className="sr-only">Menu</span>
                {mobileOpen ? "×" : "≡"}
              </button>
            </div>
          </div>

          <div
            id="mega-services-panel"
            aria-hidden={!servicesOpen}
            className={`mega-panel mega-panel--enter ${servicesOpen ? "hidden xl:block" : "hidden"}`}
          >
            <div className={`mx-auto ${headerMax} px-4 py-8 sm:px-6`}>
              <div className="mb-8 border-b border-border pb-6">
                <p className="label-overline mb-2 text-[color:var(--y)]">{megaMenu.kicker}</p>
                <p className="max-w-4xl text-sm leading-relaxed text-ink-muted sm:text-base">{megaMenu.intro}</p>
              </div>

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(260px,280px)]">
                <div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {megaMenu.cards.map((card) => (
                      <li key={card.slug}>
                        <Link
                          href={`/services/${card.slug}`}
                          className="mega-service-link group flex min-h-[44px] gap-3 border border-border bg-muted/25 p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--y)]"
                          onClick={closeAll}
                        >
                          <span className="font-serif text-2xl font-semibold leading-none text-[color:var(--y)] tabular-nums" aria-hidden>
                            {card.num}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold uppercase tracking-[0.04em] text-ink group-hover:text-[color:var(--y)]">
                              {card.title}
                            </span>
                            <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-ink-muted">
                              {card.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={megaMenu.viewAllHref}
                    className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-ink underline decoration-[color:var(--y)]/45 underline-offset-4 transition-colors hover:text-[color:var(--y)] hover:decoration-[color:var(--y)]"
                    onClick={closeAll}
                  >
                    {megaMenu.viewAllLabel}
                    {" →"}
                  </Link>
                </div>

                <div className="accent-punctuation-l border-l-0 pl-0 lg:border-l lg:border-border lg:pl-8">
                  <p className="label-overline mb-4 text-ink">Featured lines</p>
                  <ul className="space-y-5">
                    {megaMenu.cards.slice(0, 3).map((card) => (
                      <li key={`feat-${card.slug}`} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                        <p className="font-serif text-base font-semibold uppercase leading-snug tracking-[0.04em] text-ink">
                          {card.gridTitle.join(" ")}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-ink-muted sm:text-sm">{card.gridDescription}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel-machined mega-elevated flex flex-col justify-between p-5 lg:min-h-[320px]">
                  <div>
                    <p className="label-overline mb-2">{dispatchBand.kicker}</p>
                    <p className="font-serif text-lg font-semibold leading-snug text-ink">{dispatchBand.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{dispatchBand.sub}</p>
                  </div>
                  <div className="mt-8 space-y-3 border-t border-border pt-5">
                    <a
                      href={dispatchBand.phoneHref}
                      className="block text-lg font-semibold tracking-tight text-ink hover:text-[color:var(--y)]"
                    >
                      {dispatchBand.phoneDisplay}
                    </a>
                    <a href="mailto:dispatch@groundlevelcontracting.ca" className="block text-sm text-ink-muted hover:text-ink">
                      dispatch@groundlevelcontracting.ca
                    </a>
                    <Link
                      href="/contact"
                      className="cta-primary inline-block w-full px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]"
                      onClick={closeAll}
                    >
                      Site consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="mega-company-panel"
            aria-hidden={!companyOpen}
            className={`mega-panel ${companyOpen ? "hidden xl:block" : "hidden"}`}
          >
            <div className={`mx-auto ${headerMax} px-4 py-8 sm:px-6`}>
              <div className="mb-8 max-w-3xl border-b border-border pb-6">
                <p className="label-overline mb-2 text-[color:var(--y)]">{companyMega.kicker}</p>
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{companyMega.intro}</p>
              </div>
              <div className="grid gap-10 lg:grid-cols-3">
                {companyMega.columns.map((col) => (
                  <div key={col.title}>
                    <p className="label-overline mb-4">{col.title}</p>
                    <ul className="space-y-2 text-sm">
                      {col.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link href={link.href} className="text-ink-muted hover:text-[color:var(--y)]" onClick={closeAll}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="panel-machined mega-elevated p-5">
                  <p className="label-overline">{dispatchBand.kicker}</p>
                  <p className="mt-3 font-serif text-lg font-semibold text-ink">{dispatchBand.title}</p>
                  <p className="mt-2 text-sm text-ink-muted">{dispatchBand.sub}</p>
                  <a
                    href={dispatchBand.phoneHref}
                    className="mt-5 block text-lg font-semibold text-ink hover:text-[color:var(--y)]"
                  >
                    {dispatchBand.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav-gl"
          className="pointer-events-auto fixed inset-x-0 bottom-0 top-[var(--header)] z-30 overflow-y-auto border-t border-border bg-canvas px-4 py-5 xl:hidden"
        >
          <div className={`mx-auto flex ${headerMax} flex-col gap-2`}>
            {nav.mobile.links.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="mega-mobile-row px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em]"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="cta-primary mt-1 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]" onClick={closeAll}>
              Site consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
