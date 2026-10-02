import type {
  CCRAssessmentAnswer,
  CCRDomainResult,
  CCREvidenceStatus,
  CCRQuestion,
} from "./types";

import { CCR_DOMAINS } from "./domains";

function getEvidenceScore(status: CCREvidenceStatus): number {
  switch (status) {
    case "SELF_REPORTED":
      return 0.25;

    case "EVIDENCE_PROVIDED":
      return 0.6;

    case "MACHINE_OBSERVED":
      return 0.8;

    case "EXPERT_REVIEWED":
      return 1;

    default:
      return 0;
  }
}

export function calculateQuestionScore(
  question: CCRQuestion,
  answer: CCRAssessmentAnswer,
): number {
  const selectedOption = question.answerOptions.find(
    (option) => option.id === answer.answerOptionId,
  );

  if (!selectedOption) {
    return 0;
  }

  return selectedOption.score;
}

export function calculateReadinessScore(
  questions: CCRQuestion[],
  answers: CCRAssessmentAnswer[],
): number {
  let weightedScore = 0;
  let totalWeight = 0;

  for (const question of questions) {
    const answer = answers.find(
      (item) => item.questionId === question.id,
    );

    if (!answer) {
      continue;
    }

    const questionScore = calculateQuestionScore(
      question,
      answer,
    );

    weightedScore += questionScore * question.weight;
    totalWeight += question.weight;
  }

  if (totalWeight === 0) {
    return 0;
  }

  return Math.round(
    (weightedScore / totalWeight) * 100,
  );
}

export function calculateEvidenceConfidence(
  answers: CCRAssessmentAnswer[],
): number {
  if (answers.length === 0) {
    return 0;
  }

  const totalEvidenceScore = answers.reduce(
    (total, answer) =>
      total + getEvidenceScore(answer.evidenceStatus),
    0,
  );

  return Math.round(
    (totalEvidenceScore / answers.length) * 100,
  );
}

export function classifyExposure(
  readinessScore: number,
): "LOW" | "MODERATE" | "ELEVATED" | "HIGH" {
  if (readinessScore >= 80) {
    return "LOW";
  }

  if (readinessScore >= 65) {
    return "MODERATE";
  }

  if (readinessScore >= 45) {
    return "ELEVATED";
  }

  return "HIGH";
}
export function calculateDomainScores(
  questions: CCRQuestion[],
  answers: CCRAssessmentAnswer[],
): CCRDomainResult[] {
  return CCR_DOMAINS.map((domain) => {
    const domainQuestions = questions.filter(
      (question) => question.domainId === domain.id,
    );

    let weightedScore = 0;
    let totalWeight = 0;
    let answeredQuestions = 0;

    for (const question of domainQuestions) {
      const answer = answers.find(
        (item) => item.questionId === question.id,
      );

      if (!answer) {
        continue;
      }

      const questionScore = calculateQuestionScore(
        question,
        answer,
      );

      weightedScore += questionScore * question.weight;
      totalWeight += question.weight;
      answeredQuestions += 1;
    }

    const score =
      totalWeight === 0
        ? 0
        : Math.round((weightedScore / totalWeight) * 100);

    return {
      domainId: domain.id,
      score,
      answeredQuestions,
    };
  });
}
