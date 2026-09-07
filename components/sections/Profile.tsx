import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeedPanel } from "@/components/ui/FeedPanel";
import { profile } from "@/content/profile";
import { IdentityPanel } from "./IdentityPanel";

export function Profile() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="01 / PROFILE" hue="h1" id="about-heading" />
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
        <Reveal>
          <h2
            className="max-w-[24ch] font-medium tracking-[-0.025em] text-neutral-100"
            style={{ fontSize: "clamp(26px,3vw,38px)" }}
          >
            {profile.heading}
          </h2>
          <div className="mt-7 flex flex-col gap-4">
            {profile.paragraphs.map((p) => (
              <p key={p} className="max-w-[65ch] text-[15px] leading-[1.7] text-neutral-400">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {profile.chips.map((chip) => (
              <span
                key={chip.label}
                className="rounded-full border px-[13px] py-1.5 font-mono text-[11px]"
                style={{
                  color: `var(--color-${chip.hue})`,
                  borderColor: `color-mix(in srgb, var(--color-${chip.hue}) 34%, transparent)`,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="flex flex-col gap-3.5">
            <FeedPanel
              src="/photos/portrait.jpg"
              alt="Portrait of Mahbub Abedin Talukdar"
              label="OPERATOR"
              id="SYS_004"
              caption="ENGINEER_PROFILE // VERIFIED"
            />
            <IdentityPanel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
