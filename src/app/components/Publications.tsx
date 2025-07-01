import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publications } from "../data/publications";

export function Publications() {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Publications
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pub.venue}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground/70">
                    <span className="font-medium">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    <span className="font-medium">Publisher:</span> {pub.publisher}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    <span className="font-medium">Year:</span> {pub.year}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    <span className="font-medium">DOI:</span> {pub.doi}
                  </p>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Read Publication
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 