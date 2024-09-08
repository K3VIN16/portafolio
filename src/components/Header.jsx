import React from "react";
import ProfileImage from "./ProfileImage.jsx";
import video from "../assets/video/fondoHeader.mp4";

export const Header = () => {
  return (
    <header
      id="portfolio"
      className="relative overflow-hidden text-center h-screen px-5"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={video}
        autoPlay
        muted
        loop
      />

      <section className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-5" />

      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-6 md:flex-row items-center justify-center h-full">
        <ProfileImage />

        <section className="md:w-3/5 text-left z-10">
          <div className="bg-purple-100 bg-opacity-85 p-6 rounded-br-3xl border-b-2 border-r-2 border-violet-500">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Hola, soy <span>[Kevin Tarqui]</span>
            </h1>
            <b className="text-lg sm:text-xl text-gray-800">
              <span>Software Developer</span>
            </b>
            <p className="text-base sm:text-lg text-justify font-medium mt-1">
              Busco integrarme en una empresa destacada en su sector, donde pueda aplicar mis habilidades y conocimientos, contribuyendo al éxito del equipo mientras desarrollo mi carrera profesional.
            </p>

            <a href="#skills">
              <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                <p>Skills</p>
              </button>
            </a>
          </div>
        </section>
      </div>
    </header>
  );
};
