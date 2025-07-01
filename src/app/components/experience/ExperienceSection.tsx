"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceTabs } from "./ExperienceTabs";
import { experiences } from "../../data/experiences";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentExperience =
    experiences.find((exp) => exp.category === activeTab)?.items || [];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          <ExperienceTabs
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setSelectedIndex(0);
            }}
          />

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentExperience.map((item, index) => (
                <ExperienceCard
                  key={index}
                  {...item}
                  isSelected={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
