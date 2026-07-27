// FaqAccordion.tsx
import { useState } from "react";
import { Plus } from "lucide-react";

type FaqEntry = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="glass divide-y divide-[rgba(11,42,91,0.1)]">
      {items.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4.5 text-left text-ink font-medium text-[0.96rem]"
            >
              {f.q}
              <Plus
                size={18}
                className={`text-gold flex-shrink-0 ml-4 transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 px-6"
              style={{ maxHeight: open ? "200px" : "0px" }}
            >
              <p className="text-ink-soft text-sm pb-4.5">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}