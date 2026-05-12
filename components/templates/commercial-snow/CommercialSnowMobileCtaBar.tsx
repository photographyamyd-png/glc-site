"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { COMMERCIAL_SNOW_MID_LOWER_CTA } from "@/lib/site/commercial-snow-page-data";

/** Compact conversion strip on small viewports — primary seasonal CTA. */
export function CommercialSnowMobileCtaBar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--g200)] bg-[rgb(255_255_255/0.96)] p-3 shadow-[0_-12px_40px_rgb(0_0_0/0.12)] backdrop-blur-md",
        "lg:hidden motion-reduce:transform-none",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-[min(100%,var(--max))] items-center justify-between gap-3 px-2">
        <p className="min-w-0 flex-1 font-serif text-xs font-bold uppercase leading-tight tracking-[0.04em] text-ink line-clamp-2">
          {COMMERCIAL_SNOW_MID_LOWER_CTA.headline}
        </p>
        <Link
          href={COMMERCIAL_SNOW_MID_LOWER_CTA.primary.href}
          className="cta-primary inline-flex min-h-[44px] shrink-0 items-center justify-center px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em]"
        >
          {COMMERCIAL_SNOW_MID_LOWER_CTA.primary.label}
        </Link>
      </div>
    </div>
  );
}
