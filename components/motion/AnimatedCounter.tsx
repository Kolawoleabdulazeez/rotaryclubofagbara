import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // extract numeric part; keep prefix/suffix (e.g. "$", "M", ",")
  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.match(/[^\d.]*$/)?.[0] ?? "";
  const hasComma = /,/.test(value);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 22, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionVal.set(numeric);
  }, [isInView, numeric, motionVal]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (!ref.current) return;
      const rounded = numeric % 1 !== 0 ? latest.toFixed(1) : Math.round(latest).toString();
      const formatted = hasComma ? Number(rounded).toLocaleString() : rounded;
      ref.current.textContent = `${prefix}${formatted}${suffix}`;
    });
  }, [spring, prefix, suffix, numeric, hasComma]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}