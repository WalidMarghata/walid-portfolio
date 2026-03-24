"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSound } from "@/lib/hooks";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const [wi, setWi]     = useState(0);
  const [ci, setCi]     = useState(0);
  const [del, setDel]   = useState(false);
  const [text, setText] = useState("");
  const sound = useSound();

  useEffect(() => {
    const word = words[wi];
    let t: ReturnType<typeof setTimeout>;

    if (!del && ci <= word.length) {
      setText(word.slice(0, ci));
      if (ci < word.length) sound.tick();
      t = setTimeout(() => setCi(c => c + 1), ci === word.length ? 1800 : 75);
    } else if (del && ci >= 0) {
      setText(word.slice(0, ci));
      t = setTimeout(() => setCi(c => c - 1), 38);
    }

    if (!del && ci > word.length) setDel(true);
    if (del && ci < 0) { setDel(false); setWi(w => (w + 1) % words.length); setCi(0); }

    return () => clearTimeout(t);
  }, [ci, del, wi]);

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-cyan-400"
      >|</motion.span>
    </span>
  );
}
