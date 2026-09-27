"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeading } from "@/components/section";
import { projects } from "@/lib/site";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        index="04"
        title="Projects"
        lede="Systems I designed and shipped, from asynchronous email delivery to LLM media processing."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="group flex h-full flex-col border border-border bg-card/40 p-6 transition-colors duration-200 hover:border-foreground/25 sm:p-7"
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs text-brass">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-xl font-medium tracking-tight">
              {project.name}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="border-l border-border pl-3 text-sm leading-6 text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 pt-2">
              <ProjectLink href={project.github} label="GitHub" />
              {project.live ? (
                <ProjectLink href={project.live} label="Live Demo" />
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border px-3 text-sm text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
    >
      {label}
      <ArrowUpRight
        className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
