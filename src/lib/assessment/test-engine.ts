import { CCR_QUESTIONS } from "./questions";

import {
  calculateEvidenceConfidence,
  calculateReadinessScore,
  classifyExposure,
} from "./scoring";

import type { CCRAssessmentAnswer } from "./types";

const testAnswers: CCRAssessmentAnswer[] = [
  {
    questionId: "CCR-IAM-001",
    answerOptionId: "ALL",
    evidenceStatus: "EVIDENCE_PROVIDED",
  },
];

const readinessScore = calculateReadinessScore(
  CCR_QUESTIONS,
  testAnswers,
);

const evidenceConfidence =
  calculateEvidenceConfidence(testAnswers);

const exposure =
  classifyExposure(readinessScore);

console.log("CCR ENGINE TEST");
console.log("----------------");
console.log("Readiness Score:", readinessScore);
console.log("Evidence Confidence:", evidenceConfidence);
console.log("Exposure:", exposure);