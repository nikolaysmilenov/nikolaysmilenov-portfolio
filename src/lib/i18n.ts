export const locales = ["en", "bg"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type LocalizedString = {
  en: string;
  bg: string;
};

export type LocalizedStringList = {
  en: string[];
  bg: string[];
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/bg" || pathname.startsWith("/bg/")) {
    return "bg";
  }
  return defaultLocale;
}

export function localeHomePath(locale: Locale): string {
  return locale === "bg" ? "/bg" : "/";
}

/** Switch language while preserving the current hash when possible. */
export function switchLocalePath(
  currentPathname: string,
  targetLocale: Locale,
  hash = "",
): string {
  const base = localeHomePath(targetLocale);
  const normalizedHash = hash
    ? hash.startsWith("#")
      ? hash
      : `#${hash}`
    : "";
  return `${base}${normalizedHash}`;
}

export function pick(
  value: LocalizedString | string,
  locale: Locale,
): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export function pickList(
  value: LocalizedStringList | string[],
  locale: Locale,
): string[] {
  if (Array.isArray(value)) return value;
  return value[locale] ?? value.en;
}

export function localeToHtmlLang(locale: Locale): string {
  return locale;
}

export function localeToOgLocale(locale: Locale): string {
  return locale === "bg" ? "bg_BG" : "en_US";
}

export function absoluteUrl(path = "/"): string {
  const base = "https://nikolaysmilenov.dev";
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
