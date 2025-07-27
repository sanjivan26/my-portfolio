import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-8 md:px-24">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-violet-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Sanjivan
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I'm a full-stack developer building fast, modern web apps. Welcome to my
        portfolio!
      </motion.p>
    </section>
  );
}
