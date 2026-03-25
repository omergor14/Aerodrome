import { type HTMLAttributes } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface RevealBlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Drop-in replacement for a plain <div> that adds scroll-triggered
 * reveal animation. Applies "reveal-block" always and "is-visible"
 * once the element enters the viewport.
 */
export function RevealBlock({
  children,
  className = "",
  style,
  ...rest
}: RevealBlockProps) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-block${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
