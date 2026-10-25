"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VerifyEmailPage() {
  const [email, setEmail] = useState("");

  const handleResend = async () => {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Verification email sent.");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-md px-6 py-20 text-center">
        <div className="text-7xl">
          📧
        </div>

        <h1 className="mt-6 text-5xl font-black">
          Verify Your Email
        </h1>

        <p className="mt-6 text-slate-400">
          Enter your email address to resend the verification email.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-xl bg-white/5 p-4 text-white"
        />

        <button
          onClick={handleResend}
          className="mt-8 w-full rounded-xl bg-[#C6FF00] px-8 py-4 font-bold text-black"
        >
          Resend Verification Email
        </button>
      </div>
    </main>
  );
}