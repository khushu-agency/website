import type { Insight } from "@/types";

export const insights: Insight[] = [
  {
    id: "insight-01",
    number: "01",
    slug: "what-makes-an-ai-agent-actually-useful",
    category: "AI Agents & Automation",
    title: "What Makes an AI Agent Actually Useful?",
    intro:
      "Most 'AI agent' demos look impressive and then quietly fail the moment they meet a real business process. Here's what actually separates a useful agent from a fragile one.",
    readingTime: "6 min read",
    content: [
      "An AI agent is only as useful as the boundaries it operates inside. A model that can call tools is a demo; a model that calls the right tool, checks whether it's allowed to, and stops when it's unsure is a system you can actually put in front of a business process.",
      "The first thing that separates useful agents from fragile ones is scope. Agents that try to do everything tend to do nothing reliably. The agents we've seen hold up in production are narrow by design — they own one workflow, with a small, well-defined set of tools, rather than an open-ended mandate to 'help with operations.'",
      "The second is verification. A useful agent doesn't just execute an action and move on — it checks the result against what it expected, and it can tell the difference between 'the tool call succeeded' and 'the outcome was actually correct.' Without this, small errors compound silently across a workflow.",
      "The third is a clear line between what the agent can do autonomously and what needs a human. Sensitive actions — anything touching money, customer data, or irreversible changes — should route to a person by default, not as an afterthought. An agent that respects that boundary earns the trust to eventually be given more autonomy; one that doesn't tends to get switched off after the first incident.",
      "None of this requires exotic technology. It requires treating the agent as a piece of software with real interfaces, real permissions and real failure modes — not as a black box that happens to be smart.",
    ],
    relatedServiceSlug: "ai-agents-workflow-automation",
    relatedProjectSlug: "opspilot",
  },
  {
    id: "insight-02",
    number: "02",
    slug: "rag-vs-ai-search",
    category: "AI Assistants & Knowledge Systems",
    title: "RAG vs AI Search: What Businesses Actually Need",
    intro:
      "'RAG' and 'AI search' get used almost interchangeably, but they solve different problems. Picking the wrong one is a common reason internal AI assistants disappoint.",
    readingTime: "5 min read",
    content: [
      "Retrieval-augmented generation (RAG) is about answering a specific question by pulling relevant snippets out of a knowledge base and having a model compose a grounded answer from them. AI search, in the more traditional sense, is about helping a person find the right document, page or record themselves.",
      "The distinction matters because they fail differently. A RAG system that retrieves the wrong context will confidently produce a wrong answer — which is a worse outcome than a search system that simply returns a mediocre ranked list, because the person can tell a bad search result is bad, but a fluent wrong answer looks just as convincing as a right one.",
      "In practice, most businesses need both, at different points in the same system: search-style retrieval to narrow down what's relevant, and a generation step on top of it to turn that into a direct answer — with the retrieved sources shown alongside the answer so a person can check it. Citations aren't a nice-to-have here; they're what makes the difference between a tool people trust and one they quietly stop using after the first hallucinated answer.",
      "The practical takeaway: before building 'an AI assistant,' it's worth being explicit about which of the two problems you're actually solving — helping people find things, or answering questions directly — because the architecture, the evaluation approach and the acceptable error rate are different for each.",
    ],
    relatedServiceSlug: "ai-assistants-knowledge-systems",
    relatedProjectSlug: "companybrain",
  },
  {
    id: "insight-03",
    number: "03",
    slug: "when-not-to-use-ai-in-a-business-workflow",
    category: "Strategy",
    title: "When NOT to Use AI in a Business Workflow",
    intro:
      "Not every repetitive task is an AI problem. Some of the most valuable work we do is figuring out where AI isn't the right tool.",
    readingTime: "4 min read",
    content: [
      "It's tempting to reach for AI whenever a workflow feels slow or manual, but a lot of 'slow and manual' problems are actually missing-integration problems, missing-process problems, or missing-UI problems — and AI won't fix any of those on its own.",
      "A good signal that AI is the wrong first move: the task has a single correct answer that can be computed deterministically. Tax calculations, unit conversions, and rule-based approvals don't need a language model guessing at the right output when a straightforward function already produces it exactly and predictably, every time.",
      "Another signal: the cost of an occasional wrong answer is high and hard to detect. In workflows like this, a probabilistic system needs so much human review layered on top that it stops saving any time — at which point plain software, or a simpler rules engine, usually gets you further, faster.",
      "The right question isn't 'can AI do this?' — for a growing number of tasks, the honest answer is yes. The right question is whether AI is the cheapest, most reliable way to solve the actual business problem, once you account for the guardrails, review and monitoring it needs to be safe to run unattended.",
    ],
    relatedServiceSlug: "ai-agents-workflow-automation",
  },
  {
    id: "insight-04",
    number: "04",
    slug: "designing-human-approval-into-ai-agents",
    category: "AI Agents & Automation",
    title: "Designing Human Approval Into AI Agents",
    intro:
      "Giving an AI agent the ability to act is easy. Designing the approval layer that keeps that ability safe is the actual engineering work.",
    readingTime: "5 min read",
    content: [
      "A useful mental model: split every action an agent can take into three buckets — safe to automate fully, safe with a review, and never automated without an explicit human decision. Most of the risk in agent systems comes from skipping this classification and treating every action as equally low-stakes.",
      "The approval step itself needs to carry enough context for a human to make a real decision quickly — what the agent is trying to do, why, what it will affect, and what happens if the person does nothing. An approval request that just says 'approve this action?' with no context either gets rubber-stamped or ignored, both of which defeat the purpose.",
      "Logging matters as much as the approval prompt. Every action an agent takes — approved or automatic — should leave an audit trail that a person can review after the fact, independent of whether anything went wrong. This is what turns 'we hope the agent is behaving correctly' into 'we can verify the agent behaved correctly.'",
      "Done well, human approval doesn't slow an agent down in any way that matters — it just makes sure the handful of consequential decisions get a person's judgment, while the repetitive, low-risk majority of the work still runs on its own.",
    ],
    relatedServiceSlug: "ai-agents-workflow-automation",
    relatedProjectSlug: "opspilot",
  },
  {
    id: "insight-05",
    number: "05",
    slug: "how-document-intelligence-turns-pdfs-into-usable-data",
    category: "Document Intelligence & AI Search",
    title: "How Document Intelligence Turns PDFs Into Usable Data",
    intro:
      "Invoices, contracts and forms hold most of a business's real operational data — and almost none of it is queryable. Here's what it actually takes to fix that.",
    readingTime: "5 min read",
    content: [
      "A PDF looks like structured information to a person and looks like an image to most software. The first job of a document intelligence system is closing that gap — parsing text and layout, and where a document is scanned or handwritten, using OCR to recover the underlying content in the first place.",
      "The harder problem isn't reading the text; it's understanding the structure. An invoice's line items, a contract's clauses, a form's field-value pairs — these all have a shape that a generic text extraction misses. Getting this right usually means combining layout-aware parsing with a validation step that checks extracted values against expected formats and ranges before anything downstream trusts them.",
      "Once documents are extracted and validated, the real value shows up in search and retrieval — being able to ask 'which contracts renew in the next 90 days' or 'what did this vendor invoice us last quarter' and get a direct, sourced answer instead of manually reopening dozens of files.",
      "The standard we hold this to: every extracted fact should be traceable back to the specific document and location it came from. An extraction system that can't show its source isn't trustworthy enough to replace a person double-checking it by hand.",
    ],
    relatedServiceSlug: "document-intelligence-ai-search",
    relatedProjectSlug: "knowledgeflow-ai",
  },
  {
    id: "insight-06",
    number: "06",
    slug: "building-reliable-internal-ai-assistants",
    category: "AI Assistants & Knowledge Systems",
    title: "Building Reliable Internal AI Assistants",
    intro:
      "Internal assistants have a different bar than public chatbots — employees will actually rely on the answers, and permissions become a first-class problem.",
    readingTime: "6 min read",
    content: [
      "An internal assistant that answers confidently but occasionally wrong is worse than one that says 'I don't know.' Because employees treat it as an authoritative source of company knowledge, reliability has to be designed in rather than treated as a nice-to-have.",
      "The first design decision is permissioning: an assistant that can see everything in the company will eventually surface something it shouldn't to someone who shouldn't see it. Retrieval needs to respect the same access controls that already exist across the company's documents and systems — not a separate, looser layer bolted on top.",
      "The second is grounding every answer in retrieved source material rather than the model's general knowledge, and showing that source alongside the answer. This turns 'trust the AI' into 'verify the AI in two seconds,' which is a much easier habit to build across a whole team.",
      "The third is treating the assistant as a living system rather than a one-time deployment — company knowledge changes constantly, so the index, the permissions and the retrieval quality all need ongoing monitoring, not a single launch-day evaluation.",
    ],
    relatedServiceSlug: "ai-assistants-knowledge-systems",
    relatedProjectSlug: "companybrain",
  },
  {
    id: "insight-07",
    number: "07",
    slug: "what-makes-a-business-ai-system-production-ready",
    category: "Reliability & Engineering",
    title: "What Makes a Business AI System Production-Ready?",
    intro:
      "The gap between a working prototype and a production system is almost never the model. It's everything built around it.",
    readingTime: "6 min read",
    content: [
      "A prototype has to work once, in a demo, with inputs the builder already knows will behave. A production system has to keep working across every edge case a real business throws at it, indefinitely, without someone watching it constantly.",
      "That gap is closed by a handful of unglamorous things: input validation, so malformed or unexpected data doesn't quietly corrupt downstream steps; clear failure states, so the system says 'I can't complete this' instead of guessing; and monitoring, so degraded performance shows up as an alert rather than a customer complaint weeks later.",
      "Evaluation deserves its own mention. A model that scored well on a handful of test prompts during development can still drift once it meets real, messier production traffic. Production-ready systems have an ongoing way to measure output quality — not just a one-time benchmark run before launch.",
      "The permissions and human-approval layer, covered elsewhere in these notes, is part of this same picture: production-readiness isn't a single checkbox, it's the accumulation of all these boring safeguards working together so the system can be trusted to run unattended most of the time, and to ask for help the rest of the time.",
    ],
    relatedServiceSlug: "ai-agents-workflow-automation",
    relatedProjectSlug: "opspilot",
  },
  {
    id: "insight-08",
    number: "08",
    slug: "from-website-to-intelligent-digital-experience",
    category: "Digital Experience & Design",
    title: "From Website to Intelligent Digital Experience",
    intro:
      "A website and an intelligent digital experience aren't two different products — they're points on the same continuum, and most businesses can move along it gradually.",
    readingTime: "5 min read",
    content: [
      "A well-designed website already does a lot of work: it establishes credibility, clarifies what a business does, and guides a visitor toward the right next step. None of that requires AI — it requires clear information architecture, strong visual design and a considered user journey.",
      "Intelligence gets layered on top of that foundation, not instead of it. A support widget that actually understands a question, a search bar that returns a direct answer instead of a list of guesses, a form that adapts based on what a visitor has already told you — these are upgrades to an experience that already has to be solid on its own.",
      "The mistake we see most often is businesses reaching for an AI feature before the underlying experience is coherent. Adding a chatbot to a confusing site just gives visitors a confusing way to ask about the confusing site. Fixing the experience first, then adding intelligence where it removes real friction, is almost always the better sequence.",
      "The result, done in the right order, is a digital presence that feels considered at every layer — from the first impression of the design down to the small moments where the system seems to understand what someone actually needs.",
    ],
    relatedServiceSlug: "digital-experience-design",
    relatedProjectSlug: "khushu-studio",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getAdjacentInsights(slug: string): {
  previous: Insight | null;
  next: Insight | null;
} {
  const index = insights.findIndex((i) => i.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? insights[index - 1] : null,
    next: index < insights.length - 1 ? insights[index + 1] : null,
  };
}
