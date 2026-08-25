"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

type FaqEntry = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const open = openIndex === i;
        return (
          <motion.div
            key={f.q}
            layout
            className="relative overflow-hidden rounded-2xl"
          >
            {/* shared glowing border that travels between open cards */}
            {open && (
              <motion.div
                layoutId="faq-glow-border"
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(247,168,27,0.5), rgba(23,69,143,0.3))",
                  padding: 1.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full h-full rounded-2xl glass" />
              </motion.div>
            )}

            <div
              className={`relative glass rounded-2xl transition-colors duration-300 ${
                open ? "bg-white/0" : ""
              }`}
            >
              {/* ghost number watermark */}
              <span
                className="absolute -right-2 -top-3 font-display font-bold select-none pointer-events-none transition-all duration-500"
                style={{
                  fontSize: "4.5rem",
                  color: open ? "rgba(247,168,27,0.1)" : "rgba(11,42,91,0.04)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="relative w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left z-10"
              >
                <motion.span
                  animate={{
                    rotate: open ? 135 : 0,
                    backgroundColor: open ? "var(--rotary-gold)" : "rgba(11,42,91,0.06)",
                  }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <Plus
                    size={16}
                    className={open ? "text-navy-deep" : "text-ink-faint"}
                    strokeWidth={2.5}
                  />
                </motion.span>

                <span
                  className={`flex-1 font-display text-[1rem] sm:text-[1.05rem] transition-colors duration-300 ${
                    open ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {f.q}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="flex gap-4 px-5 sm:px-6 pb-5 pl-[3.75rem] sm:pl-[4.25rem]">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{ transformOrigin: "top" }}
                        className="w-[2px] rounded-full bg-gradient-to-b from-[var(--rotary-gold)] to-transparent flex-shrink-0"
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                        className="text-ink-soft text-sm leading-relaxed"
                      >
                        {f.a}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass px-6 py-4 flex items-center justify-between gap-3 flex-wrap"
      >
        <span className="text-ink-soft text-sm">Still have a question?</span>
        <a href="/contact" className="text-gold text-sm font-semibold whitespace-nowrap">
          Get in touch →
        </a>
      </motion.div>
    </div>
  );
}