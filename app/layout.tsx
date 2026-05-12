import type { Metadata } from "next";
import { headers } from "next/headers";
import { Oswald, Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import "./about-ab3.css";
import "./glc-recovered-mega-shell.css";
import "./glc-recovered-mega-extracted.css";
import "@/styles/footer-clone.css";
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

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SEO_TITLES.home,
    description:
      "Ground Level Contracting provides excavation, grading, civil infrastructure, hauling, and commercial snow operations.",
    path: "/",
  }),
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
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
      </body>
    </html>
  );
}
