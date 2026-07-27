import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/data";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-7">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`chip ${active === c ? "chip-active" : ""}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
