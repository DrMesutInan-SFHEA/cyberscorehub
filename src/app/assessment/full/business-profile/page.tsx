"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FullAssessmentBusinessProfilePage() {
  const [organisationName, setOrganisationName] = useState("");
  const [industry, setIndustry] = useState("");
  const [organisationSize, setOrganisationSize] = useState("");
  const [country, setCountry] = useState("");
useEffect(() => {
  const storedBusinessProfile = localStorage.getItem(
    "ccr-full-business-profile"
  );

  if (!storedBusinessProfile) {
    return;
  }

  const savedBusinessProfile = JSON.parse(storedBusinessProfile) as {
    organisationName: string;
    industry: string;
    organisationSize: string;
    country: string;
  };

  setOrganisationName(savedBusinessProfile.organisationName);
  setIndustry(savedBusinessProfile.industry);
  setOrganisationSize(savedBusinessProfile.organisationSize);
  setCountry(savedBusinessProfile.country);
}, []);
  const saveBusinessProfile = () => {
    localStorage.setItem(
      "ccr-full-business-profile",
      JSON.stringify({
        organisationName,
        industry,
        organisationSize,
        country,
      })
    );
  };

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
<div className="text-center">
  <h1 className="text-5xl font-black text-white">
    CyberScoreHub Full Assessment
  </h1>

  <h2 className="mt-4 text-3xl font-bold text-cyan-400">
    Business Profile
  </h2>

  <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
    Tell us a little about your organisation before starting the full cyber security assessment.
  </p>
</div>

<div className="mt-8 grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
    <div className="text-2xl font-black text-cyan-400">30</div>
    <div className="mt-1 text-sm text-slate-300">
      Assessment Controls
    </div>
  </div>

  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
   <div className="text-center text-2xl font-black text-cyan-400">5</div>
   <div className="mt-1 text-center text-sm text-slate-300">
      Security Domains
    </div>
  </div>

  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
    <div className="text-2xl font-black text-cyan-400">1</div>
    <div className="mt-1 text-sm text-slate-300">
      Personalised Report
    </div>
  </div>
</div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xl font-bold">
            Organisation Information
          </div>

          <p className="mt-2 text-slate-400">
            Your business profile will help tailor the assessment to your
            organisation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="organisationName"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Organisation Name
              </label>

           <input
  id="organisationName"
  name="organisationName"
  type="text"
  placeholder="Enter organisation name"
  value={organisationName}
  onChange={(event) => setOrganisationName(event.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
/>
            </div>

            <div>
              <label
                htmlFor="industry"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Industry
              </label>

<select
  id="industry"
  name="industry"
  value={industry}
  onChange={(event) => setIndustry(event.target.value)}
  className="w-full rounded-xl border border-white/10 bg-[#0d1929] px-4 py-3 text-white outline-none focus:border-cyan-400"
>
                <option value="" disabled>
                  Select industry
                </option>
                <option value="technology">Technology</option>
                <option value="financial-services">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="professional-services">
                  Professional Services
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="organisationSize"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Organisation Size
              </label>

<select
  id="organisationSize"
  name="organisationSize"
  value={organisationSize}
  onChange={(event) => setOrganisationSize(event.target.value)}
  className="w-full rounded-xl border border-white/10 bg-[#0d1929] px-4 py-3 text-white outline-none focus:border-cyan-400"
>
                <option value="" disabled>
                  Select organisation size
                </option>
<option value="1-10">1–10 employees</option>
<option value="11-50">11–50 employees</option>
<option value="51-250">51–250 employees</option>
<option value="251-1000">251–1,000 employees</option>
                <option value="1000+">1,000+ employees</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Country / Region
              </label>

<input
  id="country"
  name="country"
  type="text"
  placeholder="Enter country or region"
  value={country}
  onChange={(event) => setCountry(event.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
/>
            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
<Link
  href="/assessment/full/questions"
  onClick={saveBusinessProfile}
className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-[#07111f] transition hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
>
  Start Full Assessment
              </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
