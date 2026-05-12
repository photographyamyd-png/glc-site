"use client";

import { SmartLink } from "@/components/ui/smart-link";
import { ServiceCardIcon } from "@/components/glc-dna/sections/service-card-icon";
import type { MobileMegaServiceRow, NavLink } from "@/content/types";

type Props = {
  open: boolean;
  onClose: () => void;
  mobileLinks: NavLink[];
  serviceRows: MobileMegaServiceRow[];
  companyLinks: NavLink[];
  utilityPhoneDisplay: string;
  utilityPhoneHref: string;
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
  companyLinks,
  utilityPhoneDisplay,
  utilityPhoneHref,
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
              Navigate
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
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">
              <span className="gl-mobile-drawer__label-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 21V7l8-4 8 4v14" strokeLinejoin="miter" />
                  <path d="M12 11v10M8 15h8" strokeLinecap="square" />
                </svg>
              </span>
              Company
            </p>
            <ul className="gl-mobile-drawer__list">
              {companyLinks.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <SmartLink href={l.href} onClick={onClose} className="gl-mobile-drawer__link-row">
                    <span className="gl-mobile-drawer__link-text">{l.label}</span>
                    <ChevronRight className="gl-mobile-drawer__row-chevron" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section gl-mobile-drawer__section--dispatch">
            <p className="gl-mobile-drawer__label">
              <span className="gl-mobile-drawer__label-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" />
                  <path d="M1.21 4.25A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81" />
                </svg>
              </span>
              Dispatch
            </p>
            <a href={utilityPhoneHref} className="gl-mobile-drawer__phone" onClick={onClose}>
              {utilityPhoneDisplay}
            </a>
            <SmartLink href="/contact" className="btn-primary mt-4 inline-flex" onClick={onClose}>
              Site consultation
            </SmartLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
