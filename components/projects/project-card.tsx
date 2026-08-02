import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe2, Monitor } from "lucide-react";
import type { Project } from "@/types";
import { TechBadge } from "@/components/shared/tech-badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-violet-400">{project.status}</p>
            <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
          </div>
        </div>
        <p className="text-sm leading-7 text-zinc-400">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
          >
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600"
            >
              <Monitor className="h-4 w-4" /> Live Demo
            </a>
          ) : null}
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600"
            >
              <Globe2 className="h-4 w-4" /> GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
