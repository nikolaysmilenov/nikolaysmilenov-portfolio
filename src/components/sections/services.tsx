"use client";

import { ArrowUpRight } from "lucide-react";
import {
  formatServicePrice,
  serviceCategories,
  type Service,
  type ServiceInquiryId,
} from "@/data/services";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn, FadeInItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { openContactWithService } from "@/lib/contact-intent";
import { pick, pickList } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Services() {
  const { locale, dictionary } = useLocaleContext();
  const priceLabels = {
    startingFrom: dictionary.services.startingFrom,
    perMonth: dictionary.services.perMonth,
    perHour: dictionary.services.perHour,
  };

  return (
    <section id="services" className="section-pad" aria-labelledby="services-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.services.number}
            title={dictionary.services.title}
            description={dictionary.services.description}
          />
          <h2 id="services-heading" className="sr-only">
            {dictionary.services.srTitle}
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <FadeIn key={category.id} delay={0.04 * categoryIndex}>
              <div className="space-y-5">
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                      {category.number}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                      {pick(category.title, locale)}
                    </h3>
                    {category.description ? (
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                        {pick(category.description, locale)}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div
                  className={cn(
                    "grid gap-4",
                    category.variant === "maintenance"
                      ? "md:grid-cols-3"
                      : category.variant === "custom"
                        ? "md:grid-cols-1"
                        : category.id === "software"
                          ? "sm:grid-cols-2 xl:grid-cols-3"
                          : "sm:grid-cols-2 xl:grid-cols-4",
                  )}
                >
                  {category.services.map((service, index) => (
                    <FadeInItem key={service.id} index={index}>
                      <ServiceCard
                        service={service}
                        variant={category.variant}
                        popular={service.id === "maintenance-standard"}
                        mostPopularLabel={dictionary.services.mostPopular}
                        priceLabel={formatServicePrice(
                          service.price,
                          service.priceType,
                          locale,
                          priceLabels,
                        )}
                        ctaLabel={
                          category.variant === "custom"
                            ? dictionary.services.customProjectCta
                            : category.variant === "maintenance"
                              ? dictionary.services.getQuote
                              : category.id === "websites"
                                ? dictionary.services.choosePackage
                                : dictionary.services.discussProject
                        }
                        onInquire={() =>
                          openContactWithService(
                            service.inquiryId as ServiceInquiryId,
                            pick(service.title, locale),
                          )
                        }
                      />
                    </FadeInItem>
                  ))}
                </div>

                {category.variant === "maintenance" ? (
                  <div className="rounded-2xl border border-dashed border-border bg-surface/40 px-4 py-3 sm:px-5">
                    <p className="text-sm text-muted">
                      {dictionary.services.additionalWorkDescription}
                    </p>
                  </div>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.08}>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {dictionary.services.pricingNote}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 rounded-2xl border border-border bg-surface/80 p-6 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {dictionary.services.ctaTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {dictionary.services.ctaDescription}
              </p>
            </div>
            <Button
              className="mt-5 w-full shrink-0 sm:mt-0 sm:w-auto"
              rightIcon={<ArrowUpRight className="h-4 w-4" aria-hidden />}
              onClick={() =>
                openContactWithService(
                  "custom-project",
                  pick(
                    { en: "Custom Project", bg: "Персонализиран проект" },
                    locale,
                  ),
                )
              }
            >
              {dictionary.services.ctaButton}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  variant,
  popular,
  mostPopularLabel,
  priceLabel,
  ctaLabel,
  onInquire,
}: {
  service: Service;
  variant: "project" | "maintenance" | "custom";
  popular?: boolean;
  mostPopularLabel: string;
  priceLabel: string;
  ctaLabel: string;
  onInquire: () => void;
}) {
  const { locale } = useLocaleContext();
  const features = pickList(service.features, locale);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 sm:p-6",
        popular
          ? "border-accent/50 bg-accent/[0.07] shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_18%,transparent),0_12px_32px_-18px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
          : variant === "maintenance"
            ? "border-border bg-surface/80 hover:border-accent/30"
            : variant === "custom"
              ? "border-border bg-surface/90 hover:border-accent/30 sm:flex-row sm:items-stretch sm:gap-8"
              : "border-border bg-surface/80 hover:border-accent/30",
      )}
    >
      {popular ? (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-accent-foreground uppercase">
          {mostPopularLabel}
        </span>
      ) : null}

      <div className={cn(variant === "custom" && "sm:max-w-md sm:shrink-0")}>
        <h4 className="font-display text-lg font-semibold text-foreground">
          {pick(service.title, locale)}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {pick(service.description, locale)}
        </p>
        <p className="mt-4 font-display text-xl font-semibold text-accent">
          {priceLabel}
        </p>
        {service.priceNote ? (
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            {pick(service.priceNote, locale)}
          </p>
        ) : null}
      </div>

      <div
        className={cn(
          "mt-5 flex flex-1 flex-col",
          variant === "custom" && "sm:mt-0 sm:border-l sm:border-border sm:pl-8",
        )}
      >
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          size="sm"
          className="mt-6 w-full whitespace-normal text-center leading-snug sm:mt-auto"
          rightIcon={<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />}
          onClick={onInquire}
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
