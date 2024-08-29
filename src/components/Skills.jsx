import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "HTML & CSS",
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-12 px-5 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-6">
          Mis Habilidades
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">{skill}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
