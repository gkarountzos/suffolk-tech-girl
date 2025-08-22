import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "A valid email is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
