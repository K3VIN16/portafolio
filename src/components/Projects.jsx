import React from "react";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del Proyecto 1.",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2.",
    link: "#",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del Proyecto 3.",
    link: "#",
  },
];

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
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
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
