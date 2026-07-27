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
  return { props: { item } };
};

export default function NewsDetailPage({ item }: Props) {
  return (
    <section className="py-14">
      <Link href="/news" className="text-gold-soft text-sm font-semibold">
        ← Back to News
      </Link>
      <div className="glass overflow-hidden mt-5">
        <ImagePlaceholder
          src={item.image}
          alt={item.title}
          label="Article hero image"
          className="h-64 md:h-80"
        />
        <div className="p-8">
          <span className="tag">{item.tag}</span>
          <h1 className="font-display text-white text-3xl mt-3">{item.title}</h1>
          <p className="text-white/70 mt-4 max-w-2xl">{item.desc}</p>
          <p className="text-white/50 mt-6 text-sm max-w-2xl">
            Full article content goes here — swap this placeholder paragraph for the
            actual bulletin write-up when it&apos;s ready.
          </p>
        </div>
      </div>
    </section>
  );
}
