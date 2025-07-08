"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  isStatic: boolean;
  imageSrc: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 400,
  height = 250,
  imageSrc,
}: LinkPreviewProps) => {
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const offsetFromCenter =
      (event.clientX - targetRect.left - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <HoverCardPrimitive.Root openDelay={50} closeDelay={100}>
      <HoverCardPrimitive.Trigger
        onMouseMove={handleMouseMove}
        className={className}
        asChild
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="z-50 origin-top data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        side="top"
        align="center"
        sideOffset={10}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          className="shadow-xl rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800"
          style={{ x: translateX }}
        >
          <a
            href={url}
            className="block p-1 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageSrc.includes('.mp4') ? (
              <video
                src={imageSrc}
                width={width}
                height={height}
                className="rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={imageSrc}
                width={width}
                height={height}
                className="rounded-lg"
                alt="preview"
              />
            )}
          </a>
        </motion.div>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
