import type { ReactNode } from "react";

export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`block font-mono text-[10px] tracking-[0.18em] text-neutral-600 uppercase ${className}`}>
      {children}
    </span>
  );
}
