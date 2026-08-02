import { clients } from "@/data/clients";
import { SectionHeading } from "@/components/shared/section-heading";

export function ClientsSection() {
  return (
    <section id="clients" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clients"
          title="Freelance and client engagements that shaped my delivery approach"
          description="This section highlights the clients I’ve worked with outside my formal experience timeline, while keeping the focus on impact and collaboration."
        />
        <div className="mt-12 space-y-6">
          {clients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm text-violet-400">{client.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{client.name}</h3>
                  <p className="mt-2 text-zinc-400">{client.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {client.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-zinc-400">{client.description}</p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Impact</h4>
                <ul className="mt-4 space-y-3 text-zinc-400">
                  {client.impact.map((entry) => (
                    <li key={entry} className="list-disc pl-5">
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
