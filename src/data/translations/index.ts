import type { Locale } from "@/lib/i18n";
import { bg } from "./bg";
import { en } from "./en";
import type { Dictionary } from "./types";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = {
  en,
  bg,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
