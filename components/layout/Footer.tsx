"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import RotaryLogoDesign from "../../public/RotaryLogoDesign.svg";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/rcagbara",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/RotaryClubOfAgbara",
    icon: Facebook,
  },
  {
    label: "Threads",
    href: "https://threads.net/@rcagbara",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 192 192" fill="currentColor" {...props}>
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0044 96.9879 60.0372 116.292C60.5616 126.084 65.4394 134.508 73.775 140.011C80.8207 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0975 175.059C74.3717 174.89 57.1114 167.575 45.7982 153.317C35.2057 139.958 29.7315 120.682 29.5322 96C29.7315 71.318 35.2057 52.0413 45.7982 38.6823C57.1114 24.4242 74.3716 17.1093 97.0975 16.9401C119.988 17.1102 137.539 24.4592 149.279 38.788C155.036 45.8137 159.373 54.6072 162.229 64.8905L178.435 60.4444C175.06 48.1958 169.798 37.5793 162.612 28.7913C148.001 10.9366 126.593 1.79238 97.4576 1.62793H97.222C68.5099 1.79238 47.354 10.9736 33.352 28.6942C20.8952 44.4735 14.4692 66.4358 14.2384 95.9268L14.2384 96L14.2384 96.0732C14.4692 125.564 20.8952 147.526 33.352 163.306C47.354 181.026 68.5099 190.207 97.222 190.372H97.4576C122.007 190.207 139.485 183.638 154.132 168.995C173.294 149.858 172.719 125.87 166.428 111.437C161.905 101.052 153.276 92.5734 141.537 88.9883Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@rotaryclubofagbara",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.62h-3.13v13.51c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9.28 0 .55.04.8.11V9.79a5.98 5.98 0 0 0-.8-.05c-3.33 0-6.03 2.7-6.03 6.03s2.7 6.03 6.03 6.03 6.03-2.7 6.03-6.03V8.9a8.16 8.16 0 0 0 4.7 1.5V7.28c-.98 0-1.9-.3-2.7-.85l-.4-.61z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/rcagbara",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.footer
      ref={ref}
      style={{ y, background: "linear-gradient(180deg, #123165 0%, #0E2A57 100%)" }}
      className="mt-16 pt-12 pb-8"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 rounded-full pl-2 pr-4 py-1.5">
              <Image src={RotaryLogoDesign} alt="Rotary Club Logo" height={40} />
            </Link>
            <p className="text-white/60 text-sm mb-3">Service Above Self since 1985.</p>
   <div className="flex gap-2.5">
  {socials.map(({ label, href, icon: Icon }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/80 hover:text-gold-soft hover:border-gold-soft/40 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3.5">Explore</h4>
            <ul className="space-y-2.5">
              {[["About Us", "/about"], ["Projects", "/projects"], ["Events", "/events"]].map(
                ([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-white/60 text-sm hover:text-gold-soft">{label}</Link>
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
                    <Link href={href} className="text-white/60 text-sm hover:text-gold-soft">{label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3.5">Location</h4>
            <p className="text-white/60 text-sm mb-2.5">De Oasis hotels and suite,<br /> Ilaro road, Agbara estate, Agbara, Ogun State</p>
            <p className="text-white/60 text-sm mb-2.5">rcagbara@gmail.com</p>
            <p className="text-white/60 text-sm">+234 816 922 4603</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.1] flex flex-wrap justify-between gap-2.5 text-white/40 text-xs">
          <span>© 2026 Rotary Club of Agbara. All rights reserved.</span>
          <Link href="#" className="hover:text-gold-soft">Privacy Policy</Link>
        </div>
      </div>
    </motion.footer>
  );
}