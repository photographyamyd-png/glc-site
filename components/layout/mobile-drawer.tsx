"use client";

import Image from "next/image";
import { SmartLink } from "@/components/ui/smart-link";
import { ServiceCardIcon } from "@/components/glc-dna/sections/service-card-icon";
import type { MobileMegaServiceRow, NavLink } from "@/content/types";

export type MobileDrawerDispatchBand = {
  kicker: string;
  title: string;
  sub: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  /** Merged quick links + company links; hrefs deduped upstream. */
  mobileLinks: NavLink[];
  serviceRows: MobileMegaServiceRow[];
  brandLogoSrc: string;
  dispatchBand: MobileDrawerDispatchBand;
  utilityPhoneDisplay: string;
  utilityPhoneHref: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
};

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function MobileDrawer({
  open,
  onClose,
  mobileLinks,
  serviceRows,
  brandLogoSrc,
  dispatchBand,
  utilityPhoneDisplay,
  utilityPhoneHref,
  primaryCtaLabel,
  primaryCtaHref,
}: Props) {
  if (!open) return null;

  return (
    <div className="gl-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button type="button" className="gl-mobile-drawer__backdrop" onClick={onClose} aria-label="Close menu" />
      <div className="gl-mobile-drawer__panel">
        <nav aria-label="Mobile primary">
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">
              <span className="gl-mobile-drawer__label-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="square" />
                </svg>
              </span>
              Explore
            </p>
            <ul className="gl-mobile-drawer__list">
              {mobileLinks.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <SmartLink href={l.href} onClick={onClose} className="gl-mobile-drawer__link-row">
                    <span className="gl-mobile-drawer__link-text">{l.label}</span>
                    <ChevronRight className="gl-mobile-drawer__row-chevron" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">
              <span className="gl-mobile-drawer__label-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 20V8l8-5 8 5v12" strokeLinejoin="miter" />
                  <path d="M9 20v-6h6v6" strokeLinejoin="miter" />
                </svg>
              </span>
              Service lines
            </p>
            <ul className="gl-mobile-drawer__list gl-mobile-drawer__list--services">
              {serviceRows.map((row) => (
                <li key={`${row.href}-${row.slug}`}>
                  <SmartLink href={row.href} onClick={onClose} className="gl-mobile-drawer__service-row">
                    <span className="gl-mobile-drawer__service-icon" aria-hidden>
                      <ServiceCardIcon slug={row.slug} className="gl-mobile-drawer__service-icon-svg" />
                    </span>
                    <span className="gl-mobile-drawer__service-text">
                      <span className="gl-mobile-drawer__service-title">{row.title}</span>
                      <span className="gl-mobile-drawer__service-desc">{row.description}</span>
                    </span>
                    <ChevronRight className="gl-mobile-drawer__row-chevron gl-mobile-drawer__row-chevron--service" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section gl-mobile-drawer__section--dispatch">
            <div className="gl-mobile-drawer__dispatch-split">
              <div className="gl-mobile-drawer__dispatch-brand">
                <Image
                  src={brandLogoSrc}
                  alt="Ground Level Contracting"
                  width={320}
                  height={80}
                  unoptimized
                  className="gl-mobile-drawer__dispatch-logo"
                  sizes="(max-width: 420px) 48vw, 240px"
                />
              </div>
              <div className="gl-mobile-drawer__dispatch-cta">
                <p className="gl-mobile-drawer__dispatch-kicker">{dispatchBand.kicker}</p>
                <p className="gl-mobile-drawer__dispatch-headline">{dispatchBand.title}</p>
                <p className="gl-mobile-drawer__dispatch-lede">{dispatchBand.sub}</p>
                <a href={utilityPhoneHref} className="gl-mobile-drawer__phone gl-mobile-drawer__phone--dispatch" onClick={onClose}>
                  {utilityPhoneDisplay}
                </a>
                <SmartLink href={primaryCtaHref} className="btn-primary gl-mobile-drawer__dispatch-btn" onClick={onClose}>
                  {primaryCtaLabel}
                </SmartLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
