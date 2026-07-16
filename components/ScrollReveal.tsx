"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay in ms before the reveal animation starts (use for stagger effects) */
  delay?: number;
  /** Direction the element travels from: "up" | "left" | "right" | "zoom" */
  from?: "up" | "left" | "right" | "zoom";
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${from} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
