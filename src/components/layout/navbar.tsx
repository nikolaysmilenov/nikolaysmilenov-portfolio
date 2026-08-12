"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { usePathLocale } from "@/components/i18n/use-path-locale";
import { navLinks, type NavLinkId } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { social } from "@/data/social";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { locale, dictionary } = usePathLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduceMotion = useReducedMotion();
  const isBg = locale === "bg";

  const navLabels: Record<NavLinkId, string> = {
    home: dictionary.nav.home,
    about: dictionary.nav.about,
    projects: dictionary.nav.projects,
    services: dictionary.nav.services,
    certificates: dictionary.nav.certificates,
    skills: dictionary.nav.skills,
    education: dictionary.nav.education,
    contact: dictionary.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8",
          isBg
            ? "max-w-7xl gap-2 lg:gap-3"
            : "max-w-6xl gap-3",
        )}
        aria-label={dictionary.nav.primary}
      >
        <Link
          href="#home"
          className={cn(
            "group flex min-w-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            isBg ? "gap-2 lg:max-w-[12.5rem] xl:max-w-none" : "gap-3",
          )}
          onClick={closeMenu}
          aria-label={siteConfig.name}
        >
          <BrandLogo title={`${siteConfig.name} logo`} />
          <span
            className="hidden h-5 w-px shrink-0 bg-border sm:block"
            aria-hidden
          />
          <span className="hidden truncate font-display text-sm font-semibold tracking-tight text-foreground sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <ul
          className={cn(
            "hidden items-center lg:flex",
            isBg
              ? "min-w-0 flex-1 justify-center gap-0 px-1"
              : "gap-0.5",
          )}
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className={isBg ? "shrink-0" : undefined}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-lg py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isBg
                      ? "whitespace-nowrap px-2 xl:px-2.5"
                      : "px-3",
                    isActive
                      ? "bg-accent/10 text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {navLabels[link.id]}
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            "flex shrink-0 items-center",
            isBg ? "gap-1 sm:gap-1.5" : "gap-1.5 sm:gap-2",
          )}
        >
          <LanguageSwitcher />

          <div className="hidden items-center gap-1 md:flex">
            {social.github ? (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dictionary.nav.github}
                className="rounded-lg p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                className="rounded-lg p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>

          <ThemeToggle className="hidden sm:inline-flex" />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface-elevated/70 p-2 text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "rounded-xl px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "bg-accent/10 text-foreground"
                        : "text-foreground hover:bg-surface-elevated",
                    )}
                  >
                    {navLabels[link.id]}
                  </a>
                );
              })}

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  {social.github ? (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={dictionary.nav.github}
                      className="rounded-lg border border-border p-2 text-muted hover:text-foreground"
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
                      className="rounded-lg border border-border p-2 text-muted hover:text-foreground"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
