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
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-900/20 border-t border-border mt-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            Designed by{" "}
            <span className="font-medium text-foreground">
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
