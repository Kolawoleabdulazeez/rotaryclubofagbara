// NewsCard.tsx
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { NewsItem } from "@/lib/data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="glass overflow-hidden flex flex-col">
      <ImagePlaceholder
        src={item.image}
        alt={item.title}
        label="News photo"
        className="h-[150px]"
      />
      <div className="p-5">
        <span className="tag">{item.tag}</span>
        <h3 className="font-display text-ink text-[1.08rem] mt-2">{item.title}</h3>
        <p className="text-ink-soft text-sm mt-2">{item.desc}</p>
        <Link
          href={`/news/${item.slug}`}
          className="text-gold text-sm font-semibold mt-4 inline-block"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}