// EventsPage.tsx
import EventsExplorer from "@/components/events/EventsExplorer";
import { upcomingEvents, pastEvents } from "@/lib/data";

export default function EventsPage() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">Events</span>
        <h2 className="font-display text-ink text-[2rem] mt-2.5">
          Meetings, drives, and fundraisers.
        </h2>
      </div>
      <EventsExplorer upcoming={upcomingEvents} past={pastEvents} />
    </section>
  );
}