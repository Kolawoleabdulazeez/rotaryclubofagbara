// EventsExplorer.tsx
import { useState } from "react";
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
      <div className="flex gap-2.5 mb-7">
        <button
          onClick={() => setTab("upcoming")}
          className={`chip ${tab === "upcoming" ? "chip-active" : ""}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setTab("past")}
          className={`chip ${tab === "past" ? "chip-active" : ""}`}
        >
          Past
        </button>
      </div>
      <div className="glass divide-y divide-[rgba(11,42,91,0.1)] p-2">
        {list.map((e) => (
          <EventRow key={e.slug} event={e} />
        ))}
      </div>
    </div>
  );
}