import type { Hue } from "@/content/types";

const hueClass: Record<Hue, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

export function SectionHeading({ label, hue, id }: { label: string; hue: Hue; id?: string }) {
  return (
    <div id={id} className="mb-12 flex items-center gap-4 sm:mb-14">
      <span className={`font-mono text-[11px] tracking-[0.2em] whitespace-nowrap ${hueClass[hue]}`}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="h-px flex-1"
        style={{ background: "linear-gradient(90deg, rgba(233,233,237,0.18), transparent)" }}
      />
    </div>
  );
}
