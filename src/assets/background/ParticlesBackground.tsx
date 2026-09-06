import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import particlesConfig from "./particles.ts";
import "./particles.css";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        className="particles-background"
        id="tsparticles"
        init={particlesInit}
        // La config sigue en el esquema legacy (snake_case) de tsparticles v2.
        // Se reescribe al esquema v3/v4 en la Fase 2, junto con el upgrade de la librería.
        options={particlesConfig as unknown as RecursivePartial<IOptions>}
      />
    </>
  );
}
