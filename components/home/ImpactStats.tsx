const stats = [
  { num: "184", label: "Active Members" },
  { num: "62", label: "Projects Completed" },
  { num: "14", label: "Communities Reached" },
  { num: "$2.1M", label: "Funds Raised" },
  { num: "9,400", label: "Volunteer Hours" },
];

export default function ImpactStats() {
  return (
    <div className="-mt-7 relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass-dark px-4 py-5 text-center">
          <div className="w-2 h-2 rounded-full bg-gold mx-auto mb-2.5" />
          <div className="font-display text-white text-[1.7rem] font-semibold">{s.num}</div>
          <div className="text-white/65 text-xs mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}