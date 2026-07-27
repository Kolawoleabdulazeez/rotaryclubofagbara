// MembershipForm.tsx
import { useToast } from "@/components/ui/ToastProvider";

export default function MembershipForm() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Inquiry sent — we'll be in touch within a week.");
    e.currentTarget.reset();
  }

  const inputClass =
    "w-full px-3.5 py-3 rounded-xl border border-[rgba(11,42,91,0.18)] bg-[rgba(11,42,91,0.03)] text-ink text-sm placeholder-[rgba(11,42,91,0.4)] focus:outline-none focus:border-[var(--rotary-gold)]";
  const labelClass = "block text-sm text-ink-soft mb-1.5 font-medium";

  return (
    <div className="glass p-8">
      <h3 className="font-display text-ink text-xl">Membership Inquiry</h3>
      <p className="text-ink-soft text-sm mt-2">
        Tell us a bit about yourself and we&apos;ll be in touch.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" required placeholder="Jane Doe" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required placeholder="jane@email.com" className={inputClass} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" placeholder="+234" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Occupation</label>
            <input type="text" placeholder="Your profession" className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Organization</label>
          <input type="text" placeholder="Company / organization" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Reason for Joining</label>
          <textarea rows={3} placeholder="What draws you to Rotary?" className={inputClass} />
        </div>
        <label className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input type="checkbox" required className="mt-1" />
          I consent to being contacted by the club about membership.
        </label>
        <button type="submit" className="btn-gold w-full justify-center">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}