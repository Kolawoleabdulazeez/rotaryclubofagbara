import { timeline } from "@/lib/data";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="glass pl-10 pr-8 pt-8 pb-2 relative">
      <div className="border-l-2 border-[rgba(11,42,91,0.15)] pl-6">
        {timeline.map((t, i) => (
          <motion.div
            key={t.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="relative pb-7 last:pb-0"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 15 }}
              className="absolute -left-[31px] top-0.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(247,168,27,0.2)]"
            />
            <div className="font-mono text-gold text-[0.82rem]">{t.year}</div>
            <h4 className="text-ink mt-1 mb-1.5 font-display text-lg">{t.title}</h4>
            <p className="text-ink-soft text-sm">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}