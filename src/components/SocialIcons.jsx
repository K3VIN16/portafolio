import React from "react";

function SocialIcons() {
  return (
    <div className="flex space-x-4 mt-6 justify-center md:justify-start">
      <a
        href="https://www.linkedin.com/in/kevin-andrés-tarqui-tapia-864212271/"
        className="text-2xl text-gray-800 hover:text-indigo-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/K3VIN16"
        className="text-2xl text-gray-800 hover:text-indigo-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="#"
        className="text-2xl text-gray-800 hover:text-indigo-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="#"
        className="text-2xl text-gray-800 hover:text-indigo-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
