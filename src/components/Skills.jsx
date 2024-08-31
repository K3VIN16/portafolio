import React from "react";
import imgJavascript from "../assets/skillLogos/javascript.png";
// import html from "../assets/skillLogos/html_css.png";
import imgHtmlCss from "../assets/skillLogos/html.jpg";
import imgReact from "../assets/skillLogos/react.webp";
import imgTailwind from "../assets/skillLogos/tailwind.webp";
import imgJava from "../assets/skillLogos/java.png";
import imgSpringboot from "../assets/skillLogos/springboot.png";
import imgGit from "../assets/skillLogos/git.png";
import imgGithub from "../assets/skillLogos/github.svg";
import imgMySql from "../assets/skillLogos/mySql.webp";
import imgPostgreSql from "../assets/skillLogos/postgreSql.png";

// Mapa de habilidades a sus imágenes correspondientes
const skillImages = {
  "Html & CSS": imgHtmlCss,
  JavaScript: imgJavascript,
  React: imgReact,
  "Tailwind CSS": imgTailwind,
  Java: imgJava,
  Springboot: imgSpringboot,
  Git: imgGit,
  GitHub: imgGithub,
  MySQL: imgMySql,
  PostgreSQL: imgPostgreSql,
};

export const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-12 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.keys(skillImages).map((skill, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {skill}
              </h3>
              {skillImages[skill] && (
                <img
                  src={skillImages[skill]}
                  alt={skill}
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
