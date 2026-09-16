import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PairNav } from "@/components/ui/PairNav";
import { ArchScene } from "@/components/ui/ArchScene";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.description },
  };
}


export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedService = getServiceBySlug(project.relatedServiceSlug);
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.filterCategories.some((c) => project.filterCategories.includes(c)))
    .slice(0, 2);
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }, { label: project.title }]}
        eyebrow={`${project.category} · Portfolio Build`}
        title={project.title}
        lede={project.description}
      >
        <div style={{ display: "flex", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}>
          <span className="tech-tag">{project.type}</span>
          <span className="tech-tag">{project.number} / 08</span>
        </div>
      </PageHero>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              height: "320px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--line)",
            }}
          >
            <ArchScene tone={project.scheme} accentColor={project.accentColor} idSeed={`${project.slug}-hero`} />
          </div>

          <div className="fw-impact-chips" style={{ marginTop: "22px" }}>
            {project.impact.map((chip) => (
              <div
                key={chip.label}
                style={{
                  background: "var(--bg-section)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  padding: "10px 16px",
                }}
              >
                <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "16px", color: "var(--text-heading)" }}>
                  {chip.label}
                </div>
                <div style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>{chip.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section" style={{ borderTop: "none" }}>
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              CHALLENGE
            </div>
            <p className="lede" style={{ marginTop: "14px" }}>
              {project.challenge}
            </p>
          </div>
          <div>
            <div className="eyebrow">
              <span className="dot" />
              SOLUTION
            </div>
            <p className="lede" style={{ marginTop: "14px" }}>
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section" id="architecture">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="head" style={{ marginTop: "14px" }}>
            How it <em>works</em>.
          </h2>
          <div className="arch-flow">
            {project.architecture.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="arch-step">{step}</span>
                {i < project.architecture.length - 1 && <span className="arch-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            RELIABILITY &amp; CONTROL
          </div>
          <p className="lede" style={{ marginTop: "14px" }}>
            Every system is designed with appropriate permissions, validation, evaluation, monitoring and human
            approval for sensitive actions.
          </p>
        </div>
      </section>

      {relatedService && (
        <section className="detail-section">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot" />
              RELATED SERVICE
            </div>
            <div className="card-grid" style={{ marginTop: "18px", gridTemplateColumns: "minmax(260px, 340px)" }}>
              <ServiceCard service={relatedService} />
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="detail-section">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot" />
              RELATED PROJECTS
            </div>
            <div className="card-grid" style={{ marginTop: "18px" }}>
              {relatedProjects.map((p) => (
                <ProjectCard project={p} key={p.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Have a similar problem to <em>solve</em>?
          </h2>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-solid">
              Start a Project
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
            previous={previous ? { label: `${previous.number} ${previous.title}`, href: `/work/${previous.slug}` } : null}
            next={next ? { label: `${next.number} ${next.title}`, href: `/work/${next.slug}` } : null}
            previousFallbackHref="/work"
            nextFallbackHref="/work"
          />
        </div>
      </section>
    </>
  );
}
