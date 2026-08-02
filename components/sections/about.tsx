import { heroStats } from "@/data/site-config";
import { SectionHeading } from "@/components/shared/section-heading";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building dependable products from API design to production delivery"
          description="I focus on reliable systems, thoughtful architecture, and product-minded engineering that scales from prototype to production."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I am a Full-Stack and Backend Engineer focused on building reliable, scalable, and user-focused software products. My experience includes modern frontend development, backend API design, database architecture, cloud deployment, real-time communication systems, payment integrations, and AI-powered workflows.
            </p>
            <p>
              I enjoy solving production problems, designing clean backend systems, improving performance, and turning complex business requirements into maintainable software.
            </p>
            <p>
              Along with application development, I have practical experience with Docker, CI/CD, AWS services, Git workflows, WebRTC, LiveKit, Asterisk, Razorpay webhooks, OpenAI APIs, and RAG-based systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                <p className="text-3xl font-semibold text-zinc-100">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
