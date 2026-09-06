"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/content/site";
import type { Hue } from "@/content/types";

const hueText: Record<Hue, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
};

const HASH_SECTION_IDS = ["about", "experience", "work", "technology", "contact"];

function useActiveHash() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Stale activeId while off "/" is harmless: isActive() below only reads it
    // once pathname === "/", so there is nothing to reset here.
    if (pathname !== "/") return;

    const elements = HASH_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return activeId;
}

function isActive(href: string, pathname: string, activeId: string | null) {
  if (href === "/cv") return pathname === "/cv";
  const hash = href.split("#")[1];
  return pathname === "/" && activeId === hash;
}

export function Sidebar() {
  const pathname = usePathname();
  const activeId = useActiveHash();

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col border-r border-[var(--hairline)] lg:flex print:hidden"
      style={{ background: "color-mix(in srgb, #161826 92%, transparent)" }}
    >
      <div className="flex items-center gap-3 px-6 py-7">
        <div className="border-accent text-accent flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-sm border font-mono text-[11px]">
          {site.initial}
        </div>
        <div className="leading-tight">
          <div className="font-mono text-xs tracking-[0.14em] text-neutral-200">MAHBUB</div>
          <div className="font-mono text-[9px] tracking-[0.16em] text-neutral-600">SOFTWARE ENGINEER</div>
        </div>
      </div>

      <nav aria-label="Primary" className="mt-2 flex flex-1 flex-col overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href, pathname, activeId);
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="flex items-center gap-3 border-l py-2.5 pl-3.5 transition-colors duration-[160ms]"
              style={{ borderLeftColor: active ? "var(--color-accent)" : "var(--hairline-strong)" }}
            >
              <span className={`font-mono text-[9px] ${hueText[item.hue]}`}>{item.ordinal}</span>
              <span
                className={`font-mono text-[11px] tracking-[0.14em] transition-colors duration-[160ms] ${
                  active ? "text-accent" : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[var(--hairline)] px-6 py-6">
        <div className="mb-4 flex items-center gap-2">
          <span aria-hidden="true" className="animate-pulse-dot bg-term h-[5px] w-[5px] rounded-full" />
          <span className="text-term font-mono text-[10px] tracking-[0.12em]">OPEN TO WORK</span>
        </div>
        <div className="mb-4 flex flex-col gap-2 font-mono text-[10px] tracking-[0.08em] text-neutral-500">
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
        <div className="font-mono text-[9px] tracking-[0.08em] text-neutral-700">
          VERSION {site.version} / BUILD {site.buildYear} · {site.locationShort}
        </div>
      </div>
    </aside>
  );
}
