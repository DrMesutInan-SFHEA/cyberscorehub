"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: "http://localhost:3000/login",
      }
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password reset email sent.");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-center text-5xl font-black">
          Reset Password
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Enter your email address and we'll send a reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-10 w-full rounded-xl bg-white/5 p-4"
        />

        <button
          onClick={handleReset}
          className="mt-6 w-full rounded-xl bg-[#C6FF00] px-8 py-4 font-bold text-black"
        >
          Send Reset Link
        </button>
      </div>
    </main>
  );
}