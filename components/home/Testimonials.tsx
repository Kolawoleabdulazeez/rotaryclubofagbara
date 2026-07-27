import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-14">
      <div className="max-w-[640px] mb-9">
        <span className="eyebrow">Voices</span>
        <h2 className="font-display text-ink text-[2rem] mt-2.5">
          What our community says.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="glass p-6">
            <p className="text-ink-soft italic text-[0.98rem]">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 mt-4">
              <ImagePlaceholder
                src={t.photo}
                alt={t.name}
                label="Headshot"
                className="w-9 h-9 rounded-full flex-shrink-0"
              />
              <div>
                <div className="text-ink font-semibold text-[0.88rem]">{t.name}</div>
                <div className="text-ink-faint text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}