import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-01",
    number: "01",
    slug: "digital-experience-design",
    title: "Digital Experience & Design",
    description:
      "We create brand identities, UI/UX systems and website experiences that make a business clearer, more credible and easier for customers to choose.",
    tags: ["Brand Identity", "UI / UX", "Web Design"],
    build: [
      "Brand systems",
      "UX architecture",
      "UI systems",
      "Website experiences",
      "Interaction design",
      "Responsive implementation",
    ],
    ctaLabel: "Build a Digital Experience",
    relatedProjectSlugs: ["khushu-studio", "opshub"],
  },
  {
    id: "svc-02",
    number: "02",
    slug: "websites-software-products",
    title: "Websites & Software Products",
    description:
      "We turn ideas and operational needs into websites, web applications, dashboards, customer portals and connected software products.",
    tags: ["Web Apps", "Dashboards", "APIs"],
    build: [
      "Marketing & product websites",
      "Web applications",
      "Customer portals & dashboards",
      "API design & integration",
      "Database-backed software",
      "Ongoing product iteration",
    ],
    ctaLabel: "Build a Product",
    relatedProjectSlugs: ["opshub", "khushu-studio"],
  },
  {
    id: "svc-03",
    number: "03",
    slug: "ai-assistants-knowledge-systems",
    title: "AI Assistants & Knowledge Systems",
    description:
      "We build AI assistants and private knowledge systems that help teams ask questions, find information and receive grounded answers from the data they are actually allowed to access.",
    tags: ["AI Assistants", "RAG", "Knowledge Systems"],
    build: [
      "AI assistants for internal teams",
      "Private knowledge retrieval (RAG)",
      "Document & policy indexing",
      "Permission-aware answers",
      "Source citations & references",
      "Continuous knowledge updates",
    ],
    ctaLabel: "Build a Knowledge System",
    relatedProjectSlugs: ["companybrain", "knowledgeflow-ai"],
  },
  {
    id: "svc-04",
    number: "04",
    slug: "ai-agents-workflow-automation",
    title: "AI Agents & Workflow Automation",
    description:
      "We build AI systems that can use approved tools, move information between systems and complete repetitive workflows while keeping humans in control of sensitive actions.",
    tags: ["AI Agents", "Automation", "Integrations"],
    build: [
      "Task-planning AI agents",
      "Tool-use & system integrations",
      "Workflow automation",
      "Permission checks & approval gates",
      "Action verification & logging",
      "Human-in-the-loop controls",
    ],
    ctaLabel: "Automate a Workflow",
    relatedProjectSlugs: ["opspilot", "opshub"],
  },
  {
    id: "svc-05",
    number: "05",
    slug: "ai-customer-support",
    title: "AI Customer Support",
    description:
      "We build customer-support systems that understand questions, retrieve relevant information, use permitted customer context and hand complex or sensitive conversations to humans with the right context.",
    tags: ["Customer Support", "AI Conversations", "Human Handoff"],
    build: [
      "Intent understanding",
      "Knowledge-grounded responses",
      "Permitted customer context",
      "Human escalation paths",
      "Support analytics",
      "Multi-channel deployment",
    ],
    ctaLabel: "Improve Customer Support",
    relatedProjectSlugs: ["supportpilot", "companybrain"],
  },
  {
    id: "svc-06",
    number: "06",
    slug: "ai-sales-revenue-systems",
    title: "AI Sales & Revenue Systems",
    description:
      "We build AI sales workflows that discover customer needs, capture structured information, apply transparent scoring and route promising opportunities to the right salesperson.",
    tags: ["Lead Qualification", "CRM", "Sales Automation"],
    build: [
      "Needs-discovery conversations",
      "Structured lead capture",
      "Transparent qualification scoring",
      "CRM routing & handoff",
      "Sales follow-up automation",
      "Pipeline visibility",
    ],
    ctaLabel: "Build a Sales System",
    relatedProjectSlugs: ["leadcloser-ai"],
  },
  {
    id: "svc-07",
    number: "07",
    slug: "document-intelligence-ai-search",
    title: "Document Intelligence & AI Search",
    description:
      "We turn documents and business information into structured, searchable knowledge so teams can extract data, find answers and act without manually searching through scattered information.",
    tags: ["Document AI", "AI Search", "Data Extraction"],
    build: [
      "Document parsing & OCR",
      "Structured data extraction",
      "Validation & review workflows",
      "Knowledge indexing",
      "Hybrid business search",
      "Source-traceable answers",
    ],
    ctaLabel: "Make Your Business Data Searchable",
    relatedProjectSlugs: ["knowledgeflow-ai", "companybrain"],
  },
  {
    id: "svc-08",
    number: "08",
    slug: "ai-content-systems",
    title: "AI Content Systems",
    description:
      "We build brand-aware content workflows that help teams plan, generate, review and organize content consistently across campaigns and channels.",
    tags: ["Content AI", "Brand Systems", "Campaign Automation"],
    build: [
      "Brand-aware content generation",
      "Campaign & content planning",
      "Draft review workflows",
      "Channel-specific formatting",
      "Consistency & brand validation",
      "Publishing workflows",
    ],
    ctaLabel: "Build a Content System",
    relatedProjectSlugs: ["contentos", "khushu-studio"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAdjacentServices(slug: string): {
  previous: Service | null;
  next: Service | null;
} {
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? services[index - 1] : null,
    next: index < services.length - 1 ? services[index + 1] : null,
  };
}
