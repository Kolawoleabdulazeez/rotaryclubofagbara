import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="glass pl-10 pr-8 pt-8 pb-2 relative">
      <div className="border-l-2 border-[rgba(11,42,91,0.15)] pl-6">
        {timeline.map((t) => (
          <div key={t.year} className="relative pb-7 last:pb-0">
            <div className="absolute -left-[31px] top-0.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(247,168,27,0.2)]" />
            <div className="font-mono text-gold text-[0.82rem]">{t.year}</div>
            <h4 className="text-ink mt-1 mb-1.5 font-display text-lg">{t.title}</h4>
            <p className="text-ink-soft text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}