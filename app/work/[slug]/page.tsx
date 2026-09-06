import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OutlineButtonLink } from "@/components/ui/OutlineButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TechChip } from "@/components/ui/TechChip";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/caseStudies";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: study.title,
    description: study.lead,
  };
}

const hueText = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
} as const;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <div className="py-[clamp(56px,8vh,88px)]">
      <Link
        href="/#work"
        className="hover:text-accent inline-block font-mono text-[11px] tracking-[0.1em] text-neutral-500 transition-colors"
      >
        ← BACK TO PORTFOLIO
      </Link>

      <Reveal className="mt-8">
        <span className={`font-mono text-xs tracking-[0.14em] ${hueText[study.kickerHue]}`}>
          {study.kicker}
        </span>
        <h1
          className="mt-4 max-w-[18ch] font-medium tracking-[-0.03em] text-neutral-100"
          style={{ fontSize: "clamp(32px,4.6vw,54px)" }}
        >
          {study.title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-neutral-400">{study.lead}</p>
        <div className="mt-7">
          <OutlineButtonLink href={study.primaryActionUrl} variant="primary">
            {study.primaryActionLabel}
          </OutlineButtonLink>
        </div>
        <ImagePlaceholder ratio="16/9" caption={study.heroPlaceholderCaption} className="mt-10" />
      </Reveal>

      <Reveal className="mt-12 grid grid-cols-2 gap-6 border-y border-[var(--hairline)] py-8 sm:grid-cols-4">
        {study.meta.map((item) => (
          <div key={item.label}>
            <div className="font-mono text-[10px] tracking-[0.16em] text-neutral-600">{item.label}</div>
            <div className="mt-1.5 text-sm text-neutral-200">{item.value}</div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14" as="div">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">OVERVIEW</h2>
        <div className="mt-4 flex flex-col gap-4">
          {study.overview.map((p) => (
            <p key={p} className="max-w-[70ch] text-[15px] leading-[1.7] text-neutral-400">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">PROBLEM</h2>
        <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.7] text-neutral-400">{study.problem}</p>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">SOLUTION</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {study.solution.map((line) => (
            <li key={line} className="flex gap-3 text-[15px] leading-[1.65] text-neutral-300">
              <span aria-hidden="true" className="text-accent mt-[1px] shrink-0">
                →
              </span>
              {line}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">ARCHITECTURE</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--hairline)] p-6">
          <pre className="font-mono text-xs leading-[2] text-neutral-400">{study.architecture}</pre>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">TECHNOLOGY</h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {study.technology.map((name) => (
            <TechChip key={name} name={name} />
          ))}
        </div>
      </Reveal>

      <div className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">CHALLENGES</h2>
        <div className="mt-4 flex flex-wrap overflow-hidden rounded-xl border-t border-l border-[var(--hairline-strong)]">
          {study.challenges.map((challenge, i) => (
            <Reveal
              key={challenge.ordinal}
              delay={i * 80}
              className="bg-page min-w-[230px] flex-1 border-r border-b border-[var(--hairline-strong)] p-[clamp(22px,3vw,34px)]"
            >
              <span className="font-mono text-[10px]" style={{ color: `var(--color-${challenge.hue})` }}>
                {challenge.ordinal}
              </span>
              <h3 className="mt-[22px] text-[19px] font-medium text-neutral-100">{challenge.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-neutral-500">{challenge.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-neutral-500">RESULTS</h2>
        <div
          className="mt-4 grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
        >
          {study.results.map((result) => (
            <div key={result.caption}>
              <div
                className="font-medium tracking-[-0.03em]"
                style={{ fontSize: "clamp(28px,3.6vw,40px)", color: `var(--color-${result.hue})` }}
              >
                {result.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.16em] text-neutral-600">
                {result.caption}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {study.screenshots.map((shot) => (
            <ImagePlaceholder key={shot.caption} ratio="16/10" caption={shot.caption} />
          ))}
        </div>
      </div>
    </div>
  );
}
