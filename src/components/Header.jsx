import React from "react";
import ProfileImage from "./ProfileImage.jsx";

export const Header = () => {
  return (
    <header id="portfolio" className="relative overflow-hidden text-center py-56 px-5">
      {/* <header className="relative overflow-hidden text-center py-20 px-5 min-h-screen"> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://cdn.pixabay.com/video/2022/08/08/127073-737747499_large.mp4"
        autoPlay
        muted
        loop
      />
      <section className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-5" />
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <ProfileImage />
        <section className="md:w-3/4 text-left z-10">
          <div className="bg-purple-100 bg-opacity-85 p-4 rounded-br-3xl shadow-violet-700">
            <h1 className="text-4xl font-bold text-gray-800">
              Hola, soy <span className="">[Kevin Tarqui]</span>
            </h1>
            <b className="text-xl text-gray-800 mt-4">
              <span className="">Software Developer</span>
            </b>
            <p className="text-justify">
              Busco integrarme en una empresa destacada en su sector, donde
              pueda aplicar mis habilidades y conocimientos, contribuyendo al
              éxito del equipo mientras desarrollo mi carrera profesional
            </p>

            <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
              Skills
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};
