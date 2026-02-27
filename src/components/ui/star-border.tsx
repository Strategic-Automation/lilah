"use client";

import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  thickness?: number;
}

export default function StarBorder({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps & Record<string, unknown>) {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-2xl ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...(rest.style as React.CSSProperties),
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-[star-movement-bottom_linear_infinite_alternate] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-[star-movement-top_linear_infinite_alternate] z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </Component>
  );
}
