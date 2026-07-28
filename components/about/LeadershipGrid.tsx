import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { leaders } from "@/lib/data";
import { RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";

export default function LeadershipGrid() {
  return (
    <RevealGroup className="grid md:grid-cols-3 gap-5" stagger={0.12}>
      {leaders.map((l) => (
        <motion.div key={l.name} variants={itemVariant}>
          <TiltCard className="glass p-6 text-center h-full">
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <ImagePlaceholder
                src={l.photo}
                alt={l.name}
                label="Leader headshot"
                className="w-20 h-20 rounded-full mx-auto mb-3.5"
              />
            </motion.div>
            <h4 className="text-ink font-display text-base">{l.name}</h4>
            <div className="text-gold text-[0.8rem] mt-1">{l.role}</div>
            <p className="text-ink-soft text-[0.82rem] mt-2.5">{l.bio}</p>
          </TiltCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}