"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { MeetingSlide } from "@/lib/data";
import { getNextMeetingDate, formatMeetingDisplay } from "@/lib/data";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);
  return { days, hours, min, sec };
}

const pad = (n: number) => n.toString().padStart(2, "0");

function CountdownBox({ value, label }: { value: number | null; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-gold rounded-xl w-[72px] h-[72px] sm:w-20 sm:h-20 flex flex-col items-center justify-center flex-shrink-0"
    >
      <div className="font-display text-white text-2xl font-bold leading-none">
        {value === null ? "--" : pad(value)}
      </div>
      <div className="text-[0.65rem] uppercase tracking-wide text-white/90 mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function MeetingCountdownCard({ slide }: { slide: MeetingSlide }) {
  const [mounted, setMounted] = useState(false);
  const [target, setTarget] = useState(() => getNextMeetingDate(slide));
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(target));

    const id = setInterval(() => {
      const now = Date.now();
      if (now >= target.getTime()) {
        setTarget(getNextMeetingDate(slide));
        return;
      }
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(id);
  }, [target, slide]);

  const displayDate = useMemo(() => formatMeetingDisplay(slide, target), [slide, target]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
      <div className="glass p-5 rounded-2xl flex-1">
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-soft mt-2.5 flex-shrink-0" />
          <div>
            <h3 className="font-display text-ink text-[1.05rem] font-semibold">
              {slide.title}
            </h3>
            <div className="text-ink-soft text-sm mt-1.5 flex flex-wrap items-center gap-1">
              <span>📅</span>
              <span>{displayDate}</span>
              <span className="ml-1">📍</span>
              <span>
                <em>at</em> {slide.venue}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-shrink-0">
        <CountdownBox value={mounted ? timeLeft?.days ?? null : null} label="days" />
        <CountdownBox value={mounted ? timeLeft?.hours ?? null : null} label="hours" />
        <CountdownBox value={mounted ? timeLeft?.min ?? null : null} label="min" />
        <CountdownBox value={mounted ? timeLeft?.sec ?? null : null} label="sec" />
      </div>
    </div>
  );
}