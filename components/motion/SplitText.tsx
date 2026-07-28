import { motion } from "framer-motion";

export function SplitLine({
  text,
  className = "",
  delay = 0,
  charDelay = 0.02,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) {
  const letters = Array.from(text);
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotate: 6, opacity: 0 }}
          animate={{ y: "0%", rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.65,
            delay: delay + i * charDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}