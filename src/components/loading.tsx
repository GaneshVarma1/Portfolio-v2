"use client";

import { useEffect, useState } from "react";
import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";

export function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // Fallback timer to ensure loading screen doesn't get stuck
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // 6 seconds fallback

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
    // Hide loading screen after animation completes with a small delay
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleAnimationError = () => {
    // If animation fails, hide loading screen after 2 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        <AppleHelloEnglishEffect 
          speed={1.1} 
          className="text-primary"
          onAnimationComplete={handleAnimationComplete}
          onError={handleAnimationError}
        />
      </div>
    </div>
  );
} 