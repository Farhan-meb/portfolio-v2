"use client";

import { useId, useState } from "react";
import { TechChip } from "@/components/ui/TechChip";
import type { StackCategory } from "@/content/stack";

export function CapabilityRow({ category }: { category: StackCategory }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const descriptionId = useId();
  const active = activeIndex !== null ? category.chips[activeIndex] : null;

  return (
    <div className="grid grid-cols-1 gap-3 border-b border-[var(--hairline)] py-[26px] last:border-b-0 sm:grid-cols-[160px_1fr] sm:gap-6">
      <div className="font-mono text-[11px] tracking-[0.1em] text-neutral-400">{category.label}</div>
      <div>
        <div className="flex flex-wrap gap-2.5" role="list" aria-describedby={descriptionId}>
          {category.chips.map((chip, i) => (
            <span key={chip.name} role="listitem">
              <TechChip
                name={chip.name}
                hue={category.hue}
                interactive
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex((v) => (v === i ? null : v))}
                onFocus={() => setActiveIndex(i)}
                onBlur={() => setActiveIndex((v) => (v === i ? null : v))}
              />
            </span>
          ))}
        </div>
        <p id={descriptionId} aria-live="polite" className="mt-3 min-h-[18px] text-xs text-neutral-500">
          {active ? active.description : ""}
        </p>
      </div>
    </div>
  );
}
