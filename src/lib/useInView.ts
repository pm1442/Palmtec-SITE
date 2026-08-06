"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal scroll-reveal primitive backed by IntersectionObserver — no
 * animation library needed for a single opacity/translate fade. Fires once
 * (unobserves after the first intersection) so re-scrolling past a section
 * doesn't replay the animation on every pass.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
