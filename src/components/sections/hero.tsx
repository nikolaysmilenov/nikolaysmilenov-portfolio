import { ArrowDownRight, Download, Mail } from "lucide-react";
import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { social } from "@/data/social";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { pick, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid opacity-[0.28] dark:opacity-35" />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <ProfileImage
              src={siteConfig.profilePath}
              alt={dictionary.hero.profileAlt}
            />
          </div>

          <div
            className="animate-fade-up mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur-md"
            style={{ animationDelay: "40ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50 opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {pick(siteConfig.statusBadge, locale)}
          </div>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            {siteConfig.name}
          </h1>

          <p
            className="animate-fade-up mt-3 text-lg font-medium text-accent sm:text-xl"
            style={{ animationDelay: "110ms" }}
          >
            {pick(siteConfig.role, locale)}
          </p>

          <p
            className="animate-fade-up mt-2 text-sm tracking-wide text-muted"
            style={{ animationDelay: "140ms" }}
          >
            {siteConfig.focus[locale].join(" • ")}
          </p>

          {siteConfig.location ? (
            <p
              className="animate-fade-up mt-2 text-xs text-muted"
              style={{ animationDelay: "155ms" }}
            >
              {pick(siteConfig.location, locale)}
            </p>
          ) : null}

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-muted"
            style={{ animationDelay: "170ms" }}
          >
            {pick(siteConfig.tagline, locale)}
          </p>

          <div
            className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "210ms" }}
          >
            <Button
              href="#projects"
              size="lg"
              rightIcon={<ArrowDownRight className="h-4 w-4" />}
            >
              {dictionary.hero.viewProjects}
            </Button>

            <Button
              href={social.email ? `mailto:${social.email}` : "#contact"}
              variant="secondary"
              size="lg"
              leftIcon={<Mail className="h-4 w-4" />}
            >
              {dictionary.hero.contactMe}
            </Button>

            {siteConfig.cvAvailable ? (
              <Button
                href={siteConfig.cvPath}
                variant="outline"
                size="lg"
                leftIcon={<Download className="h-4 w-4" />}
                download="Nikolay-Smilenov-CV.pdf"
                aria-label={dictionary.hero.downloadCvAria}
              >
                {dictionary.hero.downloadCv}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
