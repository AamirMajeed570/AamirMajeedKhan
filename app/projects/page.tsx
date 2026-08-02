import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata = {
  title: "Projects | Aamir Majeed Khan",
  description: "A collection of selected projects spanning AI, real-time systems, backend engineering, and full-stack product work.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across full-stack and backend engineering"
          description="A curated view of the products and systems I have built or contributed to."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-1 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
