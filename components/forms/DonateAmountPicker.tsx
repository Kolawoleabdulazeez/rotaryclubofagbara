"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const amounts = ["₦5,000", "₦10,000", "₦25,000", "₦50,000"];

export default function DonateAmountPicker({ onDonate }: { onDonate?: () => void }) {
  const [active, setActive] = useState("₦10,000");

  return (
    <div>
      <div className="flex gap-2.5 flex-wrap mt-5">
        {amounts.map((a) => (
          <button
            key={a}
            onClick={() => setActive(a)}
            className="relative chip"
            style={{ color: active === a ? "#fff" : undefined }}
          >
            {active === a && (
              <motion.span
                layoutId="donate-amount-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--rotary-royal-blue)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{a}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          className="text-ink-faint text-xs my-3"
        >
          Giving <span className="text-gold font-semibold">{active}</span> to the general fund
        </motion.p>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onDonate}
        className="btn-gold w-full justify-center mt-4.5"
      >
        Donate Now
      </motion.button>
    </div>
  );
}