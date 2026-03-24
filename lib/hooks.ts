"use client";
import { useCallback, useRef, useState, useEffect } from "react";

// ─── SOUND ENGINE ─────────────────────────────────────────────────────────────
export function useSound() {
  const ctx = useRef<AudioContext | null>(null);
  const init = useCallback(() => {
    if (!ctx.current)
      ctx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }, []);

  const play = useCallback(
    (freq: number, type: OscillatorType = "sine", dur = 0.08, vol = 0.04) => {
      try {
        init();
        const ac   = ctx.current!;
        const osc  = ac.createOscillator();
        const gain = ac.createGain();
        osc.connect(gain);
        gain.connect(ac.destination);
        osc.type            = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, ac.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + dur);
        osc.start();
        osc.stop(ac.currentTime + dur);
      } catch {}
    },
    [init]
  );

  return {
    hover:  () => play(880,  "sine",     0.06, 0.025),
    click:  () => play(440,  "triangle", 0.12, 0.05),
    tick:   () => play(1200, "square",   0.03, 0.012),
    whoosh: () => play(220,  "sawtooth", 0.18, 0.04),
  };
}

// ─── MOBILE DETECTION ─────────────────────────────────────────────────────────
export function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}
