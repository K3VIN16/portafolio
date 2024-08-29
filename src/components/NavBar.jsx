export const NavBar = () => {
  return (
    <nav className="bg-violet-950 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-white text-lg font-bold">Kevin</div>
      <div>
        <ul className="flex space-x-8">
          <li>
            <a href="#portfolio" className="text-white hover:text-gray-300">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
