"use client";

export default function ResultsPage() {
  const isPremium =
  typeof window !== "undefined" &&
  window.location.search.includes("premium=true");
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#C6FF00]">
            CyberScoreHub Quick Assessment
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
             CyberScore Rating
            </div>

            <div className="mt-4 text-6xl font-black text-[#C6FF00]">
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

          <div className="text-sm font-bold uppercase tracking-wider text-[#C6FF00]">
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

          <div className="text-sm font-bold uppercase tracking-wider text-[#C6FF00]">
           Improvement Roadmap
          </div>

          <h2 className="mt-2 text-3xl font-bold">
            What to improve first
          </h2>
<div className="mt-6 rounded-2xl border border-[#C6FF00]/20 bg-[#C6FF00]/5 p-6">

  <div className="text-sm font-bold uppercase tracking-wider text-[#C6FF00]">
    Premium Upgrade
  </div>

  <div className="mt-2 text-2xl font-black">
    Unlock Professional Report - £29
  </div>

  <p className="mt-3 text-slate-400">
    Unlock Executive Summary, PDF Report, Framework Mapping and Detailed Improvement Roadmap.
  </p>
<div className="mt-5 flex flex-wrap gap-3 print:hidden">

  <button
    onClick={() => {
      window.location.href = "/pricing";
    }}
    className="rounded-xl bg-[#C6FF00] px-6 py-3 font-bold text-[#07111f]"
  >
    Upgrade Now
  </button>

  <button
    onClick={() => {
      window.print();
    }}
    className="rounded-xl border border-[#C6FF00] px-6 py-3 font-bold text-[#C6FF00]"
  >
    Download PDF
  </button>

</div>


{isPremium && (
  <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">

    <div className="font-bold text-emerald-400">
      Premium Access Active
    </div>

  </div>
)}

</div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">

<RoadmapCard
  title="Now"
  text="Address high-priority security gaps and review exposed connected devices."
/>

<RoadmapCard
  title="Next 30 Days"
  text="Strengthen access controls, backups and security processes."
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

        <span className="font-bold text-[#C6FF00]">
          {score}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#C6FF00]"
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

      <div className="text-lg font-bold text-[#C6FF00]">
        {title}
      </div>

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>

    </div>
  );
}