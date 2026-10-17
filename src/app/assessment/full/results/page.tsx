"use client";

import { useEffect, useState } from "react";
import { CCR_FULL_QUESTIONS } from "@/lib/assessment/full-questions";
import { classifyExposure } from "@/lib/assessment/scoring";

export default function FullAssessmentResultsPage() {
const [answers, setAnswers] = useState<Record<string, string>>({});

const [businessProfile, setBusinessProfile] = useState<{
  organisationName: string;
  industry: string;
  organisationSize: string;
  country: string;
} | null>(null);
const [isLoaded, setIsLoaded] = useState(false);
const [hasLoadError, setHasLoadError] = useState(false);
  const formatIndustry = (value: string) => {
    const labels: Record<string, string> = {
      technology: "Technology",
      "financial-services": "Financial Services",
      healthcare: "Healthcare",
      education: "Education",
      retail: "Retail",
      manufacturing: "Manufacturing",
      "professional-services": "Professional Services",
      other: "Other",
    };

    return labels[value] ?? value;
  };
  const formatOrganisationSize = (value: string) => {
  const labels: Record<string, string> = {
    "1-10": "1–10 employees",
    "11-50": "11–50 employees",
    "51-250": "51–250 employees",
    "251-1000": "251–1,000 employees",
    "1000+": "1,000+ employees",
  };

  return labels[value] ?? value;
};
useEffect(() => {
  const storedAnswers = localStorage.getItem("ccr-full-assessment-answers");
  const storedBusinessProfile = localStorage.getItem(
    "ccr-full-business-profile"
  );

try {
  if (storedAnswers) {
    setAnswers(JSON.parse(storedAnswers));
  }

  if (storedBusinessProfile) {
    setBusinessProfile(JSON.parse(storedBusinessProfile));
  }
} catch (error) {
  console.error("Failed to load assessment data", error);

  localStorage.removeItem("ccr-full-assessment-answers");
  localStorage.removeItem("ccr-full-business-profile");

setHasLoadError(true);
  return;
}
setIsLoaded(true);
}, []);
useEffect(() => {
  if (!isLoaded) {
    return;
  }

  if (hasLoadError) {
    window.location.href = "/assessment/full/business-profile";
    return;
  }

  const answeredQuestions = Object.keys(answers).length;

  if (answeredQuestions === 0) {
    window.location.href = "/assessment/full/business-profile";
    return;
  }

  if (answeredQuestions < CCR_FULL_QUESTIONS.length) {
    window.location.href = "/assessment/full/questions";
  }
}, [answers, isLoaded, hasLoadError]);

const startNewAssessment = () => {
  localStorage.removeItem("ccr-full-assessment-answers");
  window.location.href = "/assessment/full/business-profile";
};

const totalWeight = CCR_FULL_QUESTIONS.reduce(
    (total, question) => total + question.weight,
    0
  );

  const earnedWeight = CCR_FULL_QUESTIONS.reduce((total, question) => {
    const selectedAnswerId = answers[question.id];

    const selectedOption = question.answerOptions.find(
      (option) => option.id === selectedAnswerId
    );

    if (!selectedOption) {
      return total;
    }

    return total + selectedOption.score * question.weight;
  }, 0);

const cyberResilienceScore =
  totalWeight > 0
    ? Math.round((earnedWeight / totalWeight) * 100)
    : 0;

const exposure = classifyExposure(cyberResilienceScore);
const exposureClassName =
  exposure === "LOW"
    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
    : exposure === "MODERATE"
      ? "border-lime-400/30 bg-[#0a0f08]/10 text-lime-300"
      : exposure === "ELEVATED"
        ? "border-amber-400/30 bg-[#0a0f08] text-amber-300"
        : "border-red-400/30 bg-red-400/10 text-red-300";
      const getDomainScore = (domainId: string) => {
  const domainQuestions = CCR_FULL_QUESTIONS.filter(
    (question) => question.domainId === domainId
  );

  const domainTotalWeight = domainQuestions.reduce(
    (total, question) => total + question.weight,
    0
  );

  const domainEarnedWeight = domainQuestions.reduce((total, question) => {
    const selectedAnswerId = answers[question.id];

    const selectedOption = question.answerOptions.find(
      (option) => option.id === selectedAnswerId
    );

    if (!selectedOption) {
      return total;
    }

    return total + selectedOption.score * question.weight;
  }, 0);

  return domainTotalWeight > 0
    ? Math.round((domainEarnedWeight / domainTotalWeight) * 100)
    : 0;
};
const domainScores = ["GOV", "AST", "IAM", "END", "NET"].map((domain) => ({
  domain,
  score: getDomainScore(domain),
}));
const weakestDomain = domainScores.reduce((weakest, current) =>
  current.score < weakest.score ? current : weakest
);
const strongestDomain = domainScores.reduce((strongest, current) =>
  current.score > strongest.score ? current : strongest
);

const keyFindings = CCR_FULL_QUESTIONS.flatMap((question) => {
  const selectedAnswerId = answers[question.id];

  const selectedOption = question.answerOptions.find(
    (option) => option.id === selectedAnswerId
  );

  if (!selectedOption || selectedOption.score >= 1) {
    return [];
  }

  return [
    {
      questionId: question.id,
      domainId: question.domainId,
      controlName: question.controlNameEn,
      priority: question.riskPriority,
      score: selectedOption.score,
      title: question.findingTitleEn,
      recommendation: question.recommendationEn,
      actionTimeframe: question.actionTimeframe,
      frameworkMappings: question.frameworkMappings,
    },
  ];
});
const domainInsights = domainScores.map((domainScore) => {
  const findings = keyFindings.filter(
    (finding) => finding.domainId === domainScore.domain
  );

  const highPriorityFindings = findings.filter(
    (finding) =>
      finding.priority === "HIGH" || finding.priority === "CRITICAL"
  );

  return {
    ...domainScore,
    findingsCount: findings.length,
    highPriorityFindingsCount: highPriorityFindings.length,
  };
});

const priorityOrder = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

const prioritizedFindings = [...keyFindings].sort((a, b) => {
  const priorityDifference =
    priorityOrder[b.priority] - priorityOrder[a.priority];

  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  return a.score - b.score;
});
const highPriorityFindings = keyFindings.filter(
  (finding) => finding.priority === "HIGH" || finding.priority === "CRITICAL"
);
const actionTimeframeLabels = {
  DO_NOW: "Do Now",
  NEXT_30_DAYS: "Next 30 Days",
  NEXT_90_DAYS: "Next 90 Days",
  PLAN: "Plan",
};
const remediationRoadmap = [
  {
    timeframe: "DO_NOW",
    label: "Do Now",
  },
  {
    timeframe: "NEXT_30_DAYS",
    label: "Next 30 Days",
  },
  {
    timeframe: "NEXT_90_DAYS",
    label: "Next 90 Days",
  },
  {
    timeframe: "PLAN",
    label: "Plan",
  },
].map((stage) => ({
  ...stage,
  findings: prioritizedFindings.filter(
    (finding) => finding.actionTimeframe === stage.timeframe
  ),
}));
const priorityFrameworkMappings = prioritizedFindings
  .slice(0, 5)
  .flatMap((finding) =>
    finding.frameworkMappings.map((mapping) => ({
      questionId: finding.questionId,
      domainId: finding.domainId,
      framework: mapping.framework,
      reference: mapping.reference,
    }))
  );

const radarScores = {
  GOV: domainInsights.find((d) => d.domain === "GOV")?.score ?? 0,
  AST: domainInsights.find((d) => d.domain === "AST")?.score ?? 0,
  IAM: domainInsights.find((d) => d.domain === "IAM")?.score ?? 0,
  END: domainInsights.find((d) => d.domain === "END")?.score ?? 0,
  NET: domainInsights.find((d) => d.domain === "NET")?.score ?? 0,
};

const scale = (score: number) => score / 100;

const gov = scale(radarScores.GOV);
const ast = scale(radarScores.AST);
const iam = scale(radarScores.IAM);
const end = scale(radarScores.END);
const net = scale(radarScores.NET);

const radarPoints = [
  `${50},${50 - gov * 60}`,
  `${50 + ast * 58},${50 - ast * 18}`,
  `${50 + iam * 38},${50 + iam * 50}`,
  `${50 - end * 38},${50 + end * 50}`,
  `${50 - net * 58},${50 - net * 18}`,
].join(" ");

return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#050505] to-[#0b0b0b] text-white print:text-sm">
<div className="mx-auto max-w-5xl px-6 py-10 print:px-3 print:py-4">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300 drop-shadow-[0_0_12px_rgba(198,255,0,0.9)]">
       CyberScoreHub Platform
        </div>

<h1 className="mt-2 text-4xl font-black text-white drop-shadow-[0_0_18px_rgba(198,255,0,0.45)]
">
Cyber Resilience Assessment Report

</h1>
<div className="mt-6 print:hidden">
  <button
    type="button"
    onClick={() => window.print()}
    className="rounded-xl bg-[#0a0f08] px-5 py-3 font-bold text-white shadow-[0_0_20px_rgba(198,255,0,0.6)] transition hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(198,255,0,0.8)]"
  >
    Print / Save as PDF
  </button>
</div>
<p className="mt-5 max-w-3xl leading-7 text-slate-400">
  Your full cyber security assessment is complete. Review your overall
  assessment status, domain performance, key findings and recommended
  improvement priorities.
</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-lime-400/40 bg-[#0a0f08]
/10 p-4 shadow-[0_0_20px_rgba(198,255,0,0.35)]">
    <div className="text-xs font-semibold uppercase tracking-wider text-lime-300 drop-shadow-[0_0_8px_rgba(198,255,0,0.9)]">
      Overall Score
    </div>
    <div className="mt-2 text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(198,255,0,0.5)]">
   {cyberResilienceScore}
    </div>
  </div>

  <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
    <div className="text-xs font-semibold uppercase tracking-wider text-lime-300">
      Exposure
    </div>
    <div className="mt-2 text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(198,255,0,0.5)]">
  {exposure}
    </div>
  </div>

  <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
    <div className="text-xs font-semibold uppercase tracking-wider text-lime-300">
      Security Gaps
    </div>
    <div className="mt-2 text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(198,255,0,0.5)]">
   {keyFindings.length}
    </div>
  </div>

  <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
<div className="text-xs font-semibold uppercase tracking-wider text-lime-300">
  High Priority Gaps
</div>

<div className="mt-2 text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(198,255,0,0.5)]">
  {highPriorityFindings.length}
</div>
  </div>
</div>
<section className="mt-4 rounded-3xl border border-lime-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-5">
<div className="grid gap-3 md:grid-cols-2">
    <div>
      <div className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
        Executive Summary
      </div>

   <h2 className="mt-2 text-2xl font-black text-white">
        Cyber Resilience Assessment
      </h2>

  <p className="mt-2 text-sm text-slate-400">
        Executive cyber resilience assessment and remediation roadmap for
        organisational security improvement.
      </p>

      {businessProfile && (
  <div className="mt-2">
          <div className="text-xl font-bold text-white">
            {businessProfile.organisationName}
          </div>

          <div className="mt-1 text-slate-400">
            {formatIndustry(businessProfile.industry)}
          </div>
        </div>
      )}
    </div>
<div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08] p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-lime-300">
        Cyber Resilience Score
      </div>

<div className="mt-2 text-6xl font-black text-lime-300">
  {cyberResilienceScore}
</div>

      <div
  className={`mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider ${exposureClassName}`}
>
        {exposure} Exposure
      </div>
      <div className="mt-6">
  <div className="mb-2 flex justify-between text-xs font-semibold uppercase text-slate-500">
<span className="text-emerald-400">Low</span>
<span className="text-lime-400">Moderate</span>
<span className="text-amber-400">Elevated</span>
<span className="text-red-400">High</span>
  </div>

<div className="relative h-4 rounded-full bg-slate-800 shadow-inner">

    <div
      className="h-3 rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500"
      style={{ width: "100%" }}
    />

    <div
      className="absolute top-1/2 h-6 w-6
 -translate-y-1/2 rounded-full border-2 border-white bg-lime-300 shadow-lg"
      style={{ left: `${cyberResilienceScore}%` }}
    />
  </div>

<div className="mt-6 text-center border-t border-lime-400/20 pt-4">
  <div className="text-4xl font-black text-lime-300">
    {cyberResilienceScore}
  </div>

  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
    Overall Cyber Resilience Score
  </div>
</div>
</div>
    </div>
  </div>
</section>
<section className="mt-10 break-inside-avoid rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8 print:p-4">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Organisation Profile
  </div>

<p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
    Business context associated with this cyber resilience assessment.
  </p>
  {businessProfile && (
<div className="mt-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Organisation
      </div>

<div className="mt-2 font-bold text-white">
  {businessProfile.organisationName}
</div>
    </div>

    <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Industry
      </div>

      <div className="mt-2 font-bold text-white">
        {formatIndustry(businessProfile.industry)}
      </div>
    </div>

    <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Organisation Size
      </div>

<div className="mt-2 font-bold text-white">
  {formatOrganisationSize(businessProfile.organisationSize)}
</div>
    </div>

    <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Country / Region
      </div>

      <div className="mt-2 font-bold text-white">
        {businessProfile.country}
      </div>
    </div>
  </div>
)}
</section>
<section className="mt-10 break-inside-avoid rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8
">
<div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
  Executive Summary
</div>

<p className="mt-3 max-w-3xl leading-7 text-slate-400">
  A concise overview of your organisation's current cyber resilience
  position and highest-priority assessment outcomes.
</p>
  <p className="mt-4 max-w-4xl rounded-2xl border border-lime-400/20 bg-[#0a0f08] p-5 leading-7 text-slate-300">
  Your assessment indicates{" "}
  <span className="font-bold text-white">{exposure} exposure</span> with a
  Cyber Resilience Score of{" "}
  <span className="font-bold text-lime-300">
    {cyberResilienceScore}/100
  </span>
  .{" "}
  <span className="font-bold text-white">{weakestDomain.domain}</span> is the
  lowest-performing domain at{" "}
  <span className="font-bold text-amber-300">
    {weakestDomain.score}/100
  </span>{" "}
  and should receive early remediation attention. The assessment identified{" "}
  <span className="font-bold text-white">{keyFindings.length}</span> security
  gaps, including{" "}
  <span className="font-bold text-red-300">
    {highPriorityFindings.length}
  </span>{" "}
  high-priority gaps.
</p>
<div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
<div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]/[0.06] p-4 min-h-[140px] flex flex-col justify-center shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-5xl font-black text-lime-300">
  {cyberResilienceScore}
