
import { motion } from "framer-motion";

const particles = Array.from({ length: 10 }, (_, i) => i);

export function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => {
        const size = 3 + (i % 3) * 2;
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const duration = 6 + (i % 4);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              background: "radial-gradient(circle, #FFC85C, #F7A81B)",
              boxShadow: "0 0 8px rgba(247,168,27,0.6)",
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        );
      })}
    </div>
  );
}