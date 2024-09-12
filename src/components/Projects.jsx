import React from "react";
import Laybel from "../assets/laybel/Laybel.jsx";
import imgPortafolio from "../assets/photos/imgPortafolio.jpg";
import { useInView } from "react-intersection-observer";
import "../assets/effect/projects.css";

//Atributos de los proyectos realizados
const projects = [
  {
    title: "Portafolio Personal",
    description:
      "Este portafolio es una representación de mis habilidades en desarrollo web y programación. Cada proyecto refleja mi dedicación y experiencia en la creación de soluciones digitales.",
    link1: "/",
    link2: "https://github.com/K3VIN16/portafolio",
    image: imgPortafolio,
  },
  {
    title: "Ecomerse",
    description: "Simulacion de un Ecomerse realizado con Vite, React y tailwind, ",
    link1: "#",
    link2: "#",
    image: "/images/project2.png",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del Proyecto 3.",
    link1: "#",
    link2: "#",
    image: "/images/project3.png",
  },
];

const ProjectCard = ({ title, description, link1, link2, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg shadow-black transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500 flex flex-col justify-between h-full ${
        inView ? "slide-in-left" : "opacity-0"
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-700 mt-2 mb-4 flex-grow">{description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={link1}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
        >
          Ver Proyecto
        </a>
        <a
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
        >
          Ver Repositorio
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-24">
      <div className="container mx-auto px-5">
        <Laybel>Projects</Laybel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8 py-6 px-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link1={project.link1}
              link2={project.link2}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
