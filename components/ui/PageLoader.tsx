"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import RotaryLogoDesign from "../../public/RotaryLogoDesign.svg";

export default function PageLoader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #17458F 0%, #0B1E3A 100%)" }}
        >
         <div className="relative w-28 h-28 flex items-center justify-center">
  {/* outer rotating dashed ring */}
  <motion.svg
    width="112"
    height="112"
    viewBox="0 0 100 100"
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
  >
    <circle
      cx="50" cy="50" r="46"
      fill="none"
      stroke="rgba(247,168,27,0.3)"
      strokeWidth="1"
      strokeDasharray="3 7"
    />
  </motion.svg>

  {/* inner rotating solid arc — same size box, radius matched to the dashed ring */}
  <motion.svg
    width="112"
    height="112"
    viewBox="0 0 100 100"
    className="absolute inset-0"
    animate={{ rotate: -360 }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
  >
    <circle
      cx="50" cy="50" r="46"
      fill="none"
      stroke="#F7A81B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="60 200"
    />
  </motion.svg>

  {/* logo sits still at the center */}
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    className="relative z-10"
  >
    <Image
      src={RotaryLogoDesign}
      alt="Rotary Club of Agbara"
      height={56}
      width={56}
      className="h-12 w-auto"
    />
  </motion.div>
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}