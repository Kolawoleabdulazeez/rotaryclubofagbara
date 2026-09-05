import ContactForm from "@/components/forms/ContactForm";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import ContactUs from "../public/contactUs.gif"

const details = [
  { icon: MapPin, text: "De Oasis hotels and suite, Ilaro road, Agbara estate, Agbara, Ogun State" },
  { icon: Clock, text: "Meetings every Tuesday, 7:30pm" },
  { icon: Mail, text: "rcagbara@gmail.com" },
  { icon: Phone, text: "+234 816 922 4603" },
];

export default function ContactPage() {
  return (
    <section className="py-14">
      <Reveal>
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Contact Us</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">Come say hello.</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        <Reveal>
          <TiltCard className="rounded-lg  bg-white p-8 h-full">
            <h3 className="text-ink font-semibold text-base mb-4">Details</h3>
            <div className="space-y-3.5 mb-5">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(247,168,27,0.1)] flex items-center justify-center mt-0.5">
                      <Icon size={15} className="text-gold" />
                    </div>
                    <p className="text-ink-soft text-sm pt-1.5">{d.text}</p>
                  </div>
                );
              })}
            </div>
                  <ImagePlaceholder
  src={ContactUs}
  alt="Get in touch"
  label="Contact illustration"
  className="w-full h-64 sm:h-72 rounded-2xl"
  unoptimized
  fit="contain"
/>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}