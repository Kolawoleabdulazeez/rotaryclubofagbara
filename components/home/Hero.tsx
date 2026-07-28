import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import MembersImage from "../../public/windowStaff.jpg";
import { Magnetic } from "@/components/motion/MagneticButton";
import { SplitLine } from "@/components/motion/SplitText";
import { GoldParticles } from "@/components/motion/GoldParticles";

export default function Hero() {
  return (
    <section className="pt-8 pb-4">
      <div
        className="relative rounded-[28px] overflow-hidden border border-white/[0.14] px-6 md:px-10 py-10 md:py-12"
        style={{ background: "linear-gradient(135deg, #17458F 0%, #0B1E3A 100%)" }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow-light block"
            >
              Rotary Club of Agbara · District 9110
            </motion.span>

            <h1 className="font-display text-white text-[2.3rem] md:text-[2.9rem] leading-[1.08] mt-4">
              <SplitLine text="Neighbors doing" delay={0.2} />
              <br />
              <span className="text-gold-soft">
                <SplitLine text="real, lasting good." delay={0.8} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-white text-[1.05rem] md:text-[1.1rem] mt-4 max-w-[480px]"
            >
              We&apos;re a local group of volunteers, professionals and business owners
              funding clean water, schools and health programs — right here in Agbara
              and around the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.75 }}
              className="flex gap-3.5 mt-7 flex-wrap"
            >
              <Magnetic>
                <Link href="/membership" className="btn-gold">Become a Member</Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link href="/projects" className="btn-ghost">View Our Projects</Link>
              </Magnetic>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <ImagePlaceholder
                src={MembersImage}
                alt="Rotary Club of Agbara members at a community project"
                label="Hero photo — members in the field"
                className="w-full h-[280px] md:h-[360px] rounded-2xl"
              />
              <GoldParticles />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -14, x: -24, y: 10 }}
              animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, type: "spring", stiffness: 140, damping: 12 }}
              className="glass-dark absolute -bottom-4 -left-4 px-4 py-2.5 hidden md:flex items-center gap-2"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-gold"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white text-xs font-semibold">184 active members, one mission</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}