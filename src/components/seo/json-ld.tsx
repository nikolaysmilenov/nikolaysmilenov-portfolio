import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { social } from "@/data/social";
import {
  absoluteUrl,
  localeHomePath,
  pick,
  type Locale,
} from "@/lib/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const pageUrl = absoluteUrl(localeHomePath(locale));
  const sameAs = [social.github, social.linkedin].filter(
    (value): value is string => Boolean(value),
  );

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: pick(siteConfig.role, locale),
    description: dictionary.seo.description,
    image: `${siteConfig.url}${siteConfig.profilePath}`,
    knowsAbout: dictionary.seo.knowsAbout,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: pageUrl,
    description: dictionary.seo.description,
    inLanguage: locale,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
