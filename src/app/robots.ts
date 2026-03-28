// robots.ts — Dynamic robots.txt generation

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hectormunoz.dev/sitemap.xml",
  };
}
