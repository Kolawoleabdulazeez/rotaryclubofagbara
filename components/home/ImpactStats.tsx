import { motion, Variants } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

const stats = [
  { num: "184", label: "Active Members" },
  { num: "62", label: "Projects Completed" },
  { num: "14", label: "Communities Reached" },
  { num: "$2.1M", label: "Funds Raised" },
  { num: "9,400", label: "Volunteer Hours" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ImpactStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="-mt-7 relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={item}
          whileHover={{ y: -4 }}
          className="glass-dark px-4 py-5 text-center"
        >
          <div className="w-2 h-2 rounded-full bg-gold mx-auto mb-2.5" />
          <div className="font-display text-white text-[1.7rem] font-semibold">
            <AnimatedCounter value={s.num} />
          </div>
          <div className="text-white/65 text-xs mt-1">{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}