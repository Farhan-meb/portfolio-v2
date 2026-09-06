import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 font-mono text-xs tracking-[0.12em] transition-all duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "border border-accent text-accent hover:bg-accent/12",
  secondary: "border border-white/18 text-neutral-300 hover:border-white/40",
} as const;

type Variant = keyof typeof variants;

type LinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function OutlineButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: LinkProps) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  const Component = isExternal ? "a" : Link;
  return (
    <Component
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: rest.target ?? "_blank", rel: rest.rel ?? "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Component>
  );
}

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function OutlineButton({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
