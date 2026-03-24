"use client";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useSound } from "@/lib/hooks";

interface CounterProps {
  to: number;
  suffix?: string;
}

export default function Counter({ to, suffix = "" }: CounterProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const sound  = useSound();

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(to / 40));
    const t = setInterval(() => {
      n += step;
      if (n >= to) { setCount(to); clearInterval(t); return; }
      setCount(n);
      sound.tick();
    }, 40);
    return () => clearInterval(t);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}
