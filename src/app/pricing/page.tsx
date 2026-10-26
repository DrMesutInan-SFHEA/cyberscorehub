"use client";
import { useState } from "react";
export default function PricingPage() {
  const [loading, setLoading] = useState(false);
  const handlePayPal = async (plan: "professional" | "business") => {
  setLoading(true);

  const response = await fetch("/api/create-paypal-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan }),
  });

  const data = await response.json();

  alert(`PayPal Order Created: ${data.paypalOrderId}`);
  setLoading(false);
};
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Pricing
          </div>

          <h1 className="mt-4 text-5xl font-black">
            Choose Your Plan
          </h1>

          <p className="mt-4 text-slate-400">
            Start free and upgrade when you need deeper insights.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-cyan-400 font-bold">
              FREE
            </div>

            <div className="mt-4 text-5xl font-black">
              £0
            </div>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Quick Assessment</li>
              <li>✓ CyberScore</li>
              <li>✓ Risk Summary</li>
            </ul>

<button
  onClick={() => {
    window.location.href = "/assessment";
  }}
  className="mt-8 w-full rounded-xl border border-white/20 px-4 py-3 font-bold"
>
  Start Free
</button>
          </div>

          <div className="rounded-3xl border border-cyan-400 bg-cyan-400/10 p-8">

            <div className="mb-4 inline-block rounded-full bg-[#C6FF00] px-3 py-1 text-xs font-black text-black">
              MOST POPULAR
            </div>

            <div className="text-cyan-300 font-bold">
              PROFESSIONAL
            </div>

            <div className="mt-4 text-5xl font-black">
              £29
            </div>

            <ul className="mt-6 space-y-3 text-slate-200">
              <li>✓ Full Assessment</li>
              <li>✓ Executive Summary</li>
              <li>✓ PDF Report</li>
              <li>✓ Framework Mapping</li>
              <li>✓ Remediation Roadmap</li>
            </ul>
<button
  onClick={() => {
    handlePayPal("professional");
  }}
  className="mt-8 w-full rounded-xl bg-[#C6FF00] px-4 py-3 font-bold text-black"
>
  Upgrade Now
</button>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-cyan-400 font-bold">
              BUSINESS
            </div>

            <div className="mt-4 text-5xl font-black">
              £99
            </div>

            <ul className="mt-6 space-y-3 text-slate-300">
              <li>✓ Unlimited Assessments</li>
              <li>✓ Team Access</li>
              <li>✓ Historical Reports</li>
              <li>✓ Trend Tracking</li>
            </ul>

<button
  onClick={() => {
  handlePayPal("business");
  }}
  className="mt-8 w-full rounded-xl border border-cyan-400 px-4 py-3 font-bold text-cyan-300"
>
  Upgrade Business
</button>

          </div>

        </div>

      </div>
f
    </main>
  );
}
