import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(120),
  email: z.string().trim().email("Enter a valid work email").max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  projectTitle: z.string().trim().min(3, "Tell us what you're looking to build").max(160),
  serviceArea: z.string().trim().min(1, "Select the primary area"),
  problem: z.string().trim().min(10, "Tell us a bit about the problem (10+ characters)").max(400),
  description: z.string().trim().min(20, "Add a little more detail (20+ characters)").max(4000),
  timeline: z.string().trim().min(1, "Select a rough timeline"),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  additionalContext: z.string().trim().max(2000).optional().or(z.literal("")),
  // Honeypot field — real users never fill this in; bots often do.
  companyWebsite: z.string().max(0, "Spam check failed").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const SERVICE_AREA_OPTIONS = [
  "Digital Experience & Design",
  "Websites & Software Products",
  "AI Assistants & Knowledge Systems",
  "AI Agents & Workflow Automation",
  "AI Customer Support",
  "AI Sales & Revenue Systems",
  "Document Intelligence & AI Search",
  "AI Content Systems",
  "Not sure yet",
];

export const TIMELINE_OPTIONS = [
  "ASAP / within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
];
