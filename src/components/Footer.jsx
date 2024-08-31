import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-8 mt-12">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/kevin-andrés-tarqui-tapia-864212271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/K3VIN16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a> */}
        <a
          href="https://www.instagram.com/kevin.tarqui16/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};
