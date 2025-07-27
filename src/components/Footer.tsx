import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 bg-black text-white text-center border-t border-zinc-800 mt-10">
      <div className="flex justify-center space-x-6 text-lg">
        <a
          href="mailto:your.email@example.com"
          className="hoverable inline-flex items-center p-2 transition-colors duration-200 hover:text-violet-400"
          aria-label="Email"
        >
          <MdEmail size={24} />
        </a>
        <a
          href="https://github.com/yourusername"
          className="hoverable inline-flex items-center p-2 transition-colors duration-200 hover:text-violet-400"
          aria-label="GitHub"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="hoverable inline-flex items-center p-2 transition-colors duration-200 hover:text-violet-400"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
