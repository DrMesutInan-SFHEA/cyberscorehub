"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = async () => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log("SIGNUP DATA", data);
  console.log("SIGNUP ERROR", error);

if (error) {
  alert(error.message);
  return;
}

await supabase.from("profiles").insert([
  {
    email,
    plan: "free",
  },
]);

alert("Verification email sent.");
};

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-md px-6 py-20">

        <h1 className="text-center text-5xl font-black">
          Create Account
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Start tracking your cyber resilience journey.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="mt-10 w-full rounded-xl bg-white/5 p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
onChange={(e) => setEmail(e.target.value)}
          className="mt-4 w-full rounded-xl bg-white/5 p-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-xl bg-white/5 p-4"
        />

<button
  onClick={handleRegister}
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
  Create Account
</button>

      </div>

    </main>
  );
}