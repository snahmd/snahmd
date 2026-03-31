"use client";

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import LanguageSelector from "./LanguageSelector";
import Typewriter from "./Typewriter";

const particlesConfig: ISourceOptions = {
  particles: {
    number: { value: 80, density: { enable: true, width: 800, height: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: { enable: true },
    },
  },
  detectRetina: true,
};

export default function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <section className="section-header">
      <div id="particles-container">
        {init && (
          <Particles
            id="particles-hero"
            options={particlesConfig}
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 w-full h-full"
          />
        )}
        <img
          src="/logo.png"
          alt="logo"
          className="logo-img"
        />
        <h2
          className="glitch-text"
          data-text="Ahmed San"
        >
          AHMED SAN
        </h2>
        <LanguageSelector />
      </div>
      <Typewriter />
    </section>
  );
}
