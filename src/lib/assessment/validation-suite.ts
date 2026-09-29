import { CCR_QUESTIONS } from "./questions";

import {
  calculateEvidenceConfidence,
  calculateReadinessScore,
  classifyExposure,
} from "./scoring";

import { generateFindings } from "./findings";

import type {
  CCRAssessmentAnswer,
  CCREvidenceStatus,
} from "./types";

interface TestCase {
  name: string;
  questionId: string;
  answerOptionId: string;
  evidenceStatus: CCREvidenceStatus;
  expectedReadiness: number;
  expectedExposure: string;
  expectedFindings: number;
}

const tests: TestCase[] = [
  {
    name: "MFA fully implemented",
    questionId: "CCR-IAM-001",
    answerOptionId: "ALL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "MFA not implemented",
    questionId: "CCR-IAM-001",
    answerOptionId: "NO",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 0,
    expectedExposure: "HIGH",
    expectedFindings: 1,
  },

  {
    name: "MFA status unknown",
    questionId: "CCR-IAM-001",
    answerOptionId: "UNKNOWN",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 0,
    expectedExposure: "HIGH",
    expectedFindings: 1,
  },

  {
    name: "Backup regular and recovery tested",
    questionId: "CCR-BCK-001",
    answerOptionId: "REGULAR_TESTED",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "Backup regular but recovery not tested",
    questionId: "CCR-BCK-001",
    answerOptionId: "REGULAR_NOT_TESTED",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 70,
    expectedExposure: "MODERATE",
    expectedFindings: 1,
  },

  {
    name: "IoT inventory complete",
    questionId: "CCR-IOT-001",
    answerOptionId: "COMPLETE",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "IoT inventory partial",
    questionId: "CCR-IOT-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 50,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },
];

let passed = 0;
let failed = 0;

console.log("");
console.log("CCR VALIDATION SUITE");
console.log("====================");

for (const test of tests) {
  const answers: CCRAssessmentAnswer[] = [
    {
      questionId: test.questionId,
      answerOptionId: test.answerOptionId,
      evidenceStatus: test.evidenceStatus,
    },
  ];

  const readiness = calculateReadinessScore(
    CCR_QUESTIONS,
    answers,
  );

  const evidence = calculateEvidenceConfidence(answers);

  const exposure = classifyExposure(readiness);

  const findings = generateFindings(
    CCR_QUESTIONS,
    answers,
  );

  const success =
    readiness === test.expectedReadiness &&
    exposure === test.expectedExposure &&
    findings.length === test.expectedFindings;

  if (success) {
    passed += 1;
    console.log(`PASS - ${test.name}`);
  } else {
    failed += 1;

    console.log(`FAIL - ${test.name}`);
    console.log(`  Readiness: ${readiness}`);
    console.log(`  Evidence: ${evidence}`);
    console.log(`  Exposure: ${exposure}`);
    console.log(`  Findings: ${findings.length}`);
  }
}

console.log("");
console.log("====================");
console.log(`Tests: ${tests.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  process.exitCode = 1;
}
``