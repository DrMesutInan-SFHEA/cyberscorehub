export default function FullAssessmentQuestionsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          CCR Full Assessment
        </div>

        <h1 className="mt-3 text-4xl font-black">
          Cyber Security Assessment
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Complete all five security domains to build your cyber resilience
          profile.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Assessment Progress
              </div>

              <div className="mt-2 text-2xl font-bold">
                0 of 30 questions completed
              </div>
            </div>

            <div className="text-3xl font-black text-cyan-400">
              0%
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-0 rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {["GOV", "AST", "IAM", "END", "NET"].map((domain) => (
            <div
              key={domain}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <div className="text-lg font-bold text-white">
                {domain}
              </div>

              <div className="mt-2 text-sm text-slate-400">
                0 / 6
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}