"use client";

export default function AssessmentHistoryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

<div className="flex items-center gap-4">
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C6FF00"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12h4"></path>
    <path d="M10 12h11"></path>
    <path d="M3 6h11"></path>
    <path d="M18 6h3"></path>
    <path d="M3 18h7"></path>
    <path d="M14 18h7"></path>
  </svg>

  <h1 className="text-5xl font-black">
    Assessment History
  </h1>
</div>

        <p className="mt-4 text-slate-400">
          Track your previous cyber resilience assessments.
        </p>

        <div className="mt-10 space-y-4">

         <div className="rounded-2xl bg-[#07111f] p-6 border border-transparent transition-all duration-300 hover:border-[#C6FF00] hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]">
            <div className="text-slate-400">
              October 2026
            </div>
            <div className="mt-2 text-3xl font-black text-[#C6FF00]">
              Score 71
            </div>
          </div>

         <div className="rounded-2xl bg-[#07111f] p-6 border border-transparent transition-all duration-300 hover:border-[#C6FF00] hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]">
            <div className="text-slate-400">
              September 2026
            </div>
            <div className="mt-2 text-3xl font-black text-[#C6FF00]">
              Score 65
            </div>
          </div>

          <div className="rounded-2xl bg-[#07111f] p-6 border border-transparent transition-all duration-300 hover:border-[#C6FF00] hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]">
            <div className="text-slate-400">
              August 2026
            </div>
            <div className="mt-2 text-3xl font-black text-[#C6FF00]">
              Score 58
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}