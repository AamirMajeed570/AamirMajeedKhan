import { SectionHeading } from "@/components/shared/section-heading";
import { Cpu, Bug, BrainCircuit, Radio, Rocket, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Scalable Backend Systems",
    description: "I design modular backend services with clean business boundaries, secure APIs, database indexing, caching, queues, and cloud-native deployment strategies.",
    icon: Cpu,
  },
  {
    title: "Production Debugging",
    description: "I investigate production issues using logs, metrics, network inspection, database analysis, and controlled reproduction before applying fixes.",
    icon: Bug,
  },
  {
    title: "AI Integration",
    description: "I integrate LLMs as controlled orchestration layers that call validated backend tools instead of directly handling sensitive business logic.",
    icon: BrainCircuit,
  },
  {
    title: "Real-Time Systems",
    description: "I have worked with LiveKit, WebRTC, Asterisk, server-sent events, and real-time communication workflows.",
    icon: Radio,
  },
  {
    title: "DevOps and Deployment",
    description: "I use Docker, Docker Compose, GitHub Actions, AWS, CI/CD pipelines, staging environments, and production deployment practices.",
    icon: Rocket,
  },
  {
    title: "API Reliability",
    description: "I use validation, idempotency, authentication, authorization, retry strategies, caching, structured logging, and error handling.",
    icon: ShieldCheck,
  },
];

export function EngineeringHighlights() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering Highlights"
          title="How I Approach Engineering"
          description="I combine product sense with a disciplined engineering approach to build systems that are maintainable, observable, and production-ready."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div key={highlight.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-100">{highlight.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
