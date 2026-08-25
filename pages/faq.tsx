import FaqAccordion from "@/components/faq/FaqAccordion";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export default function FaqPage() {
  return (
    <section className="py-14">
      <Reveal>
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">Common questions.</h2>
        </div>
      </Reveal>
      <FaqAccordion items={faqs} />
    </section>
  );
}