import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg overflow-hidden border border-border group"
    >
      {/* Image/Video with 16:9 aspect ratio */}
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {image.includes('/video/upload/') ? (
            <video 
              src={image} 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            />
          ) : (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )}
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
