import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="min-h-screen px-8 md:px-24 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-violet-500 mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {["Project One", "Project Two"].map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * i }}
            className="hoverable bg-gray-900 rounded-2xl p-6 shadow-lg transition-transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2 text-violet-400">
              {title}
            </h3>
            <p className="text-gray-400">
              Brief description of {title.toLowerCase()}.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
