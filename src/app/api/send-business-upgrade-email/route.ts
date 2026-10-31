import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  await resend.emails.send({
    from: "support@cyberscorehub.com",
    to: email,
    subject: "Business Plan Activated",
    html: `
      <h1>Business Plan Activated</h1>

      <p>Your Business subscription is now active.</p>

      <p>You now have access to:</p>

      <ul>
        <li>Heat Map</li>
        <li>Business Reports</li>
        <li>Executive PDF Reports</li>
        <li>Historical Tracking</li>
      </ul>
    `,
  });

  return NextResponse.json({
    success: true,
  });
}