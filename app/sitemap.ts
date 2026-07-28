import type { MetadataRoute } from "next";

import { servicePages } from "../lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `https://supremeprobuilders.com/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: "https://supremeprobuilders.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://supremeprobuilders.com/locations/modesto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceRoutes,
  ];
}
