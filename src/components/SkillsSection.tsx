"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { skills } from "@/data/skills";

// Skill positions matching the original layout
const skillPositions = [
  { top: "2vw", left: "90%" },
  { top: "12vw", left: "80%" },
  { top: "12vw", left: "63%" },
  { top: "12vw", left: "46%" },
  { top: "12vw", left: "29%" },
  { top: "12vw", left: "12%" },
  { top: "25vw", left: "1%" },
  { top: "37vw", left: "12%" },
  { top: "37vw", left: "29%" },
  { top: "37vw", left: "46%" },
  { top: "37vw", left: "63%" },
  { top: "48vw", left: "70%" },
  { top: "62vw", left: "70%" },
  { top: "62vw", left: "57%" },
  { top: "70vw", left: "48%" },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useScrollAnimation(pathRef, sectionRef);

  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      ref={sectionRef}
      className="relative h-[685px] md:h-[1350px] lg:h-[1850px]"
      id="scrollsection"
    >
      <svg
        viewBox="0 0 1907 1846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-10vw] left-[3vw] w-[94vw] my-[3vw]"
        style={{ strokeDasharray: 5629, strokeDashoffset: 5629 }}
      >
        <path
          ref={pathRef}
          d="M1892 0V480.335H15V997.5H1463V1503.5H1005V1846"
          stroke="#CD3C2F"
          strokeWidth={30}
        />
      </svg>

      {skills.map((skill, i) => (
        <div
          key={skill.name}
          className="absolute border bg-slate-100 w-[10vw] h-[10vw] z-[1] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center"
          style={{ top: skillPositions[i].top, left: skillPositions[i].left }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-[65%] h-[65%] object-contain"
          />
        </div>
      ))}

      <div className="absolute top-[95vw] 2xl:top-[83vw] left-0 right-0 flex justify-center">
        <h2 className="text-3xl md:text-6xl lg:text-7xl leading-tight lg:leading-none p-5 overflow-hidden max-w-[90vw] lg:max-w-[80vw] text-center">
          {t.slogan}
        </h2>
      </div>
    </section>
  );
}
