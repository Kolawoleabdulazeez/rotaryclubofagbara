import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">Projects</span>
        <h2 className="font-display text-ink text-[2rem] mt-2.5">
          Humanitarian work, tracked openly.
        </h2>
        <p className="text-ink-soft mt-3">
          Every project below lists its budget, partners and current status. Filter by
          category to find what matters to you.
        </p>
      </div>
      <ProjectsExplorer projects={projects} />
    </section>
  );
}