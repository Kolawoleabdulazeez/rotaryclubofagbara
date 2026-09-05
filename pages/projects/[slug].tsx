import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { projects, type Project } from "@/lib/data";

type Props = { project: Project };

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
};

export default function ProjectDetailPage({ project }: Props) {
  return (
    <section className="py-14">
      <Link href="/projects" className="text-gold-soft text-sm font-semibold">
        ← Back to Projects
      </Link>

      <div className="glass overflow-hidden mt-5">
        <ImagePlaceholder
  src={project.image}
  alt={project.title}
  label="Project hero image"
  className="h-96 md:h-80"
  objectPosition={project.crop || "center"}
/>
        <div className="p-8">
          <span className="tag">{project.category}</span>
          <h1 className="font-display text-ink text-3xl mt-3">{project.title}</h1>
          <p className="text-ink-soft mt-4 max-w-2xl">{project.desc}</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div>
              <div className="text-ink-soft/70 text-xs uppercase tracking-wide">Status</div>
              <div className="text-ink mt-1 font-medium">
                {project.status === "active" ? "Ongoing" : "Completed"}
              </div>
            </div>
            <div>
              <div className="text-ink-soft/70 text-xs uppercase tracking-wide">Year</div>
              <div className="text-ink mt-1 font-medium">{project.year}</div>
            </div>
            <div>
              <div className="text-ink-soft/70 text-xs uppercase tracking-wide">Category</div>
              <div className="text-ink mt-1 font-medium">{project.category}</div>
            </div>
          </div>

          {project.status === "active" && (
            <div className="flex gap-3 mt-8 flex-wrap">
              <Link href="/donate" className="btn-gold">
                Support This Project
              </Link>
              <Link href="/contact" className="btn-ghost text-ink">
                Ask a Question
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}