"use client";

import { useInView } from "@/lib/useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

/** Wraps content in the .reveal fade/translate treatment defined in
 * globals.css, triggered once via IntersectionObserver. Kept intentionally
 * subtle — see the brand's "no hype" rule applied visually. */
export default function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
