"use client";

import { useEffect, type RefObject } from "react";

export function useScrollAnimation(
  pathRef: RefObject<SVGPathElement | null>,
  sectionRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const handleScroll = () => {
      const pathLength = path.getTotalLength();
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? section.offsetTop * 0.8 : section.offsetTop / 2;
      const distance = window.scrollY - (section.offsetTop - offset);

      if (distance > section.offsetHeight) {
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = "0";
        return;
      }
      if (distance < 0) return;

      const percentage = distance / section.offsetHeight;
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${Math.max(
        0,
        pathLength - pathLength * percentage * 2
      )}`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathRef, sectionRef]);
}
