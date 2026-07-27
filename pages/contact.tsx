import ContactForm from "@/components/forms/ContactForm";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function ContactPage() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">Contact Us</span>
        <h2 className="font-display text-white text-[2rem] mt-2.5">Come say hello.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="glass p-8">
          <h3 className="text-white font-semibold text-base mb-4">Details</h3>
          <p className="text-white/70 text-sm mb-2.5">📍 Agbara Community Hall, 14 Freedom Way, Agbara</p>
          <p className="text-white/70 text-sm mb-2.5">🕐 Meetings every Tuesday, 7:30am</p>
          <p className="text-white/70 text-sm mb-2.5">✉️ hello@rotaryagbara.org</p>
          <p className="text-white/70 text-sm mb-5">📞 +234 800 555 0192</p>
          <ImagePlaceholder
            src="/images/contact/map.jpg"
            alt="Map to Agbara Community Hall"
            label="Map / static map screenshot"
            className="h-44 rounded-2xl"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
