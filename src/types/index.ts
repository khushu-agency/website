export type ImpactChip = {
  label: string;
  detail: string;
};

export type Service = {
  id: string;
  number: string; // "01".."08"
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** What we build under this service */
  build: string[];
  ctaLabel: string;
  relatedProjectSlugs: string[];
};

export type Project = {
  id: string;
  number: string; // "01".."08"
  slug: string;
  title: string;
  type: string; // e.g. "Experience System"
  category: string; // e.g. "Digital Experience & Design"
  filterCategories: Array<"knowledge" | "action" | "growth">;
  description: string;
  impact: ImpactChip[];
  challenge: string;
  solution: string;
  architecture: string[]; // ordered pipeline steps
  relatedServiceSlug: string;
  accentColor: string;
  scheme: "dark" | "light";
};

export type Insight = {
  id: string;
  number: string;
  slug: string;
  category: string;
  title: string;
  intro: string;
  readingTime: string;
  content: string[]; // paragraphs / section content (markdown-lite, rendered as paragraphs & headings)
  relatedServiceSlug: string;
  relatedProjectSlug?: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
  relatedServiceSlug?: string;
};
