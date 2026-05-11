import type { NextConfig } from "next";
import { FOUNDATIONS_SUB_SLUGS } from "./lib/site/foundations-civil-infrastructure-content";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.39.132"],
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    const canonical = "/services/drainage-hardscaping/";
    const marketing: [string, string][] = [
      ["drainage-hardscaping-barrie", canonical],
      ["foundation-drain-tile-barrie", `${canonical}#foundation-drain-tile`],
      ["site-drainage-design-barrie", `${canonical}#site-drainage-design`],
      ["retaining-walls-barrie", `${canonical}#retaining-walls`],
      ["interlock-patios-barrie", `${canonical}#patios-driveways-steps`],
    ];
    const out: { source: string; destination: string; permanent: boolean }[] = [];
    for (const [slug, destination] of marketing) {
      out.push({ source: `/services/${slug}`, destination, permanent: true });
      out.push({ source: `/services/${slug}/`, destination, permanent: true });
    }

    const foundationsHub = "/services/foundations-civil-infrastructure/";
    out.push({ source: "/foundations-civil-infrastructure", destination: foundationsHub, permanent: true });
    out.push({ source: "/foundations-civil-infrastructure/", destination: foundationsHub, permanent: true });
    for (const sub of FOUNDATIONS_SUB_SLUGS) {
      const dest = `${foundationsHub}${sub}/`;
      out.push({ source: `/foundations-civil-infrastructure/${sub}`, destination: dest, permanent: true });
      out.push({ source: `/foundations-civil-infrastructure/${sub}/`, destination: dest, permanent: true });
    }

    return out;
  },
};

export default nextConfig;
