"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

function format(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
  style,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
  /** Stagger before the count-up starts, in ms. */
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const reduceMotion = useReducedMotion();
  // Starts at the final value so SSR/no-JS output is never blank or zero.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let controls: ReturnType<typeof animate> | undefined;
    const timer = setTimeout(() => {
      controls = animate(0, value, {
        duration: 1.1,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(latest),
      });
    }, delay);
    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [inView, reduceMotion, value, delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
}
