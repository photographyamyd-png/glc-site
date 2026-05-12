"use client";

import Link from "next/link";
import { PHONE_TEL } from "@/lib/ground-level/homepage-copy";

type Props = {
  href: string;
  label: string;
};

export function GradingStickyCtaBar({ href, label }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[color:var(--g200)] bg-[rgb(12_14_13/0.96)] px-4 py-3 shadow-[0_-12px_40px_rgb(0_0_0/0.35)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-reduce:animate-none"
      role="region"
      aria-label="Start your grading project"
    >
      <div className="mx-auto flex max-w-[min(100%,var(--max))] flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Link href={href} className="cta-primary inline-flex min-h-[44px] flex-1 items-center justify-center px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] sm:flex-none sm:px-8">
          {label}
        </Link>
        <a
          href={PHONE_TEL}
          className="inline-flex min-h-[44px] items-center justify-center border border-white/25 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[color:var(--y)] hover:text-[color:var(--y)] sm:flex-none"
        >
          Call dispatch
        </a>
      </div>
    </div>
  );
}
