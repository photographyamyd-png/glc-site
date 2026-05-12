"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type PropertyType = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  overlayKicker: string;
  overlayTitle: string;
  body: string;
};

export function CommercialSnowPropertyTabs({
  tablistAria,
  types,
  imageCta,
}: {
  tablistAria: string;
  types: readonly PropertyType[];
  imageCta: { readonly label: string; readonly href: string };
}) {
  const baseId = useId();
  const [selected, setSelected] = useState(0);

  if (!types.length) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label={tablistAria}
        className="flex flex-wrap gap-2 border-b border-[color:var(--g200)] pb-3"
      >
        {types.map((t, i) => {
          const selectedNow = i === selected;
          const tabId = `${baseId}-tab-${t.id}`;
          const panelId = `${baseId}-panel-${t.id}`;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={selectedNow}
              aria-controls={panelId}
              tabIndex={selectedNow ? 0 : -1}
              className={cn(
                "eyebrow min-h-[44px] px-3 py-2 text-left transition-colors sm:px-4",
                selectedNow
                  ? "bg-[color:var(--y)] text-[color:var(--ink)]"
                  : "bg-[color:var(--g200)] text-ink hover:bg-[color:var(--g200)]/80",
              )}
              onClick={() => setSelected(i)}
            >
              <span className="line-clamp-2 sm:line-clamp-none">{t.label}</span>
            </button>
          );
        })}
      </div>
      {types.map((t, i) => {
        const selectedNow = i === selected;
        const tabId = `${baseId}-tab-${t.id}`;
        const panelId = `${baseId}-panel-${t.id}`;
        return (
          <div
            key={t.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!selectedNow}
            className="mt-6"
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--g200)] bg-[color:var(--g200)]">
                <Image
                  src={t.imageSrc}
                  alt={t.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_12_11/0.62)] via-[rgb(10_12_11/0.12)] to-[rgb(10_12_11/0.2)]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:pr-8 md:pb-6">
                  <div className="pointer-events-auto max-w-md rounded-sm border border-white/15 bg-[rgb(10_12_11/0.45)] p-4 shadow-[0_20px_56px_rgb(0_0_0/0.35)] backdrop-blur-md sm:p-5">
                    <p className="eyebrow text-[color:var(--y)]">{t.overlayKicker}</p>
                    <p className="mt-1 font-serif text-xl font-bold uppercase leading-[1.1] tracking-[0.04em] text-white sm:text-2xl">
                      {t.overlayTitle}
                    </p>
                    <Link
                      href={imageCta.href}
                      className="cta-hero-fill mt-4 inline-flex min-h-[44px] w-full items-center justify-center px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] sm:w-auto sm:min-w-[12rem]"
                    >
                      {imageCta.label}
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{t.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
