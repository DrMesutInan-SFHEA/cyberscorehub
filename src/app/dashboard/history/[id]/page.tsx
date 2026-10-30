"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AssessmentDetailPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();

    const loadAssessment = async () => {
      const { data } = await supabase
        .from("assessment_results")
        .select("*")
        .eq("id", id)
        .single();

      setResult(data);
    };

    loadAssessment();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-black">
          Assessment Detail
        </h1>

        <div className="mt-8 rounded-2xl bg-[#07111f] p-8">
          <div className="text-5xl font-black text-[#C6FF00]">
            {result?.overall_score}
          </div>
<button
  onClick={() => window.location.href = "/dashboard/history"}
  className="mt-4 rounded-lg bg-[#C6FF00] px-4 py-2 font-bold text-black"
>
  Back to History
</button>
          <div className="mt-4">
            Risk Level: {result?.risk_level}
          </div>

          <div className="mt-4 text-slate-400">
            {result?.created_at}
          </div>
<div className="mt-8 space-y-2">
    <div className="mt-8 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Executive Summary
  </div>

  <p className="mt-4 text-slate-300">
    Assessment score {result?.overall_score} with a
    {` ${result?.risk_level} `}risk posture.
    Priority remediation should focus on lower scoring domains.
  </p>
</div>
<div className="mt-6 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Organisation Profile
    <div className="mt-6 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Risk Breakdown
  </div>

  <div className="mt-4">
    Critical Risks: {result?.overall_score < 40 ? 5 : 2}
  </div>

  <div>
    Medium Risks: {result?.overall_score < 40 ? 8 : 4}
  </div>

  <div>
    Low Risks: {result?.overall_score < 40 ? 3 : 8}
  </div>
</div>
<div className="mt-6 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Priority Actions
    <div className="mt-6 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Remediation Roadmap
  </div>

  <div className="mt-4">
    🔴 Do Now - Address critical security weaknesses
  </div>

  <div className="mt-2">
    🟠 Next 30 Days - Strengthen identity and access controls
  </div>

  <div className="mt-2">
    🟢 Next 90 Days - Implement continuous monitoring and resilience reviews
  </div>
</div>
<div className="mt-6 rounded-2xl bg-[#0d1522] p-6">
  <div className="text-xl font-bold">
    Next Review Date
  </div>

  <div className="mt-4 text-2xl font-black text-[#C6FF00]">
    {result?.risk_level === "HIGH"
      ? "30 Days Recommended"
      : result?.risk_level === "MEDIUM"
      ? "90 Days Recommended"
      : "180 Days Recommended"}
  </div>

  <div className="mt-3 text-slate-400">
    Reassess after completing priority remediation activities.
  </div>
</div>
  </div>

  <div className="mt-4">
    ✅ Reduce Critical Risk Exposure
  </div>

  <div>
    ✅ Strengthen Identity & Access Controls
  </div>

  <div>
    ✅ Improve Security Monitoring
  </div>
</div>
  </div>

  <div className="mt-4">
    Organisation: {result?.organisation_name}
  </div>

  <div>
    Industry: {result?.industry}
  </div>

  <div>
    Size: {result?.organisation_size}
  </div>

  <div>
    Country: {result?.country}
  </div>
</div>
  <div>Governance: {result?.domain_scores?.[0]?.score}/100</div>
  <div>Assets: {result?.domain_scores?.[1]?.score}/100</div>
  <div>Identity & Access: {result?.domain_scores?.[2]?.score}/100</div>
  <div>Endpoints: {result?.domain_scores?.[3]?.score}/100</div>
  <div>Network Security: {result?.domain_scores?.[4]?.score}/100</div>
</div>
        </div>
      </div>
    </main>
  );
}
