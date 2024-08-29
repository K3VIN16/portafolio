import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Kevin Tarqui</h2>
            <p className="mt-2">Software Developer</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Kevin Tarqui. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link to="portfolio" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
              Portafolio
            </Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
              Skills
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
              Contacto
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/kevin-andrés-tarqui-tapia-864212271/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/K3VIN16" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
