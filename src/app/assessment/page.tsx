"use client";

import { useState } from "react";
import { CCR_QUESTIONS } from "@/lib/assessment/questions";
import {
  calculateDomainScores,
  calculateEvidenceConfidence,
  calculateReadinessScore,
  classifyExposure,
} from "@/lib/assessment/scoring";
import {
  generateFindings,
  generateImprovementRoadmap,
  rankFindings,
} from "@/lib/assessment/findings";
import type {
  CCRAssessmentAnswer,
  CCRDomainResult,
  CCRFinding,
} from "@/lib/assessment/types";
``
export default function AssessmentPage() {
  const [step, setStep] = useState(1);

  const [companyName, setCompanyName] = useState("");
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState("");
  const [itEnvironment, setItEnvironment] = useState("");
  const [connectedDevices, setConnectedDevices] = useState("");

  const [answers, setAnswers] = useState<Map<string, string>>(
    () => new Map()
  );
const [result, setResult] = useState<{
  readinessScore: number;
  evidenceConfidence: number;
  exposure: "LOW" | "MODERATE" | "ELEVATED" | "HIGH";
  domainScores: CCRDomainResult[];
  findings: CCRFinding[];
} | null>(null);
  const canContinue =
    companyName.trim() !== "" &&
    sector !== "" &&
    employees !== "" &&
    itEnvironment !== "" &&
    connectedDevices !== "";

  function selectAnswer(questionId: string, answerId: string) {
    setAnswers((currentAnswers) => {
      const updatedAnswers = new Map(currentAnswers);
      updatedAnswers.set(questionId, answerId);
      return updatedAnswers;
    });
  }
  function analyseResults() {
  const assessmentAnswers: CCRAssessmentAnswer[] = Array.from(
    answers.entries()
  ).map(([questionId, answerOptionId]) => ({
    questionId,
    answerOptionId,
    evidenceStatus: "SELF_REPORTED",
  }));

  const readinessScore = calculateReadinessScore(
    CCR_QUESTIONS,
    assessmentAnswers
  );

  const evidenceConfidence = calculateEvidenceConfidence(
    assessmentAnswers
  );

const exposure = classifyExposure(readinessScore);

const domainScores = calculateDomainScores(
  CCR_QUESTIONS,
  assessmentAnswers
);

const findings = generateFindings(
  CCR_QUESTIONS,
  assessmentAnswers
);

setResult({
  readinessScore,
  evidenceConfidence,
  exposure,
  domainScores,
  findings,
});

  setStep(3);
}
if (step === 3 && result) {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              CCR Quick Check
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Cyber Security Results
            </h1>

            <p className="mt-3 text-slate-400">
              Prepared for {companyName}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
            Step 3 of 5
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              CCR Readiness
            </div>

            <div className="mt-3 text-5xl font-black">
              {result.readinessScore}
              <span className="text-xl text-slate-500">
                /100
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              Evidence Confidence
            </div>

            <div className="mt-3 text-5xl font-black">
              {result.evidenceConfidence}
              <span className="text-xl text-slate-500">
                /100
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              Exposure
            </div>

            <div className="mt-3 text-3xl font-black text-cyan-300">
              {result.exposure}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
            Assessment Summary
          </div>

          <div className="mt-4 text-3xl font-black">
            {result.findings.length}
          </div>

          <div className="mt-1 text-slate-400">
            Priority findings identified
          </div>
        </div>
<div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
  <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
    Security Domain Scores
  </div>

  <h2 className="mt-2 text-2xl font-bold">
    Your cyber-security posture by domain
  </h2>

  <p className="mt-3 text-sm leading-6 text-slate-400">
    These scores are calculated from your Quick Check responses and show
    assessed control readiness across the ten CCR security domains.
  </p>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    {result.domainScores.map((domainResult) => {
      const question = CCR_QUESTIONS.find(
        (item) => item.domainId === domainResult.domainId,
      );

      const domainName =
        question?.domainId === "GOV"
          ? "Governance & Risk"
          : question?.domainId === "AST"
            ? "Asset Management"
            : question?.domainId === "IAM"
              ? "Identity & Access"
              : question?.domainId === "END"
                ? "Endpoint & Configuration"
                : question?.domainId === "NET"
                  ? "Network Security"
                  : question?.domainId === "DAT"
                    ? "Data Protection"
                    : question?.domainId === "BCK"
                      ? "Backup & Recovery"
                      : question?.domainId === "IR"
                        ? "Detection & Incident Response"
                        : question?.domainId === "AWR"
                          ? "People & Security Awareness"
                          : question?.domainId === "IOT"
                            ? "IoT & Connected Devices"
                            : domainResult.domainId;

      return (
        <div
          key={domainResult.domainId}
          className="rounded-2xl border border-white/10 bg-[#0b192a] p-5"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="font-semibold text-slate-200">
              {domainName}
            </div>

            <div className="text-lg font-black text-cyan-300">
              {domainResult.score}
              <span className="text-sm text-slate-500">/100</span>
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-cyan-400"
              style={{ width: `${domainResult.score}%` }}
            />
          </div>

          <div className="mt-3 text-xs text-slate-500">
            {domainResult.answeredQuestions} question answered
          </div>
        </div>
      );
    })}
  </div>
</div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold">
            Priority Findings
          </h2>

          <div className="mt-6 space-y-5">
            {result.findings.length === 0 ? (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6 text-emerald-200">
                No control gaps were identified from the answers
                provided in this quick check.
              </div>
            ) : (
              result.findings.map((finding, index) => (
                <div
                  key={`${finding.questionId}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-lg bg-red-400/10 px-3 py-1 text-xs font-bold text-red-300">
                      {finding.priority}
                    </span>

<span className="text-xs font-bold text-cyan-400">
  {finding.actionTimeframe === "DO_NOW"
    ? "DO NOW"
    : finding.actionTimeframe === "NEXT_30_DAYS"
      ? "NEXT 30 DAYS"
      : finding.actionTimeframe === "NEXT_90_DAYS"
        ? "NEXT 90 DAYS"
        : finding.actionTimeframe}
</span>
</div>

<h3 className="mt-4 text-xl font-bold">
  {finding.titleEn}
</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {finding.descriptionEn}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                      Recommended Action
                    </div>

                    <p className="mt-2 leading-7 text-slate-300">
                      {finding.recommendationEn}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-between border-t border-white/10 pt-8">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300"
          >
            ← Review Answers
          </button>

          <button
            type="button"
            onClick={() => setStep(4)}
            className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-[#07111f]"
          >
            Continue to Evidence →
          </button>
        </div>
      </div>
    </main>
  );
}
if (step === 4 && result) {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              CCR Quick Check
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Evidence Review
            </h1>

            <p className="mt-3 text-slate-400">
              Understand how supporting evidence can strengthen confidence in
              your assessed cyber-security posture.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
            Step 4 of 5
          </div>
        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-4/5 rounded-full bg-cyan-400" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              Current Evidence Confidence
            </div>

            <div className="mt-3 text-5xl font-black">
              {result.evidenceConfidence}
              <span className="text-xl text-slate-500">
                /100
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Your Quick Check currently reflects self-reported answers.
              Supporting evidence has not yet been reviewed.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-7">
            <div className="text-sm font-bold text-cyan-400">
              WHY EVIDENCE MATTERS
            </div>

            <p className="mt-4 leading-7 text-slate-300">
              Evidence can help support security claims and provide greater
              confidence in the controls reported during an assessment.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <h2 className="text-2xl font-bold">
            Example Supporting Evidence
          </h2>

          <p className="mt-3 text-slate-400">
            Appropriate evidence depends on the control being assessed.
            Never upload passwords, authentication secrets, API keys or other
            unnecessary sensitive information.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "MFA configuration evidence",
              "Asset inventory",
              "Backup test record",
              "Incident-response plan",
              "Security training record",
              "Connected-device inventory",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#0b192a] p-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
          <div className="font-bold text-amber-300">
            Evidence Upload Coming in the Full Assessment
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            The Quick Check does not currently upload or store evidence.
            Secure evidence handling will be introduced with the protected
            customer account and Evidence Vault.
          </p>
        </div>

        <div className="mt-10 flex justify-between border-t border-white/10 pt-8">
          <button
            type="button"
            onClick={() => setStep(3)}
            className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300"
          >
            ← Back to Results
          </button>

          <button
            type="button"
            onClick={() => setStep(5)}
            className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-[#07111f]"
          >
            View Quick Check Summary →
          </button>
        </div>
      </div>
    </main>
  );
}
if (step === 5 && result) {
  const highFindings = result.findings.filter(
    (finding) =>
      finding.priority === "HIGH" ||
      finding.priority === "CRITICAL"
  );

  const priorityActions = rankFindings(result.findings).slice(0, 3);
  const roadmap = generateImprovementRoadmap(result.findings);
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              CCR Quick Check
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Your Quick Check Summary
            </h1>

            <p className="mt-3 text-slate-400">
              Prepared for {companyName}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
            Step 5 of 5
          </div>
        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-cyan-400" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              CCR Readiness
            </div>

            <div className="mt-3 text-5xl font-black">
              {result.readinessScore}
              <span className="text-xl text-slate-500">
                /100
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              Evidence Confidence
            </div>

            <div className="mt-3 text-5xl font-black">
              {result.evidenceConfidence}
              <span className="text-xl text-slate-500">
                /100
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm text-slate-400">
              Exposure
            </div>

            <div className="mt-3 text-3xl font-black text-cyan-300">
              {result.exposure}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
              Assessment Overview
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">
                  Questions completed
                </span>
                <span className="font-bold">
                  {CCR_QUESTIONS.length}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">
                  Findings identified
                </span>
                <span className="font-bold">
                  {result.findings.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  High-priority findings
                </span>
                <span className="font-bold text-red-300">
                  {highFindings.length}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-7">
            <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
              What This Means
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              Your Quick Check provides an indicative view of your
              organisation&apos;s assessed cyber-security posture based on
              the answers provided.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              It is not a certification, penetration test or guarantee of
              security.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">
            Your Priority Actions
          </h2>

          <p className="mt-3 text-slate-400">
            Start with these actions based on your Quick Check responses.
          </p>

          <div className="mt-6 space-y-4">
            {priorityActions.length === 0 ? (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6 text-emerald-200">
                No priority control gaps were identified in this Quick Check.
              </div>
            ) : (
              priorityActions.map((finding, index) => (
                <div
                  key={`${finding.questionId}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 font-black text-[#07111f]">
                      {index + 1}
                    </span>

                    <span className="rounded-lg bg-red-400/10 px-3 py-1 text-xs font-bold text-red-300">
                      {finding.priority}
                    </span>

<span className="text-xs font-bold text-cyan-400">
  {finding.actionTimeframe === "DO_NOW"
    ? "DO NOW"
    : finding.actionTimeframe === "NEXT_30_DAYS"
      ? "NEXT 30 DAYS"
      : finding.actionTimeframe === "NEXT_90_DAYS"
        ? "NEXT 90 DAYS"
        : finding.actionTimeframe}
</span>
</div>
                  <h3 className="mt-4 text-lg font-bold">
                    {finding.titleEn}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {finding.recommendationEn}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="mt-10">
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
            CCR Improvement Roadmap
          </div>

          <h2 className="mt-2 text-3xl font-black">
            What to improve first
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            Your roadmap is generated from the findings identified in this
            Quick Check and groups recommended actions by suggested timeframe.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: "Do Now",
                description:
                  "Prioritise these actions first based on the current assessment.",
                findings: roadmap.doNow,
                colour: "border-red-400/20 bg-red-400/[0.05]",
                labelColour: "text-red-300",
              },
              {
                title: "Next 30 Days",
                description:
                  "Address these actions as part of your near-term improvement plan.",
                findings: roadmap.next30Days,
                colour: "border-amber-400/20 bg-amber-400/[0.05]",
                labelColour: "text-amber-300",
              },
              {
                title: "Next 90 Days",
                description:
                  "Plan these improvements after immediate and near-term priorities.",
                findings: roadmap.next90Days,
                colour: "border-cyan-400/20 bg-cyan-400/[0.05]",
                labelColour: "text-cyan-300",
              },
              {
                title: "Plan",
                description:
                  "Keep these longer-term improvements visible in your security plan.",
                findings: roadmap.plan,
                colour: "border-blue-400/20 bg-blue-400/[0.05]",
                labelColour: "text-blue-300",
              },
            ].map((roadmapGroup) => (
              <div
                key={roadmapGroup.title}
                className={`rounded-3xl border p-6 ${roadmapGroup.colour}`}
              >
                <div
                  className={`text-sm font-bold uppercase tracking-[0.15em] ${roadmapGroup.labelColour}`}
                >
                  {roadmapGroup.title}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {roadmapGroup.description}
                </p>

                <div className="mt-5 space-y-3">
                  {roadmapGroup.findings.length === 0 ? (
                    <div className="rounded-xl border border-white/10 bg-[#0b192a] p-4 text-sm text-slate-500">
                      No actions currently identified for this timeframe.
                    </div>
                  ) : (
                    roadmapGroup.findings.map((finding, index) => (
                      <div
                        key={`${roadmapGroup.title}-${finding.questionId}-${index}`}
                        className="rounded-xl border border-white/10 bg-[#0b192a] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-slate-300">
                            {index + 1}
                          </span>

                          <div>
                            <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                              {finding.priority}
                            </div>

                            <div className="mt-1 font-semibold leading-6 text-slate-200">
                              {finding.titleEn}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 text-center">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Go Deeper With CCR
          </div>

          <h2 className="mt-4 text-3xl font-black">
            Turn your Quick Check into a practical improvement plan.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            The full CCR assessment will add deeper control analysis,
            supporting evidence, framework mappings, detailed findings and a
            prioritised improvement roadmap.
          </p>

          <button
            type="button"
            className="mt-7 rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-[#07111f]"
          >
            Full CCR Assessment Coming Next
          </button>
        </div>

        <div className="mt-10 flex justify-between border-t border-white/10 pt-8">
          <button
            type="button"
            onClick={() => setStep(4)}
            className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300"
          >
            ← Back to Evidence
          </button>

          <button
            type="button"
            onClick={() => {
              setAnswers(new Map());
              setResult(null);
              setStep(1);
            }}
            className="rounded-xl border border-cyan-400/30 px-6 py-3.5 font-semibold text-cyan-300"
          >
            Start New Quick Check
          </button>
        </div>
      </div>
    </main>
  );
}
  if (step === 2) {
    return (
      <main className="min-h-screen bg-[#07111f] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                CCR Quick Check
              </div>

              <h1 className="mt-3 text-4xl font-black">
                Cyber Security Assessment
              </h1>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
              Step 2 of 5
            </div>
          </div>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            Answer the questions below based on your organisation&apos;s
            current cyber-security practices.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/5 rounded-full bg-cyan-400" />
          </div>

          <div className="mt-10 space-y-6">
            {CCR_QUESTIONS.map((question, index) => (
              <div
                key={question.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400">
                    {question.id}
                  </div>

                  <div className="text-xs text-slate-500">
                    Question {index + 1} of {CCR_QUESTIONS.length}
                  </div>
                </div>

                <h2 className="mt-5 text-xl font-bold leading-8">
                  {question.questionEn}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {question.explanationEn}
                </p>

                <div className="mt-6 grid gap-3">
                  {question.answerOptions.map((option) => {
                    const isSelected =
                      answers.get(question.id) === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          selectAnswer(question.id, option.id)
                        }
                        className={
                          isSelected
                            ? "rounded-xl border border-cyan-400 bg-cyan-400/10 px-5 py-4 text-left text-sm font-semibold text-cyan-200"
                            : "rounded-xl border border-white/10 bg-[#0b192a] px-5 py-4 text-left text-sm text-slate-300 transition hover:border-white/20"
                        }
                      >
                        {option.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300 transition hover:bg-white/5"
            >
              ← Back
            </button>

            <div className="text-sm text-slate-400">
              {answers.size} of {CCR_QUESTIONS.length} answered
            </div>

            <button
              type="button"
              onClick={analyseResults}
              disabled={answers.size !== CCR_QUESTIONS.length}
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-[#07111f] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Analyse Results →
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              CCR Quick Check
            </div>

            <h1 className="mt-3 text-4xl font-black">
              Let&apos;s understand your business.
            </h1>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
            Step 1 of 5
          </div>
        </div>

        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Tell CCR a little about your organisation before starting the
          cyber-security assessment.
        </p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/5 rounded-full bg-cyan-400" />
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <div className="mb-8">
            <div className="text-sm font-bold text-cyan-400">
              BUSINESS PROFILE
            </div>

            <h2 className="mt-2 text-2xl font-bold">
              About your organisation
            </h2>
          </div>

          <div className="grid gap-7">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Company Name
              </label>

              <input
                type="text"
                value={companyName}
                onChange={(event) =>
                  setCompanyName(event.target.value)
                }
                placeholder="Example: ABC Ltd"
                className="w-full rounded-xl border border-white/10 bg-[#0b192a] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Business Sector
              </label>

              <select
                value={sector}
                onChange={(event) => setSector(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0b192a] px-4 py-3.5 text-white outline-none focus:border-cyan-400"
              >
                <option value="">Select a sector</option>
                <option value="professional">
                  Professional Services
                </option>
                <option value="hospitality">Hospitality</option>
                <option value="retail">Retail</option>
                <option value="education">Education</option>
                <option value="property">Property</option>
                <option value="ecommerce">E-commerce</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">
                  Manufacturing
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Number of Employees
              </label>

              <select
                value={employees}
                onChange={(event) =>
                  setEmployees(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b192a] px-4 py-3.5 text-white outline-none focus:border-cyan-400"
              >
                <option value="">
                  Select organisation size
                </option>
                <option value="1-9">1-9</option>
                <option value="10-49">10-49</option>
                <option value="50-249">50-249</option>
                <option value="250+">250+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Primary IT Environment
              </label>

              <select
                value={itEnvironment}
                onChange={(event) =>
                  setItEnvironment(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-[#0b192a] px-4 py-3.5 text-white outline-none focus:border-cyan-400"
              >
                <option value="">
                  Select your primary environment
                </option>
                <option value="m365">Microsoft 365</option>
                <option value="google">
                  Google Workspace
                </option>
                <option value="mixed">
                  Mixed Environment
                </option>
                <option value="other">Other</option>
                <option value="unknown">
                  Don&apos;t know
                </option>
              </select>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold text-slate-200">
                Does your organisation use connected devices?
              </div>

              <p className="mb-4 text-sm leading-6 text-slate-500">
                Examples include CCTV, POS terminals, smart printers,
                sensors, access-control systems and other connected equipment.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["unsure", "Not Sure"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setConnectedDevices(value)}
                    className={
                      connectedDevices === value
                        ? "rounded-xl border border-cyan-400 bg-cyan-400/10 px-5 py-3.5 font-semibold text-cyan-300"
                        : "rounded-xl border border-white/10 bg-[#0b192a] px-5 py-3.5 font-semibold text-slate-300"
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
            <div className="text-sm text-slate-500">
              Complete all fields to continue.
            </div>

            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep(2)}
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-[#07111f] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}