import { Github, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingEmoji } from "./FloatingEmoji";
import { SocialLink } from "./SocialLink";
import { WavingHand } from "./WavingHand";
import AvatarCircles from "./ui/avatar-circles";
import { cn } from "../lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { LinkPreview } from "./ui/link-preview";
import Image from "next/image";
import { avatars } from "../data/avatars";

const emojis = [
  { emoji: "💻", delay: 0, duration: 4, position: { x: 75, y: 20 } },
  { emoji: "🛩️", delay: 1, duration: 5, position: { x: 85, y: 40 } },
  { emoji: "🍦", delay: 2, duration: 6, position: { x: 80, y: 60 } },
  { emoji: "🗽", delay: 1.5, duration: 4.5, position: { x: 70, y: 80 } },
];

function JobStatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 dark:bg-green-500/5 text-green-600 dark:text-green-400 text-sm font-medium w-fit"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="whitespace-nowrap">Actively looking for jobs</span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-gray-900 dark:text-white space-y-6"
          >
            <div className="space-y-4">
              <JobStatusBadge />
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi <WavingHand />, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Sri Ganesh Shiramshetty
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 my-6 leading-relaxed">
              A passionate Full Stack Software Engineer with 4+ years of
              experience in building scalable applications and creating
              exceptional user experiences.
            </p>

            <div className="space-y-6">
              <h5 className="text-xl text-gray-700 dark:text-gray-300 flex items-center flex-wrap gap-x-2 gap-y-1">
                Building{" "}
                <LinkPreview
                  url="https://reactwind.com"
                  className="font-bold text-blue-500 hover:text-blue-600 transition-colors"
                  isStatic={true}
                  imageSrc="/reactwind.gif"
                  width={200}
                  height={125}
                >
                  ReactWind
                </LinkPreview>{" "}
                <span className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="React Logo"
                    className="w-auto h-5"
                  />
                  <span>+</span>
                  <img
                    src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
                    alt="Tailwind Logo"
                    className="w-auto h-5"
                  />
                </span>
              </h5>

              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  Used by
                </span>
                <div>
                  <AvatarCircles numPeople={10} avatarUrls={avatars} />
                </div>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  Developers
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/GaneshVarma1"
                  icon={<Github />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                  icon={<Linkedin />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://www.instagram.com/varmaaa.x_/"
                  icon={<Instagram />}
                  label="Instagram"
                />
                <SocialLink
                  href="mailto:sriganeshshiram@gmail.com"
                  icon={<Mail />}
                  label="Email"
                />
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Connect with me
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center relative"
          >
            {/* Magic UI Section */}
            <div className="z-10 flex items-center justify-center mb-6">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <a
                  href="https://reactwind.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Checkout ReactWind</span>
                    <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[15px] blur-2xl opacity-20 animate-pulse" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[15px] blur-sm" />
                <Image
                  src="/hero.jpg"
                  alt="Sri Ganesh Shiramshetty"
                  className="relative w-80 h-96 object-cover rounded-[15px] border-2 border-blue-400/20 shadow-2xl"
                  width={320}
                  height={384}
                  priority
                />
              </motion.div>

              {/* Floating Emojis */}
              {emojis.map((emojiProps, index) => (
                <FloatingEmoji
                  key={index}
                  emoji={emojiProps.emoji}
                  delay={emojiProps.delay}
                  duration={emojiProps.duration}
                  initialPosition={emojiProps.position}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
