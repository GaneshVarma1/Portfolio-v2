import React from 'react';
import {
  ReactIcon,
  NodeIcon,
  TypeScriptIcon,
  TailwindIcon,
  PostgreSQLIcon,
  NextJSIcon,
  GitIcon,
  DockerIcon,
  AWSIcon,
} from '../assets/icons';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const technologies: Technology[] = [
  { name: 'React', icon: <ReactIcon />, color: 'text-[#61DAFB] hover:text-[#61DAFB]/80' },
  { name: 'Node.js', icon: <NodeIcon />, color: 'text-[#339933] hover:text-[#339933]/80' },
  { name: 'TypeScript', icon: <TypeScriptIcon />, color: 'text-[#3178C6] hover:text-[#3178C6]/80' },
  { name: 'Tailwind CSS', icon: <TailwindIcon />, color: 'text-[#06B6D4] hover:text-[#06B6D4]/80' },
  { name: 'PostgreSQL', icon: <PostgreSQLIcon />, color: 'text-[#336791] hover:text-[#336791]/80' },
  { name: 'Next.js', icon: <NextJSIcon />, color: 'text-gray-900 hover:text-gray-700' },
  { name: 'Git', icon: <GitIcon />, color: 'text-[#F05032] hover:text-[#F05032]/80' },
  { name: 'Docker', icon: <DockerIcon />, color: 'text-[#2496ED] hover:text-[#2496ED]/80' },
  { name: 'AWS', icon: <AWSIcon />, color: 'text-[#FF9900] hover:text-[#FF9900]/80' },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}>
            {tech.icon}
          </div>
          <span className="mt-3 font-medium text-gray-800">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}