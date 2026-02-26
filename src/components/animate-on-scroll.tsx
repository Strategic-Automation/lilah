"use client";

import { useIntersection } from "@/lib/hooks/use-intersection";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "fade-in";
}

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
