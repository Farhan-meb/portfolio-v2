"use client";

import { useEffect, useRef } from "react";

/**
 * Single global cursor driven by event delegation, so ordinary sections/cards
 * stay server components and only mark themselves via data-cursor="project".
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: none), (prefers-reduced-motion: reduce), (max-width: 900px)",
    );
    if (mediaQuery.matches) return;

    const el = dotRef.current;
    if (!el) return;

    const render = () => {
      el.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      frame.current = null;
    };

    const onMove = (event: PointerEvent) => {
      position.current = { x: event.clientX, y: event.clientY };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(render);
      }

      const target = event.target as Element | null;
      const projectCard = target?.closest('[data-cursor="project"]');
      const interactive = target?.closest("a, button, input, textarea, select, [role='button']");

      if (projectCard) {
        el.dataset.state = "project";
      } else if (interactive) {
        el.dataset.state = "link";
      } else {
        el.dataset.state = "";
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={dotRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__label">VIEW</span>
    </div>
  );
}
