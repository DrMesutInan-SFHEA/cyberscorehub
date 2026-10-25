"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Trophy, AlertTriangle, Shield } from "lucide-react";

export default function HeatMapPage() {
    const data = [
  { name: "High", value: 2, color: "#ef4444" },
  { name: "Medium", value: 1, color: "#f59e0b" },
  { name: "Low", value: 2, color: "#C6FF00" },
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
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 9v5" />
    <circle cx="12" cy="18" r="1" />
  </svg>

  <h1 className="text-5xl font-black">
    Risk Heat Map
  </h1>
</div>

        <p className="mt-4 text-slate-400">
          High-risk areas across assessment domains.
        </p>
<div className="mt-10 grid gap-8 lg:grid-cols-2">

  <div className="rounded-3xl bg-[#07111f] p-8 border border-white/10">

    <div className="text-slate-400 text-sm uppercase">
      Risk Overview
    </div>

    <h2 className="mt-2 text-4xl font-black">
      Risk Distribution
    </h2>

    <div className="mt-8 grid grid-cols-3 gap-3">

      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
        <div className="text-red-400 text-sm">HIGH RISK</div>
        <div className="mt-2 text-5xl font-black text-red-400">2</div>
      </div>

      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
        <div className="text-amber-400 text-sm">MEDIUM RISK</div>
        <div className="mt-2 text-5xl font-black text-amber-400">1</div>
      </div>

      <div className="rounded-2xl border border-[#C6FF00]/20 bg-[#C6FF00]/10 p-4">
        <div className="text-[#C6FF00] text-sm">LOW RISK</div>
        <div className="mt-2 text-5xl font-black text-[#C6FF00]">2</div>
      </div>

    </div>

  </div>

  <div className="rounded-3xl bg-[#07111f] p-8 border border-white/10">

    <div className="h-[500px]">

    <ResponsiveContainer width="100%" height="100%">

       <PieChart>
<text
  x="50%"
  y="50%"
  textAnchor="middle"
  dominantBaseline="middle"
  fill="white"
  fontSize="42"
  fontWeight="bold"
>
  5
</text>
    <Pie
  data={data}
  dataKey="value"
  nameKey="name"
  cx="50%"
  cy="50%"
  innerRadius={70}
  outerRadius={120}
  paddingAngle={5}
>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.color}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  </div>

</div>



      </div>

    </main>
  );
}