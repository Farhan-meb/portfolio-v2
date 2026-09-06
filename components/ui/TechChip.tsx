import type { Hue } from "@/content/types";
import type { CSSProperties, FocusEventHandler, MouseEventHandler } from "react";

export function TechChip({
  name,
  hue,
  className = "",
  interactive = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: {
  name: string;
  hue?: Hue;
  className?: string;
  /** Makes the chip a focusable target so its hover description is keyboard-reachable. */
  interactive?: boolean;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
  onFocus?: FocusEventHandler<HTMLSpanElement>;
  onBlur?: FocusEventHandler<HTMLSpanElement>;
}) {
  const hueVar = hue ? `var(--color-${hue})` : "var(--color-accent)";

  return (
    <span
      tabIndex={interactive ? 0 : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`chip-hue inline-block rounded-md border px-3 py-2 font-mono text-xs text-neutral-300 transition-colors duration-[180ms] ${className}`}
      style={
        {
          borderColor: "var(--hairline-chip)",
          "--chip-hue": hueVar,
        } as CSSProperties
      }
    >
      {`[ ${name} ]`}
    </span>
  );
}
