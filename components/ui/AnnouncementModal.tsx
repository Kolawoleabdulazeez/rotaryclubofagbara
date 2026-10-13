// components/ui/AnnouncementModal.tsx
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Slide = { src: string; alt: string; caption?: string };

// Resets on full reload, persists across client-side navigation
let shownThisLoad = false;

export default function AnnouncementModal({
  slides,
  delay = 1100,
}: {
  slides: Slide[];
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shownThisLoad || slides.length === 0) return;
    const t = setTimeout(() => {
      shownThisLoad = true;
      setOpen(true);
    }, delay);
    return () => clearTimeout(t);
  }, [delay, slides.length]);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  // Only ever true on the client, so document is safe here
  if (typeof document === "undefined") return null;

  const slide = slides[index];
  const multiple = slides.length > 1;

  return createPortal(
    <AnimatePresence>
      {open && slide && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Club announcements"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="fixed top-4 right-4 z-10 rounded-full bg-white/15 p-2.5 text-white backdrop-blur hover:bg-white/25"
          >
            <X size={22} />
          </button>

          {multiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="fixed left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur hover:bg-white/25"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="fixed right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur hover:bg-white/25"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="flex flex-col items-center gap-3 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className="max-h-[80vh] max-w-[92vw] w-auto h-auto rounded-xl object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                drag={multiple ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) next();
                  else if (info.offset.x > 80) prev();
                }}
              />
            </AnimatePresence>

            {slide.caption && (
              <p className="max-w-[560px] text-center text-sm text-white/90">{slide.caption}</p>
            )}

            {multiple && (
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}