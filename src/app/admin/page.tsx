"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function AdminPage() {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAssessments, setTotalAssessments] = useState(0);
const [businessUsers, setBusinessUsers] = useState(0);
const [professionalUsers, setProfessionalUsers] = useState(0);
const [averageScore, setAverageScore] = useState(0);
  useEffect(() => {
    const loadData = async () => {
      const { count: userCount } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      const { count: assessmentCount } = await supabase
        .from("assessment_results")
        .select("*", { count: "exact", head: true });

      setTotalUsers(userCount || 0);
      setTotalAssessments(assessmentCount || 0);
      const { count: businessCount } = await supabase
  .from("profiles")
  .select("*", { count: "exact", head: true })
  .eq("plan", "business");

const { count: professionalCount } = await supabase
  .from("profiles")
  .select("*", { count: "exact", head: true })
  .eq("plan", "professional");

setBusinessUsers(businessCount || 0);
setProfessionalUsers(professionalCount || 0);
const { data: scores } = await supabase
  .from("assessment_results")
  .select("overall_score");

if (scores && scores.length > 0) {
  const avg =
    scores.reduce(
      (sum, item) => sum + (item.overall_score || 0),
      0
    ) / scores.length;

  setAverageScore(Math.round(avg));
}
    };

    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-black">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          CyberScoreHub platform overview
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-3xl bg-white/[0.04] p-6">
            <div className="text-sm text-slate-400">
              Total Users
            </div>
            <div className="mt-3 text-4xl font-black">
            {totalUsers}
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] p-6">
            <div className="text-sm text-slate-400">
              Total Assessments
            </div>
            <div className="mt-3 text-4xl font-black">
             {totalAssessments}
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] p-6">
            <div className="text-sm text-slate-400">
              Professional Users
            </div>
            <div className="mt-3 text-4xl font-black">
            {professionalUsers}
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] p-6">
            <div className="text-sm text-slate-400">
              Business Users
            </div>
            <div className="mt-3 text-4xl font-black">
             {businessUsers}
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.04] p-6">
            <div className="text-sm text-slate-400">
              Average Score
            </div>
            <div className="mt-3 text-4xl font-black">
            {averageScore}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}