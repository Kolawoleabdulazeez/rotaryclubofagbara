"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastButton } from "@/components/ui/ToastButton";

const amounts = ["$25", "$50", "$100", "$250"];

export default function DonateAmountPicker() {
  const [active, setActive] = useState("$50");

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

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4.5">
        <ToastButton
          label="Donate Now"
          message="Redirecting to secure payment gateway…"
          className="btn-gold w-full justify-center"
        />
      </motion.div>
    </div>
  );
}