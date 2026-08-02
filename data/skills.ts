import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern interfaces and product experiences",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "React Hook Form", "Zod"],
  },
  {
    title: "Backend",
    description: "Scalable APIs and service logic",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "REST APIs", "GraphQL", "Server-Sent Events", "Webhooks", "JWT", "OAuth 2.0"],
  },
  {
    title: "Databases",
    description: "Reliable persistence and data modeling",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Mongoose", "TypeORM"],
  },
  {
    title: "Cloud and DevOps",
    description: "Deployment, automation, and observability",
    skills: ["AWS", "AWS Lambda", "Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Vercel", "Git", "GitHub"],
  },
  {
    title: "AI and Real-Time Systems",
    description: "AI-powered workflows and communication platforms",
    skills: ["OpenAI APIs", "Large Language Models", "RAG", "Prompt Engineering", "AI Tool Calling", "LiveKit", "WebRTC", "Asterisk", "Real-Time Voice Systems"],
  },
  {
    title: "Payments and Integrations",
    description: "Production integrations and secure workflows",
    skills: ["Razorpay", "Payment Webhooks", "Third-Party API Integration", "Idempotent Webhook Processing"],
  },
];
