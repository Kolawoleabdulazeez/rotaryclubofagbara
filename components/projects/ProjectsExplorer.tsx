"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { TiltCard } from "@/components/motion/TiltCard";
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
      <div className="flex flex-wrap gap-2.5 mb-7 relative">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative chip ${active === c ? "text-white" : ""}`}
          >
            {active === c && (
              <motion.span
                layoutId="active-chip-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--rotary-royal-blue)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
            >
              <TiltCard>
                <ProjectCard project={p} />
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}