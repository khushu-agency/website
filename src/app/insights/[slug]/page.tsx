import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { PairNav } from "@/components/ui/PairNav";
import { insights, getInsightBySlug, getAdjacentInsights } from "@/data/insights";
import { getServiceBySlug } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.intro,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: { title: insight.title, description: insight.intro, type: "article" },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const relatedService = getServiceBySlug(insight.relatedServiceSlug);
  const relatedProject = insight.relatedProjectSlug ? getProjectBySlug(insight.relatedProjectSlug) : undefined;
  const { previous, next } = getAdjacentInsights(slug);
  const moreInsights = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: insight.title }]}
        eyebrow={`${insight.category} · ${insight.readingTime}`}
        title={insight.title}
        lede={insight.intro}
      />

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="article-body">
            {insight.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {(relatedService || relatedProject) && (
        <section className="detail-section">
          <div className="wrap">
            <div className="eyebrow">
              <span className="dot" />
              RELATED
            </div>
            <div className="card-grid" style={{ marginTop: "18px" }}>
              {relatedService && <ServiceCard service={relatedService} />}
              {relatedProject && <ProjectCard project={relatedProject} />}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            MORE INSIGHTS
          </div>
          <div className="card-grid" style={{ marginTop: "18px" }}>
            {moreInsights.map((i, idx) => (
              <InsightCard insight={i} index={idx} key={i.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="detail-section" style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2 className="head">
            Want to talk through <em>your system</em>?
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
            previous={previous ? { label: previous.title, href: `/insights/${previous.slug}` } : null}
            next={next ? { label: next.title, href: `/insights/${next.slug}` } : null}
            previousFallbackHref="/insights"
            nextFallbackHref="/insights"
          />
        </div>
      </section>
    </>
  );
}
