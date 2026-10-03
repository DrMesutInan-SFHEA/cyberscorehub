import type { CCRQuestion } from "./types";

export const CCR_FULL_QUESTIONS: CCRQuestion[] = [
  {
    id: "CCR-FULL-GOV-001",
    domainId: "GOV",

    controlNameEn: "Cyber Security Responsibility",
    controlNameTr: "Siber Güvenlik Sorumluluğu",

    questionEn:
      "Is responsibility for cyber security formally assigned within your organisation?",
    questionTr:
      "Kuruluşunuzda siber güvenlik sorumluluğu resmi olarak atanmış mı?",

    explanationEn:
      "Clear ownership helps ensure that cyber-security decisions, reviews and improvement actions have defined accountability.",
    explanationTr:
      "Açık sorumluluk, siber güvenlik kararlarının, incelemelerinin ve iyileştirme faaliyetlerinin belirli bir hesap verebilirlik çerçevesinde yürütülmesine yardımcı olur.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "FORMAL",
        labelEn: "Yes, responsibility is formally assigned",
        labelTr: "Evet, sorumluluk resmi olarak atanmıştır",
        score: 1,
      },
      {
        id: "INFORMAL",
        labelEn: "Responsibility exists but is informal",
        labelTr: "Sorumluluk vardır ancak gayriresmidir",
        score: 0.6,
      },
      {
        id: "UNCLEAR",
        labelEn: "Responsibility is shared or unclear",
        labelTr: "Sorumluluk paylaşılmış veya belirsizdir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No clear responsibility is assigned",
        labelTr: "Açık bir sorumluluk atanmamıştır",
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
        reference: "GV.RR",
      },
    ],

    findingTitleEn:
      "Cyber-security responsibility is not clearly established",
    findingTitleTr:
      "Siber güvenlik sorumluluğu açık şekilde belirlenmemiş",

    recommendationEn:
      "Formally assign responsibility for cyber-security oversight, decisions and improvement actions, and communicate that responsibility to relevant personnel.",
    recommendationTr:
      "Siber güvenlik gözetimi, kararları ve iyileştirme faaliyetleri için sorumluluğu resmi olarak atayın ve ilgili personele açıkça bildirin.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-GOV-002",
    domainId: "GOV",

    controlNameEn: "Cyber Security Policy",
    controlNameTr: "Siber Güvenlik Politikası",

    questionEn:
      "Does your organisation maintain documented cyber-security policies or formally approved security rules?",
    questionTr:
      "Kuruluşunuz belgelenmiş siber güvenlik politikaları veya resmi olarak onaylanmış güvenlik kuralları bulunduruyor mu?",

    explanationEn:
      "Documented security policies help communicate organisational expectations and provide a consistent basis for security decisions and responsibilities.",
    explanationTr:
      "Belgelenmiş güvenlik politikaları kurumsal beklentilerin iletilmesine ve güvenlik kararları ile sorumlulukları için tutarlı bir temel oluşturulmasına yardımcı olur.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "DOCUMENTED_CURRENT",
        labelEn: "Yes, documented and reviewed periodically",
        labelTr: "Evet, belgelenmiş ve düzenli olarak gözden geçirilmektedir",
        score: 1,
      },
      {
        id: "DOCUMENTED_OUTDATED",
        labelEn: "Policies exist but are not reviewed regularly",
        labelTr: "Politikalar vardır ancak düzenli olarak gözden geçirilmemektedir",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Security expectations are mainly informal",
        labelTr: "Güvenlik beklentileri çoğunlukla gayriresmidir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No documented security policy exists",
        labelTr: "Belgelenmiş bir güvenlik politikası bulunmamaktadır",
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
        reference: "GV.PO",
      },
    ],

    findingTitleEn:
      "Cyber-security policy arrangements require improvement",
    findingTitleTr:
      "Siber güvenlik politikası düzenlemelerinin iyileştirilmesi gerekiyor",
recommendationEn:
  "Create, approve and periodically review proportionate cyber-security policies that define key organisational expectations and responsibilities.",
