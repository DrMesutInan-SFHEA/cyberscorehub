export default function FullAssessmentResultsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          CCR Full Assessment
        </div>

        <h1 className="mt-3 text-4xl font-black">
          Assessment Results
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Your cyber resilience assessment is complete.
        </p>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Assessment Complete
          </div>

          <div className="mt-3 text-3xl font-black text-white">
            30 of 30 questions completed
          </div>

          <div className="mt-2 text-lg font-semibold text-cyan-400">
            100%
          </div>
        </section>
      </div>
    </main>
  );
}