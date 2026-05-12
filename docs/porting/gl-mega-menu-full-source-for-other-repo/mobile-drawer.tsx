"use client";

import { SmartLink } from "@/components/ui/smart-link";
import type { NavLink } from "@/content/types";

type Props = {
  open: boolean;
  onClose: () => void;
  mobileLinks: NavLink[];
  serviceLinks: NavLink[];
  companyLinks: NavLink[];
  utilityPhoneDisplay: string;
  utilityPhoneHref: string;
};

export function MobileDrawer({
  open,
  onClose,
  mobileLinks,
  serviceLinks,
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
            <p className="gl-mobile-drawer__label">Navigate</p>
            <ul className="gl-mobile-drawer__list">
              {mobileLinks.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <SmartLink href={l.href} onClick={onClose}>
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">Service lines</p>
            <ul className="gl-mobile-drawer__list">
              {serviceLinks.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <SmartLink href={l.href} onClick={onClose}>
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">Company</p>
            <ul className="gl-mobile-drawer__list">
              {companyLinks.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <SmartLink href={l.href} onClick={onClose}>
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-mobile-drawer__section">
            <p className="gl-mobile-drawer__label">Dispatch</p>
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
