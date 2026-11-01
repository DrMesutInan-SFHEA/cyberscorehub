import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || ""
);
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
success_url:
  "https://ccr-platform-uhgg.vercel.app/dashboard",

cancel_url:
  "https://ccr-platform-uhgg.vercel.app/pricing",
});

  return NextResponse.json({
    url: session.url,
  });
}