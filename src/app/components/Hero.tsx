import { Github, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FloatingEmoji } from "./FloatingEmoji";
import { SocialLink } from "./SocialLink";
import { WavingHand } from "./WavingHand";
import AvatarCircles from "./ui/avatar-circles";
import { cn } from "../lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { LinkPreview } from "./ui/link-preview";
import { TiltedCard } from "./ui/tilted-card";
import { avatars } from "../data/avatars";
import { MediaButton } from "@/components/ui/media-button";

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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
              {/* Current Projects Section */}
              <div className="space-y-4">
                
                <div className="space-y-3">


                 
                  {/* Promptly */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-lg text-gray-700 dark:text-gray-300">
                    <span>Building</span>
                    <LinkPreview
                      url="https://beta.promptly.diy"
                      className="font-bold text-blue-500 hover:text-blue-600  transition-colors"
                      isStatic={true}
                      imageSrc="/Promptly.gif"
                      width={200}
                      height={125}
                    >
                      Promptly
                    </LinkPreview>
                    <span className="text-sm text-gray-600 dark:text-gray-400">with 10+ AI Models</span>
                    <span className="flex items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                        alt="Next.js Logo"
                        className="w-auto h-4 dark:invert"
                      />
                      <span>+</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                        alt="OpenAI Logo"
                        className="w-auto h-4 dark:invert"
                      />
                    </span>
                  </div>
                </div>
              </div>

               {/* Goodmoney */}
               <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-lg text-gray-700 dark:text-gray-300">
                    <span>Building</span>
                    <LinkPreview
                      url="https://goodmoney.xyz"
                      className="font-bold text-blue-500 hover:text-blue-600 transition-colors"
                      isStatic={true}
                      imageSrc="/goodmoneyhero.gif"
                      width={200}
                      height={125}
                    >
                      Goodmoney
                    </LinkPreview>
                    <span className="flex items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                        alt="TypeScript Logo"
                        className="w-auto h-4"
                      />
                      <span>+</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                        alt="Next.js Logo"
                        className="w-auto h-4 dark:invert"
                      />
                    </span>
                  </div>


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
            </div>

            <a
              href="https://www.linkedin.com/in/sriganeshshiramshetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-0"
            >
              <MediaButton
                label="Connect with me ✨"
                mediaUrl="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3JmdmZzdW9zYnFzeHY0MTZ3MTJkaHhnMzVlYmExNGNhZDkxdXBtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9k5ZJf86f1FPh0A/giphy.gif"
              />
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center relative"
          >


            {/* Hero Image */}
            <div className="relative mt-0">
              <TiltedCard
                imageSrc="/IMG_2576.png"
                altText="Sri Ganesh Shiramshetty"
                containerHeight="384px"
                containerWidth="320px"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                className="relative"
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-transparent to-transparent rounded-b-[15px]">
                    <p className="text-lg font-semibold text-black [text-shadow:_0_2px_4px_rgb(255_255_255_/_60%)]">
                      Sri
                    </p>
                    <p className="text-sm text-black [text-shadow:_0_2px_4px_rgb(255_255_255_/_60%)]">
                      SWE ❤️ Desserts
                    </p>
                  </div>
                }
              />

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
