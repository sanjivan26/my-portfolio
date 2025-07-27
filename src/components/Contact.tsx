export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-8 py-20 bg-black"
    >
      <h2 className="text-3xl font-bold mb-6 text-violet-500">Get in Touch</h2>
      <p className="mb-8 text-center text-gray-300 max-w-xl">
        I'm open to opportunities, collaborations, or just a quick hello!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 text-gray-300 hover:text-violet-400 text-xl"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 text-gray-300 hover:text-violet-400 text-xl"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hoverable inline-flex items-center px-3 py-2 transition-colors duration-200 text-gray-300 hover:text-violet-400 text-xl"
        >
          Email
        </a>
      </div>
    </section>
  );
}
