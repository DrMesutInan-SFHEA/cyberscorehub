export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            CCR Quick Check
          </div>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Cyber Security Results
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Your assessment provides an indicative view of your organisation&apos;s
            cyber-security readiness, evidence confidence and priority areas
            for improvement.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">
              CCR Readiness
            </div>

            <div className="mt-4 text-6xl font-black text-cyan-400">
              71
              <span className="text-2xl text-slate-400">/100</span>
            </div>

            <div className="mt-3 text-lg font-semibold">
              Developing posture
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Evidence Confidence
            </div>

            <div className="mt-4 text-6xl font-black text-emerald-400">
              68
              <span className="text-2xl text-slate-400">/100</span>
            </div>

            <div className="mt-3 text-lg font-semibold">
              Evidence improving
            </div>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8">

          <div className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Security Domains
          </div>

          <h2 className="mt-2 text-2xl font-bold">
            Assessment overview
          </h2>

          <div className="mt-8 space-y-6">

            <DomainScore name="Identity & Access" score={74} />
            <DomainScore name="Backup & Recovery" score={81} />
            <DomainScore name="Network Security" score={62} />
            <DomainScore name="Incident Response" score={51} />
            <DomainScore name="IoT & Connected Devices" score={43} />
            <DomainScore name="Security Awareness" score={71} />

          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-8">

          <div className="text-sm font-bold uppercase tracking-wider text-amber-400">
            Priority Finding
          </div>

          <h2 className="mt-3 text-2xl font-bold">
            Connected-device security requires attention
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Your assessment indicates that connected devices and incident
            response should be prioritised before lower-risk improvements.
          </p>

        </div>

        <div className="mt-10">

          <div className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            CCR Improvement Roadmap
          </div>

          <h2 className="mt-2 text-3xl font-bold">
            What to improve first
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <RoadmapCard
              title="Now"
              text="Address high-priority security gaps and review exposed connected devices."
            />

            <RoadmapCard
              title="Within 30 Days"
              text="Improve incident-response procedures and strengthen access controls."
            />

            <RoadmapCard
              title="Within 90 Days"
              text="Improve evidence coverage, staff awareness and security monitoring."
            />

          </div>

        </div>

      </div>
    </main>
  );
}


function DomainScore({
  name,
  score,
}: {
  name: string;
  score: number;
}) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="font-semibold">
          {name}
        </span>

        <span className="font-bold text-cyan-400">
          {score}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width: `${score}%` }}
        />
      </div>

    </div>
  );
}


function RoadmapCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

      <div className="text-lg font-bold text-cyan-400">
        {title}
      </div>

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}