"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Panel } from "@/components/ui/Panel";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { site } from "@/content/site";
import { sendContactMessage } from "@/lib/actions";
import { initialContactState } from "@/lib/contact-form";

const contactRows = [
  { label: "EMAIL", value: site.email, href: `mailto:${site.email}` },
  { label: "LINKEDIN", value: site.linkedinLabel, href: site.linkedinUrl },
  { label: "GITHUB", value: site.githubLabel, href: site.githubUrl },
  { label: "LOCATION", value: site.location, href: null },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="border-accent text-accent hover:bg-accent/12 focus-visible:outline-accent inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3.5 font-mono text-xs tracking-[0.12em] transition-all duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "SENDING…" : "SEND MESSAGE →"}
    </button>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-[rgba(22,24,38,0.9)] px-3.5 py-3 font-mono text-sm text-neutral-100 outline-none transition-colors duration-[180ms] focus-visible:border-accent ${
    hasError ? "border-h6" : "border-white/16"
  }`;
}

export function Contact() {
  const [state, formAction] = useActionState(sendContactMessage, initialContactState);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-[clamp(72px,11vh,132px)]">
      <SectionHeading label="06 / ESTABLISH CONNECTION" hue="h6" id="contact-heading" />
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
        <div>
          <p className="max-w-[40ch] font-mono text-xs leading-[1.6] tracking-[0.02em] text-neutral-600">
            Have a project, opportunity, or interesting
            <br />
            engineering problem?
          </p>
          <h2
            className="mt-5 font-medium tracking-[-0.03em] text-neutral-100"
            style={{ fontSize: "clamp(32px,4.6vw,54px)" }}
          >
            Let&apos;s talk.
          </h2>
          <div className="mt-9 max-w-[440px]">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="group relative flex items-center justify-between border-b border-[var(--hairline)] py-4"
              >
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="absolute inset-0"
                    aria-label={`${row.label}: ${row.value}`}
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className={`font-mono text-[10px] tracking-[0.18em] text-neutral-600 uppercase transition-colors ${
                    row.href ? "group-hover:text-accent" : ""
                  }`}
                >
                  {row.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[15px] text-neutral-300 transition-colors ${row.href ? "group-hover:text-accent" : ""}`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Panel className="p-[clamp(22px,3vw,34px)]">
          {state.status === "success" ? (
            <div className="flex min-h-[300px] flex-col justify-center" role="status" aria-live="polite">
              <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-500">
                TRANSMISSION LOG
              </span>
              <p className="text-term mt-4 font-medium" style={{ fontSize: "clamp(15px,2vw,19px)" }}>
                MESSAGE.TRANSMITTED ✓
              </p>
              <p className="mt-3 max-w-[42ch] text-sm leading-[1.6] text-neutral-500">
                Thanks for reaching out — I read every message and will reply from {site.email} as soon as I
                can.
              </p>
              <form action={formAction} className="mt-7">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg border border-white/18 px-5 py-3.5 font-mono text-xs tracking-[0.12em] text-neutral-300 transition-colors hover:border-white/40"
                >
                  SEND ANOTHER
                </button>
              </form>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-5" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 block">
                  <MonoLabel>Name</MonoLabel>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  defaultValue={state.values.name}
                  aria-invalid={Boolean(state.fieldErrors?.name)}
                  aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
                  className={inputClass(Boolean(state.fieldErrors?.name))}
                />
                {state.fieldErrors?.name ? (
                  <p id="name-error" className="text-h6 mt-1.5 font-mono text-xs">
                    {state.fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block">
                  <MonoLabel>Email</MonoLabel>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  defaultValue={state.values.email}
                  aria-invalid={Boolean(state.fieldErrors?.email)}
                  aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
                  className={inputClass(Boolean(state.fieldErrors?.email))}
                />
                {state.fieldErrors?.email ? (
                  <p id="email-error" className="text-h6 mt-1.5 font-mono text-xs">
                    {state.fieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block">
                  <MonoLabel>Message</MonoLabel>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  defaultValue={state.values.message}
                  aria-invalid={Boolean(state.fieldErrors?.message)}
                  aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
                  className={inputClass(Boolean(state.fieldErrors?.message))}
                />
                {state.fieldErrors?.message ? (
                  <p id="message-error" className="text-h6 mt-1.5 font-mono text-xs">
                    {state.fieldErrors.message}
                  </p>
                ) : null}
              </div>

              <div aria-live="polite">
                {state.status === "error" && state.message ? (
                  <p className="text-h6 font-mono text-xs">{state.message}</p>
                ) : null}
              </div>

              <div>
                <SubmitButton />
              </div>
            </form>
          )}
        </Panel>
      </div>
    </section>
  );
}
