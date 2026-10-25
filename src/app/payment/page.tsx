"use client";

export default function PaymentPage() {
  const handlePayment = async () => {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-center text-5xl font-black">
          Professional Plan
        </h1>

        <div className="mt-6 text-center text-6xl font-black text-cyan-400">
          £29
        </div>

        <p className="mt-6 text-center text-slate-400">
          Cyber resilience assessment and professional reporting.
        </p>

        <div className="mt-12 space-y-4">

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Full Assessment
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Executive Summary
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ PDF Report
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Framework Mapping
          </div>

          <div className="rounded-2xl bg-white/[0.05] p-5">
            ✓ Remediation Roadmap
          </div>

        </div>

        <button
          onClick={handlePayment}
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
          Pay £29
        </button>

      </div>
    </main>
  );
}