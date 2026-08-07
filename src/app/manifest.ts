import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PalmTec | Google Ads Management for Small Businesses",
    short_name: "PalmTec",
    description: "Google Ads management for small businesses, with clear reporting and practical optimization.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ee",
    theme_color: "#16241c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
