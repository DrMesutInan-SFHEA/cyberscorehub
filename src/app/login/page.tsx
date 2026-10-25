"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

   window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-10">
      <h1 className="text-4xl font-black">Sign In</h1>

      <div className="mt-8 max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-white/5 p-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-white/5 p-4"
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-xl bg-[#C6FF00] px-8 py-4 font-bold text-black"
        >
          Sign In
        </button>
      </div>
    </main>
  );
}