"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = "all" | "knowledge" | "action" | "growth";
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "knowledge", label: "Knowledge" },
  { key: "action", label: "Action" },
  { key: "growth", label: "Growth" },
];

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.filterCategories.includes(filter));

  return (
    <div>
      <div className="fw-filters" style={{ marginBottom: "28px" }}>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? " active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
