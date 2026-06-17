import type { Metadata } from "next";
import { headers } from "next/headers";
import { Oswald, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SiteHeader } from "@/components/ui/SiteHeader";
import {
  footerCloneNavigationData,
  footerCloneSiteData,
} from "@/content/footer-clone-data";
import { SiteFooterNextClone } from "@/components/layout/site-footer-next-clone";
import { SEO_TITLES } from "@/lib/site/registry";
import { buildPageMetadata } from "@/lib/site/metadata";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GlcGoogleAnalytics } from "@/components/analytics/GlcGoogleAnalytics";
import { ConversionTracking } from "@/components/seo/ConversionTracking";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
  adjustFontFallback: true,
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

const bingSiteVerification =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined;

const siteVerification: Metadata["verification"] = {
  ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
  ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
};

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SEO_TITLES.home,
    description:
      "Ground Level Contracting provides excavation, grading, civil infrastructure, hauling, and commercial snow operations.",
    path: "/",
  }),
  ...(Object.keys(siteVerification).length > 0 ? { verification: siteVerification } : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const minimalShell =
    (await headers()).get("x-glc-minimal-shell") === "1";

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        oswald.variable,
        barlowCondensed.variable,
        sourceSans3.variable,
        "font-sans",
      )}
    >
      <body
        className={cn(
          "min-h-full font-sans",
          minimalShell ? "bg-ink text-white" : "bg-canvas text-ink",
        )}
      >
        {!minimalShell && <SiteJsonLd />}
        {!minimalShell && <GrainOverlay />}
        {!minimalShell && <SiteHeader />}
        <main className="relative z-10">{children}</main>
        {!minimalShell && (
          <SiteFooterNextClone
            site={footerCloneSiteData}
            navigation={footerCloneNavigationData}
          />
        )}
        <Analytics />
        <SpeedInsights />
        <GlcGoogleAnalytics />
        <ConversionTracking />
      </body>
    </html>
  );
}
