import DonateAmountPicker from "@/components/forms/DonateAmountPicker";
import { ToastButton } from "@/components/ui/ToastButton";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";

const paymentMethods = ["Bank Transfer", "Debit / Credit Card", "Online Gateway", "Scan to Pay (QR)"];

export default function DonatePage() {
  return (
    <>
      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-9">
            <span className="eyebrow">Donate</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">
              Every naira is tracked to a project.
            </h2>
            <p className="text-ink-soft mt-3">
              Give to the general fund or choose a specific campaign below. Receipts are
              issued automatically.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 gap-5" stagger={0.15}>
          <motion.div variants={itemVariant}>
            <TiltCard className="glass p-6 h-full">
              <span className="tag">Active Campaign</span>
              <h3 className="text-ink font-display text-lg mt-2.5">
                Water for Agbara — Phase 4
              </h3>
              <p className="text-ink-soft text-sm mt-2">
                Funding two new boreholes for the Eastern Ward communities.
              </p>
              <div className="h-2.5 rounded-full bg-[rgba(11,42,91,0.08)] overflow-hidden mt-3.5">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--rotary-gold), var(--rotary-royal-blue))" }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
              </div>
              <p className="text-gold text-xs mt-2 font-semibold">$68,000 of $100,000 raised</p>
              <ToastButton
                label="Give to This Campaign"
                message="Redirecting to secure payment gateway…"
                className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-[0_10px_24px_-8px_rgba(190,20,50,0.5)] hover:-translate-y-0.5 transition-all"
              />
            </TiltCard>
          </motion.div>

          <motion.div variants={itemVariant}>
            <TiltCard className="glass p-6 h-full">
              <span className="tag">General Fund</span>
              <h3 className="text-ink font-display text-lg mt-2.5">
                Where It&apos;s Needed Most
              </h3>
              <p className="text-ink-soft text-sm mt-2">
                Unrestricted gifts let the board respond quickly to emerging needs.
              </p>
              <DonateAmountPicker />
            </TiltCard>
          </motion.div>
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <span className="eyebrow mb-5 block">Payment Methods</span>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.08}>
          {paymentMethods.map((p) => (
            <motion.div key={p} variants={itemVariant}>
              <TiltCard className="glass p-5 text-center text-ink text-sm font-semibold h-full flex items-center justify-center">
                {p}
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      <section className="py-14">
        <RevealGroup className="grid md:grid-cols-2 gap-5" stagger={0.15}>
          <motion.div variants={itemVariant}>
            <div className="glass p-6 h-full">
              <h3 className="text-ink font-semibold text-base">Tax Information</h3>
              <p className="text-ink-soft text-sm mt-2.5">
                Donations may be tax-deductible depending on your jurisdiction. An
                official receipt is emailed immediately after your gift is processed.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariant}>
            <div className="glass p-6 h-full">
              <h3 className="text-ink font-semibold text-base">Receipts</h3>
              <p className="text-ink-soft text-sm mt-2.5">
                Lost a receipt? Email finance@rotaryagbara.org with your donation date
                and we&apos;ll resend it within 48 hours.
              </p>
            </div>
          </motion.div>
        </RevealGroup>
      </section>
    </>
  );
}