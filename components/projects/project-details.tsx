import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe2, Monitor } from "lucide-react";
import type { Project } from "@/types";
import { TechBadge } from "@/components/shared/tech-badge";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="space-y-10">
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
        <div className="relative aspect-[16/9]">
          <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="space-y-6 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-zinc-100">{project.title}</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links?.demo ? (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                  <Monitor className="h-4 w-4" /> Live Demo
                </a>
              ) : null}
              {project.links?.github ? (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                  <Globe2 className="h-4 w-4" /> GitHub
                </a>
              ) : null}
            </div>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-zinc-400">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <TechBadge key={tech} label={tech} />)}</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Problem</h2>
            <p className="mt-4 text-zinc-400">{project.technicalChallenge}</p>
          </section>
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">My Role</h2>
            <p className="mt-4 text-zinc-400">{project.role}</p>
          </section>
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Architecture</h2>
            <p className="mt-4 text-zinc-400">{project.architecture}</p>
          </section>
        </div>
        <div className="space-y-8">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Challenges</h2>
            <ul className="mt-4 space-y-3 text-zinc-400">
              {project.challenges.map((item) => <li key={item} className="list-disc pl-5">{item}</li>)}
            </ul>
          </section>
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Solution</h2>
            <p className="mt-4 text-zinc-400">{project.solution}</p>
          </section>
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Results</h2>
            <ul className="mt-4 space-y-3 text-zinc-400">
              {project.results.map((item) => <li key={item} className="list-disc pl-5">{item}</li>)}
            </ul>
          </section>
        </div>
      </div>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
        <h2 className="text-2xl font-semibold text-zinc-100">Key Learnings</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {project.learnings.map((item) => (
            <li key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-zinc-400">{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
        <h2 className="text-2xl font-semibold text-zinc-100">Screenshots</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {project.screenshots?.map((image) => (
            <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800">
              <Image src={image} alt={`${project.title} screenshot`} fill sizes="50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-violet-300">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>
    </article>
  );
}
