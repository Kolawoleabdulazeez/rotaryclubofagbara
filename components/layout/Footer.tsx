import Link from "next/link";
import RotaryLogoDesign from "../../public/RotaryLogoDesign.svg"
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="mt-16 pt-12 pb-8"
      style={{ background: "linear-gradient(180deg, #123165 0%, #0E2A57 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
           <Link href="/" className="flex items-center gap-3 rounded-full pl-2 pr-4 py-1.5">
  <Image
    src={RotaryLogoDesign}
    alt="Rotary Club Logo"
    height={40}
  />
</Link>
            <p className="text-white/60 text-sm mb-3">Service Above Self since 1961.</p>
            <div className="flex gap-2.5">
  {["𝕏", "f", "in", "ig"].map((s) => (
    <a
      key={s}
      href="#"
      className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-xs text-white/80"
    >
      {s}
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3.5">Explore</h4>
            <ul className="space-y-2.5">
              {[["About Us", "/about"], ["Projects", "/projects"], ["Events", "/events"], ["News", "/news"]].map(
                ([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-white/60 text-sm hover:text-gold-soft">
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3.5">Get Involved</h4>
            <ul className="space-y-2.5">
              {[["Become a Member", "/membership"], ["Donate", "/donate"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(
                ([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-white/60 text-sm hover:text-gold-soft">
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3.5">Location</h4>
            <p className="text-white/60 text-sm mb-2.5">14 Freedom Way<br />Agbara Community Hall</p>
            <p className="text-white/60 text-sm mb-2.5">hello@rotaryagbara.org</p>
            <p className="text-white/60 text-sm">+234 800 555 0192</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.1] flex flex-wrap justify-between gap-2.5 text-white/40 text-xs">
          <span>© 2026 Rotary Club of Agbara. All rights reserved.</span>
          <Link href="#" className="hover:text-gold-soft">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}