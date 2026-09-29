import { CCR_QUESTIONS } from "./questions";
import { generateFindings } from "./findings";
import {
  calculateEvidenceConfidence,
  calculateReadinessScore,
  classifyExposure,
} from "./scoring";

import type { CCRAssessmentAnswer } from "./types";

const testAnswers: CCRAssessmentAnswer[] = [
  {
    questionId: "CCR-AWR-001",
    answerOptionId: "OCCASIONAL",
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
const findings = generateFindings(
  CCR_QUESTIONS,
  testAnswers,
);

console.log("----------------");
console.log("Findings:", findings.length);

for (const finding of findings) {
  console.log("Finding Status:", finding.status);
  console.log("Priority:", finding.priority);
  console.log("Title:", finding.titleEn);
  console.log(
    "Recommendation:",
    finding.recommendationEn,
  );
  console.log(
    "Action Timeframe:",
    finding.actionTimeframe,
  );
}