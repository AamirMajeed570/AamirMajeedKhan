import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that spans AI, real-time systems, and product engineering"
          description="Each project reflects a different part of my engineering practice, from backend reliability to applied AI and communications systems."
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.filter((project) => project.featured).map((project) => (
              <div key={project.slug} className="w-[min(100%,320px)] shrink-0 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
