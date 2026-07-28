import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass overflow-hidden flex flex-col group">
      <div className="overflow-hidden h-[150px]">
        <motion.div
          className="h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ImagePlaceholder
            src={project.image}
            alt={project.title}
            label={`${project.category} project photo`}
            className="h-[150px]"
          />
        </motion.div>
      </div>
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
          <motion.span whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-gold text-sm font-semibold inline-block"
            >
              Read More →
            </Link>
          </motion.span>
        </div>
      </div>
    </div>
  );
}