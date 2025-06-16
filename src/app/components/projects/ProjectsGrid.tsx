import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/data/projects";

export function ProjectsGrid() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: projects.length * 0.1 }}
        ></motion.div>
      </div>
    </>
  );
}
