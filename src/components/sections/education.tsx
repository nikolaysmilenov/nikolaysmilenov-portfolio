import { education } from "@/data/education";
import { currentlyLearning } from "@/data/skills";
import { getDictionary } from "@/data/translations";
import { Container } from "@/components/ui/container";
import { FadeIn, FadeInItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { pick, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Education({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const entries = education.filter((item) => !item.isPlaceholder);
  const currentCourse = entries.find((item) => item.status === "in-progress");
  const completed = entries.filter((item) => item.status === "completed");

  return (
    <section
      id="education"
      className="section-pad"
      aria-labelledby="education-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.education.number}
            title={dictionary.education.title}
            description={dictionary.education.description}
          />
          <h2 id="education-heading" className="sr-only">
            {dictionary.education.srTitle}
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {currentCourse ? (
            <FadeInItem index={0}>
              <article
                className="rounded-2xl border border-accent/35 bg-accent/5 p-5 shadow-card sm:p-6"
                aria-labelledby="current-course-heading"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-medium tracking-wide text-accent uppercase">
                    {dictionary.education.currentlyLearning}
                  </span>
                  <span className="inline-flex rounded-full border border-accent/30 px-2.5 py-1 text-[11px] font-medium tracking-wide text-accent uppercase">
                    {dictionary.education.inProgress}
                  </span>
                </div>

                <h3
                  id="current-course-heading"
                  className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl"
                >
                  {pick(currentCourse.program, locale)}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {currentCourse.institution}
                </p>

                <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border/80 bg-background/40 px-3 py-2.5">
                    <dt className="text-[11px] font-medium tracking-wide text-muted uppercase">
                      {dictionary.education.status}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {dictionary.education.inProgress}
                    </dd>
                  </div>
                  {currentCourse.started ? (
                    <div className="rounded-xl border border-border/80 bg-background/40 px-3 py-2.5">
                      <dt className="text-[11px] font-medium tracking-wide text-muted uppercase">
                        {dictionary.education.started}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">
                        {pick(currentCourse.started, locale)}
                      </dd>
                    </div>
                  ) : null}
                  {currentCourse.duration ? (
                    <div className="rounded-xl border border-border/80 bg-background/40 px-3 py-2.5">
                      <dt className="text-[11px] font-medium tracking-wide text-muted uppercase">
                        {dictionary.education.duration}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">
                        {pick(currentCourse.duration, locale)}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                {currentCourse.description ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {pick(currentCourse.description, locale)}
                  </p>
                ) : null}

                {currentCourse.tags && currentCourse.tags.length > 0 ? (
                  <div className="mt-4">
                    <p className="text-[11px] font-medium tracking-wide text-muted uppercase">
                      {dictionary.education.currentTopics}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap gap-2"
                      aria-label={dictionary.education.currentTopics}
                    >
                      {currentCourse.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-accent/20 bg-background/50 px-2.5 py-1 text-xs text-foreground/90"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </FadeInItem>
          ) : null}

          <div className="grid gap-5 lg:grid-cols-2">
            <FadeInItem index={1}>
              <article
                className="h-full rounded-2xl border border-border bg-surface/80 p-5 sm:p-6"
                aria-labelledby="completed-education-heading"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted uppercase">
                  {dictionary.education.completed}
                </span>
                <h3
                  id="completed-education-heading"
                  className="mt-3 font-display text-lg font-semibold text-foreground"
                >
                  {dictionary.education.completedEducation}
                </h3>

                <ul className="mt-4 space-y-5">
                  {completed.map((item) => {
                    const program = pick(item.program, locale);
                    return (
                      <li key={item.id}>
                        <p className="text-sm font-medium text-foreground">
                          {item.institution}
                        </p>
                        <p className="mt-0.5 text-sm text-muted">{program}</p>
                        {item.description ? (
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {pick(item.description, locale)}
                          </p>
                        ) : null}
                        {item.courses && item.courses.length > 0 ? (
                          <ul
                            className="mt-3 space-y-2"
                            aria-label={`${program} ${dictionary.education.certificatesAria}`}
                          >
                            {item.courses.map((course) => (
                              <li
                                key={course.title}
                                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-xl border border-border bg-background/40 px-3 py-2.5"
                              >
                                <span className="text-sm text-foreground">
                                  {course.title}
                                </span>
                                {course.grade ? (
                                  <span className="font-mono text-xs text-muted">
                                    {course.grade}
                                  </span>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </FadeInItem>

            <FadeInItem index={2}>
              <article
                className="h-full rounded-2xl border border-border bg-surface/80 p-5 sm:p-6"
                aria-labelledby="learning-focus-heading"
              >
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted uppercase">
                  {dictionary.education.focus}
                </span>
                <h3
                  id="learning-focus-heading"
                  className="mt-3 font-display text-lg font-semibold text-foreground"
                >
                  {dictionary.education.currentLearningFocus}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {dictionary.education.focusDescription}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {currentlyLearning.map((item) => (
                    <li
                      key={item.category.en}
                      className={cn(
                        "rounded-xl border border-border bg-background/40 px-3 py-3",
                      )}
                    >
                      <p className="text-sm font-medium text-foreground">
                        {pick(item.category, locale)}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        {pick(item.note, locale)}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeInItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
