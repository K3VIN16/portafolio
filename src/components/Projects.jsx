import React from "react";
import Laybel from "../assets/laybel/Laybel.jsx";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del Proyecto 1.",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2.",
    link: "#",
    image: "/images/project2.png",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del Proyecto 3.",
    link: "#",
    image: "/images/project3.png",
  },
];

// Componente ProjectCard que ahora incluye animación al pasar el mouse
const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg shadow-black transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
      >
        Ver Proyecto
      </a>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-24">
      <div className="container mx-auto px-5">
        <Laybel>Projects</Laybel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6 px-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image} // Pasando la imagen a cada tarjeta
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
