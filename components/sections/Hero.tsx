import Link from "next/link";
import { OutlineButtonLink } from "@/components/ui/OutlineButton";
import { FeedPanel } from "@/components/ui/FeedPanel";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { SystemPanel } from "./SystemPanel";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grid grid-cols-1 gap-8 py-[clamp(64px,10vh,120px)] pb-[clamp(56px,8vh,96px)] lg:grid-cols-2 lg:gap-[clamp(32px,5vw,72px)]"
    >
      <div className="min-w-0 lg:min-w-[340px]">
        <p className="text-accent-400 font-mono text-[11px] tracking-[0.2em]">{hero.eyebrow}</p>
        <h1
          className="mt-7 max-w-[14ch] font-medium tracking-[-0.03em] text-neutral-100"
          style={{ fontSize: "clamp(38px,6.2vw,68px)", lineHeight: 1.04 }}
        >
          {site.name}
        </h1>
        <p className="mt-7 max-w-[60ch] text-[19px] text-neutral-400">{hero.paragraphs[0]}</p>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-neutral-600">{hero.paragraphs[1]}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <OutlineButtonLink href="/#work" variant="primary">
            VIEW PROJECTS →
          </OutlineButtonLink>
          <OutlineButtonLink href="/cv" variant="secondary">
            VIEW CV
          </OutlineButtonLink>
          <Link
            href="/#contact"
            className="hover:text-text font-mono text-xs tracking-[0.12em] text-neutral-500 transition-colors"
          >
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3.5 lg:min-w-[340px]">
        <FeedPanel
          src="/photos/desk-feed.jpg"
          alt="Mahbub working across two monitors"
          label="FEED"
          id="SYS_003"
          caption="CURRENT SESSION // COTTBUS, DE"
          ratio="16/9"
          priority
        />
        <SystemPanel />
      </div>
    </section>
  );
}
