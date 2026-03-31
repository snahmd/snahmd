"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Typewriter() {
  const { lang } = useLanguage();
  const [text, setText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const pauseRef = useRef(false);

  const tick = useCallback(() => {
    const phrases = translations[lang].phrases;
    const word = phrases[idxRef.current];
    const sleepTime = 100;

    if (pauseRef.current) {
      pauseRef.current = false;
      if (deletingRef.current) {
        timeoutRef.current = setTimeout(tick, sleepTime * 5);
      } else {
        timeoutRef.current = setTimeout(tick, sleepTime * 10);
      }
      return;
    }

    if (!deletingRef.current) {
      charRef.current++;
      setText(word.substring(0, charRef.current));

      if (charRef.current >= word.length) {
        deletingRef.current = true;
        pauseRef.current = true;
      }
    } else {
      charRef.current--;
      setText(word.substring(0, charRef.current));

      if (charRef.current <= 0) {
        deletingRef.current = false;
        pauseRef.current = true;
        idxRef.current = (idxRef.current + 1) % phrases.length;
      }
    }

    timeoutRef.current = setTimeout(tick, sleepTime);
  }, [lang]);

  useEffect(() => {
    idxRef.current = 0;
    charRef.current = 0;
    deletingRef.current = false;
    pauseRef.current = false;
    setText("");

    timeoutRef.current = setTimeout(tick, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lang, tick]);

  const t = translations[lang];

  return (
    <h1 className="text-[30px] md:text-[50px] text-red-600 text-center pt-12 font-bold z-10">
      {t.greetings}
      <br />
      {t.iam} <span id="typewriter">{text}</span>
      <span id="cursor">|</span>
    </h1>
  );
}
