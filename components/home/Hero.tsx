import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import MembersImage from "../../public/windowStaff.jpg"

export default function Hero() {
  return (
    <section className="pt-8 pb-4">
      <div
        className="relative rounded-[28px] overflow-hidden border border-white/[0.14] px-6 md:px-10 py-10 md:py-12"
        style={{
          background:
            "linear-gradient(135deg, #17458F 0%, #0B1E3A 100%)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <span className="eyebrow-light">Rotary Club of Agbara · District 9110</span>
            <h1 className="font-display text-white text-[2.3rem] md:text-[2.9rem] leading-[1.08] mt-4">
              Neighbors doing
              <br />
              <span className="text-gold-soft">real, lasting good.</span>
            </h1>
            <p className="text-white text-[1.05rem] md:text-[1.1rem] mt-4 max-w-[480px]">
              We&apos;re a local group of volunteers, professionals and business owners
              funding clean water, schools and health programs — right here in Agbara
              and around the world.
            </p>
            <div className="flex gap-3.5 mt-7 flex-wrap">
              <Link href="/membership" className="btn-gold">
                Become a Member
              </Link>
              <Link href="/projects" className="btn-ghost">
                View Our Projects
              </Link>
            </div>
          </div>

          <div className="relative">
          <ImagePlaceholder
  src={MembersImage}
  alt="Rotary Club of Agbara members at a community project"
  label="Hero photo — members in the field"
  className="w-full h-[280px] md:h-[360px] rounded-2xl"
/>
            {/* small gold accent badge floating on the photo */}
            <div className="glass-dark absolute -bottom-4 -left-4 px-4 py-2.5 hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-white text-xs font-semibold">184 active members, one mission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}