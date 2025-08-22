import { ContactFormData } from "@/schemas/contactFormSchema";

export const confirmationEmailTemplate = ({
  name,
  message,
}: ContactFormData): string => `
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>We've Received Your Message</title>
 </head>
 <body style="background-color: #E5C85A; margin: 0; padding: 20px; font-family: sans-serif;">
     <table width="100%" border="0" cellspacing="0" cellpadding="0">
         <tr>
             <td align="center">
                 <table width="600" border="0" cellspacing="0" cellpadding="20" style="max-width: 600px; width: 100%;  ">
                     <tr>
                         <td align="center" style="padding: 20px 0;">
                             <h1 style="color: #1a1a1a; margin: 0;">Thank You, ${name}!</h1>
                         </td>
                     </tr>
                     <tr>
                         <td style="color: #1a1a1a;">
                             <p>I've successfully received your message and will get back to you as soon as possible. For your records, a copy of your message is included below.</p>
                             <h3 style="">Your Message:</h3>
                             <div style=" padding: 10px; border: 2px solid #1a1a1a; white-space: pre-wrap; word-wrap: break-word;">${message}</div>
                         </td>
                     </tr>
                      <tr>
                         <td style="padding-top: 20px; text-align: center; font-size: 12px; color: #555;">
                             This is an automated confirmation. Please do not reply directly to this email.
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>
     </table>
 </body>
 </html>
`;
