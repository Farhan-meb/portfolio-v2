import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="02 / EXPERIENCE" hue="h2" id="experience-heading" />
      <div>
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 80}>
            <div className="grid grid-cols-1 gap-8 border-t border-[var(--hairline)] py-[52px] first:border-t-0 lg:grid-cols-[280px_1fr] lg:gap-[clamp(32px,5vw,72px)]">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs tracking-[0.12em]">
                  <span className={entry.current ? "text-h2" : "text-neutral-500"}>{entry.railStart}</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-full max-w-[80px]"
                    style={{
                      background: entry.current
                        ? "color-mix(in srgb, var(--color-h2) 55%, transparent)"
                        : "var(--color-neutral-800)",
                    }}
                  />
                  <span className={entry.current ? "text-h2" : "text-neutral-800"}>{entry.railEnd}</span>
                </div>
                <div
                  className="mt-4 font-medium text-neutral-100"
                  style={{ fontSize: "clamp(22px,2.4vw,29px)" }}
                >
                  {entry.company}
                </div>
                <div className="mt-1.5 text-base text-neutral-300">{entry.role}</div>
                <div className="mt-2 font-mono text-[11px] text-neutral-600">
                  {entry.dates} · {entry.location}
                </div>
              </div>

              <div>
                <p className="max-w-[58ch] text-[15px] leading-[1.7] text-neutral-400">{entry.summary}</p>
                <p className="mt-5 font-mono text-[13px] text-neutral-500">
                  {entry.technologies.join(" · ")}
                </p>
                <div className="mt-5">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">KEY IMPACT</span>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {entry.impact.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-[1.6] text-neutral-300">
                        <span aria-hidden="true" className="text-accent mt-[1px] shrink-0">
                          →
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
