import {
  Brain,
  Code2,
  Database,
  Rocket,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { getDictionary } from "@/data/translations";
import { Container } from "@/components/ui/container";
import { FadeIn, FadeInItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { pick, type Locale } from "@/lib/i18n";

const iconMap: Record<(typeof skillCategories)[number]["icon"], LucideIcon> = {
  frontend: Code2,
  backend: Database,
  tools: Rocket,
  security: Shield,
  ai: Brain,
};

export function Skills({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section id="skills" className="section-pad" aria-labelledby="skills-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.skills.number}
            title={dictionary.skills.title}
            description={dictionary.skills.description}
          />
          <h2 id="skills-heading" className="sr-only">
            {dictionary.skills.srTitle}
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            const title = pick(category.title, locale);
            return (
              <FadeInItem key={category.id} index={index}>
                <article className="h-full rounded-2xl border border-border bg-surface/80 p-5 shadow-card backdrop-blur-md transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 sm:p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {pick(category.description, locale)}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={title}>
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInItem>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
