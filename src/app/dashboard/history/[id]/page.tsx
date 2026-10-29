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
