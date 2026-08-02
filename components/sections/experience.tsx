import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping across full-stack, backend, and product delivery"
          description="Experience is captured in a clear timeline so recruiters and hiring teams can quickly understand the scope of my work."
        />
        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <div key={`${item.company}-${index}`} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm text-violet-400">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{item.role}</h3>
                  <p className="mt-2 text-zinc-400">{item.company} • {item.location}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Responsibilities</h4>
                  <ul className="mt-4 space-y-3 text-zinc-400">
                    {item.responsibilities.map((entry) => <li key={entry} className="list-disc pl-5">{entry}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Achievements</h4>
                  <ul className="mt-4 space-y-3 text-zinc-400">
                    {item.achievements.map((entry) => <li key={entry} className="list-disc pl-5">{entry}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
