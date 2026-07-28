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
            People of action, working together.
          </h2>
          <p className="text-ink-soft mt-3 text-[1.02rem]">
            Rotary brings together leaders who take practical action to create lasting
            change in our community and abroad — in health, education, clean water and
            economic opportunity.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        <Reveal delay={0.1}>
          <TiltCard className="glass p-7 h-full">
            <h3 className="font-display text-ink text-lg">About Rotary</h3>
            <p className="text-ink-soft mt-2.5 text-sm">
              Founded in 1905, Rotary International connects 1.4 million members
              worldwide. Our Agbara chapter has met every week since 1961 — same
              mission, same table, different century.
            </p>
            <Link href="/about" className="btn-ghost-light mt-4">Learn More →</Link>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.22}>
          <TiltCard className="glass p-7 flex gap-4.5 h-full">
            <ImagePlaceholder
              src="/images/leaders/president-adaeze-nwosu.jpg"
              alt="Club President, Adaeze Nwosu"
              label="President photo"
              className="w-20 h-20 rounded-full flex-shrink-0"
            />
            <div>
              <span className="eyebrow mb-1.5">A Note From Our President</span>
              <p className="text-ink-soft text-sm mt-2 italic">
                &ldquo;This year we&apos;re doubling down on clean water access and youth
                scholarships. Every hour our members give comes back tenfold in the
                community.&rdquo;
              </p>
              <p className="text-gold text-[0.82rem] mt-2.5 font-semibold">
                — Adaeze Nwosu, Club President
              </p>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}