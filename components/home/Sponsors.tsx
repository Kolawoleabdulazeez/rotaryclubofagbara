import { sponsors } from "@/lib/data";

export default function Sponsors() {
  return (
    <section className="py-6">
      <span className="eyebrow mb-5 block">Our Partners</span>
      <div className="glass flex flex-wrap gap-4 p-6">
        {sponsors.map((s) => (
          <div
            key={s}
            className="px-6 py-3.5 text-ink-soft font-semibold font-display text-[0.92rem]"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}