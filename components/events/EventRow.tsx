import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { useToast } from "@/components/ui/ToastProvider";
import type { EventItem } from "@/lib/data";

export default function EventRow({ event }: { event: EventItem }) {
  const { showToast } = useToast();

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center p-4.5 p-5">
      <ImagePlaceholder
        src={event.image}
        alt={event.title}
        label="Event photo"
        className="w-full sm:w-28 h-28 rounded-2xl flex-shrink-0"
      />
      <div className="glass-dark w-16 h-16 flex flex-col items-center justify-center flex-shrink-0">
        <div className="font-display text-white text-xl font-semibold leading-none">{event.day}</div>
        <div className="text-[0.65rem] uppercase tracking-wide text-gold-soft mt-1">{event.month}</div>
      </div>
      <div className="flex-1">
        <h3 className="font-display text-ink text-[1.02rem]">{event.title}</h3>
        <div className="flex gap-4 flex-wrap text-ink-soft text-sm mt-1.5">
          <span>📍 {event.venue}</span>
          <span>🕐 {event.time}</span>
        </div>
      </div>
      <button
        className="btn-gold w-full sm:w-auto justify-center"
        onClick={() => showToast("Registration confirmed — see you there!")}
      >
        Register
      </button>
    </div>
  );
}