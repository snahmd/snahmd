"use client";

import { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { projects } from "@/data/projects";


const particlesConfig: ISourceOptions = {
  particles: {
    number: { value: 180, density: { enable: true, width: 800, height: 800 } },
    color: { value: "#fff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: { min: 0.1, max: 4 } },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.4,
      direction: "right",
      random: true,
      straight: false,
      outModes: { default: "none" },
    },
  },
  detectRetina: true,
};

export default function ProjectsSection() {
  const [init, setInit] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <>
    <div className="flex justify-center">
      <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent to-red-600" />
    </div>
    <section className="project-container relative flex flex-col items-center justify-center h-[80vh] max-md:h-[50vh] overflow-hidden bg-[radial-gradient(circle_at_top_left,#950923_10%,#000094_30%)] border border-red-600">
      {init && (
        <Particles
          id="particles-projects"
          options={particlesConfig}
          particlesLoaded={particlesLoaded}
          className="absolute w-full h-full"
        />
      )}
      <div className="w-[95%] md:w-[80%] relative z-10">
        <Swiper
          grabCursor
          initialSlide={4}
          centeredSlides
          slidesPerView="auto"
          spaceBetween={10}
          speed={1000}
          mousewheel={{ thresholdDelta: 30 }}
          pagination={{ clickable: true }}
          slideToClickedSlide
          modules={[Pagination, Mousewheel]}
          className="w-full py-[50px]"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <img src={project.image} alt={project.name} />
              <a
                className="absolute z-[15000] left-2 md:left-4 bottom-10 md:bottom-14"
                href={project.liveUrl || project.codeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="bg-black whitespace-nowrap">{project.name}</p>
              </a>
              {project.codeUrl ? (
                <>
                  <a
                    className="absolute z-[15000] left-2 md:left-4 bottom-0"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="bg-black">{t.code}</p>
                  </a>
                  {project.liveUrl && (
                    <a
                      className="absolute z-[15000] left-20 md:left-32 bottom-0"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="bg-black">{t.live}</p>
                    </a>
                  )}
                </>
              ) : project.liveUrl ? (
                <a
                  className="absolute z-[15000] left-2 md:left-4 bottom-0"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="bg-black">{t.live}</p>
                </a>
              ) : null}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  );
}
