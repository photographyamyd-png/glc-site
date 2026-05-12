"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { NAV_LINKS, PRIMARY_SERVICES } from "@/lib/site/registry";

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
    () => NAV_LINKS.utility.rotator[rotatorIndex % NAV_LINKS.utility.rotator.length],
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

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-40">
      <div ref={wrapRef} className="pointer-events-auto">
        <div className="site-header-utility-bar px-3 py-2 sm:px-6">
          <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-3">
            <p className="eyebrow">{NAV_LINKS.utility.location}</p>
            <div className="flex items-center gap-4 eyebrow">
              <a href={NAV_LINKS.utility.phoneHref} className="text-brand-white hover:text-primary">
                {NAV_LINKS.utility.phoneDisplay}
              </a>
              <span className="hidden text-brand-white/70 sm:inline">{utilityLine}</span>
            </div>
          </div>
        </div>

        <div
          className="site-header-nav-shell px-3 sm:px-6"
          data-scrolled={scrolled ? "true" : "false"}
        >
          <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-3 py-3 sm:py-4">
            <LogoMark priority />

            <nav
              className="hidden items-center gap-0.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted xl:flex"
              aria-label="Primary"
            >
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-ink transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
              <Link href="/about" className="px-3 py-2 text-ink transition-colors hover:text-primary">About</Link>
              <Link href="/#process" className="px-3 py-2 text-ink transition-colors hover:text-primary">Process</Link>
              <Link href="/#coverage" className="px-3 py-2 text-ink transition-colors hover:text-primary">Coverage</Link>
              <Link href="/#testimonials" className="px-3 py-2 text-ink transition-colors hover:text-primary">Projects</Link>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-ink transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-expanded={companyOpen}
                  aria-haspopup="true"
                  aria-controls="mega-company-panel"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(false);
                    setCompanyOpen((v) => !v);
                  }}
                >
                  Company <span className="text-[10px] font-normal text-ink-muted">{companyOpen ? "▲" : "▼"}</span>
                </button>
              </div>
              <Link href="/contact" className="cta-primary ml-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em]">Site consultation</Link>
            </nav>

            <div className="flex items-center gap-2 xl:hidden">
              <Link href="/contact" className="cta-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] sm:px-4 sm:text-[11px]">
                Site consultation
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-card/90 text-xl font-light text-ink"
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
            className={`site-header-mega-panel site-header-mega-panel-transition ${
              servicesOpen ? "hidden xl:block" : "hidden"
            }`}
          >
            <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_1fr_280px]">
              <div>
                <p className="label-overline mb-4">Services</p>
                <ul className="grid gap-1 sm:grid-cols-2">
                  {PRIMARY_SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group block border border-transparent px-2 py-2 font-sans transition-colors hover:border-border hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                        onClick={closeAll}
                      >
                        <span className="block text-sm font-semibold text-ink group-hover:text-primary">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-xs font-normal normal-case tracking-normal text-muted-foreground">
                          {service.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6 font-sans lg:border-l-0 lg:pl-0 lg:pt-1">
                <p className="label-overline mb-3">Company</p>
                <p className="font-heading text-xl font-medium leading-snug text-foreground sm:text-2xl">Ground Level Contracting</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Commercial excavation and civil operations across Simcoe County.</p>
                <Link
                  href="/about"
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                  onClick={closeAll}
                >
                  About {"->"}
                </Link>
              </div>
              <div className="panel-machined site-header-mega-card flex flex-col justify-between p-5">
                <div>
                  <p className="label-overline mb-2">Fastest path to a bid</p>
                  <p className="text-sm font-medium text-foreground">
                    Send prints, a site pin, and your target mobilization week—we&apos;ll return a clear scope
                    outline.
                  </p>
                </div>
                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  <a
                    href={NAV_LINKS.utility.phoneHref}
                    className="block text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                  >
                    {NAV_LINKS.utility.phoneDisplay}
                  </a>
                  <a href="mailto:dispatch@groundlevelcontracting.ca" className="block text-sm text-muted-foreground hover:text-foreground">
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

          <div
            id="mega-company-panel"
            aria-hidden={!companyOpen}
            className={`site-header-mega-panel ${companyOpen ? "hidden xl:block" : "hidden"}`}
          >
            <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-3 font-sans">
              <div>
                <p className="label-overline mb-3">Ground Level</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-muted-foreground hover:text-primary" onClick={closeAll}>About</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Contact</Link></li>
                  <li><Link href="/#process" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Our Process</Link></li>
                  <li><Link href="/#coverage" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Coverage Area</Link></li>
                </ul>
              </div>
              <div>
                <p className="label-overline mb-3">Resources</p>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services" className="text-muted-foreground hover:text-primary" onClick={closeAll}>All services</Link></li>
                  <li><Link href="/#about" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Commercial Positioning</Link></li>
                  <li><Link href="/#testimonials" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Client Projects</Link></li>
                  <li><Link href="/#cta-band" className="text-muted-foreground hover:text-primary" onClick={closeAll}>Site consultation</Link></li>
                </ul>
              </div>
              <div className="panel-machined site-header-mega-card p-5">
                <p className="label-overline">Dispatch</p>
                <a href={NAV_LINKS.utility.phoneHref} className="mt-3 block text-lg font-semibold text-foreground hover:text-primary">
                  Call {NAV_LINKS.utility.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav-gl"
          className="pointer-events-auto fixed inset-x-0 bottom-0 top-[var(--site-header-offset)] z-30 overflow-y-auto border-t border-border bg-canvas px-4 py-5 font-sans xl:hidden"
        >
          <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-2">
            <Link href="/about" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>About</Link>
            <Link href="/services" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>Services</Link>
            <Link href="/#capabilities" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>Capabilities</Link>
            <Link href="/#process" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>Process</Link>
            <Link href="/#coverage" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>Coverage</Link>
            <Link href="/#testimonials" className="border border-border bg-card/95 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground" onClick={closeAll}>Projects</Link>
            <Link href="/contact" className="cta-primary mt-1 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]" onClick={closeAll}>Site consultation</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
