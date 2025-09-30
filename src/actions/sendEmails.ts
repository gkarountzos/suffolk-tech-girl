"use server";

import { confirmationEmailTemplate } from "@/lib/confirmationEmailTemplate";
import { contactEmailTemplate } from "@/lib/contactEmailTemplate";
import {
  ContactFormData,
  contactFormSchema,
} from "@/schemas/contactFormSchema";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
});

export async function sendContactEmailToBusiness(data: ContactFormData) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  const { name, email, message } = result.data;

  const emailContent = contactEmailTemplate({
    name,
    email,
    message,
  });
  const mailOptions = {
    from: `${email}`,
    to: process.env.GMAIL_USER,
    subject: `You've received a new message`,
    html: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  const { name, email, message } = data;
  const emailContent = confirmationEmailTemplate({ name, email, message });

  const mailOptions = {
    from: `"Suffolk's Tech Girl" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "I've received your message!",
    html: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return { success: false, error: "Failed to send confirmation email." };
  }
}
