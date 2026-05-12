"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function CommercialSnowProofTabs({
  mediaLabel,
  credentialsLabel,
  mediaPanel,
  credentialsPanel,
}: {
  mediaLabel: string;
  credentialsLabel: string;
  mediaPanel: ReactNode;
  credentialsPanel: ReactNode;
}) {
  const baseId = useId();
  const [tab, setTab] = useState<"media" | "credentials">("media");
  const mediaTabId = `${baseId}-media-tab`;
  const credTabId = `${baseId}-cred-tab`;
  const mediaPanelId = `${baseId}-media-panel`;
  const credPanelId = `${baseId}-cred-panel`;

  return (
    <div>
      <div role="tablist" aria-label="CTV News Barrie coverage and on-site field video proof" className="flex gap-2 border-b border-white/15 pb-3">
        <button
          type="button"
          role="tab"
          id={mediaTabId}
          aria-selected={tab === "media"}
          aria-controls={mediaPanelId}
          tabIndex={tab === "media" ? 0 : -1}
          className={cn(
            "eyebrow flex min-h-[44px] items-center px-4 py-2",
            tab === "media" ? "bg-[color:var(--y)] text-[color:var(--ink)]" : "border border-white/20 text-white/90",
          )}
          onClick={() => setTab("media")}
        >
          {mediaLabel}
        </button>
        <button
          type="button"
          role="tab"
          id={credTabId}
          aria-selected={tab === "credentials"}
          aria-controls={credPanelId}
          tabIndex={tab === "credentials" ? 0 : -1}
          className={cn(
            "eyebrow flex min-h-[44px] items-center px-4 py-2",
            tab === "credentials" ? "bg-[color:var(--y)] text-[color:var(--ink)]" : "border border-white/20 text-white/90",
          )}
          onClick={() => setTab("credentials")}
        >
          {credentialsLabel}
        </button>
      </div>
      <div
        id={mediaPanelId}
        role="tabpanel"
        aria-labelledby={mediaTabId}
        hidden={tab !== "media"}
        className="mt-6"
      >
        {mediaPanel}
      </div>
      <div
        id={credPanelId}
        role="tabpanel"
        aria-labelledby={credTabId}
        hidden={tab !== "credentials"}
        className="mt-6"
      >
        {credentialsPanel}
      </div>
    </div>
  );
}
