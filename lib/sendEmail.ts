/**
 * lib/sendEmail.ts
 *
 * Sends the download link to the customer's email using Resend.
 */

interface SendDownloadEmailParams {
  to: string;
  productName: string;
  downloadLink: string;
  orderId: string;
}

export async function sendDownloadEmail({
  to,
  productName,
  downloadLink,
  orderId,
}: SendDownloadEmailParams): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[Email] RESEND_API_KEY not set — skipping email send");
    return false;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "downloads@narostack.com",
      to,
      subject: `🎉 Your ${productName} is ready to download!`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: -apple-system, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: linear-gradient(135deg, #1e40af, #1e3a8a); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">🎉 Your Download is Ready!</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
              <p>Thanks for your purchase! Your <strong>${productName}</strong> is ready.</p>
              <p style="text-align: center; margin: 30px 0;">
                <a href="${downloadLink}" style="background: #1e40af; color: white; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                  📥 Download Now
                </a>
              </p>
              <p style="color: #6b7280; font-size: 13px;">Order ID: ${orderId}</p>
              <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
                Questions? Email pandeynabin@narostack.com<br/>
                © 2026 Narostack Digital LLC
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (result.error) {
      console.error("[Email] Resend error:", result.error);
      return false;
    }

    console.log(`✅ [Email] Sent to ${to}`);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send:", error);
    return false;
  }
}