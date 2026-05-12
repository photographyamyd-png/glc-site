"use client";

import Link from "next/link";
import { COMMERCIAL_SNOW_HERO } from "@/lib/site/commercial-snow-page-data";

/**
 * Fixed pair of primary actions on the commercial snow hub so quote / call stay
 * reachable without hunting through long chapter panels.
 */
export function CommercialSnowHubCtaDock() {
  const { primary, secondary } = COMMERCIAL_SNOW_HERO.ctas;
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[50] flex justify-center px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 sm:px-4 lg:px-6"
      aria-label="Commercial snow — request quote or call dispatch"
    >
      <div className="pointer-events-auto flex w-full max-w-[min(100%,var(--max))] gap-2 rounded-sm border border-white/15 bg-[rgb(10_12_11/0.94)] p-2 shadow-[0_-12px_40px_rgb(0_0_0/0.28)] backdrop-blur-md sm:gap-3 sm:p-3">
        <Link
          href={primary.href}
          className="cta-primary inline-flex min-h-[44px] flex-1 items-center justify-center px-3 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.1em] sm:px-4 sm:text-xs sm:tracking-[0.12em]"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          className="cta-outline-light inline-flex min-h-[44px] flex-1 items-center justify-center px-3 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] sm:px-4 sm:text-xs sm:tracking-[0.12em]"
        >
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}
