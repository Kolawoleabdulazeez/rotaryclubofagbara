import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { news, type NewsItem } from "@/lib/data";

type Props = { item: NewsItem };

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: news.map((n) => ({ params: { slug: n.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const item = news.find((n) => n.slug === params?.slug);
  if (!item) return { notFound: true };

  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return { props: { item, related } };
};

export default function NewsDetailPage({
  item,
  related,
}: Props & { related: NewsItem[] }) {
  const [lede, ...rest] = item.body;
  // pick a mid-article line to feature as a pull quote — pass this in from data.ts
  // if you'd rather not guess it dynamically
  const pullQuote = item.pullQuote;

  return (
    <section className="pb-20">
      <div className="pt-6">
        <Link href="/news" className="text-gold-soft text-sm font-semibold">
          ← Back to News
        </Link>
      </div>

      <article className="glass overflow-hidden mt-5">
        {/* Hero with overlaid title */}
        <div className="relative h-72 md:h-[420px]">
          <ImagePlaceholder
            src={item.image}
            alt={item.title}
            label="Article hero image"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <span className="tag">{item.tag}</span>
            <h1 className="font-display text-white text-3xl md:text-5xl mt-3 max-w-3xl leading-tight">
              {item.title}
            </h1>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-ink/40 text-xs uppercase tracking-wide border-b border-white/10 pb-5 mb-8">
            {item.date && <span>{item.date}</span>}
            {item.date && <span>•</span>}
            <span>{Math.max(1, Math.round(item.body.join(" ").split(" ").length / 200))} min read</span>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10">
            <div className="max-w-2xl">
              {/* Lede paragraph, styled larger */}
              <p className="text-ink/80 text-lg leading-relaxed first-letter:font-display first-letter:text-5xl first-letter:text-gold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                {lede}
              </p>

              <div className="mt-6 space-y-5">
                {rest.map((para, i) => (
                  <>
                    <p key={i} className="text-ink/60 text-[15px] leading-relaxed">
                      {para}
                    </p>
                    {pullQuote && i === Math.floor(rest.length / 2) && (
                      <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
                        <p className="font-display text-gold text-2xl leading-snug">
                          “{pullQuote}”
                        </p>
                      </blockquote>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display text-ink text-xl mb-5">More News</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/news/${r.slug}`}
                className="glass p-5 block hover:-translate-y-1 transition-transform"
              >
                <span className="tag">{r.tag}</span>
                <h3 className="font-display text-ink text-base mt-2">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}