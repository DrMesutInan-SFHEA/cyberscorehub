"use client";

import { useEffect, useState } from "react";
import { CCR_FULL_QUESTIONS } from "@/lib/assessment/full-questions";
import { classifyExposure } from "@/lib/assessment/scoring";
export default function FullAssessmentResultsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const storedAnswers = localStorage.getItem("ccr-full-assessment-answers");

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);
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
      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
      : exposure === "ELEVATED"
        ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
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

const actionTimeframeLabels = {
  DO_NOW: "Do Now",
  NEXT_30_DAYS: "Next 30 Days",
  NEXT_90_DAYS: "Next 90 Days",
  PLAN: "Plan",
};

return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          CCR Full Assessment
        </div>

<h1 className="mt-3 text-4xl font-black">
  Cyber Resilience Report
</h1>

<p className="mt-5 max-w-3xl leading-7 text-slate-400">
  Your full cyber security assessment is complete. Review your overall
  assessment status, domain performance, key findings and recommended
  improvement priorities.
</p>

<section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
    Overall Assessment
  </div>

<div className="mt-6 flex items-end justify-between gap-6">
  <div>
    <div className="text-2xl font-bold text-white">
      Assessment Complete
    </div>

<div className="mt-2 text-slate-400">
  30 of 30 questions completed
</div>



  </div>

  <div className="text-4xl font-black text-cyan-400">
    100%
  </div>
</div>
<div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-5">
  {["GOV", "AST", "IAM", "END", "NET"].map((domain) => (
    <div
      key={domain}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center"
    >
      <div className="text-lg font-bold text-white">
        {domain}
      </div>

      <div className="mt-2 text-sm font-semibold text-cyan-400">
        6 / 6
      </div>

      <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
        Complete
      </div>
    </div>
  ))}
</div>
        </section>
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
    Cyber Resilience Score
  </div>

  <div className="mt-4 flex items-end gap-3">
    <div className="text-6xl font-black text-white">
      {cyberResilienceScore}
    </div>

    <div className="pb-2 text-xl font-semibold text-slate-500">
      / 100
    </div>
  </div>
<div
  className={`mt-6 inline-flex rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider ${exposureClassName}`}
>
  {exposure} Exposure
</div>

  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
    Your score is calculated from your assessment responses and the weighting
    assigned to each cyber security control.
  </p>
</section>
<section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
    Domain Performance
  </div>

  <div className="mt-6 grid gap-4 sm:grid-cols-5">
    {["GOV", "AST", "IAM", "END", "NET"].map((domain) => (
      <div
        key={domain}
        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
      >
        <div className="text-lg font-bold text-white">
          {domain}
        </div>

        <div className="mt-3 text-3xl font-black text-cyan-400">
          {getDomainScore(domain)}
        </div>

        <div className="mt-1 text-sm text-slate-500">
          / 100
        </div>
      </div>
    ))}
  </div>
</section>
<section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
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
        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-red-300">
            {finding.priority}
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {finding.domainId}
          </div>

          <div className="text-xs text-slate-500">
            {finding.questionId}
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
<section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
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
        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
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

      </div>
    </main>
  );
}