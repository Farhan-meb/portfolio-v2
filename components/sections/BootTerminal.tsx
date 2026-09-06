"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Panel } from "@/components/ui/Panel";
import { bootLines } from "@/content/hero";

export function BootTerminal() {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const displayCount = reduceMotion ? bootLines.length : visibleCount;

  useEffect(() => {
    if (reduceMotion || visibleCount >= bootLines.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 520);
    return () => clearTimeout(timer);
  }, [visibleCount, reduceMotion]);

  return (
    <Panel className="overflow-hidden p-0">
      <div
        className="flex items-center gap-3 border-b border-[var(--hairline)] px-4 py-2.5"
        style={{ background: "rgba(35,37,50,0.5)" }}
      >
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--color-h6-dim)" }} />
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--color-h5-dim)" }} />
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--color-term-dim)" }} />
        </div>
        <span className="font-mono text-[11px] text-neutral-500">boot.sh</span>
      </div>
      <div className="min-h-[118px] px-4 py-4 font-mono text-xs leading-[2] text-neutral-300">
        {bootLines.slice(0, displayCount).map((line) => (
          <div key={line}>
            <span className="text-term">$</span> {line.replace(/^>\s*/, "")}
          </div>
        ))}
        {displayCount >= bootLines.length ? (
          <span
            aria-hidden="true"
            className="animate-caret-blink bg-term inline-block h-[14px] w-[7px] align-middle"
          />
        ) : null}
      </div>
    </Panel>
  );
}
