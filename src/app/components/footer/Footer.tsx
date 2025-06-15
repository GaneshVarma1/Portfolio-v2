import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Instagram,
  FileDown,
} from "lucide-react";
import { SocialLink } from "./SocialLink";

const socialLinks = [
  {
    href: "https://linkedin.com/in/sriganeshshiramshetty",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ganeshvarma1",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.youtube.com/@ganeshvarma",
    icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/varmaaa.x_/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://drive.google.com/file/d/1BrPG03icph8hL7WE-asnDGgtZfIa90cU/view?usp=drive_link",
    icon: FileDown,
    label: "Download Resume",
  },
  {
    href: "mailto:sriganeshshiram@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            Designed by{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              Sri Ganesh Shiramshetty
            </span>
          </p>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
