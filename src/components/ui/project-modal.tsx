"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, LayoutTemplate, Lock, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/icons";
import { pick, pickList } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const { locale, dictionary } = useLocaleContext();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  const description = pick(project.description, locale);
  const overview = pick(project.overview, locale);
  const whatIBuilt = pickList(project.whatIBuilt, locale);
  const keyFeatures = pickList(project.keyFeatures, locale);
  const statusLabel = pick(project.statusLabel, locale);
  const isBg = locale === "bg";
  /** Cyrillic case-study body needs looser metrics than English text-sm. */
  const bodyProseClass = isBg
    ? "text-sm leading-7 tracking-normal [word-spacing:0.06em] text-muted"
    : "text-sm leading-relaxed text-muted";
  const compactProseClass = isBg
    ? "text-sm leading-7 tracking-normal [word-spacing:0.06em] text-muted"
    : "text-sm text-muted";
  const listItemClass = isBg
    ? "flex gap-2.5 text-sm leading-7 tracking-normal [word-spacing:0.06em] text-muted"
    : "flex gap-2 text-sm text-muted";
  const listGapClass = isBg ? "mt-3 space-y-3" : "mt-3 space-y-2";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-5"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={dictionary.projects.closeCaseStudy}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden",
          "rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl",
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase",
                  project.private
                    ? "border border-border text-muted"
                    : "bg-accent/10 text-accent",
                )}
              >
                {project.private ? <Lock className="h-3 w-3" aria-hidden /> : null}
                {statusLabel}
              </span>
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                {dictionary.projects.caseStudy}
              </span>
            </div>
            <h3
              id={titleId}
              className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl"
            >
              {project.title}
            </h3>
            <p className={cn("mt-1.5", compactProseClass)}>{description}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl border border-border p-2 text-muted transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={dictionary.projects.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <ProjectModalMedia key={project.id} project={project} />

          <div className="space-y-7 px-5 py-6 sm:px-6">
            <DetailBlock title={dictionary.projects.overview} proseClass={bodyProseClass}>
              {overview}
            </DetailBlock>

            {whatIBuilt.length > 0 ? (
              <ListBlock
                title={dictionary.projects.whatIBuilt}
                items={whatIBuilt}
                listGapClass={listGapClass}
                listItemClass={listItemClass}
                isBg={isBg}
              />
            ) : null}

            {keyFeatures.length > 0 ? (
              <ListBlock
                title={dictionary.projects.keyFeatures}
                items={keyFeatures}
                listGapClass={listGapClass}
                listItemClass={listItemClass}
                isBg={isBg}
              />
            ) : null}

            {project.technologies.length > 0 ? (
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  {dictionary.projects.technologies}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {dictionary.projects.projectStatus}
              </h4>
              <p className={cn("mt-2", compactProseClass)}>{statusLabel}</p>
            </div>

            <div className="border-t border-border pt-5">
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                {dictionary.projects.links}
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  >
                    {dictionary.projects.liveWebsite}
                  </Button>
                ) : null}
                {project.githubUrl ? (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    leftIcon={<GitHubIcon className="h-3.5 w-3.5" />}
                  >
                    {dictionary.projects.github}
                  </Button>
                ) : project.sourcePrivate ? (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-muted">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    {dictionary.projects.sourceNotPublic}
                  </span>
                ) : null}
                {project.private ? (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-muted">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    {dictionary.projects.privateProject}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModalMedia({ project }: { project: Project }) {
  const { dictionary } = useLocaleContext();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="border-b border-border bg-background/60 px-3 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-h-[min(48vh,520px)] w-full max-w-3xl items-center justify-center overflow-auto rounded-xl border border-border bg-background/80 p-2">
        {project.previewImage && !imageFailed ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} ${dictionary.projects.caseStudyScreenshotAlt}`}
            width={1600}
            height={1000}
            sizes="(max-width: 768px) 100vw, 896px"
            className="h-auto max-h-[min(46vh,500px)] w-auto max-w-full object-contain"
            onError={() => setImageFailed(true)}
            priority
          />
        ) : (
          <div className="flex min-h-[180px] w-full flex-col items-center justify-center gap-3">
            <LayoutTemplate className="h-8 w-8 text-accent/80" aria-hidden />
            <p className="text-sm text-muted">
              {dictionary.projects.projectPreview}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailBlock({
  title,
  children,
  proseClass,
}: {
  title: string;
  children: string;
  proseClass: string;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <p className={cn("mt-2", proseClass)}>{children}</p>
    </div>
  );
}

function ListBlock({
  title,
  items,
  listGapClass,
  listItemClass,
  isBg,
}: {
  title: string;
  items: string[];
  listGapClass: string;
  listItemClass: string;
  isBg: boolean;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className={listGapClass}>
        {items.map((item) => (
          <li key={item} className={listItemClass}>
            <span
              className={cn(
                "h-1 w-1 shrink-0 rounded-full bg-accent/70",
                isBg ? "mt-2.5" : "mt-2",
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
