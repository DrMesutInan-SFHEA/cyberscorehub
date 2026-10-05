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
  {
    id: "CCR-FULL-IAM-001",
    domainId: "IAM",

    controlNameEn: "Multi-Factor Authentication",
    controlNameTr: "Çok Faktörlü Kimlik Doğrulama",

    questionEn:
      "Is multi-factor authentication required for applicable business cloud accounts and externally accessible services?",
    questionTr:
      "Uygulanabilir işletme bulut hesapları ve dışarıdan erişilebilen hizmetler için çok faktörlü kimlik doğrulama zorunlu mu?",

    explanationEn:
      "Multi-factor authentication adds an additional verification step beyond a password and can reduce exposure when account credentials are compromised.",
    explanationTr:
      "Çok faktörlü kimlik doğrulama, parolanın ötesinde ek bir doğrulama adımı sağlayarak hesap bilgilerinin ele geçirilmesi durumunda riski azaltmaya yardımcı olabilir.",

    weight: 1.4,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "ALL",
        labelEn: "Yes, across applicable accounts and services",
        labelTr: "Evet, uygulanabilir hesapların ve hizmetlerin tamamında",
        score: 1,
      },
      {
        id: "MOST",
        labelEn: "Yes, but some applicable accounts are not covered",
        labelTr: "Evet, ancak bazı uygulanabilir hesaplar kapsam dışındadır",
        score: 0.7,
      },
      {
        id: "ADMIN_ONLY",
        labelEn: "Only privileged or administrator accounts",
        labelTr: "Yalnızca ayrıcalıklı veya yönetici hesaplarında",
        score: 0.5,
      },
      {
        id: "NONE",
        labelEn: "No defined MFA requirement",
        labelTr: "Tanımlanmış bir MFA gereksinimi yoktur",
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
        reference: "PR.AA-03",
      },
    ],

    findingTitleEn:
      "Multi-factor authentication is not consistently implemented",
    findingTitleTr:
      "Çok faktörlü kimlik doğrulama tutarlı şekilde uygulanmıyor",

    recommendationEn:
      "Extend multi-factor authentication to applicable business accounts and externally accessible services, prioritising privileged access.",
    recommendationTr:
      "Çok faktörlü kimlik doğrulamayı uygulanabilir işletme hesaplarına ve dışarıdan erişilebilen hizmetlere genişletin ve ayrıcalıklı erişime öncelik verin.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-IAM-002",
    domainId: "IAM",

    controlNameEn: "Privileged and Administrator Accounts",
    controlNameTr: "Ayrıcalıklı ve Yönetici Hesapları",

    questionEn:
      "Are administrator and privileged accounts limited to people who require elevated access for their responsibilities?",
    questionTr:
      "Yönetici ve ayrıcalıklı hesaplar yalnızca görevleri için yüksek erişime ihtiyaç duyan kişilerle sınırlandırılmış mı?",

    explanationEn:
      "Privileged accounts can make significant changes to systems and information, so elevated access should be restricted to authorised users with a genuine business need.",
    explanationTr:
      "Ayrıcalıklı hesaplar sistemlerde ve bilgilerde önemli değişiklikler yapabildiğinden yüksek erişim yalnızca gerçek iş ihtiyacı bulunan yetkili kullanıcılarla sınırlandırılmalıdır.",

    weight: 1.3,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "RESTRICTED",
        labelEn:
          "Yes, privileged access is restricted and separately managed",
        labelTr:
          "Evet, ayrıcalıklı erişim sınırlandırılmış ve ayrı olarak yönetilmektedir",
        score: 1,
      },
      {
        id: "MOSTLY_RESTRICTED",
        labelEn:
          "Privileged access is generally restricted but some exceptions exist",
        labelTr:
          "Ayrıcalıklı erişim genel olarak sınırlandırılmıştır ancak bazı istisnalar bulunmaktadır",
        score: 0.6,
      },
      {
        id: "WIDESPREAD",
        labelEn:
          "Several users have administrator access without a clear requirement",
        labelTr:
          "Bazı kullanıcıların açık bir gereksinim olmadan yönetici erişimi vardır",
        score: 0.3,
      },
      {
        id: "UNMANAGED",
        labelEn: "Privileged access is not formally managed",
        labelTr: "Ayrıcalıklı erişim resmi olarak yönetilmemektedir",
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
        reference: "PR.AA-05",
      },
    ],

    findingTitleEn:
      "Privileged account management requires improvement",
    findingTitleTr:
      "Ayrıcalıklı hesap yönetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Restrict administrator and privileged access to authorised personnel with a defined business need and review elevated privileges periodically.",
    recommendationTr:
      "Yönetici ve ayrıcalıklı erişimi tanımlanmış iş ihtiyacı bulunan yetkili personelle sınırlandırın ve yüksek yetkileri düzenli olarak gözden geçirin.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-IAM-003",
    domainId: "IAM",

    controlNameEn: "Joiner, Mover and Leaver Access",
    controlNameTr: "İşe Giriş, Görev Değişikliği ve İşten Ayrılma Erişimi",

    questionEn:
      "Does your organisation have a defined process for creating, changing and removing user access when people join, change responsibilities or leave?",
    questionTr:
      "Kuruluşunuzda kişiler işe başladığında, görev değiştirdiğinde veya ayrıldığında kullanıcı erişiminin oluşturulması, değiştirilmesi ve kaldırılması için tanımlanmış bir süreç var mı?",

    explanationEn:
      "Timely account changes help prevent former personnel or users with changed responsibilities from retaining unnecessary access.",
    explanationTr:
      "Hesap erişimlerinin zamanında değiştirilmesi, ayrılan veya görevleri değişen kişilerin gereksiz erişimleri korumasını önlemeye yardımcı olur.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "DEFINED",
        labelEn:
          "Yes, access changes are consistently managed through a defined process",
        labelTr:
          "Evet, erişim değişiklikleri tanımlanmış bir süreçle tutarlı şekilde yönetilir",
        score: 1,
      },
      {
        id: "MOSTLY_DEFINED",
        labelEn:
          "A process exists but is not always followed consistently",
        labelTr:
          "Bir süreç vardır ancak her zaman tutarlı şekilde uygulanmaz",
        score: 0.6,
      },
      {
        id: "INFORMAL",
        labelEn: "Access changes are handled informally",
        labelTr: "Erişim değişiklikleri gayriresmi olarak yönetilir",
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
        reference: "PR.AA-01",
      },
    ],

    findingTitleEn:
      "User access lifecycle management requires improvement",
    findingTitleTr:
      "Kullanıcı erişim yaşam döngüsü yönetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Establish a consistent joiner, mover and leaver process so that access is granted, changed and removed promptly when responsibilities change.",
    recommendationTr:
      "Sorumluluklar değiştiğinde erişimin zamanında verilmesi, değiştirilmesi ve kaldırılması için tutarlı bir işe giriş, görev değişikliği ve işten ayrılma süreci oluşturun.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-IAM-004",
    domainId: "IAM",

    controlNameEn: "Least Privilege",
    controlNameTr: "En Az Yetki Prensibi",

    questionEn:
      "Are users generally given only the access needed to perform their business responsibilities?",
    questionTr:
      "Kullanıcılara genel olarak yalnızca iş sorumluluklarını yerine getirmek için gereken erişim mi veriliyor?",

    explanationEn:
      "Limiting permissions to what users genuinely require can reduce the impact of account compromise, mistakes and inappropriate access.",
    explanationTr:
      "Yetkilerin kullanıcıların gerçekten ihtiyaç duyduğu seviyede sınırlandırılması hesap ele geçirilmesi, hatalar ve uygunsuz erişimin etkisini azaltabilir.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "ENFORCED",
        labelEn:
          "Yes, access is based on responsibilities and unnecessary permissions are restricted",
        labelTr:
          "Evet, erişim sorumluluklara dayanır ve gereksiz yetkiler sınırlandırılır",
        score: 1,
      },
      {
        id: "MOSTLY_ENFORCED",
        labelEn:
          "Least privilege is generally followed but exceptions exist",
        labelTr:
          "En az yetki prensibi genel olarak uygulanır ancak bazı istisnalar vardır",
        score: 0.6,
      },
      {
        id: "INCONSISTENT",
        labelEn:
          "Permission levels are not consistently based on business need",
        labelTr:
          "Yetki seviyeleri iş ihtiyacına göre tutarlı şekilde belirlenmemektedir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined least-privilege approach exists",
        labelTr: "Tanımlanmış bir en az yetki yaklaşımı yoktur",
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
        reference: "PR.AA-05",
      },
    ],

    findingTitleEn:
      "Access permissions are not consistently based on least privilege",
    findingTitleTr:
      "Erişim yetkileri en az yetki prensibine göre tutarlı şekilde yönetilmiyor",

    recommendationEn:
      "Review user permissions and align access with current business responsibilities, removing unnecessary privileges.",
    recommendationTr:
      "Kullanıcı yetkilerini gözden geçirin, erişimi mevcut iş sorumluluklarıyla uyumlu hale getirin ve gereksiz yetkileri kaldırın.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-IAM-005",
    domainId: "IAM",

    controlNameEn: "Shared User Accounts",
    controlNameTr: "Paylaşılan Kullanıcı Hesapları",

    questionEn:
      "Are individual user accounts used instead of shared accounts wherever practical?",
    questionTr:
      "Uygulanabilir durumlarda paylaşılan hesaplar yerine bireysel kullanıcı hesapları mı kullanılıyor?",

    explanationEn:
      "Individual accounts improve accountability and make it easier to grant, review and remove access for specific users.",
    explanationTr:
      "Bireysel hesaplar hesap verebilirliği artırır ve belirli kullanıcılar için erişimin verilmesini, gözden geçirilmesini ve kaldırılmasını kolaylaştırır.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "INDIVIDUAL",
        labelEn:
          "Yes, individual accounts are used wherever practical",
        labelTr:
          "Evet, uygulanabilir durumlarda bireysel hesaplar kullanılmaktadır",
        score: 1,
      },
      {
        id: "LIMITED_SHARED",
        labelEn:
          "A small number of shared accounts exist for defined reasons",
        labelTr:
          "Tanımlanmış nedenlerle az sayıda paylaşılan hesap bulunmaktadır",
        score: 0.7,
      },
      {
        id: "MULTIPLE_SHARED",
        labelEn:
          "Shared accounts are used in several areas",
        labelTr:
          "Birden fazla alanda paylaşılan hesaplar kullanılmaktadır",
        score: 0.3,
      },
      {
        id: "WIDESPREAD",
        labelEn: "Shared accounts are commonly used",
        labelTr: "Paylaşılan hesaplar yaygın olarak kullanılmaktadır",
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
        reference: "PR.AA-01",
      },
    ],

    findingTitleEn:
      "Shared account usage requires improvement",
    findingTitleTr:
      "Paylaşılan hesap kullanımının iyileştirilmesi gerekiyor",

    recommendationEn:
      "Replace unnecessary shared accounts with individually assigned accounts and document justified exceptions where shared access cannot be avoided.",
    recommendationTr:
      "Gereksiz paylaşılan hesapları bireysel hesaplarla değiştirin ve paylaşılan erişimin kaçınılmaz olduğu istisnaları belgeleyin.",

    actionTimeframe: "NEXT_90_DAYS",
  },

  {
    id: "CCR-FULL-IAM-006",
    domainId: "IAM",

    controlNameEn: "Periodic Access Review",
    controlNameTr: "Periyodik Erişim Gözden Geçirmesi",

    questionEn:
      "Are user accounts and access permissions reviewed periodically to identify unnecessary or inappropriate access?",
    questionTr:
      "Gereksiz veya uygunsuz erişimleri belirlemek için kullanıcı hesapları ve erişim yetkileri düzenli olarak gözden geçiriliyor mu?",

    explanationEn:
      "Periodic access reviews help identify dormant accounts, excessive permissions and access that is no longer justified by current responsibilities.",
    explanationTr:
      "Düzenli erişim gözden geçirmeleri kullanılmayan hesapları, aşırı yetkileri ve artık mevcut sorumluluklarla gerekçelendirilemeyen erişimleri belirlemeye yardımcı olur.",

    weight: 1,
    riskPriority: "MEDIUM",

    answerOptions: [
      {
        id: "REGULAR",
        labelEn:
          "Yes, accounts and permissions are reviewed periodically",
        labelTr:
          "Evet, hesaplar ve yetkiler düzenli olarak gözden geçirilir",
        score: 1,
      },
      {
        id: "OCCASIONAL",
        labelEn: "Access reviews take place occasionally",
        labelTr: "Erişim gözden geçirmeleri zaman zaman yapılır",
        score: 0.6,
      },
      {
        id: "REACTIVE",
        labelEn:
          "Access is mainly reviewed when a specific issue occurs",
        labelTr:
          "Erişim çoğunlukla belirli bir sorun ortaya çıktığında gözden geçirilir",
        score: 0.3,
      },
      {
        id: "NONE",
        labelEn: "No defined access-review process exists",
        labelTr:
          "Tanımlanmış bir erişim gözden geçirme süreci bulunmamaktadır",
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
        reference: "PR.AA-05",
      },
    ],

    findingTitleEn:
      "Periodic access reviews require improvement",
    findingTitleTr:
      "Periyodik erişim gözden geçirmelerinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Introduce periodic reviews of user accounts and permissions, prioritising privileged access, dormant accounts and access to sensitive business information.",
    recommendationTr:
      "Özellikle ayrıcalıklı erişim, kullanılmayan hesaplar ve hassas işletme bilgilerine erişimi önceliklendirerek kullanıcı hesapları ve yetkileri için düzenli gözden geçirmeler oluşturun.",

    actionTimeframe: "NEXT_90_DAYS",
  },
        {
    id: "CCR-FULL-END-001",
    domainId: "END",

    controlNameEn: "Security Update Management",
  controlNameTr: "Güvenlik Güncelleme Yönetimi",

    questionEn:
      "Are operating systems, applications and business devices kept up to date with relevant security updates?",
   questionTr:
  "İşletim sistemleri, uygulamalar ve işletme cihazları ilgili güvenlik güncellemeleriyle güncel tutuluyor mu?",

    explanationEn:
      "Timely security updates help reduce exposure to known vulnerabilities in operating systems, applications and supported business devices.",
    explanationTr:
      "Güvenlik güncellemelerinin zamanında uygulanması işletim sistemleri, uygulamalar ve desteklenen işletme cihazlarındaki bilinen açıklıklara karşı riski azaltmaya yardımcı olur.",

    weight: 1.4,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "MANAGED",
        labelEn:
          "Yes, security updates are managed and applied within defined timeframes",
labelTr: "Evet, güvenlik güncellemeleri tanımlanmış zaman dilimlerinde yönetilir ve uygulanır",
        score: 1,
      },
      {
        id: "MOSTLY_AUTOMATIC",
        labelEn:
          "Updates are generally applied automatically but oversight is limited",
labelTr: "Güncellemeler genel olarak otomatik uygulanır ancak gözetim sınırlıdır",
        score: 0.7,
      },
      {
        id: "INCONSISTENT",
        labelEn:
          "Updates are applied but not consistently or within defined timeframes",
labelTr: "Güncellemeler uygulanır ancak tutarlı veya tanımlanmış sürelerde değildir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined security-update process exists",
        labelTr:
"Tanımlanmış bir güvenlik güncelleme süreci bulunmamaktadır",
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
        reference: "PR.PS-02",
      },
    ],

    findingTitleEn:
      "Security update management requires improvement",
