import { motion } from "framer-motion";
import { TechGrid } from "./TechGrid";
export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <p className="text-lg text-muted-foreground">
              As a seasoned Senior Software Engineer with over 4 years of experience, I excel in architecting and developing enterprise-grade applications. My expertise spans the full software development lifecycle, from system design to deployment, with a particular focus on building scalable, high-performance solutions using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              Throughout my career, I've led cross-functional teams in delivering complex projects, established engineering best practices, and mentored junior developers. I'm passionate about creating robust, maintainable codebases and driving technical innovation while ensuring optimal user experiences.
            </p>
          </motion.div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Technical Skills & Tools
            </h3>
            <TechGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
