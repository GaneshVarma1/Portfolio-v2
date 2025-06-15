"use client";

import { useEffect, useState } from "react";
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";

export function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Hide after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        <AppleHelloEnglishEffect 
          speed={1.1} 
          className="text-primary"
          onAnimationComplete={() => {
            console.log("Animation completed");
          }}
        />
      </div>
    </div>
  );
} 