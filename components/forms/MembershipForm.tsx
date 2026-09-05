"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/ToastProvider";

const WEB3FORMS_ACCESS_KEY = "bb46ec75-fe2a-4fa1-8ccd-e19f1d233887";

export default function MembershipForm() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);

      // honeypot — real users never touch this field
      if (formData.get("botcheck")) {
        setSubmitting(false);
        return;
      }

      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New membership inquiry from ${formData.get("name")}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        showToast("Inquiry sent — we'll be in touch within a week.");
        form.reset();
      } else {
        showToast("Something went wrong — please try again or email us directly.");
      }
    } catch {
      showToast("Something went wrong — please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
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
        {/* Honeypot field — hidden from real users */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <motion.div variants={fieldVariants} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input type="text" name="name" required placeholder="Jane Doe" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" required placeholder="jane@email.com" className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" name="phone" placeholder="+234" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Occupation</label>
            <input type="text" name="occupation" placeholder="Your profession" className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Organization</label>
          <input type="text" name="organization" placeholder="Company / organization" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Reason for Joining</label>
          <textarea name="reason" rows={3} placeholder="What draws you to Rotary?" className={inputClass} />
        </motion.div>
        <motion.label variants={fieldVariants} className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input type="checkbox" name="consent" required className="mt-1" />
          I consent to being contacted by the club about membership.
        </motion.label>
        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={submitting}
          className="btn-gold w-full justify-center disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Submit Inquiry"}
        </motion.button>
      </motion.form>
    </div>
  );
}