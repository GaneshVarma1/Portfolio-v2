import { motion } from "framer-motion";
import { ProjectsGrid } from "./projects/ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <ProjectsGrid />
      </div>
    </section>
  );
}
