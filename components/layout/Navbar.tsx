"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import RotaryLogoDesign from "../../public/RotaryLogoDesign.svg";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 py-4"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <div className="glass-dark flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3 rounded-full pl-2 pr-4 py-1.5">
            <Image
              src={RotaryLogoDesign}
              alt="Rotary Club Logo"
              height={64}
              width={64}
              className="h-9 w-auto md:h-14"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className={`relative text-[0.88rem] font-medium px-3.5 py-2 rounded-full transition-colors ${
                    active ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/[0.14] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <Link href="/donate" className="btn-gold">
              Donate
            </Link>
          </div>

          <button
            className="md:hidden text-white p-1.5"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="glass-dark mt-2.5 p-3 flex flex-col gap-1 md:hidden overflow-hidden"
            >
              {[...links, { href: "/donate", label: "Donate" }, { href: "/", label: "FAQ" }].map(
                (l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/85 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}