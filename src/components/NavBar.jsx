export const NavBar = () => {
  return (
    <nav className="text-white bg-violet-950 px-10 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold">Kevin</div>
      <div>
        <ul className="flex space-x-10">
          <li>
            <a href="#top" className=" hover:text-gray-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className=" hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className=" hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-gray-300">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
