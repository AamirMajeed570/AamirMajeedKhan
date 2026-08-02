import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Sparkles } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for modern product engineering"
          description="I work across the stack, from frontend interfaces to distributed backend systems and AI-enabled workflows."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7">
              <div className="flex items-center gap-2 text-violet-300">
                <Sparkles className="h-4 w-4" />
                <h3 className="text-xl font-semibold text-zinc-100">{group.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
