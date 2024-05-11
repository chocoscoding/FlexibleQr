import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://flexibleqrcodes.vercel.app/sitemap.xml",
    host: "https://flexibleqrcodes.vercel.app",
  };
}
