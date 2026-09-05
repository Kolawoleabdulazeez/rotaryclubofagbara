"use client";
import { useState } from "react";
import DonateAmountPicker from "@/components/forms/DonateAmountPicker";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";
import { Copy, Check, Landmark } from "lucide-react";
import { projects } from "@/lib/data";

const bankDetails = {
  bank: "UBA (United Bank for Africa)",
  accountNumber: "1000224555",
  accountName: "Rotary Club of Agbara",
};

function scrollToBankDetails() {
  document.getElementById("bank-transfer")?.scrollIntoView({ behavior: "smooth" });
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fail silently, value is still visible to copy manually
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 bg-[rgba(11,42,91,0.04)] rounded-xl px-4 py-3">
      <div>
        <div className="text-ink-soft/70 text-xs uppercase tracking-wide">{label}</div>
        <div className="text-ink font-semibold mt-0.5">{value}</div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopy}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-[rgba(11,42,91,0.12)] flex items-center justify-center text-ink-soft hover:text-gold hover:border-gold/40 transition-colors"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={15} />}
      </motion.button>
    </div>
  );
}

export default function DonatePage() {
  const activeCampaign = projects.find((p) => p.status === "active");

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
              {activeCampaign
                ? "Give to the general fund or support our active campaign below."
                : "For now, gifts go straight to our general fund and are put to work wherever the need is greatest."}
            </p>
          </div>
        </Reveal>

        <RevealGroup
          className={`grid gap-5 ${activeCampaign ? "md:grid-cols-2" : "md:grid-cols-1 max-w-xl"}`}
          stagger={0.15}
        >
          {activeCampaign && (
            <motion.div variants={itemVariant}>
              <TiltCard className="glass p-6 h-full">
                <span className="tag">Active Campaign</span>
                <h3 className="text-ink font-display text-lg mt-2.5">{activeCampaign.title}</h3>
                <p className="text-ink-soft text-sm mt-2">{activeCampaign.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToBankDetails}
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-[0_10px_24px_-8px_rgba(190,20,50,0.5)] hover:-translate-y-0.5 transition-all"
                >
                  Give to This Campaign
                </motion.button>
              </TiltCard>
            </motion.div>
          )}

          <motion.div variants={itemVariant}>
            <TiltCard className="glass p-6 h-full">
              <span className="tag">General Fund</span>
              <h3 className="text-ink font-display text-lg mt-2.5">
                Where It&apos;s Needed Most
              </h3>
              <p className="text-ink-soft text-sm mt-2">
                Unrestricted gifts let the board respond quickly to emerging needs.
              </p>
              <DonateAmountPicker onDonate={scrollToBankDetails} />
            </TiltCard>
          </motion.div>
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-6">
            <span className="eyebrow block mb-2">How to Give</span>
            <h3 className="font-display text-ink text-[1.5rem]">
              Direct bank transfer.
            </h3>
            <p className="text-ink-soft text-sm mt-2">
              Currently our only channel for donations — send your gift directly to the account
              below and reach out so we can confirm and issue a receipt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard id="bank-transfer" className="glass p-7 max-w-xl scroll-mt-24">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[rgba(247,168,27,0.12)] flex items-center justify-center flex-shrink-0">
                <Landmark size={19} className="text-gold" />
              </div>
              <div>
                <div className="text-ink font-display text-base">Bank Transfer Details</div>
                <div className="text-ink-soft text-xs mt-0.5">Tap any field to copy</div>
              </div>
            </div>

            <div className="space-y-2.5">
              <CopyField label="Bank" value={bankDetails.bank} />
              <CopyField label="Account Number" value={bankDetails.accountNumber} />
              <CopyField label="Account Name" value={bankDetails.accountName} />
            </div>

            <p className="text-ink-soft/70 text-xs mt-5">
              After transferring, please{" "}
              <a href="/contact" className="text-gold font-semibold hover:underline">
                let us know
              </a>{" "}
              so we can send you a confirmation and receipt.
            </p>
          </TiltCard>
        </Reveal>
      </section>
    </>
  );
}