"use client";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { useToast } from "@/components/ui/ToastProvider";
import { isEventPast, type EventItem } from "@/lib/data";

export default function EventRow({ event }: { event: EventItem }) {
  const { showToast } = useToast();
  const isPast = isEventPast(event);

  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(23,69,143,0.03)" }}
      transition={{ duration: 0.2 }}
      className={`flex flex-col sm:flex-row gap-4 sm:items-center p-4.5 p-5 rounded-xl relative ${
        isPast ? "opacity-60 grayscale-[0.4]" : ""
      }`}
    >
      <div className="relative w-full sm:w-28 h-28 flex-shrink-0">
        <ImagePlaceholder
          src={event.image}
          alt={event.title}
          label="Event photo"
          className="w-full h-full rounded-2xl"
        />
        {isPast && (
          <span className="absolute top-1.5 left-1.5 bg-black/70 text-white text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-full">
            Event ended
          </span>
        )}
      </div>

      <motion.div
        whileHover={isPast ? undefined : { scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`w-16 h-16 flex flex-col items-center justify-center flex-shrink-0 ${
          isPast ? "bg-[rgba(11,42,91,0.35)]" : "glass-dark"
        }`}
      >
        <div className="font-display text-white text-xl font-semibold leading-none">{event.day}</div>
        <div className="text-[0.65rem] uppercase tracking-wide text-gold-soft mt-1">{event.month}</div>
      </motion.div>

      <div className="flex-1">
        <h3 className="font-display text-ink text-[1.02rem]">{event.title}</h3>
        <div className="flex gap-4 flex-wrap text-ink-soft text-sm mt-1.5">
          <span>📍 {event.venue}</span>
          <span>🕐 {event.time}</span>
        </div>
      </div>

      {isPast ? (
        <span className="w-full sm:w-auto text-center text-sm font-medium text-ink-soft px-4 py-2 rounded-full border border-[rgba(11,42,91,0.15)]">
          Event has ended
        </span>
      ) : (
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold w-full sm:w-auto justify-center"
          onClick={() => showToast("Registration confirmed — see you there!")}
        >
          Register
        </motion.button>
      )}
    </motion.div>
  );
}