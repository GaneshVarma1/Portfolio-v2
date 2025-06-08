import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  delay: number;
  duration: number;
  initialPosition: { x: number; y: number };
}

export function FloatingEmoji({
  emoji,
  delay,
  duration,
  initialPosition,
}: FloatingEmojiProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute text-2xl"
      style={{
        left: `${initialPosition.x}%`,
        top: `${initialPosition.y}%`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {emoji}
    </motion.div>
  );
}
