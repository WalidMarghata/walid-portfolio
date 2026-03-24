"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import { PERSONAL, STACK_TAGS } from "@/lib/data";
import { useSound } from "@/lib/hooks";
import Typewriter from "@/components/ui/Typewriter";
import GlitchText from "@/components/ui/GlitchText";

export default function Hero() {
  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 700], [0, -130]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const { t, dir } = useLocale();
  const sound   = useSound();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-10 pt-24 pb-12">
      {/* Scanlines */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.02) 2px,rgba(0,0,0,0.02) 4px)" }} />
      {/* Grid */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,200,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center" dir={dir}>

          {/* ── LEFT: Text ── */}
          <div className={dir === "rtl" ? "order-2" : "order-1"}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-xs tracking-[0.35em] uppercase mb-6 flex items-center gap-3 text-cyan-500/70"
            >
              <span className="w-8 h-px bg-cyan-400" />
              {t.hero.location}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.9] tracking-tight mb-4"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
            >
              <GlitchText text="Walid" className="text-white block" />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                Marghata
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-mono text-lg text-gray-300 mb-4 h-8"
            >
              <Typewriter words={[...t.typewriter]} />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-mono text-gray-500 text-sm max-w-lg mb-8 leading-relaxed border-l-2 border-cyan-800 pl-4"
              style={{
                textAlign: dir === "rtl" ? "right" : "left",
                borderLeft:  dir === "rtl" ? "none" : undefined,
                borderRight: dir === "rtl" ? "2px solid rgb(23 37 84)" : "none",
                paddingLeft:  dir === "rtl" ? 0       : undefined,
                paddingRight: dir === "rtl" ? "1rem"  : undefined,
              }}
            >
              {t.hero.tagline}
            </motion.p>

            {/* Stack tags */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {STACK_TAGS.map((tag, i) => (
                <motion.span key={tag}
                  initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.04 }}
                  whileHover={{ scale: 1.12, y: -3, borderColor: "#00c8ff", color: "#00c8ff" }}
                  onHoverStart={sound.hover}
                  className="font-mono text-xs border border-cyan-900/60 text-cyan-300/60 px-3 py-1 transition-colors cursor-default"
                >{tag}</motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a href={`mailto:${PERSONAL.email}`}
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onHoverStart={sound.hover}
                className="font-mono text-sm bg-cyan-400 text-[#050a0e] px-7 py-3 font-bold tracking-widest hover:bg-white transition-colors"
              >{t.hero.cta1} ▶</motion.a>
              <motion.a href="#projects"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onHoverStart={sound.hover}
                className="font-mono text-sm border border-gray-700 text-gray-400 px-7 py-3 hover:border-cyan-400 hover:text-cyan-400 transition-all tracking-widest relative overflow-hidden"
              >
                <motion.span className="absolute inset-0 bg-cyan-400/5 origin-left"
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} />
                {t.hero.cta2}
              </motion.a>
              <motion.a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                onHoverStart={sound.hover}
                className="font-mono text-sm border border-gray-700 text-gray-400 px-7 py-3 hover:border-cyan-400 hover:text-cyan-400 transition-all tracking-widest"
              >{t.hero.cta3} ↗</motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex justify-center ${dir === "rtl" ? "order-1" : "order-2"}`}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl scale-110 pointer-events-none" />

            {/* Border frame */}
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 z-10" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 z-10" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60 z-10" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 z-10" />

              {/* Animated scan line */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-10 pointer-events-none"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-xl border border-cyan-900/40"
                style={{ boxShadow: "0 0 40px rgba(0,200,255,0.08), inset 0 0 40px rgba(0,0,0,0.4)" }}
              >
                <Image
                  src="/photo.png"
                  alt="Walid Marghata — Senior Full Stack Developer"
                  width={520}
                  height={380}
                  className="object-cover w-full"
                  priority
                />
                {/* Bottom overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050a0e]/80 to-transparent pointer-events-none" />

                {/* Badge: Available */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#050a0e]/80 backdrop-blur-sm border border-emerald-800/60 px-3 py-1.5 rounded-sm"
                >
                  <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <span className="font-mono text-xs text-emerald-400 tracking-widest">{t.nav.available}</span>
                </motion.div>

                {/* Badge: Role */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="absolute bottom-4 right-4 bg-[#050a0e]/80 backdrop-blur-sm border border-cyan-900/60 px-3 py-1.5 rounded-sm"
                >
                  <span className="font-mono text-[10px] text-cyan-400 tracking-widest">Senior Dev</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        <p className="font-mono text-[10px] text-gray-700 tracking-widest">{t.hero.scroll}</p>
      </motion.div>
    </section>
  );
}
