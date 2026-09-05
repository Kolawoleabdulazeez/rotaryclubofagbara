"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/ToastProvider";

const WEB3FORMS_ACCESS_KEY = "bb46ec75-fe2a-4fa1-8ccd-e19f1d233887";

export default function ContactForm() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);

      // if the honeypot field got filled in, silently drop it — a real user never touches this field
      if (formData.get("botcheck")) {
        setSubmitting(false);
        return;
      }

      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New contact form message from ${formData.get("name")}`);
      formData.append("to", "kolawoleazeez3215@gmail.com");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        showToast("Message sent — thank you for reaching out.");
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
        {/* Honeypot field — hidden from real users, bots often fill every input they find */}
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
            <label className={labelClass}>Name</label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" required className={inputClass} />
          </div>
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Phone</label>
          <input type="tel" name="phone" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Subject</label>
          <input type="text" name="subject" className={inputClass} />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label className={labelClass}>Message</label>
          <textarea name="message" rows={4} required className={inputClass} />
        </motion.div>
        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={submitting}
          className="btn-gold w-full justify-center disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
}