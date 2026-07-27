import NewsCard from "@/components/news/NewsCard";
import { news } from "@/lib/data";

export default function NewsPage() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">News & Articles</span>
        <h2 className="font-display text-white text-[2rem] mt-2.5">
          From the bulletin.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {news.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </div>
    </section>
  );
}