</div>

<div className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
  Cyber Resilience Score
</div>

<div className="mt-1 text-xs text-lime-400">
  out of 100
</div>
</div>

<div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-5xl font-black text-lime-300">
  {exposure}
</div>

<div className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
  Exposure
</div>
</div>

<div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-5xl font-black text-lime-300">
  {keyFindings.length}
</div>
<div className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
  Security Gaps
</div>
    </div>

   <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]/[0.06] p-4 min-h-[140px] flex flex-col justify-center shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-5xl font-black text-lime-300">
  {highPriorityFindings.length}
</div>
<div className="mt-2 text-sm font-semibold uppercase tracking-wider text-lime-300">
  High-Priority Gaps
</div>
    </div>

<div className="rounded-2xl border border-amber-400/20 bg-[#0a0f08] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-5xl font-black text-lime-300">
  {weakestDomain.score}
</div>
<div className="mt-2 text-lg font-bold text-lime-300">
  {{
    GOV: "Governance",
    AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[weakestDomain.domain] || weakestDomain.domain}
</div>

<div className="mt-3 text-sm font-semibold uppercase tracking-wider text-lime-300">
 Assets
</div>

<div className="mt-1 text-lg font-bold text-lime-300">
  {{
    GOV: "Governance",
    AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[weakestDomain.domain] || weakestDomain.domain}
</div>
</div>

</div>

</section>

<section className="mt-10 break-inside-avoid rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-6">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Overall Assessment
  </div>

<div className="mt-6 flex items-end justify-between gap-6">
  <div>
<div className="text-3xl font-black text-lime-300">
  Assessment Complete
</div>
<div className="mt-2 text-lime-300">
  30 of 30 questions completed
</div>

</div>

<div className="text-5xl font-black text-lime-300">
  100%
</div>
</div>
<div className="mt-8 grid gap-4 border-t border-lime-400/20 pt-6 sm:grid-cols-5">
  {domainInsights.map((domain) => (
    <div
      key={domain.domain}
      className="rounded-2xl border border-lime-400/20 bg-[#0a0f08] px-4 py-5 text-center"
    >
<div className="text-lg font-bold text-lime-300">
  {{
  GOV: "Governance",
  AST: "Assets",
  IAM: "Identity & Access",
  END: "Endpoints",
  NET: "Network Security",
}[domain.domain] || domain.domain}
</div>

<div className="mt-3 text-3xl font-black text-lime-400">
  ✓
</div>

<div className="mt-1 text-xs uppercase tracking-wider text-lime-300">
  Complete
</div>
    </div>
  ))}
</div>
        </section>
<section className="mt-8 break-inside-avoid rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
<div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
  Cyber Resilience Radar
</div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Your overall score reflects the weighted strength of the cyber security
    controls assessed across all five domains.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
">
<div className="text-sm text-lime-300">
  Overall Position
</div>

      <div className="mt-2 text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(198,255,0,0.5)]">
        {cyberResilienceScore} / 100
      </div>

      <div
        className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${exposureClassName}`}
      >
        {exposure} Exposure
      </div>
    </div>
<div className="rounded-2xl border border-lime-400/20 bg-[#0a0f08]/[0.06] p-4 min-h-[140px] flex flex-col justify-center shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm">
<div className="text-sm font-semibold text-lime-300">
  Lowest-Performing Domain
</div>

      <div className="mt-2 text-3xl font-black text-amber-300">
      {{
  GOV: "Governance",
  AST: "Assets",
  IAM: "Identity & Access",
  END: "Endpoints",
  NET: "Network Security",
}[weakestDomain.domain] || weakestDomain.domain}
      </div>

<div className="mt-3 text-2xl font-black text-white">
  {weakestDomain.score} / 100
</div>


    </div>

    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-2">
<div className="text-sm font-semibold text-lime-300">
  Highest-Performing Domain
</div>


      <div className="mt-2 text-3xl font-black text-emerald-300">

      {{
  GOV: "Governance",
  AST: "Assets",
  IAM: "Identity & Access",
  END: "Endpoints",
  NET: "Network Security",
}[strongestDomain.domain] || strongestDomain.domain}
      </div>

      <div className="mt-3 text-2xl font-black text-white">
        {strongestDomain.score} / 100
      </div>
    </div>
  </div>

  <p className="mt-6 max-w-4xl leading-7 text-slate-300">
    Improvement activity should prioritise{" "}
    <span className="font-semibold text-white">
      {weakestDomain.domain}
    </span>{" "}
    while maintaining the comparatively stronger controls identified in{" "}
    <span className="font-semibold text-white">
      {{
  GOV: "Governance",
  AST: "Assets",
  IAM: "Identity & Access",
  END: "Endpoints",
  NET: "Network Security",
}[strongestDomain.domain] || strongestDomain.domain}
    </span>
  </p>
</section>
<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Cyber Resilience by Domain
  </div>

  <p className="mt-3 text-slate-400">
    Comparative view of cyber resilience scores across all assessment domains.
  </p>

<div className="mt-4 space-y-3">
    {[...domainInsights]
      .sort((a, b) => b.score - a.score)
      .map((domain) => (
        <div key={`chart-${domain.domain}`}>
<div className="mb-2 flex items-center justify-between">
<span className="font-bold text-lime-300">
  {{
    GOV: "Governance",
    AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[domain.domain] || domain.domain}
</span>

  <span className="font-bold text-lime-300">
    {domain.score}
  </span>
</div>

<div className="h-3 overflow-hidden rounded-full bg-slate-800">
<div
  className="h-full rounded-full bg-gradient-to-r from-lime-500 to-lime-300"
  style={{ width: `${domain.score}%` }}
/>
</div>

        </div>
      ))}
  </div>
</section>
<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
<div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
  Cyber Resilience Radar
</div>

  <p className="mt-3 text-slate-400">
    Visual overview of domain resilience across all assessment domains.
  </p>
  <div className="mt-8 flex justify-center">
  <div className="relative h-80 w-80">

    <div className="absolute left-1/2 top-0 -translate-x-1/2 text-sm font-bold text-lime-300">
      GOV
    </div>

    <div className="absolute right-0 top-1/4 text-sm font-bold text-lime-300">
      AST
    </div>

    <div className="absolute right-10 bottom-12 text-sm font-bold text-lime-300">
      IAM
    </div>

    <div className="absolute left-10 bottom-12 text-sm font-bold text-lime-300">
      END
    </div>

    <div className="absolute left-0 top-1/4 text-sm font-bold text-lime-300">
      NET
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute h-px w-64 bg-[#0a0f08]/20" />

<div className="absolute h-64 w-px bg-[#0a0f08]/20" />

<div
  className="absolute h-px w-64 bg-[#0a0f08]/10 rotate-45"
 />
  <svg
 className="absolute inset-0 h-full w-full drop-shadow-[0_0_20px_rgba(198,255,0,0.6)]"
  viewBox="0 0 100 100"
>
<polygon
  points={radarPoints}
fill="rgba(198,255,0,0.25)"
  stroke="rgb(198,255,0)"
strokeWidth="2"

/>
</svg>
<div
  className="absolute h-px w-64 bg-[#0a0f08]/10 -rotate-45"
 />
    <div className="h-80 w-80 rounded-full border border-lime-400/25" />
 <div className="absolute h-60 w-60 rounded-full border border-lime-400/20" />
<div className="absolute h-40 w-40 rounded-full border border-lime-400/20" />
   <div className="absolute h-20 w-20 rounded-full border border-lime-400/20" />
    </div>
  </div>

</div>
</section>

  <section className="mt-8 break-inside-avoid rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Risk Heatmap
  </div>

  <p className="mt-3 text-slate-400">
    Visual representation of relative domain risk based on current assessment scores.
  </p>

  <div className="mt-6 space-y-4">
    {domainInsights.map((domain) => (
      <div key={`heatmap-${domain.domain}`}>
        <div className="mb-2 flex items-center justify-between">
<span className="font-bold text-lime-300">
  {{
    GOV: "Governance",
    AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[domain.domain] || domain.domain}
</span>


          <span className="text-sm font-semibold text-slate-400">
            {domain.score}/100
          </span>
        </div>

        <div className="h-5 overflow-hidden rounded-lg bg-slate-800">
          <div
            className="h-full rounded-lg bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500"
            style={{ width: `${100 - domain.score}%` }}
          />
        </div>
        <div className="mt-1 text-xs text-slate-500">
          Higher fill indicates higher risk exposure
        </div>
      </div>
    ))}
  </div>
</section>
<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Domain Risk Profile
  </div>

<p className="mt-3 max-w-3xl leading-7 text-slate-400">
  Domain scores and security-gap concentrations provide complementary views of
  control performance and remediation needs across the assessment.
</p>

  <div className="mt-6 space-y-3">
{domainInsights.map((domain) => (
  <div
    key={domain.domain}
    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-lime-400/20 bg-[#0a0f08] px-5 py-4"
  >
    <div className="flex items-center gap-4">
      <div>
<div className="font-bold text-lime-300">
  {{
    GOV: "Governance",
    AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[domain.domain] || domain.domain}
</div>

        <div className="mt-1 text-sm text-slate-400">
          {domain.findingsCount} security gaps ·{" "}
          {domain.highPriorityFindingsCount} high-priority
        </div>
      </div>
    </div>

      <div className="text-right">
        <div className="text-xl font-black text-lime-300">
          {domain.score} / 100
        </div>

        <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
          Domain Score
        </div>
      </div>
    </div>
  ))}
</div>
</section>

<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Priority Security Gaps
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    The following security gaps have been prioritised based on control risk
    priority and your assessment responses.
  </p>

  <div className="mt-6 space-y-4">
    {prioritizedFindings.slice(0, 5).map((finding) => (
      <div
        key={finding.questionId}
className="rounded-2xl border border-lime-400/20 bg-[#0a0f08] p-5 shadow-[0_0_15px_rgba(198,255,0,0.12)] backdrop-blur-sm"
>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-red-300">
            {finding.priority}
          </div>

<div className="text-xs font-semibold uppercase tracking-wider text-lime-300">
            {finding.domainId}
          </div>

        </div>

        <h3 className="mt-3 text-lg font-bold text-white">
          {finding.title}
        </h3>

        <div className="mt-2 text-sm text-slate-400">
          {finding.controlName}
        </div>
      </div>
    ))}
  </div>
</section>
<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Recommended Actions
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Focus first on the actions associated with your highest-priority security
    gaps.
  </p>

  <div className="mt-6 space-y-4">
    {prioritizedFindings.slice(0, 5).map((finding) => (
      <div
        key={finding.questionId}
        className="rounded-2xl border border-lime-400/20 bg-[#0a0f08] v"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-lime-400/20 bg-[#0a0f08]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {actionTimeframeLabels[finding.actionTimeframe]}
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {finding.domainId}
          </div>
        </div>

        <h3 className="mt-3 text-lg font-bold text-white">
          {finding.controlName}
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {finding.recommendation}
        </p>
      </div>
    ))}
  </div>
</section>


    <section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Remediation Roadmap
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Security improvements are grouped by recommended action timeframe to
    support practical remediation planning.
  </p>

<div className="mt-6 space-y-6">
    {remediationRoadmap.map((stage) => (
<div
  key={stage.timeframe}
  className="relative pl-10 rounded-2xl border border-lime-400/20 bg-[#0a0f08]
/[0.06] p-2 shadow-[0_0_15px_rgba(198,255,0,0.15)] backdrop-blur-sm
Organisation Profil"
>
  <div className="absolute left-4 top-5 h-full w-px bg-[#0a0f08]
/30" />

  <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-[#0a0f08] ring-4 ring-lime-400/20" /
      >
<div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime-400/20 pb-4">
<div className="text-sm font-bold uppercase tracking-wider text-lime-300">
  {stage.label}
</div>

<div className="flex items-baseline gap-2">
    <span className="text-2xl font-black text-white">
      {stage.findings.length}
    </span>

    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
      Actions
    </span>
  </div>
</div>
        <div className="mt-5 space-y-3">
  {stage.findings.slice(0, 3).map((finding) => (
    <div
      key={finding.questionId}
      className="rounded-xl border border-lime-400/20 bg-[#07111f]/60 p-4"
    >
<div>
  <span className="rounded-full border border-lime-400/20 bg-[#0a0f08]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
    {finding.priority} • {finding.domainId}
  </span>
</div>

      <div className="mt-3 text-sm font-semibold leading-6 text-white">
        {finding.controlName}
      </div>


    </div>
  ))}

  {stage.findings.length > 3 && (
    <div className="text-sm font-semibold text-slate-500">
      +{stage.findings.length - 3} more actions
    </div>
  )}

  {stage.findings.length === 0 && (
    <div className="rounded-xl border border-lime-400/20 bg-white/[0.02] p-4 text-sm text-slate-500">
      No actions currently identified for this timeframe.
    </div>
  )}
</div>
      </div>
    ))}
  </div>
</section>

<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8 print:p-4
">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Framework Alignment
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Priority security gaps are mapped to recognised cyber security
    frameworks to support remediation planning and governance review.
  </p>

  <div className="mt-6 space-y-3">
    {priorityFrameworkMappings.map((mapping) => (
      <div
        key={`${mapping.questionId}-${mapping.framework}-${mapping.reference}`}
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-lime-400/20 bg-[#0a0f08] px-5 py-4"
      >
        <div>
          <div className="text-sm font-bold text-white">
            {mapping.framework}
          </div>

          <div className="mt-1 text-xs text-slate-500">
          {mapping.domainId}
          </div>
        </div>

        <div className="rounded-lg border border-lime-400/20 bg-[#0a0f08]/10 px-3 py-2 text-sm font-semibold text-lime-300">
          {mapping.reference}
        </div>
      </div>
    ))}
  </div>
</section>

<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Assessment Actions
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Start a new full assessment when you are ready to reassess your cyber
    resilience position.
  </p>

  <button
    type="button"
    onClick={startNewAssessment}
className="mt-6 rounded-xl border border-lime-400/30 bg-[#0a0f08]/10 px-6 py-3 font-bold text-lime-300 transition hover:bg-[#0a0f08]/20 print:hidden"
  >
    Start New Assessment
  </button>
</section>

<div className="mt-12 border-t border-slate-300 pt-4 text-center text-xs text-slate-500 print:text-slate-700">
  CyberScoreHub Cyber Resilience Assessment Report
</div>

      </div>
    </main>
  );
}