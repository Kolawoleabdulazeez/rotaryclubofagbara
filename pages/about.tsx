import Timeline from "@/components/about/Timeline";
import LeadershipGrid from "@/components/about/LeadershipGrid";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";
import { CheckCircle2, Scale, Heart, TrendingUp } from "lucide-react";

const values = ["Fellowship", "Integrity", "Diversity", "Service"];

const fourWayTest = [
  { icon: CheckCircle2, q: "Is it the TRUTH?" },
  { icon: Scale, q: "Is it FAIR to all concerned?" },
  { icon: Heart, q: "Will it build GOODWILL and better friendships?" },
  { icon: TrendingUp, q: "Will it be BENEFICIAL to all concerned?" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-9">
            <span className="eyebrow">About Us</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">
              Six decades of showing up.
            </h2>
            <p className="text-ink-soft mt-3">
              What started as twelve local business owners meeting over breakfast is now
              a 184-member chapter spanning every corner of Agbara&apos;s professional
              community.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Timeline />
        </Reveal>
      </section>

      <section className="py-14">
        <RevealGroup className="grid md:grid-cols-2 gap-5" stagger={0.15}>
          <motion.div variants={itemVariant}>
            <TiltCard className="glass p-7 h-full">
              <span className="eyebrow">Mission</span>
              <h3 className="font-display text-ink text-xl mt-2.5">
                We provide service to others, promote integrity, and advance world
                understanding, goodwill and peace through our fellowship.
              </h3>
            </TiltCard>
          </motion.div>
          <motion.div variants={itemVariant}>
            <TiltCard className="glass p-7 h-full">
              <span className="eyebrow">Vision</span>
              <h3 className="font-display text-ink text-xl mt-2.5">
                Together, we see a world where people unite and take action to create
                lasting change — across the globe, in our communities, and in ourselves.
              </h3>
            </TiltCard>
          </motion.div>
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-8">
            <span className="eyebrow">Core Values</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">
              What guides every decision.
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.08}>
          {values.map((v, i) => (
            <motion.div key={v} variants={itemVariant}>
              <TiltCard className="glass p-5 text-center h-full">
                <div className="font-mono text-gold text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-ink mt-2 font-display">{v}</h4>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-8">
            <span className="eyebrow">Our Ethical Standard</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">The Four-Way Test</h2>
            <p className="text-ink-soft mt-2 text-sm">Of the things we think, say or do:</p>
          </div>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.12}>
          {fourWayTest.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.q} variants={itemVariant}>
                <TiltCard className="glass p-6 h-full relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ background: "var(--rotary-gold)" }}
                  />
                  <div className="flex items-start gap-4 pl-2">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[rgba(247,168,27,0.1)] flex items-center justify-center">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-mono text-gold text-[0.7rem] mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="font-display text-ink text-[1.05rem] leading-snug">
                        {item.q}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-9">
            <span className="eyebrow">Leadership</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">This year&apos;s board.</h2>
          </div>
        </Reveal>
        <LeadershipGrid />
      </section>

      <section className="py-14">
        <RevealGroup className="grid md:grid-cols-2 gap-5" stagger={0.15}>
          <motion.div variants={itemVariant}>
            <div className="glass p-6">
              <span className="eyebrow">Affiliations</span>
              <p className="text-ink-soft mt-3 text-sm">
                Rotary International · District 9110 · Agbara Chamber of Commerce ·
                United Way of Agbara
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariant}>
            <div className="glass p-6">
              <span className="eyebrow">Awards & Recognition</span>
              <p className="text-ink-soft mt-3 text-sm">
                District Presidential Citation (2022, 2023) · Rotary Foundation Top
                Contributing Club, District 9110 (2024)
              </p>
            </div>
          </motion.div>
        </RevealGroup>
      </section>
    </>
  );
}