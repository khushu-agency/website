import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-01",
    number: "01",
    slug: "khushu-studio",
    title: "Khushu Studio",
    type: "Experience System",
    category: "Digital Experience & Design",
    filterCategories: ["growth"],
    description:
      "A premium digital experience system demonstrating how brand identity, interaction design, UI systems and conversion-focused web experiences can work together.",
    impact: [
      { label: "Brand", detail: "Visual identity and digital direction" },
      { label: "Experience", detail: "UI/UX and interaction system" },
      { label: "Conversion", detail: "Clearer journeys and stronger calls to action" },
    ],
    challenge:
      "Businesses often have good products but weak digital experiences that make them harder to understand, trust or choose.",
    solution:
      "Khushu Studio demonstrates a complete digital experience approach combining visual identity, UX structure, interaction design and implementation-ready interfaces.",
    architecture: [
      "Brand strategy",
      "UX structure",
      "Visual system",
      "Interaction design",
      "Responsive implementation",
    ],
    relatedServiceSlug: "digital-experience-design",
    accentColor: "#4ade80",
    scheme: "dark",
  },
  {
    id: "proj-02",
    number: "02",
    slug: "opshub",
    title: "OpsHub",
    type: "Software System",
    category: "Websites & Software Products",
    filterCategories: ["action"],
    description:
      "A business operations platform demonstrating how dashboards, workflows, permissions and connected data can become one usable software product.",
    impact: [
      { label: "Centralize", detail: "One operational workspace" },
      { label: "Connect", detail: "APIs and business data" },
      { label: "Operate", detail: "Clear workflows and dashboards" },
    ],
    challenge:
      "Teams often rely on disconnected spreadsheets, tools and manual processes to manage everyday operations.",
    solution:
      "OpsHub brings operational information and workflows into one software interface designed around how teams actually work.",
    architecture: [
      "Web application",
      "Authentication",
      "API layer",
      "Database",
      "Dashboards",
      "Integrations",
    ],
    relatedServiceSlug: "websites-software-products",
    accentColor: "#60a5fa",
    scheme: "light",
  },
  {
    id: "proj-03",
    number: "03",
    slug: "companybrain",
    title: "CompanyBrain",
    type: "Knowledge System",
    category: "AI Assistants & RAG",
    filterCategories: ["knowledge"],
    description:
      "An internal AI assistant that helps employees search private company knowledge and receive grounded answers with supporting document and page references.",
    impact: [
      { label: "Ask", detail: "Natural-language company questions" },
      { label: "Ground", detail: "Answers based on company sources" },
      { label: "Control", detail: "Permission-aware knowledge access" },
    ],
    challenge:
      "Employees waste time searching policies, manuals, procedures and product information scattered across company documents.",
    solution:
      "CompanyBrain indexes approved company knowledge and retrieves relevant information before generating grounded answers with source references.",
    architecture: [
      "Company documents",
      "Parsing",
      "Chunking",
      "Embeddings",
      "Permission-aware retrieval",
      "Grounded answer",
      "Citations",
    ],
    relatedServiceSlug: "ai-assistants-knowledge-systems",
    accentColor: "#f59e0b",
    scheme: "dark",
  },
  {
    id: "proj-04",
    number: "04",
    slug: "opspilot",
    title: "OpsPilot",
    type: "Action System",
    category: "AI Agents & Automation",
    filterCategories: ["action"],
    description:
      "An AI agent that can plan approved business tasks, use connected tools, verify results and pause for human approval when an action is sensitive.",
    impact: [
      { label: "Plan", detail: "Break requests into actions" },
      { label: "Act", detail: "Use approved business tools" },
      { label: "Control", detail: "Human approval for sensitive actions" },
    ],
    challenge:
      "Employees spend time moving information between systems and completing repetitive operational tasks manually.",
    solution:
      "OpsPilot demonstrates controlled AI execution across business tools while maintaining permissions, action logs and human approval checkpoints.",
    architecture: [
      "User request",
      "Planning",
      "Tool selection",
      "Permission check",
      "Tool execution",
      "Verification",
      "Approval when required",
      "Completion",
    ],
    relatedServiceSlug: "ai-agents-workflow-automation",
    accentColor: "#a78bfa",
    scheme: "light",
  },
  {
    id: "proj-05",
    number: "05",
    slug: "supportpilot",
    title: "SupportPilot",
    type: "Customer System",
    category: "AI Customer Support",
    filterCategories: ["action"],
    description:
      "An AI customer-support workflow that understands intent, retrieves company policies, checks permitted customer context and hands complex cases to human support teams with a useful summary.",
    impact: [
      { label: "Understand", detail: "Identify customer intent" },
      { label: "Resolve", detail: "Answer routine questions" },
      { label: "Escalate", detail: "Transfer complex cases with context" },
    ],
    challenge:
      "Support teams repeatedly answer similar questions while spending time gathering customer, order and policy context.",
    solution:
      "SupportPilot combines grounded knowledge retrieval with permitted customer data and human escalation to make support faster without removing human control.",
    architecture: [
      "Customer message",
      "Intent detection",
      "Knowledge retrieval",
      "Customer context",
      "Response or escalation",
      "Support analytics",
    ],
    relatedServiceSlug: "ai-customer-support",
    accentColor: "#f472b6",
    scheme: "dark",
  },
  {
    id: "proj-06",
    number: "06",
    slug: "leadcloser-ai",
    title: "LeadCloser AI",
    type: "Growth System",
    category: "AI Sales & CRM",
    filterCategories: ["growth"],
    description:
      "An AI sales workflow that discovers customer needs, captures structured lead information, applies transparent qualification rules and routes promising opportunities to sales teams.",
    impact: [
      { label: "Discover", detail: "Ask useful qualification questions" },
      { label: "Score", detail: "Apply transparent lead rules" },
      { label: "Route", detail: "Send qualified opportunities to CRM and sales" },
    ],
    challenge:
      "Promising leads can go cold when teams respond slowly, collect inconsistent information or lack clear prioritization.",
    solution:
      "LeadCloser AI demonstrates how AI can qualify conversations while deterministic business rules and CRM workflows keep the final process transparent and actionable.",
    architecture: [
      "Lead conversation",
      "Needs discovery",
      "Structured data",
      "Qualification rules",
      "CRM",
      "Human sales follow-up",
    ],
    relatedServiceSlug: "ai-sales-revenue-systems",
    accentColor: "#38bdf8",
    scheme: "light",
  },
  {
    id: "proj-07",
    number: "07",
    slug: "knowledgeflow-ai",
    title: "KnowledgeFlow AI",
    type: "Business Intelligence System",
    category: "Document Intelligence & AI Search",
    filterCategories: ["knowledge", "action"],
    description:
      "A business information layer that extracts useful data from documents, indexes company knowledge and lets teams search across structured and unstructured information.",
    impact: [
      { label: "Extract", detail: "Turn documents into structured data" },
      { label: "Search", detail: "Find information across business knowledge" },
      { label: "Verify", detail: "Trace important information back to its source" },
    ],
    challenge:
      "Important business information is often trapped inside PDFs, forms, invoices, contracts and scattered internal documents.",
    solution:
      "KnowledgeFlow AI combines document extraction, structured validation and intelligent search so teams can find and use business information faster.",
    architecture: [
      "Documents",
      "OCR / parsing",
      "Extraction",
      "Validation",
      "Indexing",
      "Hybrid search",
      "Grounded answer / source",
    ],
    relatedServiceSlug: "document-intelligence-ai-search",
    accentColor: "#fb923c",
    scheme: "dark",
  },
  {
    id: "proj-08",
    number: "08",
    slug: "contentos",
    title: "ContentOS",
    type: "Content System",
    category: "AI Content Systems",
    filterCategories: ["growth"],
    description:
      "A brand-aware content operating system that helps teams plan campaigns, generate content, review drafts and maintain consistency across channels.",
    impact: [
      { label: "Plan", detail: "Campaign and content strategy" },
      { label: "Create", detail: "Generate channel-specific content" },
      { label: "Control", detail: "Review, approve and maintain brand consistency" },
    ],
    challenge:
      "Content teams repeatedly recreate similar work while struggling to maintain consistent messaging, tone and campaign context across channels.",
    solution:
      "ContentOS stores brand knowledge and campaign context, then turns that information into a controlled workflow for creating, reviewing and organizing content.",
    architecture: [
      "Brand knowledge",
      "Campaign strategy",
      "Content generation",
      "Brand validation",
      "Human review",
      "Approval",
      "Publishing / export",
    ],
    relatedServiceSlug: "ai-content-systems",
    accentColor: "#2dd4bf",
    scheme: "light",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}

export function getProjectsByFilter(
  filter: "all" | "knowledge" | "action" | "growth"
): Project[] {
  if (filter === "all") return projects;
  return projects.filter((p) => p.filterCategories.includes(filter));
}
