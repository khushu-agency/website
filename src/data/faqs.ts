import type { Faq } from "@/types";

export const faqs: Faq[] = [
  {
    id: "faq-01",
    question: "Do you only build AI systems?",
    answer:
      "No. Khushu combines digital experience design, websites, software, AI systems and automation. We choose the right combination based on the business problem rather than forcing every problem into an AI solution.",
  },
  {
    id: "faq-02",
    question: "What kinds of businesses do you work with?",
    answer:
      "We work best with businesses that have a clear digital, operational or growth problem that can be improved through better experiences, software, AI or automation.",
  },
  {
    id: "faq-03",
    question: "Can you improve our existing website or software?",
    answer:
      "Yes. We can redesign the experience, improve the interface, extend existing software or connect new AI and automation capabilities to systems you already use.",
    relatedServiceSlug: "websites-software-products",
  },
  {
    id: "faq-04",
    question: "Can you connect AI to our existing business tools?",
    answer:
      "Yes. Where APIs and permissions allow it, AI systems can be connected to CRMs, databases, support tools, communication platforms and other business systems.",
    relatedServiceSlug: "ai-agents-workflow-automation",
  },
  {
    id: "faq-05",
    question: "How do you make AI systems reliable?",
    answer:
      "We use appropriate permissions, validation, grounded information, evaluation, monitoring, clear failure states and human approval for sensitive actions.",
    relatedServiceSlug: "ai-agents-workflow-automation",
  },
  {
    id: "faq-06",
    question: "Can AI actually perform actions?",
    answer:
      "Yes. AI agents can use approved tools to perform defined tasks, but sensitive operations should remain behind appropriate permissions and human approval.",
    relatedServiceSlug: "ai-agents-workflow-automation",
  },
  {
    id: "faq-07",
    question: "Do you build custom systems or use existing AI tools?",
    answer:
      "Both. We use existing models and platforms where they are the right choice and build custom software around them when the business requires more control, integration or specialized workflows.",
  },
  {
    id: "faq-08",
    question: "What happens after launch?",
    answer:
      "We measure how the system performs in the real workflow, identify failure points and improve the system based on actual usage rather than treating launch as the end of the project.",
  },
];

export function getFaqById(id: string): Faq | undefined {
  return faqs.find((f) => f.id === id);
}
