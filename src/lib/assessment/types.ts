export type CCRDomainId =
  | "GOV"
  | "AST"
  | "IAM"
  | "END"
  | "NET"
  | "DAT"
  | "BCK"
  | "IR"
  | "AWR"
  | "IOT";

export type CCRRiskPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export type CCRActionTimeframe =
  | "DO_NOW"
  | "NEXT_30_DAYS"
  | "NEXT_90_DAYS"
  | "PLAN";

export type CCREvidenceStatus =
  | "SELF_REPORTED"
  | "EVIDENCE_PROVIDED"
  | "MACHINE_OBSERVED"
  | "EXPERT_REVIEWED";

export type CCRFramework =
  | "NIST_CSF_2_0"
  | "CIS_CONTROLS"
  | "CYBER_ESSENTIALS"
  | "CCR_IOT";

export interface CCRDomain {
  id: CCRDomainId;
  code: string;
  nameEn: string;
  nameTr: string;
  descriptionEn: string;
  descriptionTr: string;
}

export interface CCRAnswerOption {
  id: string;
  labelEn: string;
  labelTr: string;
  score: number;
}

export interface CCRFrameworkMapping {
  framework: CCRFramework;
  reference: string;
}

export interface CCRQuestion {
  id: string;

  domainId: CCRDomainId;

  controlNameEn: string;
  controlNameTr: string;

  questionEn: string;
  questionTr: string;

  explanationEn: string;
  explanationTr: string;

  weight: number;

  riskPriority: CCRRiskPriority;

  answerOptions: CCRAnswerOption[];

  evidenceRequested: boolean;

  frameworkMappings: CCRFrameworkMapping[];

  findingTitleEn: string;
  findingTitleTr: string;

  recommendationEn: string;
  recommendationTr: string;

  actionTimeframe: CCRActionTimeframe;
}

export interface CCRAssessmentAnswer {
  questionId: string;
  answerOptionId: string;
  evidenceStatus: CCREvidenceStatus;
}

export interface CCRDomainResult {
  domainId: CCRDomainId;
  score: number;
  answeredQuestions: number;
}

export interface CCRAssessmentResult {
  readinessScore: number;

  evidenceConfidence: number;

  exposure:
    | "LOW"
    | "MODERATE"
    | "ELEVATED"
    | "HIGH";

  domainResults: CCRDomainResult[];
}