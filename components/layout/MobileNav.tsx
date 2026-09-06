"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, site } from "@/content/site";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close the drawer on navigation without a setState-in-effect: adjust state
  // during render when the route has changed since the last render.
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const drawer = drawerRef.current;
    const focusables = drawer?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden print:hidden">
      <div
        className="fixed inset-x-0 top-0 z-40 flex h-[60px] items-center justify-between border-b border-[var(--hairline)] px-5"
        style={{ background: "color-mix(in srgb, #161826 80%, transparent)", backdropFilter: "blur(14px)" }}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <span className="border-accent text-accent flex h-[26px] w-[26px] items-center justify-center rounded-sm border font-mono text-[11px]">
            {site.initial}
          </span>
          <span className="font-mono text-xs tracking-[0.14em] text-neutral-200">MAHBUB</span>
        </Link>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          className="flex items-center gap-2 rounded-lg border border-white/18 px-3 py-2 font-mono text-[11px] tracking-[0.12em] text-neutral-300"
        >
          {open ? <X size={14} aria-hidden="true" /> : <Menu size={14} aria-hidden="true" />}
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 top-[60px] bottom-0 z-30 overflow-y-auto"
          style={{ background: "var(--color-page)" }}
        >
          <nav aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="flex items-center gap-3 border-b border-[var(--hairline-soft)] px-6 py-4 font-mono text-[13px] tracking-[0.12em] text-neutral-300"
              >
                <span className="text-neutral-700">{item.ordinal}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
