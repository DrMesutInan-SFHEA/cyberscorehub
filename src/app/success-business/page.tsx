"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function SuccessBusinessPage() {
    useEffect(() => {
  const updatePlan = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const email = session?.user?.email?.trim().toLowerCase();

    if (email) {
      await supabase
        .from("profiles")
        .update({
          plan: "business",
        })
        .eq("email", email);
        console.log("UPDATING PLAN", email);
    }
  };

  updatePlan();
}, []);
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-4xl px-6 py-20 text-center">

<div className="mt-6 text-center text-6xl font-black text-cyan-400">
  ✓
</div>

        <h1 className="mt-6 text-5xl font-black">
          Business Upgrade Successful
        </h1>

        <p className="mt-6 text-slate-400">
          Welcome to CyberScoreHub Business.
        </p>

        <div className="mt-10 rounded-3xl bg-white/[0.04] p-8">

          <div>✓ Unlimited Assessments</div>
          <div className="mt-3">✓ Historical Reports</div>
          <div className="mt-3">✓ Team Access</div>
          <div className="mt-3">✓ Trend Tracking</div>

        </div>

<button
  onClick={() => {
    window.location.href = "/";
  }}
  style={{
    background: "#C6FF00",
    color: "#000",
    width: "320px",
    padding: "18px",
    borderRadius: "16px",
    fontSize: "24px",
    fontWeight: 900,
    cursor: "pointer",
    marginTop: "40px",
    border: "none",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  Back To Home
</button>

      </div>

    </main>
  );
}