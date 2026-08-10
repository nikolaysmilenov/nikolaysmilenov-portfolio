import { journey } from "@/data/journey";
import { getDictionary } from "@/data/translations";
import { Container } from "@/components/ui/container";
import { FadeIn, FadeInItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { pick, type Locale } from "@/lib/i18n";

export function Journey({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="journey" className="section-pad" aria-labelledby="journey-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.journey.number}
            title={dictionary.journey.title}
            description={dictionary.journey.description}
          />
          <h2 id="journey-heading" className="sr-only">
            {dictionary.journey.srTitle}
          </h2>
        </FadeIn>

        <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
          {journey.map((item, index) => (
            <FadeInItem key={item.id} index={index}>
              <li className="relative">
                <span
                  className="absolute top-5 -left-[1.91rem] flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border border-accent/45 bg-background sm:-left-[2.41rem]"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <article className="rounded-2xl border border-border bg-surface/70 p-4 transition-colors hover:border-accent/20 sm:p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                      {item.year}
                    </p>
                    <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {pick(item.title, locale)}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pick(item.description, locale)}
                  </p>
                </article>
              </li>
            </FadeInItem>
          ))}
        </ol>
      </Container>
    </section>
  );
}
