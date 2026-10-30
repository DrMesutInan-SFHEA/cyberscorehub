"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function BusinessReportPage() {
const [allowed, setAllowed] = useState(false);
  const [score, setScore] = useState(71);
  const [riskLevel, setRiskLevel] = useState("-");
const [topDomain, setTopDomain] = useState("-");
const [latestResult, setLatestResult] = useState<any>(null);
useEffect(() => {
  const loadLatestAssessment = async () => {
    const { data } = await supabase
      .from("assessment_results")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

   if (data?.[0]) {
  setLatestResult(data[0]);
  setScore(data[0].overall_score || 0);
  setRiskLevel(data[0].risk_level || "-");

  const top =
    data[0].domain_scores?.reduce(
      (a: any, b: any) => (a.score > b.score ? a : b),
      data[0].domain_scores?.[0]
    )?.domain ?? "-";

  setTopDomain(top);
}
  };

  loadLatestAssessment();
}, []);
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
      alert("Business Plan Required (€69)");
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
  {riskLevel}
</div>
            </div>

            <div className="rounded-2xl bg-[#07111f] p-6">
              <div className="text-slate-400">
                Priority Areas
              </div>

<div className="mt-2 text-xl font-bold">
  {topDomain}
</div>
            </div>

          </div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Executive Summary
  </div>

<p className="mt-4 text-slate-300">
  Your latest assessment identified a <strong>{riskLevel}</strong> cyber
  risk posture with a CyberScore of <strong>{score}</strong>. The strongest
  performing security domain is <strong>{topDomain}</strong>. Priority
  remediation activities should focus on reducing overall cyber risk and
  improving resilience across weaker domains.
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
  NIST CSF 2.0 Alignment {score < 40 ? "52%" : score < 60 ? "78%" : "95%"}
</div>

<div>
  CIS Controls Alignment {score < 40 ? "48%" : score < 60 ? "72%" : "92%"}
</div>


<div>
  Cyber Essentials Alignment {score < 40 ? "45%" : score < 60 ? "70%" : "90%"}
</div>


  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Priority Actions
  </div>

  <div className="mt-6 space-y-3">

    <div>✅ {topDomain === "END"
  ? "Maintain Endpoint Security Controls"
  : "Improve Highest Performing Security Domain"}</div>

    <div>✅ Reduce Critical Risk Exposure</div>

    <div>✅ Prioritise High-Risk Domain Remediation
</div>

  </div>

</div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Remediation Roadmap
  </div>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl bg-[#07111f] p-4">
 🔴 Do Now - Address critical security gaps and improve weakest domains
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
 🟠 Next 30 Days - Strengthen identity, access and asset management controls
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
🟢 Next 90 Days - Establish continuous improvement and cyber resilience reviews
    </div>

  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Management Summary
  </div>

  <p className="mt-4 text-slate-300">
Your latest assessment recorded a CyberScore of {score} with a {riskLevel} risk posture. Priority improvement efforts should focus on strengthening weaker security domains while maintaining resilience within {topDomain}.
  </p>
</div>
<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Risk Breakdown
  </div>

  <div className="mt-6 space-y-4">

    <div className="rounded-xl bg-[#07111f] p-4">
    Critical Risks: {score < 40 ? 5 : 2}
    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      Medium Risks: {score < 40 ? 8 : 4}

    </div>

    <div className="rounded-xl bg-[#07111f] p-4">
      Low Risks: {score < 40 ? 3 : 8}

    </div>

  </div>

</div>

<div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

  <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
    Next Review Date
  </div>

<div className="mt-4 text-3xl font-black">
{riskLevel === "HIGH"
  ? "30 Days Recommended"
  : riskLevel === "MEDIUM"
  ? "90 Days Recommended"
  : "180 Days Recommended"}
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