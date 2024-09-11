import React from "react";
import Laybel from "../assets/laybel/Laybel.jsx";
import imgJavascript from "../assets/logos/javascript.png";
import imgHtmlCss from "../assets/logos/html_css.jpg";
import imgReact from "../assets/logos/react.webp";
import imgTailwind from "../assets/logos/tailwind.webp";
import imgJava from "../assets/logos/java.png";
import imgSpringboot from "../assets/logos/springboot.png";
import imgGit from "../assets/logos/git.png";
import imgGithub from "../assets/logos/github.svg";
import imgMySql from "../assets/logos/mySql.webp";
import imgPostgreSql from "../assets/logos/postgreSql.png";

// Array de habilidades con imágenes y sombras personalizadas
const skills = [
  {
    name: "Html & CSS",
    image: imgHtmlCss,
    shadow: "shadow-orange-500",
  },
  {
    name: "JavaScript",
    image: imgJavascript,
    shadow: "shadow-yellow-400",
  },
  {
    name: "React",
    image: imgReact,
    shadow: "shadow-blue-400",
  },
  {
    name: "Tailwind CSS",
    image: imgTailwind,
    shadow: "shadow-teal-400",
  },
  {
    name: "Java",
    image: imgJava,
    shadow: "shadow-red-400",
  },
  {
    name: "Springboot",
    image: imgSpringboot,
    shadow: "shadow-green-500",
  },
  {
    name: "Git",
    image: imgGit,
    shadow: "shadow-orange-400",
  },
  {
    name: "GitHub",
    image: imgGithub,
    shadow: "shadow-purple-500",
  },
  {
    name: "MySQL",
    image: imgMySql,
    shadow: "shadow-blue-500",
  },
  {
    name: "PostgreSQL",
    image: imgPostgreSql,
    shadow: "shadow-blue-700",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <Laybel>Skills</Laybel>
        <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`bg-white p-4 rounded-xl shadow-lg ${skill.shadow} flex flex-col items-center`}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {skill.name}
              </h3>
              {skill.image && (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
