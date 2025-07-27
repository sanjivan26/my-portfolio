import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-violet-500 font-bold text-xl">Sanjivan</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li>
            <a
              href="#hero"
              className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 hover:text-violet-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 hover:text-violet-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 hover:text-violet-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
