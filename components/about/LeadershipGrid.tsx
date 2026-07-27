import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { leaders } from "@/lib/data";

export default function LeadershipGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {leaders.map((l) => (
        <div key={l.name} className="glass p-6 text-center">
          <ImagePlaceholder
            src={l.photo}
            alt={l.name}
            label="Leader headshot"
            className="w-20 h-20 rounded-full mx-auto mb-3.5"
          />
          <h4 className="text-ink font-display text-base">{l.name}</h4>
          <div className="text-gold text-[0.8rem] mt-1">{l.role}</div>
          <p className="text-ink-soft text-[0.82rem] mt-2.5">{l.bio}</p>
        </div>
      ))}
    </div>
  );
}