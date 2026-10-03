import type {
  CCRAssessmentAnswer,
  CCRFinding,
  CCRQuestion,
} from "./types";

function createUncertaintyFinding(
  question: CCRQuestion,
): CCRFinding {
  return {
    questionId: question.id,

    domainId: question.domainId,

    status: "ASSESSMENT_UNCERTAINTY",

    priority: question.riskPriority,

    titleEn: `${question.controlNameEn} status could not be confirmed`,

    titleTr: `${question.controlNameTr} durumu doğrulanamadı`,

    descriptionEn:
      "The assessment response indicates that the current implementation status of this control is not known.",

    descriptionTr:
      "Değerlendirme yanıtı, bu kontrolün mevcut uygulama durumunun bilinmediğini göstermektedir.",

    recommendationEn:
      `Confirm the current implementation status of ${question.controlNameEn.toLowerCase()} and document the result.`,

    recommendationTr:
      `${question.controlNameTr} kontrolünün mevcut uygulama durumunu doğrulayın ve sonucu kayıt altına alın.`,

    actionTimeframe: question.actionTimeframe,

    frameworkMappings: question.frameworkMappings,
  };
}

function createControlGapFinding(
  question: CCRQuestion,
): CCRFinding {
  return {
    questionId: question.id,

    domainId: question.domainId,

    status: "CONTROL_GAP",

    priority: question.riskPriority,

    titleEn: question.findingTitleEn,

    titleTr: question.findingTitleTr,

    descriptionEn:
      "The assessment response indicates that this control is not fully implemented across the applicable environment.",

    descriptionTr:
      "Değerlendirme yanıtı, bu kontrolün uygulanabilir ortamın tamamında tam olarak uygulanmadığını göstermektedir.",

    recommendationEn: question.recommendationEn,

    recommendationTr: question.recommendationTr,

    actionTimeframe: question.actionTimeframe,

    frameworkMappings: question.frameworkMappings,
  };
}

export function generateFinding(
  question: CCRQuestion,
  answer: CCRAssessmentAnswer,
): CCRFinding | null {
  const selectedOption = question.answerOptions.find(
    (option) => option.id === answer.answerOptionId,
  );

  if (!selectedOption) {
    return null;
  }

  if (selectedOption.id === "UNKNOWN") {
    return createUncertaintyFinding(question);
  }

  if (selectedOption.score >= 1) {
    return null;
  }

  return createControlGapFinding(question);
}

export function generateFindings(
  questions: CCRQuestion[],
  answers: CCRAssessmentAnswer[],
): CCRFinding[] {
  const findings: CCRFinding[] = [];

  for (const question of questions) {
    const answer = answers.find(
      (item) => item.questionId === question.id,
    );

    if (!answer) {
      continue;
    }

    const finding = generateFinding(
      question,
      answer,
    );

    if (finding) {
      findings.push(finding);
    }
  }

  return findings;
}

export function rankFindings(
  findings: CCRFinding[],
): CCRFinding[] {
  const priorityWeight = {
    CRITICAL: 4,
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1,
  };

  const timeframeWeight = {
    DO_NOW: 4,
    NEXT_30_DAYS: 3,
    NEXT_90_DAYS: 2,
    PLAN: 1,
  };

  return [...findings].sort((a, b) => {
    const priorityDifference =
      priorityWeight[b.priority] - priorityWeight[a.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return (
      timeframeWeight[b.actionTimeframe] -
      timeframeWeight[a.actionTimeframe]
    );
  });
}
export function generateImprovementRoadmap(
  findings: CCRFinding[],
) {
  const rankedFindings = rankFindings(findings);

  return {
    doNow: rankedFindings.filter(
      (finding) => finding.actionTimeframe === "DO_NOW",
    ),

    next30Days: rankedFindings.filter(
      (finding) => finding.actionTimeframe === "NEXT_30_DAYS",
    ),

    next90Days: rankedFindings.filter(
      (finding) => finding.actionTimeframe === "NEXT_90_DAYS",
    ),

    plan: rankedFindings.filter(
      (finding) => finding.actionTimeframe === "PLAN",
    ),
  };
}