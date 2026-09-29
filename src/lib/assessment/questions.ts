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
    {
    id: "CCR-BCK-001",

    domainId: "BCK",

    controlNameEn: "Backup and Recovery",
    controlNameTr: "Yedekleme ve Kurtarma",

    questionEn:
      "Are critical business data backups performed regularly and tested for successful recovery?",

    questionTr:
      "Kritik işletme verileri düzenli olarak yedekleniyor ve başarılı şekilde geri yüklenebildiği test ediliyor mu?",

    explanationEn:
      "Regular backups can support recovery following data loss, system failure, ransomware or other disruptive incidents. Recovery testing helps confirm that backups can actually be restored when required.",

    explanationTr:
      "Düzenli yedeklemeler veri kaybı, sistem arızası, fidye yazılımı veya diğer kesintiler sonrasında kurtarmayı destekleyebilir. Geri yükleme testleri, yedeklerin gerektiğinde gerçekten kullanılabildiğinin doğrulanmasına yardımcı olur.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "REGULAR_TESTED",
        labelEn: "Yes, backups are regular and recovery is tested",
        labelTr:
          "Evet, düzenli yedekleme yapılıyor ve geri yükleme test ediliyor",
        score: 1,
      },

      {
        id: "REGULAR_NOT_TESTED",
        labelEn: "Backups are regular but recovery is not tested",
        labelTr:
          "Düzenli yedekleme yapılıyor ancak geri yükleme test edilmiyor",
        score: 0.7,
      },

      {
        id: "PARTIAL",
        labelEn: "Only some important data is backed up",
        labelTr:
          "Yalnızca bazı önemli veriler yedekleniyor",
        score: 0.4,
      },

      {
        id: "NO",
        labelEn: "No defined backup process",
        labelTr:
          "Tanımlı bir yedekleme süreci yok",
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
        reference: "Recovery and resilience outcomes",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Data recovery practices",
      },
    ],

    findingTitleEn:
      "Backup and recovery arrangements require improvement",

    findingTitleTr:
      "Yedekleme ve kurtarma düzenlemelerinin geliştirilmesi gerekiyor",

    recommendationEn:
      "Establish regular backups for critical business data and test recovery periodically to confirm that required information can be restored.",

    recommendationTr:
      "Kritik işletme verileri için düzenli yedekleme oluşturun ve gerekli bilgilerin geri yüklenebildiğini doğrulamak için kurtarma işlemini belirli aralıklarla test edin.",

    actionTimeframe: "NEXT_30_DAYS",
  },
  {
    id: "CCR-IOT-001",

    domainId: "IOT",

    controlNameEn: "Connected Device Inventory",
    controlNameTr: "Bağlantılı Cihaz Envanteri",

    questionEn:
      "Does your organisation maintain an up-to-date inventory of connected devices such as CCTV systems, printers, POS terminals, sensors and access-control systems?",

    questionTr:
      "Kuruluşunuz CCTV sistemleri, yazıcılar, POS terminalleri, sensörler ve erişim kontrol sistemleri gibi bağlantılı cihazların güncel bir envanterini tutuyor mu?",

    explanationEn:
      "A current connected-device inventory helps an organisation understand what devices are in use, who is responsible for them and which devices may require security updates or additional controls.",

    explanationTr:
      "Güncel bir bağlantılı cihaz envanteri, kuruluşun hangi cihazların kullanıldığını, bu cihazlardan kimlerin sorumlu olduğunu ve hangi cihazların güvenlik güncellemesi veya ek kontrollere ihtiyaç duyabileceğini anlamasına yardımcı olur.",

    weight: 4,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "COMPLETE",
        labelEn: "Yes, a current inventory is maintained",
        labelTr: "Evet, güncel bir envanter tutuluyor",
        score: 1,
      },

      {
        id: "PARTIAL",
        labelEn: "An inventory exists but is incomplete or outdated",
        labelTr: "Bir envanter var ancak eksik veya güncel değil",
        score: 0.5,
      },

      {
        id: "INFORMAL",
        labelEn: "Devices are generally known but no formal inventory exists",
        labelTr: "Cihazlar genel olarak biliniyor ancak resmi bir envanter yok",
        score: 0.25,
      },

      {
        id: "NO",
        labelEn: "No connected-device inventory is maintained",
        labelTr: "Bağlantılı cihaz envanteri tutulmuyor",
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
        reference: "Asset identification and management",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Inventory and control of enterprise assets",
      },

      {
        framework: "CCR_IOT",
        reference: "Connected-device inventory and governance",
      },
    ],

    findingTitleEn:
      "Connected-device inventory requires improvement",

    findingTitleTr:
      "Bağlantılı cihaz envanterinin geliştirilmesi gerekiyor",

    recommendationEn:
      "Create and maintain an up-to-date inventory of connected devices, including device type, business purpose, responsible owner and relevant security-maintenance information.",

    recommendationTr:
      "Cihaz türü, işletme amacı, sorumlu kişi ve ilgili güvenlik bakım bilgilerini içeren güncel bir bağlantılı cihaz envanteri oluşturun ve düzenli olarak güncelleyin.",

    actionTimeframe: "NEXT_30_DAYS",
  },
];
