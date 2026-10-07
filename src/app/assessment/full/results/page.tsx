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
    Executive Summary
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    A concise overview of your organisation&apos;s current cyber resilience
    position and highest-priority assessment outcomes.
  </p>
  <p className="mt-4 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-300">
  Your assessment indicates{" "}
  <span className="font-bold text-white">{exposure} exposure</span> with a
  Cyber Resilience Score of{" "}
  <span className="font-bold text-cyan-300">
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
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
<div className="text-3xl font-black text-cyan-400">
  {cyberResilienceScore}
</div>

<div className="mt-1 text-sm text-slate-400">
  Cyber Resilience Score
</div>

<div className="mt-1 text-xs text-slate-500">
  out of 100
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
  <div className="text-3xl font-black text-white">
    {exposure}
  </div>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-3xl font-black text-white">
        {keyFindings.length}
      </div>
      <div className="mt-1 text-sm text-slate-400">
        Security Gaps
      </div>
    </div>

    <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-5">
      <div className="text-3xl font-black text-red-300">
        {highPriorityFindings.length}
      </div>
      <div className="mt-1 text-sm text-slate-400">
        High-Priority Gaps
      </div>
    </div>

    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5">
      <div className="text-lg font-black text-amber-300">
        {weakestDomain.domain}
      </div>
      <div className="mt-1 text-2xl font-black text-white">
        {weakestDomain.score} / 100
      </div>
      <div className="mt-1 text-sm text-slate-400">
        Weakest Domain
      </div>
    </div>
  </div>
</section>
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
  {domainInsights.map((domain) => (
    <div
      key={domain.domain}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center"
    >
      <div className="text-lg font-bold text-white">
        {domain.domain}
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
    Score Interpretation
  </div>

  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
    Your overall score reflects the weighted strength of the cyber security
    controls assessed across all five domains.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-sm text-slate-400">
        Overall Position
      </div>

      <div className="mt-2 text-3xl font-black text-white">
        {cyberResilienceScore} / 100
      </div>

      <div
        className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${exposureClassName}`}
      >
        {exposure} Exposure
      </div>
    </div>

    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5">
      <div className="text-sm text-slate-400">
        Lowest-Performing Domain
      </div>

      <div className="mt-2 text-2xl font-black text-amber-300">
        {weakestDomain.domain}
      </div>

      <div className="mt-1 text-lg font-bold text-white">
        {weakestDomain.score} / 100
      </div>
    </div>

    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
      <div className="text-sm text-slate-400">
        Highest-Performing Domain
      </div>

      <div className="mt-2 text-2xl font-black text-emerald-300">
        {strongestDomain.domain}
      </div>

      <div className="mt-1 text-lg font-bold text-white">
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
      {strongestDomain.domain}
    </span>
    .
  </p>
</section>
<section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
    Domain Performance
  </div>

<div className="mt-6 grid gap-4 sm:grid-cols-5">
  {domainInsights.map((domain) => (
    <div
      key={domain.domain}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
    >
      <div className="text-lg font-bold text-white">
        {domain.domain}
      </div>

<div className="mt-4 flex items-baseline justify-center gap-1">
  <span className="text-3xl font-black text-cyan-400">
    {domain.score}
  </span>

  <span className="text-sm font-semibold text-slate-500">
    / 100
  </span>
</div>

<div className="mt-4 border-t border-white/10 pt-4">
  <div className="text-sm font-semibold text-white">
    {domain.findingsCount} Security Gaps
  </div>

  <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-red-300">
    {domain.highPriorityFindingsCount} High-Priority
  </div>
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

<section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
  <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
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
        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
      >
<div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
  <div className="text-sm font-bold uppercase tracking-wider text-cyan-300">
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
      className="rounded-xl border border-white/10 bg-[#07111f]/60 p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-red-400/20 bg-red-400/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-red-300">
          {finding.priority}
        </span>

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
          {finding.domainId}
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
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-500">
      No actions currently identified for this timeframe.
    </div>
  )}
</div>
      </div>
    ))}
  </div>
</section>
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
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
      >
        <div>
          <div className="text-sm font-bold text-white">
            {mapping.framework}
          </div>

          <div className="mt-1 text-xs text-slate-500">
            {mapping.domainId} • {mapping.questionId}
          </div>
        </div>

        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300">
          {mapping.reference}
        </div>
      </div>
    ))}
  </div>
</section>
      </div>
    </main>
  );
}