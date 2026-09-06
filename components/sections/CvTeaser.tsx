import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutlineButtonLink } from "@/components/ui/OutlineButton";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";

export function CvTeaser() {
  return (
    <section id="cv" aria-labelledby="cv-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="05 / CURRICULUM VITAE" hue="h5" id="cv-heading" />
      <Reveal>
        <Panel className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] p-[clamp(22px,3vw,34px)] lg:grid-cols-2">
          <div>
            <h2 className="text-[clamp(26px,3vw,38px)] font-medium tracking-[-0.025em] text-neutral-100">
              Curriculum Vitae
            </h2>
            <p className="mt-3 font-mono text-xs tracking-[0.1em] text-neutral-500">
              SOFTWARE ENGINEER / FULL STACK ENGINEER
            </p>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.7] text-neutral-400">
              A full typeset record of experience, education and technical skills — read it on the site or
              take the PDF with you.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <OutlineButtonLink href="/cv" variant="primary">
                OPEN CV →
              </OutlineButtonLink>
              <OutlineButtonLink href="/Mahbub_Abedin_Talukdar_CV.pdf" variant="secondary" download>
                DOWNLOAD PDF ↓
              </OutlineButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-l border-[var(--hairline)] pl-[clamp(22px,3vw,34px)] font-mono text-xs">
            <div className="flex justify-between text-neutral-500">
              <span>DOCUMENT</span>
              <span className="text-neutral-300">CV / 2026</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>PAGES</span>
              <span className="text-neutral-300">2</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>MARKET</span>
              <span className="text-neutral-300">DE / EU</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>STATUS</span>
              <span className="text-term">CURRENT</span>
            </div>
          </div>
        </Panel>
      </Reveal>
    </section>
  );
}
