import type { Metadata } from "next";
import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  localeHomePath,
  localeToOgLocale,
  pick,
  type Locale,
} from "@/lib/i18n";

export function createPageMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);
  const title = dictionary.seo.title;
  const description = dictionary.seo.description;
  const canonicalPath = localeHomePath(locale);
  const canonical = absoluteUrl(canonicalPath === "/" ? "/" : canonicalPath);
  const enUrl = absoluteUrl("/");
  const bgUrl = absoluteUrl("/bg");

  return {
    title: {
      absolute: title,
    },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        bg: bgUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: localeToOgLocale(locale),
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function getLocalizedSiteCopy(locale: Locale) {
  return {
    title: pick(siteConfig.title, locale),
    description: pick(siteConfig.description, locale),
    role: pick(siteConfig.role, locale),
    tagline: pick(siteConfig.tagline, locale),
    statusBadge: pick(siteConfig.statusBadge, locale),
    focus: siteConfig.focus[locale],
  };
}
