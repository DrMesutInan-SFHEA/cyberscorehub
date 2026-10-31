import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  await resend.emails.send({
    from: "support@cyberscorehub.com",
    to: email,
    subject: "Welcome to CyberScoreHub",
    html: `
      <h1>Welcome to CyberScoreHub</h1>

      <p>Your account has been created successfully.</p>

      <p>
        Start assessing your cyber resilience today.
      </p>
    `,
  });

  return NextResponse.json({
    success: true,
  });
}