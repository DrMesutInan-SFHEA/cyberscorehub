"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RadarChartPage() {
  const [results, setResults] = useState<any[]>([]);
useEffect(() => {
  const loadResults = async () => {
    const { data } = await supabase
      .from("assessment_results")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

    setResults(data || []);
  };

  loadResults();
}, []);

const data = results[0]?.domain_scores || [];

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
            <path d="M3 3v18h18" />
            <path d="M7 15l3-3 3 2 4-5" />
          </svg>

          <h1 className="text-5xl font-black">
            Domain Performance
          </h1>
        </div>

<p className="mt-4 text-slate-400">
  Cyber resilience by assessment domain.
</p>

<div className="mt-10 flex flex-wrap gap-6">

  <div className="flex-1 min-w-[220px] rounded-3xl border border-white/10 bg-[#07111f] p-6">
    <div className="text-sm text-slate-400">
      Overall Score
    </div>

<div className="mt-3 text-5xl font-black text-[#C6FF00]">
  {results[0]?.overall_score ?? 0}
</div>
  </div>

  <div className="flex-1 min-w-[220px] rounded-3xl border border-white/10 bg-[#07111f] p-6">
    <div className="text-sm text-slate-400">
      Top Domain
    </div>

<div className="mt-3 text-4xl font-black text-[#C6FF00]">
  {
  data.length > 0
    ? data.reduce(
        (a: any, b: any) => (a.score > b.score ? a : b),
        data[0]
      )?.domain
    : "-"
}
</div>

<div className="mt-1 text-slate-500">
Score {
  data.length > 0
    ? data.reduce(
        (a: any, b: any) => (a.score > b.score ? a : b),
        data[0]
      )?.score
    : 0
}
</div>
  </div>

  <div className="flex-1 min-w-[220px] rounded-3xl border border-white/10 bg-[#07111f] p-6">
    <div className="text-sm text-slate-400">
      Weakest Domain
    </div>

    <div className="mt-3 text-4xl font-black text-orange-400">
   {
  data.length > 0
    ? data.reduce(
        (a: any, b: any) => (a.score < b.score ? a : b),
        data[0]
      )?.domain
    : "-"
}
    </div>

    <div className="mt-1 text-slate-500">
      Score {
  data.length > 0
    ? data.reduce(
        (a: any, b: any) => (a.score < b.score ? a : b),
        data[0]
      )?.score
    : 0
}
    </div>
  </div>

  <div className="flex-1 min-w-[220px] rounded-3xl border border-white/10 bg-[#07111f] p-6">
    <div className="text-sm text-slate-400">
      Risk Level
    </div>

<div className="mt-3 text-4xl font-black text-red-400">
  {results[0]?.risk_level ?? "-"}
</div>
  </div>

</div>


        <div className="mt-10 rounded-3xl bg-[#07111f] p-10 border border-white/10">

          <div className="h-[600px]">

      <ResponsiveContainer width="100%" height="100%">

  <BarChart
    data={data}
    layout="vertical"
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 20,
    }}
  >

    <CartesianGrid stroke="#1e293b" />

    <XAxis
      type="number"
      domain={[0, 100]}
      stroke="#94a3b8"
    />

    <YAxis
      type="category"
      dataKey="domain"
      stroke="#C6FF00"
    />

    <Tooltip />

    <Bar
      dataKey="score"
      fill="#C6FF00"
      radius={[0, 8, 8, 0]}
    />

  </BarChart>

</ResponsiveContainer>

          </div>

        </div>

      </div>
    </main>
  );
}