import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          bg: absoluteUrl("/bg"),
        },
      },
    },
    {
      url: absoluteUrl("/bg"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          bg: absoluteUrl("/bg"),
        },
      },
    },
  ];
}
