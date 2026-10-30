"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function AssessmentHistoryPage() {
  const [plan, setPlan] = useState("free");
const [results, setResults] = useState<any[]>([]);
useEffect(() => {
  const loadUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return;

    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("email", session.user.email)
      .single();

    if (data?.plan) {
      setPlan(data.plan);
    }
    console.log("PLAN_FROM_DB", data?.plan);
  };
  loadUser();

  const loadResults = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return;

const { data, error } = await supabase
  .from("assessment_results")
  .select("*")
.order("created_at", { ascending: false })
.limit(10)
console.log("HISTORY_DATA", data);
console.log("HISTORY_ERROR", error);

setResults(data || []);
  };

  loadResults();
}, []);
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

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
    <path d="M3 12h4"></path>
    <path d="M10 12h11"></path>
    <path d="M3 6h11"></path>
    <path d="M18 6h3"></path>
    <path d="M3 18h7"></path>
    <path d="M14 18h7"></path>
  </svg>

  <h1 className="text-5xl font-black">
    Assessment History
  </h1>
</div>

        <p className="mt-4 text-slate-400">
          Track your previous cyber resilience assessments.
        </p>

        <div className="mt-10 space-y-4">

<div className="rounded-2xl bg-[#07111f] p-6">
  <div className="text-slate-400">
    Current Subscription
  </div>

  <div className="mt-2 text-3xl font-black text-[#C6FF00]">
    {plan.toUpperCase()}
  </div>
</div>

<div className="rounded-2xl bg-[#07111f] p-6">
  <div className="text-slate-400">
    Access Level
  </div>

  <div className="mt-2 text-3xl font-black text-[#C6FF00]">
    {plan === "business" ? "BUSINESS" : "PROFESSIONAL"}
  </div>
</div>
{results.length === 0 && (
  <div className="rounded-2xl bg-[#07111f] p-6 text-slate-400">
    No assessment history found.
  </div>
)}
{results.map((result) => (
  <div
  key={result.id}
  onClick={() =>
    window.location.href = `/dashboard/history/${result.id}`
  }
  className="cursor-pointer rounded-2xl bg-[#07111f] p-6 transition hover:bg-[#0d1b2f]"
>

<div className="text-slate-400">
  Assessment #{result.id.slice(0, 8)}
</div>

    <div className="mt-2 text-3xl font-black text-[#C6FF00]">
      {result.overall_score}
    </div>

    <div className="mt-2 text-sm text-slate-400">
      {result.risk_level}
    </div>
    <div className="mt-2 text-xs text-slate-500">
  {new Date(result.created_at).toLocaleString()}
</div>
  </div>
))}


        </div>

      </div>

    </main>
  );
}