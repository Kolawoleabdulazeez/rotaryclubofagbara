"use client";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/ToastProvider";

export default function MembershipForm() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Inquiry sent — we'll be in touch within a week.");
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
    <div className="glass p-8">
      <h3 className="font-display text-ink text-xl">Membership Inquiry</h3>
      <p className="text-ink-soft text-sm mt-2">
        Tell us a bit about yourself and we&apos;ll be in touch.
      </p>
      <motion.form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: 0.06 }}
      >
        <motion.div variants={fieldVariants} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" required placeholder="Jane Doe" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required placeholder="jane@email.com" className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" placeholder="+234" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Occupation</label>
            <input type="text" placeholder="Your profession" className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Organization</label>
          <input type="text" placeholder="Company / organization" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Reason for Joining</label>
          <textarea rows={3} placeholder="What draws you to Rotary?" className={inputClass} />
        </motion.div>
        <motion.label variants={fieldVariants} className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input type="checkbox" required className="mt-1" />
          I consent to being contacted by the club about membership.
        </motion.label>
        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn-gold w-full justify-center"
        >
          Submit Inquiry
        </motion.button>
      </motion.form>
    </div>
  );
}