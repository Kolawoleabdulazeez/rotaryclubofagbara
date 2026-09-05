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

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-gold rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex flex-col items-center justify-center flex-shrink-0">
      <div className="font-display text-white text-base sm:text-lg font-bold leading-none">
        {pad(value)}
      </div>
      <div className="text-[0.55rem] uppercase tracking-wide text-white/90 mt-0.5">
        {label}
      </div>
    </div>
  );
}

export default function MeetingRow({ slide }: { slide: MeetingSlide }) {
  const [target, setTarget] = useState(() => getNextMeetingDate(slide));
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
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
    <motion.div
      whileHover={{ backgroundColor: "rgba(23,69,143,0.03)" }}
      transition={{ duration: 0.2 }}
      className="flex flex-col sm:flex-row gap-4 sm:items-center p-4.5 p-5 rounded-xl"
    >
      <div className="flex-1">
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-soft mt-2 flex-shrink-0" />
          <h3 className="font-display text-ink text-[1.02rem]">{slide.title}</h3>
        </div>
        <div className="flex gap-4 flex-wrap text-ink-soft text-sm mt-1.5 pl-3.5">
          <span>📅 {displayDate}</span>
          <span>📍 {slide.venue}</span>
        </div>
      </div>

      <div className="flex gap-2 flex-shrink-0">
        <CountdownBox value={timeLeft.days} label="days" />
        <CountdownBox value={timeLeft.hours} label="hrs" />
        <CountdownBox value={timeLeft.min} label="min" />
        <CountdownBox value={timeLeft.sec} label="sec" />
      </div>
    </motion.div>
  );
}