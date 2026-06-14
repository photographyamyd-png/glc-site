"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";
import { isGa4Enabled } from "@/lib/site/analytics-env";

/** Free conversion events: tel, mailto, and contact form navigation. */
export function ConversionTracking() {
  useEffect(() => {
    if (!isGa4Enabled()) return;

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        sendGAEvent("event", "click_to_call", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "click_email", { link_url: href });
      } else if (href.includes("/contact")) {
        sendGAEvent("event", "contact_navigation", { link_url: href });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
