import { Counter } from "@/components/ui/Counter";
import { metrics } from "@/content/metrics";

export function Metrics() {
  return (
    <section aria-label="Key metrics" className="border-y border-[var(--hairline)] py-[clamp(40px,6vh,64px)]">
      <div
        className="mx-auto grid max-w-[1240px] gap-8 px-[clamp(20px,4vw,48px)]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
      >
        {metrics.map((metric, i) => (
          <div key={metric.caption}>
            <Counter
              value={metric.value}
              suffix={metric.suffix}
              delay={i * 60}
              className="block font-medium tracking-[-0.03em]"
              style={{
                fontSize: "clamp(34px,4.4vw,54px)",
                lineHeight: 1,
                color: `var(--color-${metric.hue})`,
              }}
            />
            <div className="mt-2 font-mono text-[10px] tracking-[0.18em] text-neutral-600">
              {metric.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
