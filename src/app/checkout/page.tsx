"use client";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-10">
      <h1 className="text-5xl font-black">
        Professional Plan
      </h1>

      <div className="mt-8 text-6xl font-black text-cyan-400">
        £29
      </div>

      <button
        onClick={() => {
          alert("Stripe Checkout Coming Next");
        }}
        className="mt-10 rounded-xl bg-[#C6FF00] px-8 py-4 font-bold text-black"
      >
        Continue To Payment
      </button>
    </main>
  );
}