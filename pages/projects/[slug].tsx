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

/** Use up to two images; fall back to the single `image` field. */
function getGallery(project: Project) {
  if (project.images && project.images.length > 0) {
    return project.images.slice(0, 2);
  }
  return [{ src: project.image, alt: project.title, crop: project.crop }];
}

/** First sentence becomes the lead; the rest is grouped into short paragraphs. */
function splitDetails(text: string, perParagraph = 3) {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const [lead = "", ...rest] = sentences;
  const paragraphs: string[] = [];
  for (let i = 0; i < rest.length; i += perParagraph) {
    paragraphs.push(rest.slice(i, i + perParagraph).join(" "));
  }
  return { lead, paragraphs };
}

export default function ProjectDetailPage({ project }: Props) {
  const gallery = getGallery(project);
  const { lead, paragraphs } = splitDetails(project.details ?? project.desc);
  const isActive = project.status === "active";

  return (
    <section className="py-14">
      <Link href="/projects" className="text-gold-soft text-sm font-semibold">
        ← Back to Projects
      </Link>

      {/* Title block sits above the images so the page opens with the story */}
      <header className="mt-6 mb-8 max-w-3xl">
        <span className="tag">{project.category}</span>
        <h1 className="font-display text-ink text-3xl md:text-4xl mt-3 leading-tight">
          {project.title}
        </h1>
      </header>

      {/* Gallery: one wide image plus one narrower image */}
      <div
        className={
          gallery.length > 1
            ? "grid gap-3 md:grid-cols-5"
            : "grid gap-3"
        }
      >
        {gallery.map((img, i) => (
          <div
            key={img.src}
            className={`glass overflow-hidden h-64 md:h-[26rem] ${
              gallery.length > 1 ? (i === 0 ? "md:col-span-3" : "md:col-span-2") : ""
            }`}
          >
            <ImagePlaceholder
              src={img.src}
              alt={img.alt ?? project.title}
              label="Project image"
              className="h-full"
              objectPosition={img.crop || "center"}
            />
          </div>
        ))}
      </div>

      {/* Body: story on the left, facts and actions on the right */}
      <div className="grid gap-6 mt-6 lg:grid-cols-[minmax(0,1fr)_280px] items-start">
        <article className="glass p-8">
          <p className="font-display text-ink text-xl leading-relaxed">{lead}</p>
          {paragraphs.map((text, i) => (
            <p key={i} className="text-ink-soft mt-5 leading-relaxed max-w-prose">
              {text}
            </p>
          ))}
        </article>

        <aside className="glass p-6 lg:sticky lg:top-24">
          <dl className="divide-y divide-[rgba(11,42,91,0.08)]">
            <div className="pb-4">
              <dt className="text-ink-soft/70 text-sm">Status</dt>
              <dd className="mt-1">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-700"
                      : "bg-[rgba(11,42,91,0.08)] text-ink-faint"
                  }`}
                >
                  {isActive ? "Ongoing" : "Completed"}
                </span>
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-ink-soft/70 text-sm">Year</dt>
              <dd className="text-ink mt-1 font-medium">{project.year}</dd>
            </div>
          </dl>

          {isActive && (
            <div className="flex flex-col gap-3 mt-6">
              <Link href="/donate" className="btn-gold text-center">
                Support This Project
              </Link>
              <Link href="/contact" className="btn-ghost text-ink text-center">
                Ask a Question
              </Link>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}