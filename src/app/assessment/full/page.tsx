export default function FullAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        CyberScoreHub Full Assessment
        </div>

        <h1 className="mt-3 text-4xl font-black">
          Full Cyber Security Assessment
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Complete a structured cyber-security assessment across five core
          security domains.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-2xl font-bold">
            30 security questions
          </div>

          <div className="mt-2 text-slate-400">
            5 domains • GOV • AST • IAM • END • NET
          </div>
        </div>
      </div>
    </main>
  );
}