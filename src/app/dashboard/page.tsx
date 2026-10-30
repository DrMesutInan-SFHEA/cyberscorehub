"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
const [plan, setPlan] = useState("free");
const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = "/login";
      }

if (session) {
  const { data } = await supabase
    .from("profiles")
    .select("plan")
    .eq("email", session.user.email)
    .single();

  if (data?.plan) {
    setPlan(data.plan);
  }
  const { data: assessmentData } = await supabase
  .from("assessment_results")
  .select("*")
  .order("created_at", { ascending: false });

setResults(assessmentData || []);
}

};

checkUser();
}, []);
const latestScore = results[0]?.overall_score ?? 0;

const highestScore =
  results.length > 0
    ? Math.max(...results.map((r) => r.overall_score || 0))
    : 0;

const assessmentCount = results.length;

const averageScore =
  results.length > 0
    ? Math.round(
        results.reduce(
          (sum, r) => sum + (r.overall_score || 0),
          0
        ) / results.length
      )
    : 0;
const latestRisk = results[0]?.risk_level ?? "-";
const topDomain =
  results[0]?.domain_scores?.reduce(
    (a: any, b: any) => (a.score > b.score ? a : b),
    results[0]?.domain_scores?.[0]
  )?.domain ?? "-";
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

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
    <path d="M4.93 19.07a10 10 0 1 1 14.14 0"></path>
    <polyline points="12 12 16 8"></polyline>
    <circle cx="12" cy="12" r="1"></circle>
  </svg>
<h1 className="text-5xl font-black text-white">
  Dashboard
</h1>
</div>

<p className="mt-4 text-slate-400">

          Monitor your cyber resilience performance.
        </p>
<div className="mt-8 flex flex-wrap gap-3">

<button
  onClick={() => {
    if (plan === "free") {
      alert(
        "Professional Plan Required (£29)"
      );
      return;
    }

    window.location.href = "/dashboard/history";
  }}
  className="rounded-xl bg-[#C6FF00] px-5 py-3 font-bold text-black shadow-[0_0_20px_rgba(198,255,0,0.25)]"
>
  {plan === "free" ? "🔒 History" : "History"}
</button>

<button
  onClick={() => {
    if (plan === "free") {
      alert(
        "Professional Plan Required (£29)"
      );
      return;
    }

    window.location.href = "/dashboard/radar-chart";
  }}
  className="rounded-xl bg-[#C6FF00] px-5 py-3 font-bold text-black shadow-[0_0_20px_rgba(198,255,0,0.25)]"
>
  {plan === "free" ? "🔒 Radar" : "Radar"}
</button>

<button
  onClick={() => {
    if (plan === "free") {
      alert(
        "Professional Plan Required (£29)"
      );
      return;
    }

    window.location.href = "/dashboard/trend-chart";
  }}
  className="rounded-xl bg-[#C6FF00] px-5 py-3 font-bold text-black shadow-[0_0_20px_rgba(198,255,0,0.25)]"
>
  {plan === "free" ? "🔒 Trend" : "Trend"}
</button>

<button
  onClick={() => {
    if (plan !== "business") {
  window.location.href = "/pricing";
return;
    }

    window.location.href = "/dashboard/heatmap";
  }}
  className="rounded-xl bg-[#C6FF00] px-5 py-3 font-bold text-black shadow-[0_0_20px_rgba(198,255,0,0.25)]"
>
{plan === "business"
  ? "Heat Map"
  : "🔒 Heat Map (€69)"}
</button>

<button
  onClick={() => {
    if (plan !== "business") {
     window.location.href = "/pricing";
return;
    }

    window.location.href = "/business-report";
  }}
  className="rounded-xl border-2 border-[#C6FF00] bg-[#C6FF00] px-5 py-3 font-bold text-black shadow-[0_0_20px_rgba(198,255,0,0.25)]"
>
  {plan === "business"
    ? "Business Report"
    : "🔒 Business Report (€69)"}
</button>

</div>
<div className="mt-10 rounded-3xl bg-[#07111f] p-6">
  <div className="text-slate-400">
    Current Plan
  </div>

  <div className="mt-2 text-4xl font-black text-[#C6FF00]">
    {plan.toUpperCase()}
  </div>
</div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-[#07111f] p-6">
            <div className="text-slate-400">
              CyberScore
            </div>
            <div className="mt-2 text-5xl font-black text-[#C6FF00]">
             {latestScore}
            </div>
          </div>

          <div className="rounded-3xl bg-[#07111f] p-6">
            <div className="text-slate-400">
              Risk Level
            </div>
            <div className="mt-2 text-3xl font-black text-[#C6FF00]">
              {latestRisk}
            </div>
          </div>

          <div className="rounded-3xl bg-[#07111f] p-6">
            <div className="text-slate-400">
              Assessments
            </div>
            <div className="mt-2 text-5xl font-black text-[#C6FF00]">
              {assessmentCount}
            </div>
          </div>

          <div className="rounded-3xl bg-[#07111f] p-6">
<div className="text-slate-400">
  Top Domain
</div>

<div className="mt-2 text-5xl font-black text-[#C6FF00]">
  {topDomain}
</div>

          </div>

        </div>

      </div>

    </main>
  );
}