"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type PropertyType = {
  id: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  body: string;
};

export function CommercialSnowPropertyTabs({
  tablistAria,
  types,
}: {
  tablistAria: string;
  types: readonly PropertyType[];
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
              </div>
              <p className="text-[15px] leading-[1.72] text-ink sm:text-base">{t.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
