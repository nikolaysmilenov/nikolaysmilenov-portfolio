import { BookOpen, Brain, Code2, Shield } from "lucide-react";
import { aboutFocus } from "@/data/skills";
import { getDictionary } from "@/data/translations";
import { Container } from "@/components/ui/container";
import { FadeIn, FadeInItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { pick, type Locale } from "@/lib/i18n";

const focusIcons = {
  web: Code2,
  ai: Brain,
  security: Shield,
  learning: BookOpen,
} as const;

export function About({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.about.number}
            title={dictionary.about.title}
          />
          <h2 id="about-heading" className="sr-only">
            {dictionary.about.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.04}>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>{dictionary.about.paragraph1}</p>
            <p>{dictionary.about.paragraph2}</p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutFocus.map((item, index) => {
            const Icon = focusIcons[item.id as keyof typeof focusIcons];
            return (
              <FadeInItem key={item.id} index={index}>
                <article className="h-full rounded-2xl border border-border bg-surface/80 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/25">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50 text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {pick(item.title, locale)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {pick(item.description, locale)}
                  </p>
                </article>
              </FadeInItem>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
