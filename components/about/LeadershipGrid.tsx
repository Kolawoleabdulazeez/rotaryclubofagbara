import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { leaders } from "@/lib/data";
import { RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";

export default function LeadershipGrid() {
  return (
    <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-5" stagger={0.12}>
      {leaders.map((l) => (
        <motion.div key={l.name} variants={itemVariant}>
          <TiltCard className="glass overflow-hidden text-center h-full">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <ImagePlaceholder
                src={l.photo}
                alt={l.name}
                label="Leader headshot"
                className="w-full aspect-square"
                objectPosition={l.crop || "center"}
                  zoom={l.zoom || 1}

              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </motion.div>
            <div className="px-4 py-4">
              <h4 className="text-ink font-display text-[1.05rem] leading-tight">{l.name}</h4>
              <div className="text-gold text-[0.8rem] font-medium mt-1 uppercase tracking-wide">
                {l.role}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}