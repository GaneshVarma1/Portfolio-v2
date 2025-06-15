import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollState {
  isAtBottom: boolean;
  autoScrollEnabled: boolean;
}

interface UseAutoScrollOptions {
  offset?: number;
  smooth?: boolean;
  content?: React.ReactNode;
}

export function useAutoScroll(containerRef: React.RefObject<HTMLDivElement>): ScrollState {
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const checkIfAtBottom = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
    setIsAtBottom(isBottom);
  };

  const scrollToBottom = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
    setIsAtBottom(true);
    setAutoScrollEnabled(true);
  };

  const handleScroll = () => {
    checkIfAtBottom();
    if (!isAtBottom) {
      setAutoScrollEnabled(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, isAtBottom]);

  useEffect(() => {
    if (autoScrollEnabled) {
      scrollToBottom();
    }
  }, [autoScrollEnabled]);

  return {
    isAtBottom,
    autoScrollEnabled,
  };
} 