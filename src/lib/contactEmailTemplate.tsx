interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const contactEmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
            /* Basic styles for email clients that support them */
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            }
        </style>
    </head>
    <body style="background-color: #E5C85A; margin: 0; padding: 20px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <!-- Header Section -->
                                    <tr>
                                        <td style="padding: 30px 30px 20px 30px; text-align: center; color: #1a1a1a;">
                                            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Message Received</h1>
                                        </td>
                                    </tr>
                                    <!-- Content Section -->
                                    <tr>
                                        <td style="padding: 0 30px 30px 30px; color: #1a1a1a;">
                                            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">
                                                You've received a new submission from your website's contact form.
                                            </p>
                                            
                                            <!-- Sender's Name -->
                                            <h3 style="margin: 20px 0 5px 0; font-size: 18px; font-weight: bold;">From:</h3>
                                            <p style="margin: 0; font-size: 16px; padding: 12px; background-color: #e4c349; border: 2px solid #1a1a1a;">
                                                ${name}
                                            </p>

                                            <!-- Sender's Email -->
                                            <h3 style="margin: 20px 0 5px 0; font-size: 18px; font-weight: bold;">Email Address:</h3>
                                            <p style="margin: 0; font-size: 16px; padding: 12px; background-color: #e4c349; border: 2px solid #1a1a1a;">
                                                ${email}
                                            </p>
                                            
                                            <!-- Message Content -->
                                            <h3 style="margin: 20px 0 5px 0; font-size: 18px; font-weight: bold;">Message:</h3>
                                            <div style="font-size: 16px; line-height: 1.5; padding: 12px; background-color: #e4c349; border: 2px solid #1a1a1a; white-space: pre-wrap; word-wrap: break-word;">
                                                ${message}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- Footer Section -->
                        <tr>
                            <td style="padding: 20px 30px; text-align: center; color: #1a1a1a; font-size: 12px;">
                                This is an automated notification sent from your website.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;
};
