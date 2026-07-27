// ProjectCard.tsx
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass overflow-hidden flex flex-col">
      <ImagePlaceholder
        src={project.image}
        alt={project.title}
        label={`${project.category} project photo`}
        className="h-[150px]"
      />
      <div className="p-5">
        <span className="tag">{project.category}</span>
        <h3 className="font-display text-ink text-[1.08rem] mt-2">{project.title}</h3>
        <p className="text-ink-soft text-sm mt-2">{project.desc}</p>
        <div className="flex items-center justify-between mt-4">
          <span
            className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full ${
              project.status === "active"
                ? "bg-emerald-500/10 text-emerald-700"
                : "bg-[rgba(11,42,91,0.08)] text-ink-faint"
            }`}
          >
            {project.status === "active" ? "Ongoing" : "Completed"}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="text-gold text-sm font-semibold"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}