"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/LocaleContext";
import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useSound } from "@/lib/hooks";

export default function Contact() {
  const [sent,  setSent]  = useState(false);
  const [focus, setFocus] = useState("");
  const { t, dir } = useLocale();
  const sound = useSound();
  const c = t.contact;

  const links = [
    { icon: "✉", label: PERSONAL.email,                    href: `mailto:${PERSONAL.email}`, cta: true  },
    { icon: "💼", label: "linkedin.com/in/walidmarghata",  href: PERSONAL.linkedin,          cta: false },
    { icon: "⌥",  label: "github.com/WalidMarghata",      href: PERSONAL.github,            cta: false },
    { icon: "📞", label: PERSONAL.phone,                   href: `tel:${PERSONAL.phone}`,    cta: false },
    { icon: "📍", label: c.links.location,                 href: "#",                        cta: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); sound.whoosh(); setSent(true); setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 md:py-32 px-6 md:px-10 max-w-6xl mx-auto" dir={dir}>
      <SectionHeader tag={c.tag} title={c.title} accent={c.accent} />
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <Reveal delay={0.1} direction="left">
          <p className="font-mono text-sm text-gray-400 leading-loose mb-4">{c.p1}</p>
          <p className="font-mono text-sm text-gray-400 leading-loose mb-10">{c.p2}</p>
          <div className="space-y-0">
            {links.map(({ icon, label, href, cta }) => (
              <motion.a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ x: dir === "rtl" ? -8 : 8, color: cta ? "#fff" : "#00c8ff" }}
                onHoverStart={sound.hover}
                className={`flex items-center gap-4 py-4 border-b font-mono text-sm transition-colors group ${
                  cta ? "border-cyan-800/40 text-cyan-300" : "border-cyan-900/20 text-gray-400"
                }`}
              >
                <span className="w-6 text-base flex-shrink-0">{icon}</span>
                <span className="break-all">{label}</span>
                <motion.span className="ml-auto opacity-0 group-hover:opacity-100 text-xs text-cyan-400 flex-shrink-0 transition-opacity">↗</motion.span>
              </motion.a>
            ))}
          </div>
          <motion.a href={`mailto:${PERSONAL.email}?subject=Let's Work Together`}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onHoverStart={sound.hover}
            className="mt-8 w-full flex items-center justify-center gap-2 font-mono text-sm bg-cyan-400 text-[#050a0e] py-4 font-bold tracking-widest hover:bg-white transition-colors"
          >{c.mainCta} ▶</motion.a>
        </Reveal>

        <Reveal delay={0.2} direction="right">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name",    label: c.form.name,    type: "text",  ph: c.form.namePh,    req: true  },
              { id: "email",   label: c.form.email,   type: "email", ph: c.form.emailPh,   req: true  },
              { id: "company", label: c.form.company, type: "text",  ph: c.form.companyPh, req: false },
            ].map(({ id, label, type, ph, req }) => (
              <div key={id}>
                <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest block mb-1.5">{label}</label>
                <div className="relative">
                  <input type={type} placeholder={ph} required={req}
                    onFocus={() => { setFocus(id); sound.tick(); }} onBlur={() => setFocus("")}
                    className="w-full bg-[#0a1219] border border-cyan-900/30 focus:border-cyan-500 outline-none font-mono text-sm text-gray-300 px-4 py-3 transition-all placeholder-gray-700/50"
                    dir={dir}
                  />
                  {focus === id && (
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-blue-500 origin-left" />
                  )}
                </div>
              </div>
            ))}
            <div>
              <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest block mb-1.5">{c.form.message}</label>
              <div className="relative">
                <textarea rows={5} placeholder={c.form.messagePh} required
                  onFocus={() => { setFocus("msg"); sound.tick(); }} onBlur={() => setFocus("")}
                  className="w-full bg-[#0a1219] border border-cyan-900/30 focus:border-cyan-500 outline-none font-mono text-sm text-gray-300 px-4 py-3 transition-all resize-none placeholder-gray-700/50"
                  dir={dir}
                />
                {focus === "msg" && (
                  <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-blue-500 origin-left" />
                )}
              </div>
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onHoverStart={sound.hover}
              className={`w-full font-mono text-xs tracking-widest font-bold py-4 transition-all relative overflow-hidden ${
                sent ? "bg-emerald-500 text-white" : "bg-cyan-400 text-[#050a0e] hover:bg-white"
              }`}
            >
              {!sent && (
                <motion.span className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.4 }} />
              )}
              {sent ? c.form.sent : c.form.send}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
