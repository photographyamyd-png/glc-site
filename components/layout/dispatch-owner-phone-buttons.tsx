"use client";

import { IconArrow } from "@/components/ui/icon-arrow";
import { getOwnerPhoneCtas } from "@/lib/site/site-contact";

type Variant = "mega" | "mobile" | "header" | "inline" | "hero-dark";

type Props = {
  variant?: Variant;
  className?: string;
  /** Mobile drawer: close menu after tap */
  onNavigate?: () => void;
};

function buttonLabel(firstName: string, display: string, variant: Variant): string {
  if (variant === "header") return display;
  return `${firstName} · ${display}`;
}

export function DispatchOwnerPhoneButtons({ variant = "inline", className, onNavigate }: Props) {
  const ctas = getOwnerPhoneCtas();
  if (ctas.length === 0) return null;

  const [primary, ...secondaryOwners] = ctas;
  const stackClass =
    variant === "mobile" || variant === "hero-dark"
      ? "gl-dispatch-phone-actions gl-dispatch-phone-actions--stack"
      : variant === "header"
        ? "gl-dispatch-phone-actions gl-dispatch-phone-actions--header"
        : "gl-dispatch-phone-actions";

  const primaryClass =
    variant === "inline"
      ? "gl-dispatch-phone-actions__inline-primary"
      : variant === "hero-dark"
        ? "cta-outline-light flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
        : "btn-primary";

  const secondaryClass =
    variant === "inline"
      ? "gl-dispatch-phone-actions__inline-secondary"
      : variant === "mobile"
        ? "btn-dispatch-secondary btn-dispatch-secondary--light gl-mobile-drawer__dispatch-btn"
        : variant === "hero-dark"
          ? "cta-outline-light flex min-h-[44px] items-center justify-center px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
          : "btn-dispatch-secondary";

  return (
    <div className={[stackClass, className].filter(Boolean).join(" ")}>
      <a
        href={primary.href}
        className={primaryClass}
        aria-label={`Call ${primary.firstName} at ${primary.display}`}
        onClick={onNavigate}
      >
        {buttonLabel(primary.firstName, primary.display, variant)}
        {variant !== "inline" && variant !== "hero-dark" ? <IconArrow /> : null}
      </a>
      {secondaryOwners.map((owner) => (
        <a
          key={owner.href}
          href={owner.href}
          className={secondaryClass}
          aria-label={`Call ${owner.firstName} at ${owner.display}`}
          onClick={onNavigate}
        >
          {buttonLabel(owner.firstName, owner.display, variant)}
          {variant === "mega" || variant === "header" ? <IconArrow /> : null}
        </a>
      ))}
    </div>
  );
}
