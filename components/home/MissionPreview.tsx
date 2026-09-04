import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";

export default function MissionPreview() {
  return (
    <section className="py-14">
      <Reveal>
       <div className="max-w-[640px] mb-9">
  <span className="eyebrow">Our Mission</span>
  <h2 className="font-display text-ink text-[2rem] mt-2.5">
    Service Above Self.
  </h2>
  <p className="text-ink-soft mt-3 text-[1.02rem]">
    To execute service projects in Education &amp; Literacy, Water &amp; Sanitation,
    and Maternal &amp; Child Health and Disease Prevention in our immediate
    communities — and to help Agbara sustain peace and harmony.
  </p>
</div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        <Reveal delay={0.1}>
          <TiltCard className="glass p-7 h-full">
        <h3 className="font-display text-ink text-lg">About Rotary</h3>
      <p className="text-ink-soft mt-2.5 text-sm">
        Founded in 1905, Rotary International is a global network of 45,000 clubs
        worldwide. Our Agbara chapter has met every week since 1985 # same
        mission, same table, different century.
      </p>
            <Link href="/about" className="btn-ghost-light mt-4">Learn More →</Link>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.22}>
          <TiltCard className="glass p-7 flex gap-4.5 h-full">
        <ImagePlaceholder
  src="/images/leaders/president-philip-ebosele.jpg"
  alt="Club President, Philip Ebosele"
  label="President photo"
  className="w-20 h-20 rounded-full flex-shrink-0"
/>
<div>
  <span className="eyebrow mb-1.5">A Note From Our President</span>
  <p className="text-ink-soft text-sm mt-2 italic">
    [Quote not available in source document — needs a real statement from
    Philip Ebosele before this goes live]
  </p>
  <p className="text-gold text-[0.82rem] mt-2.5 font-semibold">
    — Philip Ebosele, Club President
  </p>
</div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}