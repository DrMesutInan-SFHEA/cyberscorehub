"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function BusinessReportPage() {
const [allowed, setAllowed] = useState(false);
  const [score, setScore] = useState(71);
useEffect(() => {
  const checkAccess = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      window.location.href = "/login";
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("email", session.user.email)
      .single();

    if (data?.plan !== "business") {
      alert("Business Plan Required (£99)");
      window.location.href = "/dashboard";
      return;
    }

    setAllowed(true);

    const saved = localStorage.getItem(
      "ccr-full-assessment-results"
    );

    if (!saved) return;

    try {
      const results = JSON.parse(saved);

      if (results?.overallScore) {
        setScore(results.overallScore);
      }
    } catch {}
  };

  checkAccess();
}, []);
if (!allowed) {
  return null;
}
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-3xl bg-white/[0.04] p-10">

          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Business Report
          </div>

          <h1 className="mt-4 text-5xl font-black">
            Executive Cyber Resilience Report
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-[#07111f] p-6">
              <div className="text-slate-400">
                CyberScore
              </div>

              <div className="mt-2 text-5xl font-black text-cyan-400">
                {score}
              </div>
            </div>

            <div className="rounded-2xl bg-[#07111f] p-6">
              <div className="text-slate-400">
                Risk Level
              </div>

              <div className="mt-2 text-3xl font-black text-amber-400">
                {score >= 80
  ? "Low"
  : score >= 60
  ? "Elevated"
  : "High"}
              </div>
            </div>

            <div className="rounded-2xl bg-[#07111f] p-6">
              <div className="text-slate-400">
                Priority Areas
              </div>

              <div className="mt-2 text-xl font-bold">
  {score < 60
    ? "Identity & Access"
    : score < 80
    ? "Incident Response"
    : "Continuous Improvement"}
</div>
            </div>

          </div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Executive Summary
  </div>

<p className="mt-4 text-slate-300">
  {score >= 80
    ? "The organisation demonstrates a strong cyber resilience posture with mature security controls and continuous improvement practices."
    : score >= 60
    ? "The organisation demonstrates a developing cyber resilience posture with several opportunities for improvement across key security domains."
    : "The organisation has significant cyber resilience gaps and should prioritise remediation activities to reduce overall cyber risk."}
</p>

</div>

<div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8 print:hidden">


  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Premium Downloads
  </div>

<div className="mt-5">
<button
  onClick={() => {
    window.print();
  }}
className="rounded-xl bg-black px-6 py-3 font-bold text-white shadow-[0_0_30px_rgba(198,255,0,0.6)]"
>
  Download PDF Report
</button>
</div>


</div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Framework Mapping
  </div>

  <div className="mt-6 space-y-3">

    <div>
  NIST CSF 2.0 Alignment {score >= 80 ? "95%" : score >= 60 ? "78%" : "52%"}
</div>

   <div>
  CIS Controls Alignment {score >= 80 ? "92%" : score >= 60 ? "72%" : "48%"}
</div>

    <div>
  Cyber Essentials Alignment {score >= 80 ? "90%" : score >= 60 ? "70%" : "45%"}
</div>


  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Priority Actions
  </div>

  <div className="mt-6 space-y-3">

    <div>✅ {score < 60
  ? "Strengthen Identity & Access Controls"
  : score < 80
  ? "Improve Incident Response"
  : "Maintain Continuous Improvement Programme"}</div>

    <div>✅ {score < 60
  ? "Reduce Critical Risk Exposure"
  : score < 80
  ? "Strengthen Network Security"
  : "Enhance Monitoring Capabilities"}</div>

    <div>✅ {score < 60
  ? "Implement Foundational Security Controls"
  : score < 80
  ? "Improve Connected Device Controls"
  : "Optimize Security Operations"}
</div>

  </div>

</div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Remediation Roadmap
  </div>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl bg-[#07111f] p-4">
      🔴 Do Now - {score < 60
  ? "Implement foundational security controls"
  : score < 80
  ? "Secure connected devices"
  : "Maintain continuous governance"}
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      🟠 Next 30 Days - {score < 60
  ? "Establish incident response capability"
  : score < 80
  ? "Strengthen identity controls"
  : "Improve visibility and monitoring"}
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      🟢 Next 90 Days - {score < 60
  ? "Develop long-term resilience programme"
  : score < 80
  ? "Improve monitoring and awareness"
  : "Optimize security performance"}
    </div>

  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Management Summary
  </div>

  <p className="mt-4 text-slate-300">
{score >= 80
  ? "Cyber resilience maturity is strong. Continue continuous improvement activities and periodic assessments."
  : score >= 60
  ? "Several improvement opportunities remain. Focus on remediation activities to strengthen cyber resilience."
  : "Immediate remediation activities are recommended to address priority security weaknesses and reduce cyber risk exposure."}
  </p>
</div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Risk Breakdown
  </div>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl bg-[#07111f] p-4">
    Critical Risks: {score < 60 ? 5 : score < 80 ? 2 : 0}
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      Medium Risks: {score < 60 ? 8 : score < 80 ? 5 : 2}
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      Low Risks: {score < 60 ? 4 : score < 80 ? 11 : 18}
    </div>

  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Next Review Date
  </div>

<div className="mt-4 text-3xl font-black">
  {score >= 80
    ? "180 Days Recommended"
    : score >= 60
    ? "90 Days Recommended"
    : "30 Days Recommended"}
</div>

  <p className="mt-4 text-slate-300">
    Reassess after implementing priority actions to measure improvement.
  </p>

</div>
        </div>

      </div>
<div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 print:hidden">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Report Actions
  </div>

<div className="mt-5">
<button
  onClick={() => {
    window.print();
  }}
className="rounded-xl bg-black px-6 py-3 font-bold text-white shadow-[0_0_30px_rgba(198,255,0,0.6)]"
>
  Download Executive PDF
</button>

</div>

</div>

</main>
);
}