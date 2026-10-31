import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(
  email: string,
  name: string
) {
  await resend.emails.send({
    from: "support@cyberscorehub.com",
    to: email,
    subject: "Welcome to CyberScoreHub",
    html: `
      <h1>Welcome to CyberScoreHub</h1>

      <p>Hello ${name},</p>

      <p>
        Thank you for creating your CyberScoreHub account.
      </p>

      <p>
        You can now assess your cyber resilience,
        track progress, and generate executive reports.
      </p>

      <p>
        CyberScoreHub Team
      </p>
    `,
  });
}