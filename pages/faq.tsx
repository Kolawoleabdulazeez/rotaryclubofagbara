import FaqAccordion from "@/components/faq/FaqAccordion";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">FAQ</span>
        <h2 className="font-display text-white text-[2rem] mt-2.5">Common questions.</h2>
      </div>
      <FaqAccordion items={faqs} />
    </section>
  );
}
