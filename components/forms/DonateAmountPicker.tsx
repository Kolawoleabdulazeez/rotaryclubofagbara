import { useState } from "react";
import { ToastButton } from "@/components/ui/ToastButton";

const amounts = ["$25", "$50", "$100", "$250"];

export default function DonateAmountPicker() {
  const [active, setActive] = useState("$50");

  return (
    <div>
      <div className="flex gap-2.5 flex-wrap mt-5">
        {amounts.map((a) => (
          <button
            key={a}
            onClick={() => setActive(a)}
            className={`chip ${active === a ? "chip-active" : ""}`}
          >
            {a}
          </button>
        ))}
      </div>
      <ToastButton
        label="Donate Now"
        message="Redirecting to secure payment gateway…"
        className="btn-gold mt-4.5"
      />
    </div>
  );
}
