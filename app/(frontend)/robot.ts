import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "www.mbiyuinsights.co.ke";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth/", "/api/", "/terms", "/privacy"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
