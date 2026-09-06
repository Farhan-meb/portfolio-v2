import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

export function Work() {
  const [hero, ...rest] = projects;

  return (
    <section id="work" aria-labelledby="work-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="03 / SELECTED WORK" hue="h3" id="work-heading" />

      <Reveal>
        {/* Stretched-link card: the case-study link is an absolutely-positioned
            overlay behind the real content, so the nested LIVE SITE anchor
            never ends up nested inside another <a> (invalid HTML, breaks hydration). */}
        <div
          data-cursor="project"
          className="group relative grid grid-cols-1 gap-[clamp(22px,3vw,34px)] rounded-2xl border border-[var(--hairline)] p-[clamp(22px,3vw,34px)] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--color-accent)_55%,transparent)] lg:grid-cols-2 lg:items-center"
          style={{ background: "linear-gradient(180deg, rgba(35,37,50,0.4), transparent)" }}
        >
          <Link
            href={`/work/${hero.slug}`}
            className="absolute inset-0"
            aria-label={`Read case study: ${hero.title}`}
          />

          <div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-h3">PROJECT / {hero.number}</span>
              <span className="text-neutral-700">{hero.years}</span>
            </div>
            <h3
              className="mt-4 font-medium tracking-[-0.02em] text-neutral-100"
              style={{ fontSize: "clamp(26px,3.2vw,40px)" }}
            >
              {hero.title}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-neutral-400">{hero.description}</p>

            <div className="mt-7 grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">ROLE</div>
                <div className="mt-1.5 text-sm text-neutral-300">{hero.role}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">STACK</div>
                <div className="mt-1.5 text-sm text-neutral-300">{hero.stack.slice(0, 2).join(", ")}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">HIGHLIGHT</div>
                <div className="mt-1.5 text-sm text-neutral-300">{hero.highlight}</div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <span className="text-accent font-mono text-xs tracking-[0.1em]">READ CASE STUDY →</span>
              {hero.liveUrl ? (
                <a
                  href={hero.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-mono text-xs tracking-[0.1em] text-neutral-500 transition-colors hover:text-neutral-200"
                >
                  LIVE SITE ↗
                </a>
              ) : null}
            </div>
          </div>

          <ImagePlaceholder ratio="16/10" caption={`${hero.title} product screenshot`} />
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.number} delay={i * 80}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--hairline)] transition-colors duration-200 hover:border-[var(--hairline-strong)]">
              <ImagePlaceholder
                ratio="16/9"
                caption={`${project.title} product screenshot`}
                bordered={false}
                className="rounded-none border-b border-[var(--hairline)]"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs" style={{ color: `var(--color-${project.hue})` }}>
                  {project.number}
                </span>
                <h3 className="mt-3 text-2xl font-medium text-neutral-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-neutral-500">{project.description}</p>
                <div className="mt-auto pt-6">
                  <div className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">STACK</div>
                  <div className="mt-2 font-mono text-xs text-neutral-400">{project.stack.join(" · ")}</div>
                  <div className="mt-4 flex gap-4 font-mono text-[11px] tracking-[0.08em] text-neutral-700">
                    <span>GITHUB — TBD</span>
                    <span>LIVE — TBD</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
