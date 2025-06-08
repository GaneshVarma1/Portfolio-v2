"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceTabs } from "./ExperienceTabs";

const experiences = [
  {
    category: "work",
    items: [
      {
        title: "Senior Full Stack Engineer",
        company: "DocNexus",
        companyUrl: "https://www.docnexus.ai",
        duration: "2025 Feb - 2025 June",
        description: [
          "Redesigned DocNexus platform using Next.js 14, TailwindCSS, and OpenAI integration, improving load time by 60%",
          "Implemented AI-powered features using OpenAI API and LangChain, enhancing user interaction and automation",
          "Modernized UI with TailwindCSS and Framer Motion, creating responsive and accessible interfaces",
          "Built scalable backend services with Node.js and PostgreSQL, ensuring HIPAA compliance",
          "Deployed and maintained infrastructure on AWS, implementing CI/CD with GitHub Actions",
        ],
        technologies: ["Next.js 14", "TailwindCSS", "OpenAI", "LangChain", "Node.js", "PostgreSQL", "AWS", "Framer Motion", "GitHub Actions"],
      },
      {
        title: "Senior Web Developer",
        company: "MME Worldwide",
        companyUrl: "https://www.mmecreativepartners.com",
        duration: "2024 Aug - 2025 Jan",
        description: [
          "Led development of scalable web applications using React and Node.js",
          "Implemented microservices architecture and improved system performance by 40%",
          "Mentored junior developers and conducted code reviews",
          "Architected and deployed cloud-native solutions on AWS",
        ],
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      },
      {
        title: "Web Developer and Technical SEO",
        company: "6 Degrees Media",
        companyUrl: "https://www.6degreesmedia.com",
        duration: "2024 Jun - 2024 Jul",
        description: [
          "Developed responsive web applications using HTML, CSS, JavaScript, and React.js.",
          "Implemented SEO best practices and optimized site structure, leading to a 50% increase in organic search traffic.",
          "Collaborated with designers and backend developers to integrate RESTful APIs.",
          "Utilized Git for version control and ensured efficient code management.",
          "Deployed web applications to Vercel for fast and reliable hosting.",
        ],
        technologies: ["HTML", "CSS", "React", "SEO", "Git", "Vercel"],
      },
      {
        title: "Web Developer & Graduate Assistant",
        company: "SUNY New Paltz",
        companyUrl: "https://www.newpaltz.edu",
        duration: "2022 Aug - 2024 May",
        description: [
          "Developed full-stack applications using JavaScript and HTML/CSS",
          "Collaborated with cross-functional teams to deliver high-quality solutions",
          "Optimized database queries resulting in 50% faster load times",
          "Created websites for events to reserve tickets",
          "Implemented CI/CD pipelines using Jenkins",
        ],
        technologies: ["React", "Python", "PostgreSQL", "Docker", "Jenkins"],
      },
      {
        title: "UI Web Developer",
        company: "WeBuild",
        companyUrl: "#",
        duration: "2021 Aug - 2022 Jul",
        description: [
          "Designed websites for various clients, creating static pages for businesses that required a strong online presence.",
          "Integrated secure payment gateways using Stripe, enabling safe transactions for clients' e-commerce stores.",
          "Built a custom e-commerce store for a t-shirt brand, increasing online sales by 75%.",
          "Developed fully responsive websites, ensuring cross-device and browser compatibility.",
          "Created custom WordPress themes and provided ongoing support for client-specific needs.",
        ],
        technologies: [
          "WordPress",
          "React",
          "Stripe",
          "HTML/CSS",
          "JavaScript",
        ],
      },
      {
        title: "Web Developer",
        company: "MLR Institute of Technology",
        companyUrl: "https://mlrit.ac.in/",
        duration: "2020 Aug - 2021 May",
        description: [
          "Designed and developed interactive web pages for the institution.",
          "Improved the institute's online presence through responsive design.",
          "Collaborated with the IT team to deploy web-based applications for academic use.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      },
    ],
  },
  {
    category: "education",
    items: [
      {
        title: "Master's in Computer Science",
        company: "State University of New Paltz at New York",
        companyUrl: "https://www.newpaltz.edu",
        duration: "",
        description: [
          "Specialized in Software Engineering and Distributed Systems",
          "Research focus on cloud computing and scalable architectures",
          "Published paper on distributed systems optimization",
          "GPA: 3.67/4.0",
        ],
        technologies: [
          "Algorithms",
          "Distributed Systems",
          "Cloud Computing",
          "Web development",
        ],
      },
      {
        title: "Bachelor's in Computer Science",
        company: "MLR Institute of Technology",
        companyUrl: "https://mlrit.ac.in/",
        duration: "",
        description: [
          "Major in Computer Science with focus on Software Development",
          "Dean's List all semesters",
          "Led student software development club",
          "Designed Many Websites for University",
          "Completed honors thesis on machine learning applications",
        ],
        technologies: [
          "Data Structures",
          "Software Engineering",
          "Database Systems",
        ],
      },
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentExperience =
    experiences.find((exp) => exp.category === activeTab)?.items || [];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
