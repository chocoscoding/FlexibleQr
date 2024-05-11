import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: "",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return routes.map(({ url, ...rest }) => ({
    ...rest,
    url: `https://flexibleqrcodes.vercel.app${url}`,
    lastModified: new Date(),
  }));
}