recommendationTr:
  "Temel kurumsal güvenlik beklentilerini ve sorumlulukları tanımlayan orantılı siber güvenlik politikaları oluşturun, onaylayın ve düzenli olarak gözden geçirin.",
      actionTimeframe: "NEXT_30_DAYS",
  },
    {
    id: "CCR-FULL-GOV-003",
    domainId: "GOV",

    controlNameEn: "Cyber Risk Review",
    controlNameTr: "Siber Risk Gözden Geçirmesi",

    questionEn:
      "Does your organisation periodically review cyber-security risks that could affect important business operations?",
    questionTr:
      "Kuruluşunuz önemli iş faaliyetlerini etkileyebilecek siber güvenlik risklerini düzenli olarak gözden geçiriyor mu?",

    explanationEn:
      "Periodic risk reviews help identify changing threats, business dependencies and security priorities so that improvement efforts can be focused appropriately.",
    explanationTr:
      "Düzenli risk gözden geçirmeleri, değişen tehditlerin, iş bağımlılıklarının ve güvenlik önceliklerinin belirlenmesine yardımcı olur.",

    weight: 1.1,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "REGULAR",
        labelEn:
          "Yes, risks are reviewed regularly and actions are recorded",
        labelTr:
          "Evet, riskler düzenli olarak incelenir ve faaliyetler kaydedilir",
        score: 1,
      },
      {
        id: "OCCASIONAL",
        labelEn: "Risks are reviewed occasionally",
        labelTr: "Riskler zaman zaman gözden geçirilir",
        score: 0.6,
      },
      {
        id: "REACTIVE",
        labelEn:
          "Risks are mainly considered when a problem occurs",
        labelTr:
          "Riskler çoğunlukla bir sorun ortaya çıktığında değerlendirilir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined cyber-risk review takes place",
        labelTr:
          "Tanımlanmış bir siber risk gözden geçirme süreci yoktur",
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
        reference: "GV.RM",
      },
    ],

    findingTitleEn:
      "Cyber-security risk review requires improvement",
    findingTitleTr:
      "Siber güvenlik risk gözden geçirme sürecinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Establish a recurring cyber-risk review that records important risks, priorities, responsible owners and agreed improvement actions.",
    recommendationTr:
      "Önemli riskleri, öncelikleri, sorumluları ve kararlaştırılan iyileştirme faaliyetlerini kaydeden düzenli bir siber risk gözden geçirme süreci oluşturun.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-GOV-004",
    domainId: "GOV",

    controlNameEn: "Security Roles and Accountability",
    controlNameTr: "Güvenlik Rolleri ve Hesap Verebilirlik",

    questionEn:
      "Are cyber-security responsibilities understood by the people who manage systems, accounts, data and connected devices?",
    questionTr:
      "Sistemleri, hesapları, verileri ve bağlantılı cihazları yöneten kişiler siber güvenlik sorumluluklarını biliyor mu?",

    explanationEn:
      "People responsible for technology and information should understand the security responsibilities associated with the systems and information they manage.",
    explanationTr:
      "Teknoloji ve bilgiden sorumlu kişiler, yönettikleri sistemler ve bilgilerle ilişkili güvenlik sorumluluklarını anlamalıdır.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "CLEAR",
        labelEn: "Yes, responsibilities are clearly understood",
        labelTr:
          "Evet, sorumluluklar açıkça anlaşılmaktadır",
        score: 1,
      },
      {
        id: "MOSTLY_CLEAR",
        labelEn:
          "Responsibilities are generally understood but not documented",
        labelTr:
          "Sorumluluklar genel olarak anlaşılmaktadır ancak belgelenmemiştir",
        score: 0.6,
      },
      {
        id: "LIMITED",
        labelEn: "Only some responsibilities are understood",
        labelTr:
          "Sorumlulukların yalnızca bir kısmı anlaşılmaktadır",
        score: 0.3,
      },
      {
        id: "UNCLEAR",
        labelEn: "Responsibilities are unclear",
        labelTr: "Sorumluluklar belirsizdir",
        score: 0,
      },
      {
        id: "UNKNOWN",
        labelEn: "Don't know",
        labelTr: "Bilmiyorum",
        score: 0,
      },
    ],

    evidenceRequested: false,

    frameworkMappings: [
      {
        framework: "NIST_CSF_2_0",
        reference: "GV.RR",
      },
    ],

    findingTitleEn:
      "Security roles and accountability require clarification",
    findingTitleTr:
      "Güvenlik rollerinin ve hesap verebilirliğin netleştirilmesi gerekiyor",

    recommendationEn:
      "Clarify and communicate cyber-security responsibilities for personnel who manage business systems, accounts, information and connected devices.",
    recommendationTr:
      "İş sistemlerini, hesapları, bilgileri ve bağlantılı cihazları yöneten personelin siber güvenlik sorumluluklarını netleştirin ve bildirin.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-GOV-005",
    domainId: "GOV",

    controlNameEn: "Security Improvement Tracking",
    controlNameTr: "Güvenlik İyileştirmelerinin Takibi",

    questionEn:
      "Does your organisation record and track agreed cyber-security improvement actions?",
    questionTr:
      "Kuruluşunuz kararlaştırılan siber güvenlik iyileştirme faaliyetlerini kaydediyor ve takip ediyor mu?",

    explanationEn:
      "Tracking security actions helps ensure that identified gaps have responsible owners, target dates and visible progress.",
    explanationTr:
      "Güvenlik faaliyetlerinin takibi, belirlenen eksikliklerin sorumlularının, hedef tarihlerinin ve ilerleme durumunun görünür olmasına yardımcı olur.",

    weight: 0.9,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "TRACKED",
        labelEn:
          "Yes, actions have owners, target dates and progress tracking",
        labelTr:
          "Evet, faaliyetlerin sorumluları, hedef tarihleri ve ilerleme takibi vardır",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Some improvement actions are tracked",
        labelTr:
          "Bazı iyileştirme faaliyetleri takip edilmektedir",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn:
          "Actions are discussed but tracked informally",
        labelTr:
          "Faaliyetler görüşülmektedir ancak gayriresmi olarak takip edilmektedir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined tracking process exists",
        labelTr:
          "Tanımlanmış bir takip süreci bulunmamaktadır",
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
        reference: "GV.OV",
      },
    ],

    findingTitleEn:
      "Cyber-security improvement actions are not consistently tracked",
    findingTitleTr:
      "Siber güvenlik iyileştirme faaliyetleri tutarlı şekilde takip edilmiyor",

    recommendationEn:
      "Maintain a simple security improvement register that records each action, responsible owner, target timeframe and current status.",
    recommendationTr:
      "Her faaliyeti, sorumlu kişiyi, hedef zaman dilimini ve mevcut durumu kaydeden basit bir güvenlik iyileştirme kaydı tutun.",

    actionTimeframe: "NEXT_90_DAYS",
  },

  {
    id: "CCR-FULL-GOV-006",
    domainId: "GOV",

    controlNameEn: "Management Oversight",
    controlNameTr: "Yönetim Gözetimi",

    questionEn:
      "Does management periodically review cyber-security performance, significant risks and outstanding improvement actions?",
    questionTr:
      "Yönetim siber güvenlik performansını, önemli riskleri ve tamamlanmamış iyileştirme faaliyetlerini düzenli olarak gözden geçiriyor mu?",

    explanationEn:
      "Management oversight helps ensure that significant cyber-security risks and unresolved actions remain visible to people who can make business decisions and allocate resources.",
    explanationTr:
      "Yönetim gözetimi, önemli siber güvenlik risklerinin ve tamamlanmamış faaliyetlerin karar alabilecek ve kaynak tahsis edebilecek kişiler tarafından görünür kalmasına yardımcı olur.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "REGULAR",
        labelEn:
          "Yes, management reviews security performance regularly",
        labelTr:
          "Evet, yönetim güvenlik performansını düzenli olarak inceler",
        score: 1,
      },
      {
        id: "OCCASIONAL",
        labelEn: "Management reviews security occasionally",
        labelTr:
          "Yönetim güvenliği zaman zaman gözden geçirir",
        score: 0.6,
      },
      {
        id: "INCIDENT_ONLY",
        labelEn:
          "Management mainly discusses security after incidents or problems",
        labelTr:
          "Yönetim güvenliği çoğunlukla olay veya sorunlardan sonra görüşür",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined management review takes place",
        labelTr:
          "Tanımlanmış bir yönetim gözden geçirmesi yapılmamaktadır",
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
        reference: "GV.OV",
      },
    ],

    findingTitleEn:
      "Management oversight of cyber security requires improvement",
    findingTitleTr:
      "Siber güvenlik yönetim gözetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Introduce a recurring management review covering significant cyber risks, assessment results, outstanding actions and relevant security changes.",
    recommendationTr:
      "Önemli siber riskleri, değerlendirme sonuçlarını, tamamlanmamış faaliyetleri ve ilgili güvenlik değişikliklerini kapsayan düzenli bir yönetim gözden geçirmesi oluşturun.",

    actionTimeframe: "NEXT_90_DAYS",
  },
    {
    id: "CCR-FULL-AST-001",
    domainId: "AST",

    controlNameEn: "Business IT Asset Inventory",
    controlNameTr: "İşletme BT Varlık Envanteri",

    questionEn:
      "Does your organisation maintain an up-to-date inventory of business IT assets?",
    questionTr:
      "Kuruluşunuz işletme BT varlıklarının güncel bir envanterini tutuyor mu?",

    explanationEn:
      "A current asset inventory helps an organisation understand which devices and systems require protection, maintenance and security oversight.",
    explanationTr:
      "Güncel bir varlık envanteri, hangi cihaz ve sistemlerin korunması, bakımı ve güvenlik gözetimi gerektirdiğinin anlaşılmasına yardımcı olur.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "COMPLETE",
        labelEn: "Yes, a complete and current inventory is maintained",
        labelTr: "Evet, eksiksiz ve güncel bir envanter tutulmaktadır",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "An inventory exists but is incomplete or outdated",
        labelTr: "Bir envanter vardır ancak eksik veya güncel değildir",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Assets are generally known but no formal inventory exists",
        labelTr: "Varlıklar genel olarak bilinmektedir ancak resmi bir envanter yoktur",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No asset inventory is maintained",
        labelTr: "Herhangi bir varlık envanteri tutulmamaktadır",
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
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Business IT asset inventory requires improvement",
    findingTitleTr:
      "İşletme BT varlık envanterinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Create and maintain an up-to-date inventory of business devices, systems and other important technology assets.",
    recommendationTr:
      "İşletme cihazları, sistemleri ve diğer önemli teknoloji varlıklarının güncel bir envanterini oluşturun ve sürdürün.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-AST-002",
    domainId: "AST",

    controlNameEn: "Software and Service Inventory",
    controlNameTr: "Yazılım ve Hizmet Envanteri",

    questionEn:
      "Does your organisation maintain visibility of important software, cloud services and business applications in use?",
    questionTr:
      "Kuruluşunuz kullanılan önemli yazılımlar, bulut hizmetleri ve iş uygulamaları hakkında güncel görünürlüğe sahip mi?",

    explanationEn:
      "Understanding which software and cloud services are in use supports security maintenance, access management and risk assessment.",
    explanationTr:
      "Kullanılan yazılım ve bulut hizmetlerinin bilinmesi güvenlik bakımını, erişim yönetimini ve risk değerlendirmesini destekler.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "COMPLETE",
        labelEn: "Yes, important software and services are documented",
        labelTr: "Evet, önemli yazılım ve hizmetler belgelenmiştir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Most important software and services are documented",
        labelTr: "Önemli yazılım ve hizmetlerin çoğu belgelenmiştir",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Software and services are generally known but not formally recorded",
        labelTr: "Yazılım ve hizmetler genel olarak bilinmektedir ancak resmi olarak kaydedilmemiştir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined software or service inventory exists",
        labelTr: "Tanımlanmış bir yazılım veya hizmet envanteri bulunmamaktadır",
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
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Software and cloud-service inventory requires improvement",
    findingTitleTr:
      "Yazılım ve bulut hizmeti envanterinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Maintain a proportionate inventory of important business applications, software and cloud services, including responsible owners where appropriate.",
    recommendationTr:
      "Önemli iş uygulamaları, yazılımlar ve bulut hizmetleri için uygun durumlarda sorumluları da içeren orantılı bir envanter tutun.",

    actionTimeframe: "NEXT_90_DAYS",
  },

  {
    id: "CCR-FULL-AST-003",
    domainId: "AST",

    controlNameEn: "Asset Ownership",
    controlNameTr: "Varlık Sorumluluğu",

    questionEn:
      "Are important business technology assets assigned to responsible owners or administrators?",
    questionTr:
      "Önemli işletme teknoloji varlıkları sorumlu kişilere veya yöneticilere atanmış mı?",

    explanationEn:
      "Assigned ownership helps ensure that security maintenance, access decisions and lifecycle responsibilities are not overlooked.",
    explanationTr:
      "Atanmış sorumluluk, güvenlik bakımının, erişim kararlarının ve yaşam döngüsü sorumluluklarının gözden kaçmamasına yardımcı olur.",

    weight: 0.9,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "ASSIGNED",
        labelEn: "Yes, important assets have clear owners",
        labelTr: "Evet, önemli varlıkların açıkça belirlenmiş sorumluları vardır",
        score: 1,
      },
      {
        id: "MOSTLY_ASSIGNED",
        labelEn: "Most important assets have identifiable owners",
        labelTr: "Önemli varlıkların çoğunun belirlenebilir sorumluları vardır",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Ownership is mainly informal",
        labelTr: "Sorumluluk çoğunlukla gayriresmidir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined ownership exists",
        labelTr: "Tanımlanmış bir varlık sorumluluğu yoktur",
        score: 0,
      },
      {
        id: "UNKNOWN",
        labelEn: "Don't know",
        labelTr: "Bilmiyorum",
        score: 0,
      },
    ],

    evidenceRequested: false,

    frameworkMappings: [
      {
        framework: "NIST_CSF_2_0",
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Technology asset ownership requires clarification",
    findingTitleTr:
      "Teknoloji varlık sorumluluğunun netleştirilmesi gerekiyor",

    recommendationEn:
      "Assign proportionate ownership or administrative responsibility for important business technology assets.",
    recommendationTr:
      "Önemli işletme teknoloji varlıkları için uygun seviyede sahiplik veya yönetim sorumluluğu atayın.",

    actionTimeframe: "NEXT_90_DAYS",
  },

  {
    id: "CCR-FULL-AST-004",
    domainId: "AST",

    controlNameEn: "Unsupported and Obsolete Technology",
    controlNameTr: "Desteklenmeyen ve Eski Teknoloji",

    questionEn:
      "Does your organisation identify technology that is obsolete, unsupported or approaching end of support?",
    questionTr:
      "Kuruluşunuz eski, desteklenmeyen veya destek süresi sona yaklaşan teknolojileri belirliyor mu?",

    explanationEn:
      "Unsupported technology may no longer receive security updates and can create avoidable exposure if it remains in business use.",
    explanationTr:
      "Desteklenmeyen teknoloji artık güvenlik güncellemeleri almayabilir ve kullanımda kalması önlenebilir güvenlik riskleri oluşturabilir.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "MANAGED",
        labelEn: "Yes, unsupported technology is identified and managed",
        labelTr: "Evet, desteklenmeyen teknoloji belirlenir ve yönetilir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Some unsupported technology is identified",
        labelTr: "Bazı desteklenmeyen teknolojiler belirlenmektedir",
        score: 0.6,
      },
      {
        id: "REACTIVE",
        labelEn: "Unsupported technology is addressed mainly when problems occur",
        labelTr: "Desteklenmeyen teknoloji çoğunlukla sorun ortaya çıktığında ele alınmaktadır",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined process exists",
        labelTr: "Tanımlanmış bir süreç bulunmamaktadır",
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
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Unsupported or obsolete technology requires attention",
    findingTitleTr:
      "Desteklenmeyen veya eski teknoloji dikkat gerektiriyor",

    recommendationEn:
      "Identify unsupported or obsolete technology and establish a proportionate replacement, upgrade or risk-treatment plan.",
    recommendationTr:
      "Desteklenmeyen veya eski teknolojiyi belirleyin ve uygun bir değiştirme, yükseltme veya risk yönetimi planı oluşturun.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-AST-005",
    domainId: "AST",

    controlNameEn: "Asset Lifecycle Management",
    controlNameTr: "Varlık Yaşam Döngüsü Yönetimi",

    questionEn:
      "Does your organisation manage technology assets when they are introduced, reassigned and retired?",
    questionTr:
      "Kuruluşunuz teknoloji varlıklarını kullanıma alındığında, yeniden atandığında ve kullanım dışı bırakıldığında yönetiyor mu?",

    explanationEn:
      "Lifecycle management helps maintain accurate inventories and supports secure handling of devices and information throughout their business use.",
    explanationTr:
      "Yaşam döngüsü yönetimi doğru envanterlerin korunmasına ve cihazlarla bilgilerin kullanım süresince güvenli şekilde yönetilmesine yardımcı olur.",

    weight: 0.9,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "MANAGED",
        labelEn: "Yes, asset lifecycle changes are consistently managed",
        labelTr: "Evet, varlık yaşam döngüsü değişiklikleri tutarlı şekilde yönetilir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Lifecycle controls exist but are not always followed",
        labelTr: "Yaşam döngüsü kontrolleri vardır ancak her zaman uygulanmaz",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Lifecycle management is informal",
        labelTr: "Yaşam döngüsü yönetimi gayriresmidir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined lifecycle process exists",
        labelTr: "Tanımlanmış bir yaşam döngüsü süreci bulunmamaktadır",
        score: 0,
      },
      {
        id: "UNKNOWN",
        labelEn: "Don't know",
        labelTr: "Bilmiyorum",
        score: 0,
      },
    ],

    evidenceRequested: false,

    frameworkMappings: [
      {
        framework: "NIST_CSF_2_0",
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Technology asset lifecycle management requires improvement",
    findingTitleTr:
      "Teknoloji varlık yaşam döngüsü yönetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Establish simple procedures for recording technology when it is introduced, reassigned and securely retired.",
    recommendationTr:
      "Teknolojinin kullanıma alınması, yeniden atanması ve güvenli şekilde kullanım dışı bırakılması için basit prosedürler oluşturun.",

    actionTimeframe: "NEXT_90_DAYS",
  },

  {
    id: "CCR-FULL-AST-006",
    domainId: "AST",

    controlNameEn: "Critical Asset Identification",
    controlNameTr: "Kritik Varlıkların Belirlenmesi",

    questionEn:
      "Has your organisation identified which systems, services and technology assets are most important to continued business operations?",
    questionTr:
      "Kuruluşunuz iş faaliyetlerinin devamı için en önemli sistemleri, hizmetleri ve teknoloji varlıklarını belirledi mi?",

    explanationEn:
      "Identifying critical assets helps an organisation prioritise protection, recovery planning and improvement resources.",
    explanationTr:
      "Kritik varlıkların belirlenmesi koruma, kurtarma planlaması ve iyileştirme kaynaklarının önceliklendirilmesine yardımcı olur.",

    weight: 1.1,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "IDENTIFIED",
        labelEn: "Yes, critical assets and services are clearly identified",
        labelTr: "Evet, kritik varlıklar ve hizmetler açıkça belirlenmiştir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Some critical assets have been identified",
        labelTr: "Bazı kritik varlıklar belirlenmiştir",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Critical assets are generally understood but not documented",
        labelTr: "Kritik varlıklar genel olarak bilinmektedir ancak belgelenmemiştir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "Critical assets have not been identified",
        labelTr: "Kritik varlıklar belirlenmemiştir",
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
        reference: "ID.AM",
      },
    ],

    findingTitleEn:
      "Critical business technology assets are not clearly identified",
    findingTitleTr:
      "Kritik işletme teknoloji varlıkları açıkça belirlenmemiş",

    recommendationEn:
      "Identify and record the systems, services and technology assets whose loss or unavailability would materially affect business operations.",
    recommendationTr:
      "Kaybı veya kullanılamaması iş faaliyetlerini önemli ölçüde etkileyebilecek sistemleri, hizmetleri ve teknoloji varlıklarını belirleyin ve kaydedin.",

    actionTimeframe: "NEXT_30_DAYS",
  },
];