"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const { dictionary } = useLocaleContext();
  const featured = projects.filter((project) => project.featured !== false);
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.projects.number}
            title={dictionary.projects.title}
            description={dictionary.projects.description}
          />
          <h2 id="projects-heading" className="sr-only">
            {dictionary.projects.srTitle}
          </h2>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={(item) => {
                setActive(item);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </Container>

      <ProjectModal
        project={active}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
