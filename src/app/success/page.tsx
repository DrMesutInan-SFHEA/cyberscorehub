"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function SuccessPage() {
  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

console.log("SUCCESS PAGE USER", session?.user?.email);

const email = session?.user?.email?.trim().toLowerCase();

console.log("EMAIL", email);

const { data: profiles } = await supabase
  .from("profiles")
  .select("*");

console.log("ALL PROFILES", profiles);

if (email) {
  const { data, error } = await supabase
    .from("profiles")
    .update({
      plan: "professional",
    })
    .eq("email", email)
    .select();

  console.log("UPDATE DATA", data);
  console.log("UPDATE ERROR", error);
}
    };

    loadUser();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <h1 className="text-center text-5xl font-black">
          Payment Successful
        </h1>

        <div className="mt-6 text-center text-6xl font-black text-cyan-400">
          ✓
        </div>

        <p className="mt-6 text-center text-slate-400">
          Thank you for upgrading to CyberScoreHub Professional.
        </p>

        <div className="mt-12 rounded-2xl bg-white/[0.05] p-5">
          ✓ Professional Plan Activated
        </div>

        <div className="mt-4 rounded-2xl bg-white/[0.05] p-5">
          ✓ Full Assessment Report
        </div>

        <div className="mt-4 rounded-2xl bg-white/[0.05] p-5">
          ✓ Executive Summary
        </div>

        <div className="mt-4 rounded-2xl bg-white/[0.05] p-5">
          ✓ PDF Report Access
        </div>

        <button
          onClick={() => {
            window.location.href =
              "/assessment/full/results?premium=true";
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
          View Full Report
        </button>

      </div>
    </main>
  );
}