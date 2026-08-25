import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { NewsItem } from "@/lib/data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="glass overflow-hidden flex flex-col">
      <div className="overflow-hidden h-[150px]">
        <motion.div
          className="h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ImagePlaceholder
            src={item.image}
            alt={item.title}
            label="News photo"
            className="h-[150px]"
          />
        </motion.div>
      </div>
      <div className="p-5">
        <span className="tag">{item.tag}</span>
        <h3 className="font-display text-ink text-[1.08rem] mt-2">{item.title}</h3>
        <p className="text-ink-soft text-sm mt-2">{item.desc}</p>
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-block mt-4"
        >
          <Link href={`/news/${item.slug}`} className="text-gold text-sm font-semibold">
            Read Article →
          </Link>
        </motion.span>
      </div>
    </div>
  );
}