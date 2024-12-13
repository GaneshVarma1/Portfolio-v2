import React from 'react';
import { motion } from 'framer-motion';

export function WavingHand() {
  return (
    <motion.span
      className="inline-block"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
      👋
    </motion.span>
  );
}