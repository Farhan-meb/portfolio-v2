export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  values: { name: string; email: string; message: string };
};

export const initialContactState: ContactFormState = {
  status: "idle",
  values: { name: "", email: "", message: "" },
};
