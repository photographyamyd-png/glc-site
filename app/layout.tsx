import type { Metadata } from "next";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
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
import { cn } from "@/lib/utils";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: SEO_TITLES.home,
  description:
    "Ground Level Contracting provides excavation, grading, civil infrastructure, hauling, and commercial snow operations.",
  openGraph: {
    title: SEO_TITLES.home,
    description:
      "Commercial excavation and site operations across Barrie, Orillia, and Simcoe County.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLES.home,
    description:
      "Commercial excavation and site operations across Barrie, Orillia, and Simcoe County.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        oswald.variable,
        barlow.variable,
        barlowCondensed.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full bg-canvas font-sans text-ink">
        <SiteJsonLd />
        <GrainOverlay />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooterNextClone
          site={footerCloneSiteData}
          navigation={footerCloneNavigationData}
        />
      </body>
    </html>
  );
}
