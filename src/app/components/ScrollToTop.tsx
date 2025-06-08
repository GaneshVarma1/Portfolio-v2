"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9999] group"
          aria-label="Scroll to top"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full animate-spin-slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="relative w-7 h-7 md:w-10 md:h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
              <ArrowUp className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:-translate-y-1" />
            </div>
          </div>
        </button>
      )}
    </>
  );
}