findingTitleTr:
  "Güvenlik güncelleme yönetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Establish a consistent security-update process for supported operating systems, applications and business devices, with defined update timeframes based on risk.",
     recommendationTr:
      "Desteklenen işletim sistemleri, uygulamalar ve işletme cihazları için riske dayalı tanımlanmış süreleri içeren tutarlı bir güvenlik güncelleme süreci oluşturun.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-END-002",
    domainId: "END",

    controlNameEn: "Secure Configuration",
controlNameTr: "Güvenli Yapılandırma",

    questionEn:
      "Are business computers and devices configured using defined security settings or an approved baseline?",
    questionTr:
      "İşletme bilgisayarları ve cihazları tanımlanmış güvenlik ayarları veya onaylanmış bir temel yapılandırma kullanılarak yapılandırılıyor mu?",

    explanationEn:
      "Consistent secure configuration can reduce unnecessary functionality, insecure defaults and avoidable differences between business devices.",
        explanationTr:
      "Tutarlı güvenli yapılandırma gereksiz işlevleri, güvensiz varsayılan ayarları ve işletme cihazları arasındaki önlenebilir farklılıkları azaltabilir.",

    weight: 1.2,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "BASELINE",
        labelEn:
          "Yes, defined secure configurations or approved baselines are used",
