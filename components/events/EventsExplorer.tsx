"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EventRow from "@/components/events/EventRow";
import type { EventItem } from "@/lib/data";

export default function EventsExplorer({
  upcoming,
  past,
}: {
  upcoming: EventItem[];
  past: EventItem[];
}) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div>
    <div className="flex gap-2.5 mb-7 relative">
  <button
    onClick={() => setTab("upcoming")}
    className="relative chip"
    style={{ color: tab === "upcoming" ? "#fff" : undefined }}
  >
    {tab === "upcoming" && (
      <motion.span
        layoutId="active-tab-pill"
        className="absolute inset-0 rounded-full"
        style={{ background: "var(--rotary-royal-blue)" }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
    <span className="relative z-10">Upcoming</span>
  </button>
  <button
    onClick={() => setTab("past")}
    className="relative chip"
    style={{ color: tab === "past" ? "#fff" : undefined }}
  >
    {tab === "past" && (
      <motion.span
        layoutId="active-tab-pill"
        className="absolute inset-0 rounded-full"
        style={{ background: "var(--rotary-royal-blue)" }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
    <span className="relative z-10">Past</span>
  </button>
</div>

      <div className="glass divide-y divide-[rgba(11,42,91,0.1)] p-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: tab === "upcoming" ? -16 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: tab === "upcoming" ? 16 : -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="divide-y divide-[rgba(11,42,91,0.1)]"
          >
            {list.map((e, i) => (
              <motion.div
                key={e.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <EventRow event={e} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}