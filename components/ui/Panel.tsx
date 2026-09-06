import type { ReactNode } from "react";
import { CornerBrackets } from "./CornerBrackets";

export function Panel({
  children,
  className = "",
  corners = false,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  corners?: boolean;
  as?: "div" | "article" | "section";
}) {
  return (
    <Component
      className={`relative rounded-xl border border-[var(--hairline)] ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(35,37,50,0.85), rgba(22,24,38,0.85))",
      }}
    >
      {corners ? <CornerBrackets /> : null}
      {children}
    </Component>
  );
}
