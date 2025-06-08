import { motion } from "framer-motion";
import * as icons from "simple-icons";
import { technologies } from "../data/technologies";

interface TechnologyCategory {
  title: string;
  items: {
    name: string;
    iconSlug: string;
  }[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechGrid() {
  const getIcon = (slug: string) => {
    try {
      const iconKey = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
      return (
        icons as unknown as {
          [key: string]: { path: string; hex: string; title: string };
        }
      )[iconKey]?.path;
    } catch {
      console.error(`Icon not found for slug: ${slug}`);
      return null;
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {technologies.map((category, categoryIndex) => (
        <motion.div key={categoryIndex} variants={item} className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-400 dark:text-blue-300">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.items.map((tech, techIndex) => {
              const iconPath = getIcon(tech.iconSlug);
              return (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  {iconPath && (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={iconPath} />
                    </svg>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
