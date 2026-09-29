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
  {
    id: "CCR-GOV-001",

    domainId: "GOV",

    controlNameEn: "Cyber Security Responsibility",
    controlNameTr: "Siber Güvenlik Sorumluluğu",

    questionEn:
      "Is responsibility for cyber security clearly assigned within your organisation?",

    questionTr:
      "Kuruluşunuzda siber güvenlik sorumluluğu açık şekilde belirlenmiş mi?",

    explanationEn:
      "Clear ownership helps ensure that cyber-security decisions, reviews and improvement actions have defined responsibility.",

    explanationTr:
      "Açık bir sorumluluk yapısı, siber güvenlik kararlarının, kontrollerinin ve iyileştirme faaliyetlerinin belirli bir sorumlu tarafından yönetilmesine yardımcı olur.",

    weight: 3,

    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "FORMAL",
        labelEn: "Yes, responsibility is formally assigned",
        labelTr: "Evet, sorumluluk resmi olarak atanmış",
        score: 1,
      },

      {
        id: "INFORMAL",
        labelEn: "Responsibility exists but is informal",
        labelTr: "Sorumluluk var ancak resmi olarak tanımlanmamış",
        score: 0.5,
      },

      {
        id: "NO",
        labelEn: "No clear responsibility is assigned",
        labelTr: "Açık bir sorumluluk atanmamış",
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
        reference: "Governance roles and responsibilities",
      },
    ],

    findingTitleEn:
      "Cyber-security responsibility is not clearly established",

    findingTitleTr:
      "Siber güvenlik sorumluluğu açık şekilde belirlenmemiş",

    recommendationEn:
      "Assign clear responsibility for cyber-security oversight, decisions and improvement actions within the organisation.",

    recommendationTr:
      "Kuruluş içinde siber güvenlik gözetimi, kararları ve iyileştirme faaliyetleri için açık bir sorumluluk belirleyin.",

    actionTimeframe: "NEXT_30_DAYS",
  },
  {
    id: "CCR-AST-001",

    domainId: "AST",

    controlNameEn: "Business IT Asset Inventory",
    controlNameTr: "İşletme BT Varlık Envanteri",

    questionEn:
      "Does your organisation maintain an up-to-date inventory of business IT assets such as computers, mobile devices, servers and key software?",

    questionTr:
      "Kuruluşunuz bilgisayarlar, mobil cihazlar, sunucular ve önemli yazılımlar gibi işletme BT varlıklarının güncel bir envanterini tutuyor mu?",

    explanationEn:
      "An up-to-date asset inventory helps an organisation understand what technology it owns or uses and supports effective security management, maintenance and risk identification.",

    explanationTr:
      "Güncel bir varlık envanteri, kuruluşun sahip olduğu veya kullandığı teknolojileri anlamasına ve güvenlik yönetimi, bakım ve risklerin belirlenmesini desteklemeye yardımcı olur.",

    weight: 4,

    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "COMPLETE",
        labelEn: "Yes, a complete and current inventory is maintained",
        labelTr: "Evet, eksiksiz ve güncel bir envanter tutuluyor",
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
        labelEn: "Assets are generally known but no formal inventory exists",
        labelTr: "Varlıklar genel olarak biliniyor ancak resmi bir envanter yok",
        score: 0.25,
      },

      {
        id: "NO",
        labelEn: "No asset inventory is maintained",
        labelTr: "Varlık envanteri tutulmuyor",
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
    ],

    findingTitleEn:
      "Business IT asset inventory requires improvement",

    findingTitleTr:
      "İşletme BT varlık envanterinin geliştirilmesi gerekiyor",

    recommendationEn:
      "Create and maintain an up-to-date inventory of business IT assets, including relevant devices, systems and key software.",

    recommendationTr:
      "İlgili cihazları, sistemleri ve önemli yazılımları içeren güncel bir işletme BT varlık envanteri oluşturun ve düzenli olarak güncelleyin.",

    actionTimeframe: "NEXT_30_DAYS",
  },
  {
    id: "CCR-END-001",

    domainId: "END",

    controlNameEn: "Security Update Management",
    controlNameTr: "Güvenlik Güncelleme Yönetimi",

    questionEn:
      "Are operating systems, applications and business devices kept up to date with security updates?",

    questionTr:
      "İşletim sistemleri, uygulamalar ve işletme cihazları güvenlik güncellemeleriyle güncel tutuluyor mu?",

    explanationEn:
      "Timely security updates reduce exposure to known vulnerabilities in operating systems, applications and devices.",

    explanationTr:
      "Güvenlik güncellemelerinin zamanında uygulanması, işletim sistemleri, uygulamalar ve cihazlardaki bilinen güvenlik açıklarına maruz kalma riskini azaltmaya yardımcı olur.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "MANAGED",
        labelEn: "Yes, updates are managed and applied regularly",
        labelTr: "Evet, güncellemeler yönetiliyor ve düzenli uygulanıyor",
        score: 1,
      },

      {
        id: "AUTOMATIC",
        labelEn: "Updates are generally installed automatically",
        labelTr: "Güncellemeler genellikle otomatik yükleniyor",
        score: 0.8,
      },

      {
        id: "MANUAL",
        labelEn: "Updates are applied manually but not consistently",
        labelTr: "Güncellemeler manuel uygulanıyor ancak düzenli değil",
        score: 0.5,
      },

      {
        id: "NO",
        labelEn: "No defined security update process",
        labelTr: "Tanımlı bir güvenlik güncelleme süreci yok",
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
        reference: "Platform security and vulnerability management",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Continuous vulnerability management",
      },

      {
        framework: "CYBER_ESSENTIALS",
        reference: "Security update management",
      },
    ],

    findingTitleEn:
      "Security update management requires improvement",

    findingTitleTr:
      "Güvenlik güncelleme yönetiminin geliştirilmesi gerekiyor",

    recommendationEn:
      "Establish a consistent process for applying security updates to supported operating systems, applications and business devices.",

    recommendationTr:
      "Desteklenen işletim sistemleri, uygulamalar ve işletme cihazlarına güvenlik güncellemelerinin düzenli uygulanması için tutarlı bir süreç oluşturun.",

    actionTimeframe: "DO_NOW",
  },
  {
    id: "CCR-NET-001",

    domainId: "NET",

    controlNameEn: "Network Protection",
    controlNameTr: "Ağ Koruması",

    questionEn:
      "Are business networks protected by appropriate firewall controls and separated from guest or untrusted networks where necessary?",

    questionTr:
      "İşletme ağları uygun güvenlik duvarı kontrolleriyle korunuyor ve gerektiğinde misafir veya güvenilmeyen ağlardan ayrılıyor mu?",

    explanationEn:
      "Appropriate network protection and separation can reduce unnecessary exposure between business systems, guest users and other less-trusted devices.",

    explanationTr:
      "Uygun ağ koruması ve ağların ayrılması, işletme sistemleri, misafir kullanıcılar ve daha az güvenilen cihazlar arasındaki gereksiz riskleri azaltmaya yardımcı olabilir.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "PROTECTED_SEGMENTED",
        labelEn: "Yes, appropriate protection and separation are implemented",
        labelTr: "Evet, uygun koruma ve ağ ayrımı uygulanıyor",
        score: 1,
      },

      {
        id: "PROTECTED_NOT_SEGMENTED",
        labelEn: "Firewall protection exists but network separation is limited",
        labelTr: "Güvenlik duvarı var ancak ağ ayrımı sınırlı",
        score: 0.6,
      },

      {
        id: "BASIC",
        labelEn: "Only basic network protection is in place",
        labelTr: "Yalnızca temel ağ koruması mevcut",
        score: 0.4,
      },

      {
        id: "NO",
        labelEn: "No defined network protection controls",
        labelTr: "Tanımlı ağ koruma kontrolleri yok",
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
        reference: "Technology infrastructure resilience and protection",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Network infrastructure management",
      },

      {
        framework: "CYBER_ESSENTIALS",
        reference: "Firewalls",
      },
    ],

    findingTitleEn:
      "Network protection requires improvement",

    findingTitleTr:
      "Ağ korumasının geliştirilmesi gerekiyor",

    recommendationEn:
      "Review business network protection and implement appropriate firewall controls and network separation based on business risk and device trust.",

    recommendationTr:
      "İşletme ağ korumasını gözden geçirin ve işletme riski ile cihaz güven seviyesine göre uygun güvenlik duvarı kontrolleri ve ağ ayrımı uygulayın.",

    actionTimeframe: "DO_NOW",
  },
  {
    id: "CCR-DAT-001",

    domainId: "DAT",

    controlNameEn: "Sensitive Data Protection",
    controlNameTr: "Hassas Veri Koruma",

    questionEn:
      "Are sensitive business and personal data protected against unauthorised access, loss or disclosure?",

    questionTr:
      "Hassas işletme ve kişisel veriler yetkisiz erişim, kayıp veya ifşaya karşı korunuyor mu?",

    explanationEn:
      "Sensitive information should be protected using appropriate access controls, secure storage and other safeguards based on the information and associated risk.",

    explanationTr:
      "Hassas bilgiler, bilgi türü ve ilgili risklere göre uygun erişim kontrolleri, güvenli depolama ve diğer koruyucu önlemler kullanılarak korunmalıdır.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "PROTECTED",
        labelEn: "Yes, appropriate protections are consistently applied",
        labelTr: "Evet, uygun koruma önlemleri tutarlı şekilde uygulanıyor",
        score: 1,
      },

      {
        id: "PARTIAL",
        labelEn: "Protections exist but are not consistently applied",
        labelTr: "Koruma önlemleri var ancak tutarlı uygulanmıyor",
        score: 0.5,
      },

      {
        id: "BASIC",
        labelEn: "Only basic protections are in place",
        labelTr: "Yalnızca temel koruma önlemleri mevcut",
        score: 0.3,
      },

      {
        id: "NO",
        labelEn: "No defined protection measures",
        labelTr: "Tanımlı koruma önlemleri yok",
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
        reference: "Data security and information protection",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Data protection",
      },
    ],

    findingTitleEn:
      "Sensitive data protection requires improvement",

    findingTitleTr:
      "Hassas veri korumasının geliştirilmesi gerekiyor",

    recommendationEn:
      "Review how sensitive business and personal information is accessed, stored and protected, and strengthen controls where gaps are identified.",

    recommendationTr:
      "Hassas işletme ve kişisel bilgilerin nasıl erişildiğini, saklandığını ve korunduğunu gözden geçirin ve belirlenen eksikliklerde kontrolleri güçlendirin.",

    actionTimeframe: "DO_NOW",
  },
  {
    id: "CCR-IR-001",

    domainId: "IR",

    controlNameEn: "Incident Response Planning",
    controlNameTr: "Siber Olay Müdahale Planlaması",

    questionEn:
      "Does your organisation have a documented process for responding to cyber-security incidents?",

    questionTr:
      "Kuruluşunuzun siber güvenlik olaylarına müdahale etmek için dokümante edilmiş bir süreci var mı?",

    explanationEn:
      "A documented incident-response process can help an organisation act consistently and quickly when a cyber-security incident occurs.",

    explanationTr:
      "Dokümante edilmiş bir olay müdahale süreci, bir siber güvenlik olayı meydana geldiğinde kuruluşun tutarlı ve hızlı hareket etmesine yardımcı olabilir.",

    weight: 5,

    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "DOCUMENTED_TESTED",
        labelEn: "Yes, documented and periodically tested",
        labelTr: "Evet, dokümante edilmiş ve belirli aralıklarla test ediliyor",
        score: 1,
      },

      {
        id: "DOCUMENTED",
        labelEn: "A documented process exists but has not been tested",
        labelTr: "Dokümante edilmiş bir süreç var ancak test edilmemiş",
        score: 0.7,
      },

      {
        id: "INFORMAL",
        labelEn: "An informal response process exists",
        labelTr: "Gayriresmi bir müdahale süreci var",
        score: 0.4,
      },

      {
        id: "NO",
        labelEn: "No defined incident-response process",
        labelTr: "Tanımlı bir olay müdahale süreci yok",
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
        reference: "Respond and Recover",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Incident response management",
      },
    ],

    findingTitleEn:
      "Incident-response arrangements require improvement",

    findingTitleTr:
      "Olay müdahale düzenlemelerinin geliştirilmesi gerekiyor",

    recommendationEn:
      "Create and maintain a documented cyber-security incident-response process, including responsibilities, escalation routes and key response actions.",

    recommendationTr:
      "Sorumlulukları, eskalasyon yollarını ve temel müdahale adımlarını içeren dokümante edilmiş bir siber güvenlik olay müdahale süreci oluşturun ve güncel tutun.",

    actionTimeframe: "NEXT_30_DAYS",
  },
  {
    id: "CCR-AWR-001",

    domainId: "AWR",

    controlNameEn: "Security Awareness",
    controlNameTr: "Güvenlik Farkındalığı",

    questionEn:
      "Do employees receive cyber-security awareness guidance or training appropriate to their responsibilities?",

    questionTr:
      "Çalışanlar sorumluluklarına uygun siber güvenlik farkındalık rehberliği veya eğitimi alıyor mu?",

    explanationEn:
      "Security awareness can help employees recognise common cyber threats and understand how to respond appropriately.",

    explanationTr:
      "Güvenlik farkındalığı, çalışanların yaygın siber tehditleri tanımasına ve uygun şekilde nasıl hareket edeceğini anlamasına yardımcı olabilir.",

    weight: 4,

    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "REGULAR",
        labelEn: "Yes, awareness activities are provided regularly",
        labelTr: "Evet, farkındalık faaliyetleri düzenli olarak sağlanıyor",
        score: 1,
      },

      {
        id: "OCCASIONAL",
        labelEn: "Training or guidance is provided occasionally",
        labelTr: "Eğitim veya rehberlik zaman zaman sağlanıyor",
        score: 0.6,
      },

      {
        id: "INFORMAL",
        labelEn: "Only informal guidance is provided",
        labelTr: "Yalnızca gayriresmi rehberlik sağlanıyor",
        score: 0.3,
      },

      {
        id: "NO",
        labelEn: "No security-awareness activity is provided",
        labelTr: "Güvenlik farkındalığı faaliyeti sağlanmıyor",
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
        reference: "Awareness and training",
      },

      {
        framework: "CIS_CONTROLS",
        reference: "Security awareness and skills training",
      },
    ],

    findingTitleEn:
      "Security-awareness arrangements require improvement",

    findingTitleTr:
      "Güvenlik farkındalığı uygulamalarının geliştirilmesi gerekiyor",

    recommendationEn:
      "Provide recurring cyber-security awareness guidance or training that reflects employee responsibilities and common threats relevant to the organisation.",

    recommendationTr:
      "Çalışanların sorumluluklarını ve kuruluş için ilgili yaygın tehditleri dikkate alan düzenli siber güvenlik farkındalık rehberliği veya eğitimi sağlayın.",

    actionTimeframe: "NEXT_90_DAYS",
  },
];
