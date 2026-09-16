import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description: "The engineering principles Khushu applies across every system: permissions, validation, monitoring and human approval.",
  alternates: { canonical: "/security" },
};

const PRINCIPLES = [
  { title: "Permission-Aware Access", desc: "Systems respect the same access controls already in place across your data and tools — retrieval and actions never bypass existing permissions." },
  { title: "Authentication & Authorization", desc: "Every user and system identity is verified, and every action is checked against what that identity is actually allowed to do." },
  { title: "Data Isolation", desc: "Customer and company data stays scoped to the system it belongs to, rather than pooled across unrelated contexts." },
  { title: "Validation", desc: "Inputs and outputs are checked against expected shapes and ranges before they're trusted by the next step in a workflow." },
  { title: "Audit Logging", desc: "Actions — automatic or human-approved — leave a record that can be reviewed after the fact, independent of whether anything went wrong." },
  { title: "Human Approval", desc: "Sensitive or irreversible actions route to a person by default, with enough context to make a real decision." },
  { title: "Monitoring", desc: "Systems are watched in production, not just evaluated once before launch, so degraded performance surfaces as an alert." },
  { title: "Secure Integrations", desc: "Connections to CRMs, databases and other business tools use scoped credentials and the minimum access required." },
  { title: "Error Handling", desc: "Failures produce a clear, safe failure state instead of a silent wrong answer or an unhandled crash." },
  { title: "AI Evaluation", desc: "Model and system output quality is measured on an ongoing basis, not just a one-time benchmark before launch." },
  { title: "Prompt-Injection Awareness", desc: "Systems that process untrusted text (documents, emails, web content) are designed with the assumption that some of it may try to manipulate the model." },
  { title: "Clear Failure States", desc: "When a system can't complete a task reliably, it says so — rather than guessing and presenting a guess as fact." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Security & Compliance" }]}
        eyebrow="SECURITY & COMPLIANCE"
        title="Engineering principles, not marketing claims."
        lede="These are the principles we apply across every system we build. We do not claim certifications we have not actually obtained — if a specific certification matters to your organization, ask us directly about current status."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                }}
              >
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "17px", fontWeight: 600, color: "var(--text-heading)" }}>
                  {p.title}
                </h3>
                <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: 1.6, color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
