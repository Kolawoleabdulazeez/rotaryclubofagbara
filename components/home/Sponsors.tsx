import { sponsors } from "@/lib/data";

export default function Sponsors() {
  const doubled = [...sponsors, ...sponsors];

  return (
    <section className="py-6">
      <span className="eyebrow mb-5 block">Our Partners</span>
      <div className="glass p-6 overflow-hidden">
        <div
          className="flex w-max gap-4 animate-[marquee_22s_linear_infinite]"
        >
          {doubled.map((s, i) => (
            <div
              key={s + i}
              className="px-6 py-3.5 text-ink-soft font-semibold font-display text-[0.92rem] whitespace-nowrap"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}