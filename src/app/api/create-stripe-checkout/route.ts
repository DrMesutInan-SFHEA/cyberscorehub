import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { plan, email } = await req.json();

  const priceId =
    plan === "business"
      ? "price_1UWgWsBYAE5xmxbHnvVnLQI2"
      : "price_1UWgVmBYAE5xmxbHhWhaDYm6";

const session = await stripe.checkout.sessions.create({
    metadata: {
  plan,
  email,
},
  customer_email: email,
  mode: "subscription",
  line_items: [
    {
      price: priceId,
      quantity: 1,
    },
  ],
  success_url: "http://localhost:3000/dashboard",
  cancel_url: "http://localhost:3000/pricing",
});

  return NextResponse.json({
    url: session.url,
  });
}