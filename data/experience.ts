import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "LegitBytes Information Technology LLP",
    role: "Full-Stack Engineer",
    period: "2024 - 2026",
    location: "Onsite, Mohali, India",
    responsibilities: [
      "Built scalable backend APIs using Node.js and PostgreSQL.",
      "Integrated real-time communication using LiveKit and Asterisk.",
      "Worked with AWS, Docker, CI/CD, and production deployments.",
      "Integrated AI and payment workflows.",
    ],
    achievements: [
      "Improved deployment reliability across production releases.",
      "Delivered integrations for voice, payments, and AI.",
      "Supported debugging and incident management for customer-facing systems.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "LiveKit", "Razorpay"],
  },
  {
    company: "Applify",
    role: "Backend Engineer",
    period: "2026 - Present",
    location: "Remote",
    responsibilities: [
      "Designed and maintained REST APIs for business workflows.",
      "Implemented webhook handlers and asynchronous processing.",
      "Collaborated with product and infrastructure teams on deployment improvements.",
      "Helped shape AI-assisted platform capabilities.",
    ],
    achievements: [
      "Built robust event-driven integrations",
      "Reduced operational friction through better logging and monitoring",
      "Contributed to multiple production-ready services",
    ],
    technologies: ["Express.js", "MongoDB", "Redis", "Docker", "OpenAI API", "GitHub Actions"],
  },
];
