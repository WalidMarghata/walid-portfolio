"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOCALES, Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/LocaleContext";
import { useSound } from "@/lib/hooks";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const sound = useSound();

  const current = LOCALES.find(l => l.code === locale)!;

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
    sound.click();
  };

  return (
    <div className="relative" data-hover>
      {/* Trigger */}
      <motion.button
        onClick={() => { setOpen(o => !o); sound.hover(); }}
        whileHover={{ borderColor: "rgba(0,200,255,0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 font-mono text-xs border border-cyan-900/50 text-gray-400 hover:text-cyan-400 px-2.5 py-1.5 transition-all select-none"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="tracking-widest">{current.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] opacity-60"
        >▾</motion.span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-[49]" onClick={() => setOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 bg-[#0a1219] border border-cyan-900/40 min-w-[130px] overflow-hidden shadow-xl shadow-black/40"
            >
              {LOCALES.map(({ code, label, flag, dir }) => (
                <motion.button
                  key={code}
                  onClick={() => handleSelect(code)}
                  whileHover={{ x: dir === "rtl" ? -4 : 4, backgroundColor: "rgba(0,200,255,0.06)" }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 font-mono text-xs transition-colors text-left ${
                    locale === code ? "text-cyan-400 bg-cyan-400/5" : "text-gray-400 hover:text-cyan-300"
                  }`}
                  style={{ direction: dir }}
                >
                  <span className="text-base leading-none flex-shrink-0">{flag}</span>
                  <span className="tracking-widest">{label}</span>
                  {locale === code && (
                    <motion.span
                      layoutId="lang-check"
                      className="ml-auto text-cyan-400 text-[10px]"
                    >✓</motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