labelTr: "Evet, tanımlanmış güvenli yapılandırmalar veya onaylanmış temel ayarlar kullanılmaktadır",
        score: 1,
      },
      {
        id: "MOSTLY_STANDARD",
        labelEn:
          "Most devices use consistent security settings",
labelTr: "Cihazların çoğu tutarlı güvenlik ayarları kullanmaktadır",
        score: 0.7,
      },
      {
        id: "INFORMAL",
        labelEn:
          "Security settings are applied but there is no defined baseline",
labelTr: "Güvenlik ayarları uygulanmaktadır ancak tanımlı bir temel yapılandırma yoktur",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined secure-configuration approach exists",
labelTr: "Tanımlanmış bir güvenli yapılandırma yaklaşımı bulunmamaktadır",
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
        reference: "PR.PS-01",
      },
    ],

    findingTitleEn:
      "Secure configuration practices require improvement",
    findingTitleTr:
      "Güvenli yapılandırma uygulamalarının iyileştirilmesi gerekiyor",

    recommendationEn:
      "Define proportionate secure-configuration standards for business devices and systems, including review of security-relevant default settings and unnecessary functionality.",
    recommendationTr:
      "İşletme cihazları ve sistemleri için güvenlikle ilgili varsayılan ayarların ve gereksiz işlevlerin gözden geçirilmesini içeren orantılı güvenli yapılandırma standartları tanımlayın.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-END-003",
    domainId: "END",

    controlNameEn: "Endpoint Protection",
   controlNameTr: "Uç Nokta Koruması",

    questionEn:
      "Are business endpoints protected using appropriate built-in or managed security capabilities?",
    questionTr:
      "İşletme uç noktaları uygun yerleşik veya yönetilen güvenlik özellikleri kullanılarak korunuyor mu?",

    explanationEn:
      "Endpoint protection can help identify, block or reduce the impact of malicious software and other common threats affecting business devices.",
    explanationTr:
      "Uç nokta koruması, işletme cihazlarını etkileyen zararlı yazılımların ve diğer yaygın tehditlerin belirlenmesine, engellenmesine veya etkisinin azaltılmasına yardımcı olabilir.",

    weight: 1.3,
    riskPriority: "HIGH",

    answerOptions: [
      {
        id: "MANAGED",
        labelEn:
          "Yes, appropriate endpoint protection is enabled and managed",
labelTr: "Evet, uygun uç nokta koruması etkin ve yönetilmektedir",
        score: 1,
      },
      {
        id: "BUILT_IN",
        labelEn:
          "Built-in protection is enabled but central oversight is limited",
labelTr: "Yerleşik koruma etkindir ancak merkezi gözetim sınırlıdır",
        score: 0.7,
      },
      {
        id: "PARTIAL",
        labelEn:
          "Protection exists on some devices but coverage is incomplete",
labelTr: "Bazı cihazlarda koruma vardır ancak kapsam eksiktir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn:
          "No defined endpoint-protection approach exists",
labelTr: "Tanımlanmış bir uç nokta koruma yaklaşımı bulunmamaktadır",

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
        reference: "PR.PS",
      },
    ],

    findingTitleEn:
      "Endpoint protection coverage requires improvement",
