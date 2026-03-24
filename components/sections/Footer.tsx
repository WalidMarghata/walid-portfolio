"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const { t, dir } = useLocale();
  return (
    <footer className="border-t border-cyan-900/20 py-8 px-6 md:px-10 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-gray-700 relative overflow-hidden" dir={dir}>
      <motion.div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent"
        animate={{ x: ["-10%", "110%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
      <span>© 2026 <span className="text-cyan-800">Walid Marghata</span> — {t.footer.role}</span>
      <span>
        <a href={PERSONAL.github}   target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
        {" · "}
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        {" · "}
        <a href={`mailto:${PERSONAL.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
      </span>
      <span>{t.footer.remote}</span>
    </footer>
  );
}
