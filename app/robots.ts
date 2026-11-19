import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "AWS-Crawler",
        allow: "/",
      },
      {
        userAgent: "Amazon-Route53-Health-Check-Service",
        allow: "/",
      },
    ],
    sitemap: "https://www.wisdomly.top/sitemap.xml",
    host: "https://www.wisdomly.top",
  };
}
