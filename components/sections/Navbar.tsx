"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSound } from "@/lib/hooks";
import { useLocale } from "@/lib/LocaleContext";
import { PERSONAL } from "@/lib/data";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar({ delay = 0 }: { delay?: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const { t } = useLocale();
  const sound = useSound();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: t.nav.about,      href: "#about"      },
    { label: t.nav.skills,     href: "#skills"     },
    { label: t.nav.projects,   href: "#projects"   },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact,    href: "#contact"    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`fixed top-0 w-full z-40 px-5 md:px-10 py-3 flex justify-between items-center transition-all duration-500 ${
        scrolled ? "bg-[#050a0e]/85 backdrop-blur-xl border-b border-cyan-900/30" : ""
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 group">
        <motion.div
          whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 12px rgba(0,200,255,0.7))" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-10 h-10 flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="WM Logo"
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(0,200,255,0.4)]"
          />
        </motion.div>
        <span className="font-mono text-cyan-400 font-bold tracking-widest text-sm hidden sm:block relative">
          walid<span className="text-white">.dev</span>
          <motion.span className="absolute -bottom-0.5 left-0 right-0 h-px bg-cyan-400 origin-left"
            initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} />
        </span>
      </a>

      <div className="hidden md:flex gap-7 text-xs font-mono tracking-widest">
        {links.map(({ label, href }) => (
          <a key={href} href={href}
            onMouseEnter={() => { setActive(href); sound.hover(); }}
            onMouseLeave={() => setActive("")}
            className="relative text-gray-400 hover:text-cyan-400 transition-colors uppercase"
          >
            {label}
            <motion.span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
              initial={{ scaleX: 0 }} animate={{ scaleX: active === href ? 1 : 0 }}
              transition={{ duration: 0.2 }} />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {PERSONAL.available && (
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400">
            <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }} />
            {t.nav.available}
          </div>
        )}
        <LanguageSwitcher />
        <a href={`mailto:${PERSONAL.email}`}
          onMouseEnter={sound.hover}
          className="hidden md:block font-mono text-xs border border-cyan-800 text-cyan-400 px-4 py-1.5 hover:bg-cyan-400 hover:text-[#050a0e] transition-all tracking-widest"
        >{t.nav.hireMe}</a>
      </div>
    </motion.nav>
  );
}
