import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PairNav } from "@/components/ui/PairNav";
import { services, getServiceBySlug, getAdjacentServices } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faqs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.description },
  };
}

const APPROACH_STAGES = [
  { title: "Discover & Align", desc: "Understand the business goal, the users and the current system." },
  { title: "Blueprint & Design", desc: "Architect the right combination of design, software and AI for this problem." },
  { title: "Build & Validate", desc: "Implement, integrate and test against real usage, not just a demo." },
  { title: "Deploy & Scale", desc: "Ship with monitoring in place, then improve based on real usage." },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) => service.relatedProjectSlugs.includes(p.slug));
  const { previous, next } = getAdjacentServices(slug);

  const specificFaqs = faqs.filter((f) => f.relatedServiceSlug === service.slug);
  const fallbackFaqs = faqs.filter((f) => !f.relatedServiceSlug).slice(0, 3);
  const faqsToShow = specificFaqs.length > 0 ? specificFaqs : fallbackFaqs;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={`SERVICE ${service.number}`}
        title={service.title}
        lede={service.description}
      >
        <div className="service-tech-tags" style={{ marginTop: "22px" }}>
          {service.tags.map((tag) => (
            <span className="tech-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="detail-section" style={{ borderTop: "none" }}>
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              WHAT WE BUILD
            </div>
            <ul style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {service.build.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "var(--text-body)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-heading)" strokeWidth="2.4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">
              <span className="dot" />
              HOW IT WORKS
            </div>
            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {APPROACH_STAGES.map((stage) => (
                <div key={stage.title} style={{ display: "flex", gap: "14px" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      flex: "none",
                      width: "22px",
                      paddingTop: "3px",
                    }}
                  >
                    →
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14.5px", color: "var(--text-heading)" }}>{stage.title}</div>
                    <div style={{ fontSize: "13.5px", color: "var(--text-muted)", marginTop: "2px" }}>{stage.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/approach"
              style={{ display: "inline-flex", gap: "6px", marginTop: "16px", fontSize: "13px", fontWeight: 600, color: "var(--text-heading)" }}
            >
              See our full approach →
            </Link>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="detail-section">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot" />
              RELEVANT PORTFOLIO PROJECTS
            </div>
            <h2 className="head" style={{ marginTop: "14px" }}>
              See it <em>in practice</em>.
            </h2>
            <div className="card-grid" style={{ marginTop: "28px" }}>
              {relatedProjects.map((p) => (
                <ProjectCard project={p} key={p.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            RELIABILITY &amp; CONTROL
          </div>
          <p className="lede" style={{ marginTop: "14px" }}>
            Every system is designed with appropriate permissions, validation, evaluation, monitoring and human
            approval for sensitive actions. Read more on our{" "}
            <Link href="/security" style={{ fontWeight: 600, color: "var(--text-heading)" }}>
              security &amp; compliance approach
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            FAQ
          </div>
          <h2 className="head" style={{ marginTop: "14px", marginBottom: "24px" }}>
            Questions about this <em>service</em>.
          </h2>
          <FaqAccordion items={faqsToShow} defaultOpenIndex={0} />
        </div>
      </section>

      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Ready to <em>{service.ctaLabel.toLowerCase()}</em>?
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-solid">
              {service.ctaLabel}
              <span className="ic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <PairNav
            previous={previous ? { label: `${previous.number} ${previous.title}`, href: `/services/${previous.slug}` } : null}
            next={next ? { label: `${next.number} ${next.title}`, href: `/services/${next.slug}` } : null}
            previousFallbackHref="/services"
            nextFallbackHref="/services"
          />
        </div>
      </section>
    </>
  );
}
