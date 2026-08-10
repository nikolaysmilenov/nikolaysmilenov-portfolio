"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, LayoutTemplate, Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/icons";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index = 0, onOpen }: ProjectCardProps) {
  const { locale, dictionary } = useLocaleContext();
  const [imageFailed, setImageFailed] = useState(false);
  const description = pick(project.description, locale);
  const statusLabel = pick(project.statusLabel, locale);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card backdrop-blur-md",
        "transition-[border-color,box-shadow,transform] duration-300",
        "hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover",
        "animate-fade-up",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl border-b border-border bg-background/40 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        aria-label={`${dictionary.projects.viewCaseStudyAria}: ${project.title}`}
      >
        {project.previewImage && !imageFailed ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} ${dictionary.projects.screenshotAlt}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface via-background to-accent/12 px-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent">
              <LayoutTemplate className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-sm font-medium text-foreground">
              {dictionary.projects.projectPreview}
            </p>
          </div>
        )}
      </button>

      <div className="relative flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
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
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>

        {project.technologies.length > 0 ? (
          <ul
            className="flex flex-wrap gap-2"
            aria-label={dictionary.projects.technologies}
          >
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              size="sm"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              {dictionary.projects.liveWebsite}
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              variant="outline"
              size="sm"
              leftIcon={<GitHubIcon className="h-3.5 w-3.5" />}
            >
              {dictionary.projects.viewCode}
            </Button>
          ) : null}
          <Button
            variant={project.liveUrl || project.githubUrl ? "ghost" : "primary"}
            size="sm"
            onClick={() => onOpen(project)}
          >
            {dictionary.projects.viewCaseStudy}
          </Button>
        </div>
      </div>
    </article>
  );
}
