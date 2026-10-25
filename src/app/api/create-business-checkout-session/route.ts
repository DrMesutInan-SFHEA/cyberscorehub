import { NextResponse } from "next/server";
import { stripe } from "@/lib/assessment/stripe";

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "CyberScoreHub Business",
            },
            unit_amount: 9900,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/pricing",
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Stripe session failed" },
      { status: 500 }
    );
  }
}