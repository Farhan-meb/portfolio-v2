import Image from "next/image";
import { Panel } from "@/components/ui/Panel";

export function FeedPanel({
  src,
  alt,
  label,
  id,
  caption,
  priority = false,
  ratio = "4/3",
}: {
  src: string;
  alt: string;
  label: string;
  id: string;
  caption?: string;
  priority?: boolean;
  ratio?: "4/3" | "16/9";
}) {
  return (
    <Panel corners className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] px-5 py-3.5">
        <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-300">{label}</span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-neutral-700">
          <span aria-hidden="true" className="animate-pulse-dot bg-term h-[5px] w-[5px] rounded-full" />
          {id}
        </span>
      </div>
      <div className={`relative ${ratio === "16/9" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover grayscale"
          style={{ filter: "contrast(1.15) brightness(0.85)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-color"
          style={{ background: "var(--color-accent)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 55%, rgba(10,10,14,0.55) 100%)" }}
        />
      </div>
      {caption ? (
        <div className="border-t border-[var(--hairline)] px-5 py-3 font-mono text-[10px] tracking-[0.1em] text-neutral-600">
          {caption}
        </div>
      ) : null}
    </Panel>
  );
}
