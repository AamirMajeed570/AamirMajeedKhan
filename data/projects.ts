import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "tazzo-ai",
    title: "Tazzo AI",
    // status: "Production",
    shortDescription:
      "A real-time AI voice communication platform integrating LiveKit, Asterisk, Node.js, AWS, and payment workflows.",
    longDescription:
      "Tazzo AI is a real-time voice platform designed for app-to-phone communication and AI-enabled call workflows. The system combines LiveKit, WebRTC, Asterisk, Node.js, AWS infrastructure, and Razorpay payment integration.",
    category: "Real-Time",
    image: "/images/projects/Tazzo-ai.png",
    featured: true,
    technologies: ["Node.js", "LiveKit", "WebRTC", "Asterisk", "AWS Lambda", "Razorpay", "Docker", "PostgreSQL"],
    keyFeatures: [
      "Real-time app-to-phone communication",
      "LiveKit and Asterisk integration",
      "Razorpay payment and webhook handling",
      "AWS Lambda-based backend workflows",
      "Concurrent call architecture",
      "Real-time session and event management",
    ],
    technicalChallenge:
      "One major production issue involved an AWS Lambda function running inside a VPC that could not access required external services.",
    solution:
      "The networking configuration was corrected to ensure the Lambda had the required private subnet connectivity and outbound access while maintaining access to internal resources.",
    role: "Backend engineer focused on production debugging, infrastructure troubleshooting, and integration reliability.",
    architecture:
      "A distributed voice workflow using a real-time media layer, telephony integration, and asynchronous backend services connected by event-driven processing.",
    challenges: [
      "Network troubleshooting in a VPC-based environment",
      "Concurrency issues during peak call loads",
      "Webhook reliability for payment state updates",
    ],
    results: [
      "Improved platform stability in production",
      "Resolved critical connectivity issues",
      "Strengthened payment and call workflow observability",
    ],
    learnings: [
      "Logs and traffic analysis matter as much as code changes",
      "Cloud networking requires careful testing across private and public paths",
      "Reliable integrations depend on idempotency and retries",
    ],
    links: {
      demo: "https://tazzo.ai",
    //   github: "https://github.com/your-username",
    },
    screenshots: ["/images/projects/tazzo-ai.png"],
  },
   {
    slug: "insmeal",
    title: "Insmeal",
    // status: "Production",
    shortDescription:
      "A production company product where I contributed to full-stack functionality, backend APIs, and product development.",
    longDescription:
      "Insmeal is a production company product that benefited from product-oriented engineering, API work, and cross-functional delivery support.",
    category: "Product",
    image: "/images/projects/Insmeal.png",
    featured: true,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
    keyFeatures: [
      "Product engineering support",
      "Backend API development",
      "System integration work",
      "Cross-functional delivery",
    ],
    technicalChallenge:
      "The project required balancing fast delivery with production-ready architecture and maintainability.",
    solution:
      "I focused on API stability, maintainable implementation patterns, and close collaboration with product and engineering stakeholders.",
    role: "Contributor across product development, backend APIs, and implementation execution.",
    architecture:
      "A modular application architecture with a web client, backend services, and shared data flows for product features.",
    challenges: [
      "Supporting evolving product requirements",
      "Maintaining consistency across modules",
      "Keeping production delivery momentum high",
    ],
    results: [
      "Delivered meaningful product improvements",
      "Strengthened backend reliability",
      "Improved engineering collaboration around implementation",
    ],
    learnings: [
      "Product work rewards strong communication as much as technical depth",
      "Small architectural choices can shape delivery quality",
      "Shipping incrementally creates trust and momentum",
    ],
    links: {
      demo: "https://insmeal.com",
    },
    screenshots: ["/images/projects/Insmeal.png"],
  },
  {
    slug: "clinicos",
    title: "ClinicOS",
    // status: "In Development",
    shortDescription:
      "An AI-enabled clinic receptionist and appointment-management platform.",
    longDescription:
      "ClinicOS is designed to reduce manual receptionist work by managing patient searches, appointments, follow-ups, pending bills, and clinic workflows through structured APIs and an AI assistant.",
    category: "AI",
    image: "/images/projects/clinicos.png",
    featured: true,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "RAG", "Docker", "REST APIs"],
    keyFeatures: [
      "Patient search",
      "Appointment scheduling",
      "Pending follow-up management",
      "Receptionist workflow automation",
      "AI assistant with backend API tool calling",
    ],
    technicalChallenge:
      "The main architectural challenge is ensuring that the LLM does not directly control sensitive business logic.",
    solution:
      "Use a tool-calling architecture where the LLM selects approved APIs, while authentication, validation, and business rules remain inside the backend.",
    role: "System architect and full-stack engineer for the product layer and API tool orchestration.",
    architecture:
      "A Next.js frontend connected to a Node.js backend that exposes validated tools and workflow APIs for an AI assistant layer.",
    challenges: [
      "Protecting sensitive healthcare workflows behind API boundaries",
      "Designing deterministic tool routing for AI intents",
      "Balancing conversational UX with business constraints",
    ],
    results: [
      "Created a structured backend interface for AI-driven workflows",
      "Improved appointment and follow-up management flows",
      "Reduced manual workflow overhead for clinic staff",
    ],
    learnings: [
      "AI should orchestrate verified backend actions rather than own logic",
      "Tool design is as important as prompt design",
      "User trust improves when actions are predictable and auditable",
    ],
    // links: {
    //   github: "https://github.com/your-username",
    // },
    screenshots: ["/images/projects/clinicos.png"],
  },
  {
    slug: "livekit-asterisk",
    title: "LiveKit App-to-Phone Calling",
    // status: "POC",
    shortDescription:
      "A real-time app-to-phone calling system built using LiveKit, WebRTC, Asterisk, Node.js, and Docker.",
    longDescription:
      "A proof of concept for browser-to-phone communication with real-time audio and telephony integration.",
    category: "Real-Time",
    image: "/images/projects/livekit.png",
    featured: true,
    technologies: ["React", "Node.js", "LiveKit", "WebRTC", "Asterisk", "Docker", "Docker Compose"],
    keyFeatures: [
      "Browser-to-phone communication",
      "LiveKit room management",
      "WebRTC audio streaming",
      "Asterisk telephony integration",
      "Dockerized services",
    ],
    technicalChallenge:
      "Bidirectional audio worked on mobile networks but failed on some Wi-Fi networks.",
    solution:
      "The issue was investigated through ICE candidates, STUN/TURN configuration, NAT traversal, and transport policy tuning.",
    role: "Engineer responsible for connectivity debugging and real-time architecture exploration.",
    architecture:
      "A web client connected to LiveKit rooms, with telephony bridging handled by Asterisk and a Node.js signaling layer.",
    challenges: [
      "WebRTC network traversal issues",
      "Mobile versus Wi-Fi audio consistency",
      "Transport negotiation across firewalls",
    ],
    results: [
      "Built a working POC for app-to-phone calling",
      "Validated transport setup and media quality trade-offs",
      "Created a reusable architecture for future voice workflows",
    ],
    learnings: [
      "Media systems require deep network investigation",
      "Phone and browser calling paths differ significantly",
      "Environment-specific STUN/TURN tuning can be critical",
    ],
    // links: {
    //   github: "https://github.com/your-username",
    // },
    screenshots: ["/images/projects/livekit.png"],
  },
];
