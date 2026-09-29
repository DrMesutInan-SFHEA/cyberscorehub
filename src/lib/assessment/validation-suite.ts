import { CCR_QUESTIONS } from "./questions";

import {
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
    name: "GOV - formal responsibility",
    questionId: "CCR-GOV-001",
    answerOptionId: "FORMAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "AST - partial inventory",
    questionId: "CCR-AST-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 50,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },

  {
    name: "IAM - MFA implemented",
    questionId: "CCR-IAM-001",
    answerOptionId: "ALL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "END - manual updates",
    questionId: "CCR-END-001",
    answerOptionId: "MANUAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 50,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },

  {
    name: "NET - limited segmentation",
    questionId: "CCR-NET-001",
    answerOptionId: "PROTECTED_NOT_SEGMENTED",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 60,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },

  {
    name: "DAT - partial protection",
    questionId: "CCR-DAT-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 50,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },

  {
    name: "BCK - recovery tested",
    questionId: "CCR-BCK-001",
    answerOptionId: "REGULAR_TESTED",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },

  {
    name: "IR - informal process",
    questionId: "CCR-IR-001",
    answerOptionId: "INFORMAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 40,
    expectedExposure: "HIGH",
    expectedFindings: 1,
  },

  {
    name: "AWR - occasional training",
    questionId: "CCR-AWR-001",
    answerOptionId: "OCCASIONAL",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 60,
    expectedExposure: "ELEVATED",
    expectedFindings: 1,
  },

  {
    name: "IOT - complete inventory",
    questionId: "CCR-IOT-001",
    answerOptionId: "COMPLETE",
    evidenceStatus: "EVIDENCE_PROVIDED",
    expectedReadiness: 100,
    expectedExposure: "LOW",
    expectedFindings: 0,
  },
];

let passed = 0;
let failed = 0;

console.log("");
console.log("CCR CORE VALIDATION");
console.log("===================");

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
    passed++;
    console.log(`PASS - ${test.name}`);
  } else {
    failed++;
    console.log(`FAIL - ${test.name}`);
    console.log(`  Readiness: ${readiness}`);
    console.log(`  Exposure: ${exposure}`);
    console.log(`  Findings: ${findings.length}`);
  }
}

console.log("");
console.log("===================");
console.log(`Tests: ${tests.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  process.exitCode = 1;
}