findingTitleTr:
  "Uç nokta koruma kapsamının iyileştirilmesi gerekiyor",

    recommendationEn:
      "Ensure appropriate endpoint-protection capabilities are enabled across applicable business devices and that protection status can be monitored.",
recommendationTr:
  "Uygulanabilir işletme cihazlarının tamamında uygun uç nokta koruma özelliklerinin etkinleştirildiğinden ve koruma durumunun izlenebildiğinden emin olun.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-END-004",
    domainId: "END",

    controlNameEn: "Unauthorised Software Control",
    controlNameTr: "Yetkisiz Yazılım Kontrolü",

    questionEn:
      "Does your organisation control or restrict the installation of unauthorised software on business devices?",
    questionTr: "Kuruluşunuz işletme cihazlarında yetkisiz yazılımların yüklenmesini kontrol ediyor veya kısıtlıyor mu?",
    
    explanationEn:
      "Restricting unauthorised software can reduce exposure to malicious, unsupported or unapproved applications on business devices.",
    explanationTr:
      "Yetkisiz yazılımların kısıtlanması, işletme cihazlarında kötü amaçlı, desteklenmeyen veya onaylanmamış uygulamalara maruz kalma riskini azaltmaya yardımcı olabilir.",
          weight: 1.1,
    riskPriority: "MEDIUM",
    
    answerOptions: [
      {
        id: "CONTROLLED",
        labelEn: "Yes, software installation is controlled",
        labelTr: "Evet, yazılım yükleme işlemleri kontrol edilmektedir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Partially controlled",
        labelTr: "Kısmen kontrol edilmektedir",
        score: 0.5,
      },
      {
        id: "UNCONTROLLED",
        labelEn: "No, users can install software without restriction",
        labelTr: "Hayır, kullanıcılar herhangi bir kısıtlama olmadan yazılım yükleyebilir",
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
        reference: "PR.PS",
      },
    ],
    
    findingTitleEn:
      "Unauthorised software installation is not adequately controlled",
    findingTitleTr:
      "Yetkisiz yazılım yüklemeleri yeterli şekilde kontrol edilmiyor",

    recommendationEn:
      "Restrict software installation on business devices to authorised applications and approved users, and periodically review installed software.",
    recommendationTr:
      "İşletme cihazlarında yazılım yüklemelerini yetkili uygulamalar ve onaylı kullanıcılarla sınırlandırın ve yüklü yazılımları düzenli olarak gözden geçirin.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-END-005",
    domainId: "END",

    controlNameEn: "Removable Media Control",
    controlNameTr: "Çıkarılabilir Medya Kontrolü",

    questionEn:
      "Does your organisation control the use of removable media such as USB storage devices on business systems?",
     questionTr:
      "Kuruluşunuz işletme sistemlerinde USB depolama cihazları gibi çıkarılabilir medyaların kullanımını kontrol ediyor mu?",

    explanationEn:
      "Controlling removable media can reduce exposure to malicious software, unauthorised data transfer and unmanaged storage devices.",
    explanationTr:
      "Çıkarılabilir medyanın kontrol edilmesi, kötü amaçlı yazılımlara, yetkisiz veri aktarımına ve yönetilmeyen depolama cihazlarına maruz kalma riskini azaltmaya yardımcı olabilir.",

    weight: 1.1,
    riskPriority: "MEDIUM",
        answerOptions: [
      {
        id: "CONTROLLED",
        labelEn: "Yes, removable media use is controlled",
        labelTr: "Evet, çıkarılabilir medya kullanımı kontrol edilmektedir",
        score: 1,
      },
      {
        id: "PARTIAL",
        labelEn: "Some controls are in place",
        labelTr: "Bazı kontroller uygulanmaktadır",
        score: 0.5,
      },
      {
        id: "UNCONTROLLED",
        labelEn: "No defined controls are in place",
        labelTr: "Tanımlanmış bir kontrol bulunmamaktadır",
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
        reference: "PR.PS",
      },
    ],
        findingTitleEn:
      "Removable media use is not adequately controlled",
    findingTitleTr:
      "Çıkarılabilir medya kullanımı yeterli şekilde kontrol edilmiyor",

    recommendationEn:
      "Define proportionate controls for removable media use on business systems, restricting unnecessary use and allowing only authorised devices where appropriate.",
    recommendationTr:
      "İşletme sistemlerinde çıkarılabilir medya kullanımı için orantılı kontroller tanımlayın, gereksiz kullanımı sınırlandırın ve uygun durumlarda yalnızca yetkilendirilmiş cihazlara izin verin.",
    actionTimeframe: "NEXT_30_DAYS",
  },

   {
    id: "CCR-FULL-END-006",
    domainId: "END",

    controlNameEn: "Device Encryption",
    controlNameTr: "Cihaz Şifreleme",

    questionEn:
      "Are applicable business laptops and portable devices protected using device or disk encryption?",
    questionTr:
      "Uygulanabilir işletme dizüstü bilgisayarları ve taşınabilir cihazları, cihaz veya disk şifrelemesi kullanılarak korunuyor mu?",
          explanationEn:
      "Device encryption can help protect business information if a laptop or portable device is lost, stolen or accessed without authorisation.",
    explanationTr:
      "Cihaz şifrelemesi, bir dizüstü bilgisayar veya taşınabilir cihazın kaybolması, çalınması ya da yetkisiz erişime maruz kalması durumunda işletme bilgilerinin korunmasına yardımcı olabilir.",
          weight: 1.2,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "ENCRYPTED",
        labelEn: "Yes, applicable portable devices are encrypted",
        labelTr: "Evet, uygulanabilir taşınabilir cihazlar şifrelenmektedir",
        score: 1,
      },
      {
        id: "MOSTLY_ENCRYPTED",
        labelEn: "Most applicable portable devices are encrypted",
        labelTr: "Uygulanabilir taşınabilir cihazların çoğu şifrelenmektedir",
        score: 0.7,
      },
      {
        id: "PARTIAL",
        labelEn: "Encryption is used on some devices only",
        labelTr: "Şifreleme yalnızca bazı cihazlarda kullanılmaktadır",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined device-encryption approach exists",
        labelTr: "Tanımlanmış bir cihaz şifreleme yaklaşımı bulunmamaktadır",
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
        reference: "PR.DS",
      },
    ],

    findingTitleEn:
      "Portable device encryption requires improvement",
    findingTitleTr:
      "Taşınabilir cihaz şifrelemesinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Enable device or disk encryption on applicable business laptops and portable devices, prioritising devices that store or access sensitive business information.",
    recommendationTr:
      "Uygulanabilir işletme dizüstü bilgisayarlarında ve taşınabilir cihazlarda cihaz veya disk şifrelemesini etkinleştirin ve hassas işletme bilgilerini saklayan veya bu bilgilere erişen cihazlara öncelik verin.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-NET-001",
    domainId: "NET",

    controlNameEn: "Network Boundary Protection",
    controlNameTr: "Ağ Sınırı Koruması",

    questionEn:
      "Does your organisation use a firewall or equivalent security control to protect business networks from unauthorised external access?",
    questionTr:
      "Kuruluşunuz işletme ağlarını yetkisiz dış erişime karşı korumak için güvenlik duvarı veya eşdeğer bir güvenlik kontrolü kullanıyor mu?",
          explanationEn:
      "Network boundary controls can help restrict unauthorised connections between business networks and external networks such as the internet.",
    explanationTr:
      "Ağ sınırı kontrolleri, işletme ağları ile internet gibi dış ağlar arasındaki yetkisiz bağlantıların sınırlandırılmasına yardımcı olabilir.",
          weight: 1.4,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "MANAGED",
        labelEn: "Yes, network boundary protection is implemented and managed",
        labelTr: "Evet, ağ sınırı koruması uygulanmakta ve yönetilmektedir",
        score: 1,
      },
      {
        id: "BASIC",
        labelEn: "Basic firewall protection is in place but management is limited",
        labelTr: "Temel güvenlik duvarı koruması vardır ancak yönetimi sınırlıdır",
        score: 0.7,
      },
      {
        id: "INCONSISTENT",
        labelEn: "Some network protection exists but coverage or configuration is inconsistent",
        labelTr: "Bazı ağ korumaları vardır ancak kapsam veya yapılandırma tutarlı değildir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined network boundary protection is in place",
        labelTr: "Tanımlanmış bir ağ sınırı koruması bulunmamaktadır",
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
        reference: "PR.IR",
      },
    ],

    findingTitleEn:
      "Network boundary protection requires improvement",
    findingTitleTr:
      "Ağ sınırı korumasının iyileştirilmesi gerekiyor",

    recommendationEn:
      "Ensure business networks are protected by an appropriately configured and managed firewall or equivalent boundary security control, and periodically review relevant rules and settings.",
    recommendationTr:
      "İşletme ağlarının uygun şekilde yapılandırılmış ve yönetilen bir güvenlik duvarı veya eşdeğer sınır güvenliği kontrolüyle korunduğundan emin olun ve ilgili kuralları ve ayarları düzenli olarak gözden geçirin.",

    actionTimeframe: "DO_NOW",
  },

  {
    id: "CCR-FULL-NET-002",
    domainId: "NET",

    controlNameEn: "Secure Wireless Networks",
    controlNameTr: "Güvenli Kablosuz Ağlar",

    questionEn:
      "Are business wireless networks protected using appropriate security settings and strong authentication?",
    questionTr:
      "İşletmenizin kablosuz ağları uygun güvenlik ayarları ve güçlü kimlik doğrulama kullanılarak korunuyor mu?",
          explanationEn:
      "Secure wireless configuration and strong authentication can reduce the risk of unauthorised users connecting to business networks.",
    explanationTr:
      "Güvenli kablosuz ağ yapılandırması ve güçlü kimlik doğrulama, yetkisiz kullanıcıların işletme ağlarına bağlanma riskini azaltmaya yardımcı olabilir.",
          weight: 1.2,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "SECURE",
        labelEn: "Yes, wireless networks use appropriate security and strong authentication",
        labelTr: "Evet, kablosuz ağlarda uygun güvenlik ve güçlü kimlik doğrulama kullanılmaktadır",
        score: 1,
      },
      {
        id: "MOSTLY_SECURE",
        labelEn: "Most wireless networks use appropriate security settings",
        labelTr: "Kablosuz ağların çoğunda uygun güvenlik ayarları kullanılmaktadır",
        score: 0.7,
      },
      {
        id: "INCONSISTENT",
        labelEn: "Wireless security exists but settings are inconsistent",
        labelTr: "Kablosuz ağ güvenliği vardır ancak ayarlar tutarlı değildir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined wireless security approach exists",
        labelTr: "Tanımlanmış bir kablosuz ağ güvenliği yaklaşımı bulunmamaktadır",
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
        reference: "PR.AA",
      },
    ],

    findingTitleEn:
      "Wireless network security requires improvement",
    findingTitleTr:
      "Kablosuz ağ güvenliğinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Configure business wireless networks using appropriate security settings and strong authentication, and periodically review wireless access and configuration.",
    recommendationTr:
      "İşletme kablosuz ağlarını uygun güvenlik ayarları ve güçlü kimlik doğrulama kullanarak yapılandırın ve kablosuz erişimi ve yapılandırmayı düzenli olarak gözden geçirin.",

    actionTimeframe: "NEXT_30_DAYS",
  },

  {
    id: "CCR-FULL-NET-003",
    domainId: "NET",

    controlNameEn: "Guest Network Separation",
    controlNameTr: "Misafir Ağ Ayrıştırması",

    questionEn:
      "Are guest or visitor devices separated from internal business systems and networks?",
    questionTr:
      "Misafir veya ziyaretçi cihazları, işletmenin iç sistemlerinden ve ağlarından ayrıştırılıyor mu?",
          explanationEn:
      "Separating guest access from internal business networks can reduce the risk that unmanaged or untrusted devices can reach business systems and information.",
    explanationTr:
      "Misafir erişiminin işletmenin iç ağlarından ayrıştırılması, yönetilmeyen veya güvenilmeyen cihazların işletme sistemlerine ve bilgilerine erişme riskini azaltmaya yardımcı olabilir.",
          weight: 1.0,
    riskPriority: "MEDIUM",
        answerOptions: [
      {
        id: "SEPARATED",
        labelEn: "Yes, guest access is separated from internal business networks",
        labelTr: "Evet, misafir erişimi işletmenin iç ağlarından ayrıştırılmıştır",
        score: 1,
      },
      {
        id: "MOSTLY_SEPARATED",
        labelEn: "Guest access is generally separated but some exceptions exist",
        labelTr: "Misafir erişimi genel olarak ayrıştırılmıştır ancak bazı istisnalar bulunmaktadır",
        score: 0.7,
      },
      {
        id: "LIMITED",
        labelEn: "Some separation exists but guest devices may reach parts of the business network",
        labelTr: "Bazı ayrıştırmalar vardır ancak misafir cihazları işletme ağının bazı bölümlerine erişebilir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "Guest access is not separated from internal business networks",
        labelTr: "Misafir erişimi işletmenin iç ağlarından ayrıştırılmamıştır",
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
        reference: "PR.IR",
      },
    ],

    findingTitleEn:
      "Guest network separation requires improvement",
    findingTitleTr:
      "Misafir ağ ayrıştırmasının iyileştirilmesi gerekiyor",

    recommendationEn:
      "Separate guest and visitor network access from internal business systems and networks, using appropriately configured guest networks or equivalent network controls.",
    recommendationTr:
      "Misafir ve ziyaretçi ağ erişimini işletmenin iç sistemlerinden ve ağlarından ayırın ve uygun şekilde yapılandırılmış misafir ağları veya eşdeğer ağ kontrolleri kullanın.",

    actionTimeframe: "NEXT_30_DAYS",
  },
  {
    id: "CCR-FULL-NET-004",
    domainId: "NET",

    controlNameEn: "Remote Access Security",
    controlNameTr: "Uzaktan Erişim Güvenliği",

    questionEn:
      "Is remote access to business systems protected using secure methods and restricted to authorised users?",
    questionTr:
      "İşletme sistemlerine uzaktan erişim güvenli yöntemlerle korunuyor ve yalnızca yetkili kullanıcılarla sınırlandırılıyor mu?",
          explanationEn:
      "Secure remote access helps reduce the risk of unauthorised users reaching business systems from external networks or locations.",
    explanationTr:
      "Güvenli uzaktan erişim, yetkisiz kullanıcıların dış ağlardan veya konumlardan işletme sistemlerine erişme riskini azaltmaya yardımcı olabilir.",
          weight: 1.3,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "SECURE",
        labelEn: "Yes, remote access is securely configured and restricted to authorised users",
        labelTr: "Evet, uzaktan erişim güvenli şekilde yapılandırılmış ve yetkili kullanıcılarla sınırlandırılmıştır",
        score: 1,
      },
      {
        id: "MOSTLY_SECURE",
        labelEn: "Remote access is generally secure but some limitations exist",
        labelTr: "Uzaktan erişim genel olarak güvenlidir ancak bazı sınırlamalar bulunmaktadır",
        score: 0.7,
      },
      {
        id: "INCONSISTENT",
        labelEn: "Remote access controls exist but are not consistently applied",
        labelTr: "Uzaktan erişim kontrolleri vardır ancak tutarlı şekilde uygulanmamaktadır",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined secure remote-access approach exists",
        labelTr: "Tanımlanmış güvenli bir uzaktan erişim yaklaşımı bulunmamaktadır",
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
        reference: "PR.AA",
      },
    ],

    findingTitleEn:
      "Remote access security requires improvement",
    findingTitleTr:
      "Uzaktan erişim güvenliğinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Protect remote access to business systems using secure access methods, restrict access to authorised users and periodically review remote-access permissions and configuration.",
    recommendationTr:
      "İşletme sistemlerine uzaktan erişimi güvenli erişim yöntemleriyle koruyun, erişimi yetkili kullanıcılarla sınırlandırın ve uzaktan erişim yetkilerini ve yapılandırmasını düzenli olarak gözden geçirin.",

    actionTimeframe: "DO_NOW",
  },

   {
    id: "CCR-FULL-NET-005",
    domainId: "NET",

    controlNameEn: "Network Segmentation",
    controlNameTr: "Ağ Bölümlendirmesi",

    questionEn:
      "Are important business systems or sensitive network areas separated from general user and device networks where appropriate?",
    questionTr:
      "Önemli işletme sistemleri veya hassas ağ alanları, uygun durumlarda genel kullanıcı ve cihaz ağlarından ayrıştırılıyor mu?",
          explanationEn:
      "Network segmentation can help limit unauthorised access and reduce the spread of security incidents between general user networks and important business systems.",
    explanationTr:
      "Ağ bölümlendirmesi, genel kullanıcı ağları ile önemli işletme sistemleri arasındaki yetkisiz erişimi sınırlandırmaya ve güvenlik olaylarının yayılmasını azaltmaya yardımcı olabilir.",
          weight: 1.2,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "SEGMENTED",
        labelEn: "Yes, important systems and sensitive network areas are appropriately separated",
        labelTr: "Evet, önemli sistemler ve hassas ağ alanları uygun şekilde ayrıştırılmıştır",
        score: 1,
      },
      {
        id: "MOSTLY_SEGMENTED",
        labelEn: "Most important systems are separated but some exceptions exist",
        labelTr: "Önemli sistemlerin çoğu ayrıştırılmıştır ancak bazı istisnalar bulunmaktadır",
        score: 0.7,
      },
      {
        id: "LIMITED",
        labelEn: "Some network separation exists but coverage is limited",
        labelTr: "Bazı ağ ayrıştırmaları vardır ancak kapsam sınırlıdır",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined network-segmentation approach exists",
        labelTr: "Tanımlanmış bir ağ bölümlendirme yaklaşımı bulunmamaktadır",
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
        reference: "PR.IR",
      },
    ],
    findingTitleEn:
      "Network segmentation requires improvement",
    findingTitleTr:
      "Ağ bölümlendirmesinin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Separate important business systems and sensitive network areas from general user and device networks where appropriate, using proportionate network-segmentation controls.",
    recommendationTr:
      "Önemli işletme sistemlerini ve hassas ağ alanlarını uygun durumlarda genel kullanıcı ve cihaz ağlarından ayırın ve orantılı ağ bölümlendirme kontrolleri uygulayın.",

    actionTimeframe: "NEXT_30_DAYS",
  },

   {
    id: "CCR-FULL-NET-006",
    domainId: "NET",

    controlNameEn: "Network Device Management",
    controlNameTr: "Ağ Cihazı Yönetimi",

    questionEn:
      "Are business network devices such as routers, firewalls and wireless access points securely configured and managed?",
    questionTr:
      "Yönlendiriciler, güvenlik duvarları ve kablosuz erişim noktaları gibi işletme ağ cihazları güvenli şekilde yapılandırılıyor ve yönetiliyor mu?",
          explanationEn:
      "Secure configuration and management of network devices can reduce exposure to unauthorised access, insecure defaults and avoidable network weaknesses.",
    explanationTr:
      "Ağ cihazlarının güvenli şekilde yapılandırılması ve yönetilmesi, yetkisiz erişime, güvensiz varsayılan ayarlara ve önlenebilir ağ zayıflıklarına maruz kalma riskini azaltmaya yardımcı olabilir.",
          weight: 1.2,
    riskPriority: "HIGH",
        answerOptions: [
      {
        id: "MANAGED",
        labelEn: "Yes, network devices are securely configured and managed",
        labelTr: "Evet, ağ cihazları güvenli şekilde yapılandırılmakta ve yönetilmektedir",
        score: 1,
      },
      {
        id: "MOSTLY_MANAGED",
        labelEn: "Most network devices are securely configured and managed",
        labelTr: "Ağ cihazlarının çoğu güvenli şekilde yapılandırılmakta ve yönetilmektedir",
        score: 0.7,
      },
      {
        id: "INCONSISTENT",
        labelEn: "Network-device security exists but management is inconsistent",
        labelTr: "Ağ cihazı güvenliği vardır ancak yönetim tutarlı değildir",
        score: 0.4,
      },
      {
        id: "NONE",
        labelEn: "No defined network-device management approach exists",
        labelTr: "Tanımlanmış bir ağ cihazı yönetimi yaklaşımı bulunmamaktadır",
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
        reference: "PR.PS",
      },
    ],

    findingTitleEn:
      "Network device management requires improvement",
    findingTitleTr:
      "Ağ cihazı yönetiminin iyileştirilmesi gerekiyor",

    recommendationEn:
      "Securely configure and manage business network devices, review security-relevant settings and administrative access, and keep device software or firmware appropriately updated.",
    recommendationTr:
      "İşletme ağ cihazlarını güvenli şekilde yapılandırın ve yönetin, güvenlikle ilgili ayarları ve yönetici erişimini gözden geçirin ve cihaz yazılımını veya ürün yazılımını uygun şekilde güncel tutun.",

    actionTimeframe: "NEXT_30_DAYS",
  },
];