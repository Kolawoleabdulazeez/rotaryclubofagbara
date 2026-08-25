import NewsCard from "@/components/news/NewsCard";
import { news } from "@/lib/data";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";

export default function NewsPage() {
  return (
    <section className="py-14">
      <Reveal>
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">News & Articles</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            From the bulletin.
          </h2>
        </div>
      </Reveal>

      <RevealGroup className="grid md:grid-cols-3 gap-5" stagger={0.1}>
        {news.map((n) => (
          <motion.div key={n.slug} variants={itemVariant}>
            <TiltCard>
              <NewsCard item={n} />
            </TiltCard>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}