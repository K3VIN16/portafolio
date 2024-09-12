import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles.jsx";
import "./particles.css";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        className="particles-background"
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </>
  );
}
