import Link from "next/link";
import type { Project } from "@/types";
import { ArchScene } from "./ArchScene";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="insight-card">
      <div className="insight-thumb">
        <ArchScene tone={project.scheme} accentColor={project.accentColor} idSeed={project.slug} />
      </div>
      <div className="insight-tag">{project.category} · Portfolio Build</div>
      <div className="insight-title">{project.title}</div>
      <div className="insight-link">
        <span>View Project</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}
