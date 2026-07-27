import { useToast } from "@/components/ui/ToastProvider";

export default function Newsletter() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Subscribed — welcome to the newsletter!");
    e.currentTarget.reset();
  }

  return (
    <section className="py-8">
      <div className="glass flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-7 py-9">
        <div>
          <h3 className="font-display text-ink text-xl">Stay in the loop</h3>
          <p className="text-ink-soft mt-1.5 text-sm">One email a month. Projects, events, no spam.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2.5 w-full md:w-auto">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 md:flex-none md:min-w-[230px] px-4 py-3 rounded-full border border-[rgba(11,42,91,0.2)] bg-[rgba(11,42,91,0.03)] text-ink text-sm placeholder-[rgba(11,42,91,0.4)] focus:outline-none focus:border-[var(--rotary-gold)]"
          />
          <button type="submit" className="btn-gold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}