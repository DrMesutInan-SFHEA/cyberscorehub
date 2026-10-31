import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, score, riskLevel } = await req.json();

  await resend.emails.send({
    from: "support@cyberscorehub.com",
    to: email,
    subject: "Your CyberScoreHub Assessment Results",
    html: `
      <h1>Assessment Complete</h1>

      <p>CyberScore: ${score}</p>

      <p>Risk Level: ${riskLevel}</p>

      <p>Log in to CyberScoreHub to view your full report.</p>
    `,
  });

  return NextResponse.json({ success: true });
}