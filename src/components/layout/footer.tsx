"use client";

import Link from "next/link";
import { usePathLocale } from "@/components/i18n/use-path-locale";
import { footerLinks, type NavLinkId } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { social } from "@/data/social";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { pick } from "@/lib/i18n";

export function Footer() {
  const { locale, dictionary } = usePathLocale();

  const footerLabels: Partial<Record<NavLinkId, string>> = {
    projects: dictionary.nav.projects,
    certificates: dictionary.nav.certificates,
    contact: dictionary.nav.contact,
  };

  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {pick(siteConfig.role, locale)}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.focus[locale].join(" • ")}
          </p>
          <div className="mt-4 flex items-center gap-2">
            {social.github ? (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dictionary.nav.github}
                className="rounded-lg border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            ) : null}
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dictionary.nav.linkedin}
                className="rounded-lg border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label={dictionary.nav.footer}>
            <ul className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {footerLabels[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-1 text-xs text-muted sm:text-right">
            <p>{dictionary.footer.copyright}</p>
            <p>{dictionary.footer.builtWith}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
