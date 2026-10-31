import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
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

      console.log(`Plan updated: ${email} -> ${plan}`);
    }
  }

  return NextResponse.json({
    received: true,
  });
}