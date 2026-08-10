"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePathLocale } from "@/components/i18n/use-path-locale";
import {
  getLocaleFromPathname,
  localeHomePath,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() || "/";
  const { dictionary } = usePathLocale();
  const activeLocale = getLocaleFromPathname(pathname);

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg border border-border bg-surface-elevated/70 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label={dictionary.language.label}
    >
      <LocaleLink
        locale="en"
        active={activeLocale === "en"}
        href={localeHomePath("en")}
        label={dictionary.language.en}
        ariaLabel={dictionary.language.switchToEn}
      />
      <span className="px-0.5 text-muted" aria-hidden>
        |
      </span>
      <LocaleLink
        locale="bg"
        active={activeLocale === "bg"}
        href={localeHomePath("bg")}
        label={dictionary.language.bg}
        ariaLabel={dictionary.language.switchToBg}
      />
    </div>
  );
}

function LocaleLink({
  locale,
  active,
  href,
  label,
  ariaLabel,
}: {
  locale: Locale;
  active: boolean;
  href: string;
  label: string;
  ariaLabel: string;
}) {
  return (
    <Link
      href={href}
      hrefLang={locale}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-md px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        active
          ? "bg-accent/15 text-foreground"
          : "text-muted hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}
