import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const event = await req.json();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const email = session.metadata?.email;
    const plan = session.metadata?.plan;

    if (email && plan) {
      await supabase
        .from("profiles")
        .update({
          plan,
        })
        .eq("email", email);
if (plan === "business") {
  await fetch(
    "https://ccr-platform-uhgg.vercel.app/api/send-business-upgrade-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
}
      console.log(`Plan updated: ${email} -> ${plan}`);
    }
  }

  return NextResponse.json({
    received: true,
  });
}