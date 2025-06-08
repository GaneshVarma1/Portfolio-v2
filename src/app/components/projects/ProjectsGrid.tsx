import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "ReactWind",
    description:
      "A one-stop destination for free, professionally designed components crafted with React and Tailwind CSS.",
    tech: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "NextJS",
      "Vercel",
      "Shadcn",
      "LucidIcons",
    ],
    github: "https://github.com/GaneshVarma1/",
    demo: "https://reactwind.com",
    image: "reactwind.gif",
  },
  {
    title: "MME Worldwide",
    description:
      "A newly redefined Event Management and Hospitality agency, distinguished for curating exceptional and premium experiences with unparalleled professionalism.",
    tech: ["JavaScript", "CSS", "HTML", "SCSS", "PHP", "ReactJS"],
    github: "https://github.com/GaneshVarma1",
    demo: "https://mmecreativepartners.com/",
    image: "mme.gif",
  },
  {
    title: "CandyStore",
    description:
      "Built a candy store website using t3 stack,auth and payment gateway with stripe and clerk.",
    tech: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "NextJS",
      "Vercel",
      "t3 stack",
      "Shadcn",
      "LucidIcons",
      "Stripe",
      "Clerk",
    ],
    github: "https://github.com/GaneshVarma1/",
    demo: "https://candistore.vercel.app/",
    image: "candy.gif",
  },
  {
    title: "Tesla Clone",
    description:
      "Designed a meticulously detailed replica of the official Tesla website.",
    tech: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/GaneshVarma1/Tesla-website",
    demo: "https://ganeshvarma1.github.io/Tesla-website/",
    image: "tesla.gif",
  },
  {
    title: "Fridge to Feast",
    description:
      "Developed a web application that transforms simple ingredients into delectable meal suggestions.",
    tech: ["ReactJS", "NextJS", "APIDB", "Hooks", "Vue.js"],
    github: "https://github.com/GaneshVarma1/Fridge-to-Feast",
    demo: "https://fridge-to-feastapp.vercel.app//",
    image: "fridgetofood.gif",
  },
  {
    title: "Netflix Clone",
    description:
      "Designed a meticulously detailed replica of the official Netflix website.",
    tech: ["Vue.js", "React", "NextJS", "API"],
    github: "https://github.com/GaneshVarma1/Netflix-clone",
    demo: "https://srinetflix.vercel.app/",
    image: "netflix.gif",
  },
  {
    title: "MME Rental Ecommerce",
    description: "Re-designed an E-commerce store for Rental items.",
    tech: ["Wordpress", "Woo-Commerce", "JavaScript", "PHP", "Elementor"],
    github: "https://github.com",
    demo: "https://rentals.mmeink.com",
    image: "mmerental.gif",
  },
  {
    title: "GreenLeaf Resort",
    description:
      "Secure cloud storage solution with file sharing and collaboration features.",
    tech: ["HTML", "Javascript", "SCSS", "Gateway Integration"],
    github: "https://github.com/GaneshVarma1/Greenleaf",
    demo: "https://greenleaf-three.vercel.app/",
    image: "kerala.gif",
  },
  {
    title: "Flappy Bird Game",
    description:
      "Mobile-first fitness tracking application with workout planning and progress monitoring.",
    tech: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/GaneshVarma1/flappy-bird",
    demo: "https://ganeshvarma1.github.io/flappy-bird/",
    image: "flappy.gif",
  },
  {
    title: "Flownia",
    description: "SAAS Application Re-designed total website from start.",
    tech: ["HTML", "Bootstrap", "CSS", "Javascript"],
    github: "https://github.com/GaneshVarma1/Flownia",
    demo: "https://ganeshvarma1.github.io/Flownia/",
    image: "flownia.gif",
  },
  {
    title: "FiDi Hospitality",
    description:
      "Designed Full Web Application from Start to Finish with Custom CSS.",
    tech: ["JavaScript", "CSS", "HTML", "SCSS", "PHP"],
    github: "https://github.com/GaneshVarma1",
    demo: "https://www.fidihospitality.com",
    image: "fidi.gif",
  },
  {
    title: "Rocket Apply (Start-up)",
    description:
      "Educational platform with course creation, student management, and progress tracking.",
    tech: ["NextJs", "React", "AI", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://rocketapply.vercel.app/",
    image: "rocketapply.gif",
  },
];

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
