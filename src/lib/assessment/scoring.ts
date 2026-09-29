import type {
  CCRAssessmentAnswer,
  CCREvidenceStatus,
  CCRQuestion,
} from "./types";

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