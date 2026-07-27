import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import RotaryLogo from "../../public/Club-Rotary-Logo.png"
import RotaryLogoDesign from "../../public/RotaryLogoDesign.svg"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <div className="glass-dark flex items-center justify-between px-4 py-3">
<Link href="/" className="flex items-center gap-3 rounded-full pl-2 pr-4 py-1.5">
  <Image
    src={RotaryLogoDesign}
    alt="Rotary Club Logo"
    height={64}
  />
</Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[0.88rem] font-medium px-3.5 py-2 rounded-full transition-colors ${
                    active
                      ? "bg-white/[0.14] text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l.label}
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

        {open && (
          <div className="glass-dark mt-2.5 p-3 flex flex-col gap-1 md:hidden">
            {[...links, { href: "/donate", label: "Donate" }, { href: "/faq", label: "FAQ" }].map(
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
          </div>
        )}
      </div>
    </header>
  );
}