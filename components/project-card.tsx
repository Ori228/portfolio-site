"use client";
import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasAssignments = project.assignments && project.assignments.length > 0;

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-foreground/25 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-balance">
          {project.title}
        </h3>
        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      {hasAssignments ? (
        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <Minus className="size-4" />
            ) : (
              <Plus className="size-4" />
            )}
            {isExpanded ? "Hide Assignments" : "View Assignments"}
          </button>

          {isExpanded && (
            <ul className="mt-4 flex flex-col gap-2 rounded-lg bg-background/50 p-4 border border-border">
              {project.assignments!.map((assignment, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="size-1.5 rounded-full bg-primary/50 shrink-0" />
                  {assignment}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>
      )}

      <ul className="mb-6 flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-secondary-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
      >
        <GithubIcon className="size-4" />
        View on GitHub
      </a>
    </article>
  );
}
