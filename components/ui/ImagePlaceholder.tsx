export function ImagePlaceholder({
  caption,
  ratio = "16/10",
  className = "",
  bordered = true,
}: {
  caption: string;
  ratio?: "16/9" | "16/10";
  className?: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg ${bordered ? "border border-[var(--hairline)]" : ""} ${className}`}
      style={{
        aspectRatio: ratio.replace("/", " / "),
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(233,233,237,0.05) 0 2px, transparent 2px 10px)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <span className="px-4 text-center font-mono text-[11px] text-neutral-600">{caption}</span>
    </div>
  );
}
