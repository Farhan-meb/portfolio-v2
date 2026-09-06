import { SectionHeading } from "@/components/ui/SectionHeading";
import { stack } from "@/content/stack";
import { CapabilityRow } from "./CapabilityRow";

export function Capabilities() {
  return (
    <section id="technology" aria-labelledby="technology-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="04 / CAPABILITIES" hue="h4" id="technology-heading" />
      <div>
        {stack.map((category) => (
          <CapabilityRow key={category.label} category={category} />
        ))}
      </div>
    </section>
  );
}
