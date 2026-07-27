import DonateAmountPicker from "@/components/forms/DonateAmountPicker";
import { ToastButton } from "@/components/ui/ToastButton";

const paymentMethods = ["Bank Transfer", "Debit / Credit Card", "Online Gateway", "Scan to Pay (QR)"];

export default function DonatePage() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Donate</span>
          <h2 className="font-display text-white text-[2rem] mt-2.5">
            Every naira is tracked to a project.
          </h2>
          <p className="text-white/72 mt-3">
            Give to the general fund or choose a specific campaign below. Receipts are
            issued automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass p-6">
            <span className="tag">Active Campaign</span>
            <h3 className="text-white font-display text-lg mt-2.5">
              Water for Agbara — Phase 4
            </h3>
            <p className="text-white/65 text-sm mt-2">
              Funding two new boreholes for the Eastern Ward communities.
            </p>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden mt-3.5">
              <div className="h-full bg-gradient-to-r from-gold-soft to-blue-400" style={{ width: "68%" }} />
            </div>
            <p className="text-gold-soft text-xs mt-2">$68,000 of $100,000 raised</p>
            <ToastButton
              label="Give to This Campaign"
              message="Redirecting to secure payment gateway…"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-[0_10px_24px_-8px_rgba(190,20,50,0.5)] hover:-translate-y-0.5 transition-all"
            />
          </div>

          <div className="glass p-6">
            <span className="tag">General Fund</span>
            <h3 className="text-white font-display text-lg mt-2.5">
              Where It&apos;s Needed Most
            </h3>
            <p className="text-white/65 text-sm mt-2">
              Unrestricted gifts let the board respond quickly to emerging needs.
            </p>
            <DonateAmountPicker />
          </div>
        </div>
      </section>

      <section className="py-14">
        <span className="eyebrow mb-5 block">Payment Methods</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentMethods.map((p) => (
            <div key={p} className="glass p-5 text-center text-white text-sm font-semibold">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass p-6">
            <h3 className="text-white font-semibold text-base">Tax Information</h3>
            <p className="text-white/65 text-sm mt-2.5">
              Donations may be tax-deductible depending on your jurisdiction. An
              official receipt is emailed immediately after your gift is processed.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-white font-semibold text-base">Receipts</h3>
            <p className="text-white/65 text-sm mt-2.5">
              Lost a receipt? Email finance@rotaryagbara.org with your donation date
              and we&apos;ll resend it within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
