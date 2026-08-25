"use client";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/ToastProvider";

export default function ContactForm() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Message sent — thank you for reaching out.");
    e.currentTarget.reset();
  }

  const inputClass =
    "w-full px-3.5 py-3 rounded-xl border border-[rgba(11,42,91,0.18)] bg-[rgba(11,42,91,0.03)] text-ink text-sm placeholder-[rgba(11,42,91,0.4)] focus:outline-none focus:border-[var(--rotary-gold)] transition-colors duration-200";
  const labelClass = "block text-sm text-ink-soft mb-1.5 font-medium";

  const fieldVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="glass p-8 h-full">
      <h3 className="font-display text-ink text-xl">Send a Message</h3>
      <motion.form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: 0.07 }}
      >
        <motion.div variants={fieldVariants} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Name</label>
            <input type="text" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Phone</label>
          <input type="tel" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Subject</label>
          <input type="text" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Message</label>
          <textarea rows={4} required className={inputClass} />
        </motion.div>
        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn-gold w-full justify-center"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}