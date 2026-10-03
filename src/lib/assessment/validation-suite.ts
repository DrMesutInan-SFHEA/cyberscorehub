import { CCR_QUESTIONS } from "./questions";

import {
  calculateDomainScores,
  calculateEvidenceConfidence,
  calculateReadinessScore,
  classifyExposure,
} from "./scoring";

import {
  generateFindings,
  generateImprovementRoadmap,
  rankFindings,
} from "./findings";

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

console.log("");
console.log("CCR ENGINE REGRESSION");
console.log("=====================");

const regressionAnswers: CCRAssessmentAnswer[] = [
  {
    questionId: "CCR-GOV-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-AST-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-IAM-001",
    answerOptionId: "SOME",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-END-001",
    answerOptionId: "AUTOMATIC",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-NET-001",
    answerOptionId: "PROTECTED_NOT_SEGMENTED",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-DAT-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-BCK-001",
    answerOptionId: "REGULAR_NOT_TESTED",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-IR-001",
    answerOptionId: "DOCUMENTED_NOT_TESTED",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-AWR-001",
    answerOptionId: "OCCASIONAL",
    evidenceStatus: "SELF_REPORTED",
  },
  {
    questionId: "CCR-IOT-001",
    answerOptionId: "PARTIAL",
    evidenceStatus: "SELF_REPORTED",
  },
];

const regressionReadiness = calculateReadinessScore(
  CCR_QUESTIONS,
  regressionAnswers,
);

const regressionEvidenceConfidence =
  calculateEvidenceConfidence(regressionAnswers);

const regressionExposure =
  classifyExposure(regressionReadiness);

const regressionDomainScores = calculateDomainScores(
  CCR_QUESTIONS,
  regressionAnswers,
);

const regressionFindings = generateFindings(
  CCR_QUESTIONS,
  regressionAnswers,
);

const regressionRankedFindings =
  rankFindings(regressionFindings);

const regressionRoadmap =
  generateImprovementRoadmap(regressionFindings);

function regressionCheck(
  name: string,
  condition: boolean,
) {
  if (condition) {
    passed++;
    console.log(`PASS - ${name}`);
  } else {
    failed++;
    console.log(`FAIL - ${name}`);
  }
}

regressionCheck(
  "Evidence Confidence - self reported",
  regressionEvidenceConfidence === 25,
);

regressionCheck(
  "Domain Scores - ten domains returned",
  regressionDomainScores.length === 10,
);

regressionCheck(
  "All regression questions answered",
  regressionDomainScores.every(
    (domain) => domain.answeredQuestions === 1,
  ),
);

regressionCheck(
  "Findings generated",
  regressionFindings.length > 0,
);

regressionCheck(
  "Priority ranking preserves finding count",
  regressionRankedFindings.length ===
    regressionFindings.length,
);

regressionCheck(
  "Priority ranking starts with HIGH or CRITICAL when present",
  regressionRankedFindings.length === 0 ||
    regressionRankedFindings[0].priority === "HIGH" ||
    regressionRankedFindings[0].priority === "CRITICAL",
);

regressionCheck(
  "Roadmap preserves all findings",
  regressionRoadmap.doNow.length +
    regressionRoadmap.next30Days.length +
    regressionRoadmap.next90Days.length +
    regressionRoadmap.plan.length ===
    regressionFindings.length,
);

regressionCheck(
  "Roadmap DO NOW grouping",
  regressionRoadmap.doNow.every(
    (finding) => finding.actionTimeframe === "DO_NOW",
  ),
);

regressionCheck(
  "Roadmap NEXT 30 DAYS grouping",
  regressionRoadmap.next30Days.every(
    (finding) =>
      finding.actionTimeframe === "NEXT_30_DAYS",
  ),
);

regressionCheck(
  "Roadmap NEXT 90 DAYS grouping",
  regressionRoadmap.next90Days.every(
    (finding) =>
      finding.actionTimeframe === "NEXT_90_DAYS",
  ),
);

regressionCheck(
  "Roadmap PLAN grouping",
  regressionRoadmap.plan.every(
    (finding) => finding.actionTimeframe === "PLAN",
  ),
);

console.log("");
console.log("Regression Readiness:", regressionReadiness);
console.log(
  "Regression Evidence Confidence:",
  regressionEvidenceConfidence,
);
console.log("Regression Exposure:", regressionExposure);
console.log(
  "Regression Findings:",
  regressionFindings.length,
);
console.log(
  "Regression Domain Scores:",
  regressionDomainScores.length,
);

console.log("");
console.log("===================");
console.log(`Total Passed: ${passed}`);
console.log(`Total Failed: ${failed}`);
if (failed > 0) {
  process.exitCode = 1;
}