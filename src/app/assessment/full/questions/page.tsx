"use client";

import { useEffect, useState } from "react";
import { CCR_FULL_QUESTIONS } from "@/lib/assessment/full-questions";

export default function FullAssessmentQuestionsPage() {
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const currentQuestion = CCR_FULL_QUESTIONS[currentQuestionIndex];
const isLastQuestion = currentQuestionIndex === CCR_FULL_QUESTIONS.length - 1;
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState(0);
const [answers, setAnswers] = useState<Record<string, string>>({});

useEffect(() => {
  const storedAnswers = localStorage.getItem("ccr-full-assessment-answers");

  if (!storedAnswers) {
    return;
  }

  const savedAnswers = JSON.parse(storedAnswers) as Record<string, string>;
  const savedAnswerCount = Object.keys(savedAnswers).length;

  setAnswers(savedAnswers);
  setCompletedQuestions(savedAnswerCount);

  setCurrentQuestionIndex(
    Math.min(savedAnswerCount, CCR_FULL_QUESTIONS.length - 1)
  );
}, []);
useEffect(() => {
  const storedAnswers = localStorage.getItem("ccr-full-assessment-answers");

  if (!storedAnswers) {
    return;
  }

const savedAnswers = JSON.parse(storedAnswers) as Record<string, string>;
const savedAnswerCount = Object.keys(savedAnswers).length;

const restoredQuestionIndex = Math.min(
  savedAnswerCount,
  CCR_FULL_QUESTIONS.length - 1
);

setAnswers(savedAnswers);
setCompletedQuestions(savedAnswerCount);
setCurrentQuestionIndex(restoredQuestionIndex);

const restoredQuestion = CCR_FULL_QUESTIONS[restoredQuestionIndex];

setSelectedAnswerId(
  savedAnswers[restoredQuestion.id] ?? null
);
}, []);
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
<div className="text-center">
  <h1 className="text-5xl font-black text-white">
    CyberScoreHub Full Assessment
  </h1>

  <h2 className="mt-4 text-3xl font-bold text-lime-400">
    Cyber Security Assessment
  </h2>

  <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
    Complete all five security domains to build your cyber resilience
    profile.
  </p>
</div>

        <div className="mt-10 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
<div className="text-center">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
    Assessment Progress
  </div>
</div>

<div className="mt-6 grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5 text-center">
    <div className="text-4xl font-black text-lime-400">
      {Math.round(
        (completedQuestions / CCR_FULL_QUESTIONS.length) * 100
      )}%
    </div>

    <div className="mt-2 text-sm text-slate-300">
      Completion Rate
    </div>
  </div>

  <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5 text-center">
    <div className="text-4xl font-black text-lime-400">
      {completedQuestions}/{CCR_FULL_QUESTIONS.length}
    </div>

    <div className="mt-2 text-sm text-slate-300">
      Questions Completed
    </div>
  </div>

  <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5 text-center">
    <div className="text-4xl font-black text-lime-400">
      5/5
    </div>

    <div className="mt-2 text-sm text-slate-300">
      Security Domains
    </div>
  </div>
</div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-0 rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {["GOV", "AST", "IAM", "END", "NET"].map((domain) => (
            <div
              key={domain}
              className="rounded-2xl border border-lime-400/20 bg-[#0a0f08] p-5 text-center shadow-[0_0_15px_rgba(34,211,238,0.12)]"
            >
<div className="text-base font-bold text-lime-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
  {{
    GOV: "Governance",
   AST: "Assets",
    IAM: "Identity & Access",
    END: "Endpoints",
    NET: "Network Security",
  }[domain]}
</div>

<div className="mt-3 text-4xl font-black text-lime-400">
  ✓
</div>

<div className="mt-2 text-xs font-semibold uppercase tracking-wider text-lime-400">
  Complete
</div>
            </div>
          ))}
        </div>

<section className="mt-8 rounded-3xl border border-lime-400/20 bg-[#0a0f08] p-8 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
  <div className="text-sm font-semibold uppercase tracking-wider text-lime-400">
  
  </div>

  <h2 className="mt-3 text-2xl font-bold text-lime-300">
    {currentQuestion.controlNameEn}
  </h2>

<p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
  {currentQuestion.questionEn}
</p>



<div className="mt-8 space-y-3">
  {currentQuestion.answerOptions.map((option) => (
<button
  key={option.id}
  type="button"
onClick={() => {
  setSelectedAnswerId(option.id);

  setAnswers((currentAnswers) => {
    const updatedAnswers = {
      ...currentAnswers,
  [currentQuestion.id]: option.id,
    };

    localStorage.setItem(
      "ccr-full-assessment-answers",
      JSON.stringify(updatedAnswers)
    );

    return updatedAnswers;
  });
}}
  className={`w-full rounded-xl border px-5 py-4 text-left font-medium transition ${
selectedAnswerId === option.id
? "border-lime-300 bg-lime-400/15 text-lime-100 ring-2 ring-lime-400/30"
  : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-cyan-400 hover:bg-cyan-400/[0.06]"
  }`}
>
  {option.labelEn}
</button>

  ))}
</div>


<div className="mt-8 flex justify-end border-t border-white/10 pt-6">
  <button
    type="button"
    onClick={() => {
      if (isLastQuestion) {
        window.location.href = "/assessment/full/results";
        return;
      }

      setCurrentQuestionIndex((index) => index + 1);
      setCompletedQuestions((count) => count + 1);
      setSelectedAnswerId(null);
    }}
    disabled={!selectedAnswerId}
    className={`rounded-xl px-8 py-4 font-bold tracking-wide transition ${
      selectedAnswerId
        ? "border border-lime-300 bg-lime-400 text-[#07111f] hover:bg-lime-300 shadow-[0_0_30px_rgba(163,230,53,0.45)]"
        : "cursor-not-allowed bg-white/10 text-slate-500"
    }`}
  >
    {isLastQuestion ? "Generate Cyber Resilience Report" : "Next Question"}
  </button>
</div>

</section>

      </div>
    </main>
  );
}