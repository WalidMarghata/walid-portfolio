"use client";
import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
import { useSound } from "@/lib/hooks";

export default function CustomCursor() {
  const mobile   = useIsMobile();
  const cursorX  = useMotionValue(-100);
  const cursorY  = useMotionValue(-100);
  const springX  = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY  = useSpring(cursorY, { stiffness: 500, damping: 35 });
  const trailX   = useSpring(cursorX, { stiffness: 120, damping: 28 });
  const trailY   = useSpring(cursorY, { stiffness: 120, damping: 28 });
  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const sound = useSound();

  useEffect(() => {
    if (mobile) return;
    let id = 0;
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setTrail(t => [...t.slice(-14), { x: e.clientX, y: e.clientY, id: ++id }]);
    };
    const down = () => { setClicking(true); sound.click(); };
    const up   = () => setClicking(false);
    const attach = () =>
      document.querySelectorAll("a,button,[data-hover]").forEach(el => {
        el.addEventListener("mouseenter", () => { setHovered(true); sound.hover(); });
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    attach();
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      obs.disconnect();
    };
  }, [mobile]);

  if (mobile) return null;

  return (
    <>
      {trail.map((t, i) => (
        <motion.div key={t.id}
          className="fixed rounded-full pointer-events-none z-[997]"
          style={{ left: t.x - 3, top: t.y - 3, width: 6, height: 6,
            background: `rgba(0,200,255,${(i / trail.length) * 0.32})`,
          }}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div className="fixed rounded-full pointer-events-none z-[998] border border-cyan-400/50"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%",
          width: hovered ? 50 : 34, height: hovered ? 50 : 34,
          borderColor: hovered ? "rgba(0,200,255,0.8)" : "rgba(0,200,255,0.35)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
      <motion.div className="fixed rounded-full pointer-events-none z-[999] mix-blend-screen"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%",
          width: clicking ? 18 : hovered ? 0 : 10,
          height: clicking ? 18 : hovered ? 0 : 10,
          background: "#00c8ff",
          boxShadow: "0 0 12px #00c8ff, 0 0 28px rgba(0,200,255,0.25)",
          transition: "width 0.15s, height 0.15s",
        }}
      />
    </>
  );
}
