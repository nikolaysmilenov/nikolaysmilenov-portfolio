"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getDictionary, type Dictionary } from "@/data/translations";
import {
  getLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

/**
 * Resolve locale from the URL for layout chrome (navbar/footer)
 * that sits outside the page-level LocaleProvider.
 */
export function usePathLocale(): { locale: Locale; dictionary: Dictionary } {
  const pathname = usePathname() || "/";
  return useMemo(() => {
    const locale = getLocaleFromPathname(pathname);
    return {
      locale,
      dictionary: getDictionary(locale),
    };
  }, [pathname]);
}
