import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] px-5 py-14 sm:px-8 print:hidden">
      <div
        className="mx-auto grid max-w-[1240px] gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        <div>
          <div className="font-mono text-[13px] text-neutral-200">MAHBUB.ABEDIN.TALUKDAR</div>
          <div className="mt-2 font-mono text-[11px] text-neutral-600">
            SOFTWARE ENGINEER / BUILDING DIGITAL SYSTEMS.
          </div>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[0.08em] text-neutral-500">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
            EMAIL ↗
          </a>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[11px] text-neutral-600">
          <span>VERSION {site.version}</span>
          <span>BUILD {site.buildYear}</span>
          <span>LOCATION {site.locationShort}</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="animate-pulse-dot bg-term h-[6px] w-[6px] rounded-full" />
            <span className="text-term font-mono text-[11px] tracking-[0.1em]">SYSTEM STATUS: ONLINE</span>
          </div>
          <span className="font-mono text-[11px] text-neutral-600">© {site.buildYear}</span>
        </div>
      </div>
    </footer>
  );
}
