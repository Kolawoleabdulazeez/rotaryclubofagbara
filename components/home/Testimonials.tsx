import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-14">
      <Reveal>
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Voices</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            What our community says.
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5" style={{ perspective: 1200 }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, rotateY: -90, transformOrigin: "left center" }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass p-6"
          >
            <p className="text-ink-soft italic text-[0.98rem]">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 mt-4">
              <ImagePlaceholder
                src={t.photo}
                alt={t.name}
                label="Headshot"
                className="w-9 h-9 rounded-full flex-shrink-0"
              />
              <div>
                <div className="text-ink font-semibold text-[0.88rem]">{t.name}</div>
                <div className="text-ink-faint text-xs">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}