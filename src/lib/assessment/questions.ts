import type { CCRQuestion } from "./types";

export const CCR_QUESTIONS: CCRQuestion[] = [
  {
    id: "CCR-IAM-001",

    domainId: "IAM",

    controlNameEn: "Multi-Factor Authentication",
    controlNameTr: "Çok Faktörlü Kimlik Doğrulama",

    questionEn:
      "Is multi-factor authentication required for applicable business cloud accounts?",

    questionTr:
      "Çok faktörlü kimlik doğrulama (MFA), uygulanabilir işletme bulut hesaplarında zorunlu mu?",

    explanationEn:
      "Multi-factor authentication adds an additional verification step beyond a password and can reduce exposure when account credentials are compromised.",

    explanationTr:
      "Çok faktörlü kimlik doğrulama, parolaya ek bir doğrulama adımı ekler ve hesap bilgilerinin ele geçirilmesi durumunda riski azaltmaya yardımcı olabilir.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "ALL",
        labelEn: "Yes, across applicable accounts",
        labelTr: "Evet, uygulanabilir hesapların tamamında",
        score: 1,
      },

      {
        id: "PARTIAL",
        labelEn: "Yes, but only for some accounts",
        labelTr: "Evet, ancak yalnızca bazı hesaplarda",
        score: 0.6,
      },

      {
        id: "ADMIN_ONLY",
        labelEn: "Administrators only",
        labelTr: "Yalnızca yönetici hesaplarında",
        score: 0.5,
      },

      {
        id: "NO",
        labelEn: "No",
        labelTr: "Hayır",
        score: 0,
      },

      {
        id: "UNKNOWN",
        labelEn: "Don't know",
        labelTr: "Bilmiyorum",
        score: 0,
      },
    ],

    evidenceRequested: true,

    frameworkMappings: [
      {
        framework: "NIST_CSF_2_0",
        reference: "Identity and access control",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Account and access management",
      },

      {
        framework: "CYBER_ESSENTIALS",
        reference: "User access control",
      },
    ],

    findingTitleEn:
      "Multi-factor authentication is not consistently implemented",

    findingTitleTr:
      "Çok faktörlü kimlik doğrulama tutarlı şekilde uygulanmıyor",

    recommendationEn:
      "Extend multi-factor authentication to applicable business accounts, prioritising privileged and externally accessible services.",

    recommendationTr:
      "Çok faktörlü kimlik doğrulamayı uygulanabilir işletme hesaplarına genişletin; önceliği ayrıcalıklı ve dışarıdan erişilebilen hizmetlere verin.",

    actionTimeframe: "DO_NOW",
  },
];
