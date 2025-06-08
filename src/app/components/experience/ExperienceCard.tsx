import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl?: string; // Add this property for the company URL
  duration: string;
  description: string[];
  technologies: string[];
  isSelected?: boolean;
  onClick?: () => void;
}

export function ExperienceCard({
  title,
  company,
  companyUrl,
  duration,
  description,
  technologies,
  isSelected = false,
  onClick,
}: ExperienceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-blue-500/10 dark:bg-blue-500/5"
          : "hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
    >
      <h3 className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-1">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {company}
          </a>
        ) : (
          company
        )}
      </h3>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">
        {duration}
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
