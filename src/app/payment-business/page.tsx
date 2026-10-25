"use client";

export default function PaymentBusinessPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-center text-5xl font-black">
          Business Plan
        </h1>

        <div className="mt-6 text-center text-6xl font-black text-cyan-400">
         £99
        </div>

        <p className="mt-6 text-center text-slate-400">
          Advanced cyber resilience reporting and business insights.
        </p>

        <div className="mt-12 space-y-4">

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Unlimited Assessments
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Historical Reports
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Team Access
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Trend Tracking
          </div>

        </div>

        <button
          onClick={() => {
            window.location.href = "/success-business";
          }}
          style={{
  background: "#C6FF00",
  color: "#000",
  width: "320px",
  padding: "18px",
  borderRadius: "16px",
  fontSize: "24px",
  fontWeight: 900,
  cursor: "pointer",
  marginTop: "40px",
  border: "none",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}}
        >
         Pay £99
        </button>

      </div>

    </main>
  );
}
