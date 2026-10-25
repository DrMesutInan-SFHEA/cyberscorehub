"use client";

export default function BusinessCheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-black">
            Business Plan
          </h1>

          <div className="mt-4 text-6xl font-black text-cyan-400">
            £99
          </div>

          <p className="mt-4 text-slate-400">
          Advanced reporting, trend analysis and business intelligence features.
          </p>
        </div>

        <div className="mt-16 grid gap-4">
          <div className="rounded-2xl bg-white/[0.04] p-6">
            ✓ Unlimited Assessments
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-6">
            ✓ Historical Reports
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-6">
            ✓ Team Access
          </div>

          <div className="rounded-2xl bg-white/[0.04] p-6">
            ✓ Trend Tracking
          </div>
        </div>

        <button
onClick={async () => {
  const response = await fetch(
    "/api/create-business-checkout-session",
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (data.url) {
    window.location.href = data.url;
  }
}}
          className="mt-10 w-full rounded-xl bg-[#C6FF00] px-8 py-4 font-bold text-black"
        >
          Continue To Payment
        </button>
      </div>
    </main>
  );
}