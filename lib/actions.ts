"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";
import type { ContactFormState } from "@/lib/contact-form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  message: z.string().trim().min(1, "Message is required.").max(5000),
});

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", values: { name: "", email: "", message: "" } };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as "name" | "email" | "message" | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return { status: "error", message: "Check the highlighted fields.", fieldErrors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact message was not sent:", parsed.data);
    return {
      status: "error",
      message: "The contact form isn't configured yet. Please email directly instead.",
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: site.email,
      replyTo: parsed.data.email,
      subject: `New message from ${parsed.data.name}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
        values,
      };
    }

    return { status: "success", values: { name: "", email: "", message: "" } };
  } catch (error) {
    console.error("Contact form send failed:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
      values,
    };
  }
}
