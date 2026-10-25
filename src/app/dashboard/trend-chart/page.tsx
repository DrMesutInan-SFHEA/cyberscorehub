"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function TrendChartPage() {
    const data = [
  { month: "Aug", score: 58 },
  { month: "Sep", score: 65 },
  { month: "Oct", score: 71 },
];
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
    <path d="M3 17l5-5 4 3 7-8" />
    <path d="M3 21h18" />
  </svg>

  <h1 className="text-5xl font-black">
    Trend Analysis
  </h1>
</div>

        <p className="mt-4 text-slate-400">
          CyberScore improvement over time.
        </p>
<div className="mt-10 rounded-3xl bg-[#07111f] p-10 border border-white/10">

  <div className="h-[500px]">

    <ResponsiveContainer width="100%" height="100%">

      <LineChart data={data}>

        <CartesianGrid stroke="#1e293b" />

        <XAxis
          dataKey="month"
          stroke="#94a3b8"
        />

        <YAxis
          stroke="#94a3b8"
          domain={[0, 100]}
        />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="score"
          stroke="#C6FF00"
          strokeWidth={4}
          dot={{
            fill: "#C6FF00",
            r: 8,
          }}
        />

      </LineChart>

      </ResponsiveContainer>

  </div>

</div>

</div>

</main>
);
}
