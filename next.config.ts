import type { NextConfig } from "next";

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
    return out;
  },
};

export default nextConfig;
