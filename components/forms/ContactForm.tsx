import { useToast } from "@/components/ui/ToastProvider";

export default function ContactForm() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Message sent — thank you for reaching out.");
    e.currentTarget.reset();
  }

  const inputClass =
    "w-full px-3.5 py-3 rounded-xl border border-white/20 bg-white/[0.06] text-white text-sm placeholder-white/40 focus:outline-none focus:border-gold-soft";
  const labelClass = "block text-sm text-white/75 mb-1.5 font-medium";

  return (
    <div className="glass p-8">
      <h3 className="font-display text-white text-xl">Send a Message</h3>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Name</label>
            <input type="text" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Subject</label>
          <input type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Message</label>
          <textarea rows={4} required className={inputClass} />
        </div>
        <button type="submit" className="btn-gold w-full justify-center">
          Send Message
        </button>
      </form>
    </div>
  );
}
