import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutlineButtonLink } from "@/components/ui/OutlineButton";
import { cv } from "@/content/cv";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Full curriculum vitae for ${site.name}, ${site.title}.`,
};

function CvSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] font-normal tracking-[0.2em] text-neutral-500 uppercase">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <div className="py-[clamp(56px,8vh,88px)] print:py-0">
      <Link
        href="/"
        className="hover:text-accent inline-block font-mono text-[11px] tracking-[0.1em] text-neutral-500 transition-colors print:hidden"
      >
        ← BACK TO PORTFOLIO
      </Link>

      <div className="mt-8 mb-10 print:hidden">
        <SectionHeading label="05 / CURRICULUM VITAE" hue="h5" />
      </div>

      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 print:hidden">
        <div>
          <h1 className="text-[clamp(28px,3.6vw,40px)] font-medium tracking-[-0.025em] text-neutral-100">
            Curriculum Vitae
          </h1>
          <p className="mt-2 font-mono text-xs tracking-[0.1em] text-neutral-500">{cv.subtitle}</p>
        </div>
        <OutlineButtonLink href="/Mahbub_Abedin_Talukdar_CV.pdf" variant="primary" download>
          DOWNLOAD CV ↓
        </OutlineButtonLink>
      </div>

      <article
        className="mx-auto max-w-[900px] rounded-2xl border border-[var(--hairline)] bg-[#1b1d2b] p-[clamp(28px,5vw,64px)] shadow-[0_24px_60px_rgba(0,0,0,0.5)] print:max-w-none print:border-0 print:bg-white print:p-0 print:text-black print:shadow-none"
      >
        <header className="flex flex-wrap justify-between gap-6 border-b border-[var(--hairline)] pb-8 print:border-black/20">
          <div>
            <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium tracking-[-0.025em] text-neutral-100 print:text-black">
              {site.name}
            </h2>
            <p className="text-accent-400 mt-2 font-mono text-xs tracking-[0.1em] print:text-neutral-700">
              {site.title.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col gap-1 font-mono text-xs text-neutral-400 print:text-neutral-700">
            <span>{site.location}</span>
            <span>{site.phone}</span>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.linkedinUrl} className="hover:text-accent">
              {site.linkedinLabel}
            </a>
            <a href={site.githubUrl} className="hover:text-accent">
              {site.githubLabel}
            </a>
          </div>
        </header>

        <section className="mt-9" aria-labelledby="cv-profile">
          <CvSectionLabel>
            <span id="cv-profile">Profile</span>
          </CvSectionLabel>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.7] text-neutral-300 print:text-black">
            {cv.profile}
          </p>
        </section>

        <section className="mt-9" aria-labelledby="cv-experience">
          <CvSectionLabel>
            <span id="cv-experience">Experience</span>
          </CvSectionLabel>
          <div className="mt-4 flex flex-col gap-7">
            {cv.experience.map((entry) => (
              <div key={entry.org} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-medium text-neutral-100 print:text-black">{entry.role}</div>
                    <div className="text-sm text-neutral-400 print:text-neutral-700">{entry.org}</div>
                  </div>
                  <div className="text-right font-mono text-[11px] text-neutral-600 print:text-neutral-700">
                    <div>{entry.dates}</div>
                    <div>{entry.location}</div>
                  </div>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-[1.65] text-neutral-300 print:text-black"
                    >
                      <span aria-hidden="true" className="text-accent-600 shrink-0">
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9" aria-labelledby="cv-education">
          <CvSectionLabel>
            <span id="cv-education">Education</span>
          </CvSectionLabel>
          <div className="mt-4 flex flex-col gap-6">
            {cv.education.map((entry) => (
              <div key={entry.org} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-medium text-neutral-100 print:text-black">{entry.title}</div>
                    <div className="text-sm text-neutral-400 print:text-neutral-700">{entry.org}</div>
                  </div>
                  <div className="text-right font-mono text-[11px] text-neutral-600 print:text-neutral-700">
                    <div>{entry.dates}</div>
                    <div>{entry.location}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-[1.65] text-neutral-300 print:text-black">{entry.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9" aria-labelledby="cv-skills">
          <CvSectionLabel>
            <span id="cv-skills">Technical Skills</span>
          </CvSectionLabel>
          <div className="mt-4">
            {cv.technicalSkills.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[120px_1fr] gap-4 border-b border-[var(--hairline-soft)] py-3 last:border-b-0 print:border-black/10"
              >
                <span className="font-mono text-xs tracking-[0.08em] text-neutral-500 print:text-neutral-700">
                  {row.label}
                </span>
                <span className="text-sm text-neutral-300 print:text-black">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9" aria-labelledby="cv-achievements">
          <CvSectionLabel>
            <span id="cv-achievements">Achievements &amp; Certifications</span>
          </CvSectionLabel>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cv.achievements.map((item) => (
              <div key={item.kicker} className="print:break-inside-avoid">
                <div className="text-accent-600 font-mono text-xs tracking-[0.08em] print:text-neutral-700">
                  {item.kicker}
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  {item.paragraphs.map((p) => (
                    <p key={p} className="text-sm leading-[1.65] text-neutral-300 print:text-black">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9" aria-labelledby="cv-languages">
          <CvSectionLabel>
            <span id="cv-languages">Languages</span>
          </CvSectionLabel>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {cv.languages.map((language) => (
              <span key={language.name} className="text-sm text-neutral-300 print:text-black">
                {language.name}{" "}
                <span className="text-accent-300 print:text-neutral-700">{language.level}</span>
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
