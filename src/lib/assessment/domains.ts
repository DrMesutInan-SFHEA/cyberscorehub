import type { CCRDomain } from "./types";

export const CCR_DOMAINS: CCRDomain[] = [
  {
    id: "GOV",
    code: "CCR-GOV",
    nameEn: "Governance & Risk",
    nameTr: "Yönetişim ve Risk",
    descriptionEn:
      "How the organisation defines responsibility, policies and oversight for cyber-security risk.",
    descriptionTr:
      "Kuruluşun siber güvenlik riskine ilişkin sorumlulukları, politikaları ve gözetimi nasıl belirlediğini değerlendirir.",
  },

  {
    id: "AST",
    code: "CCR-AST",
    nameEn: "Asset Management",
    nameTr: "Varlık Yönetimi",
    descriptionEn:
      "How the organisation identifies and manages devices, systems, software and other technology assets.",
    descriptionTr:
      "Kuruluşun cihazları, sistemleri, yazılımları ve diğer teknoloji varlıklarını nasıl belirlediğini ve yönettiğini değerlendirir.",
  },

  {
    id: "IAM",
    code: "CCR-IAM",
    nameEn: "Identity & Access",
    nameTr: "Kimlik ve Erişim",
    descriptionEn:
      "How access to business systems and information is authenticated, authorised and controlled.",
    descriptionTr:
      "İş sistemlerine ve bilgilere erişimin nasıl doğrulandığını, yetkilendirildiğini ve kontrol edildiğini değerlendirir.",
  },

  {
    id: "END",
    code: "CCR-END",
    nameEn: "Endpoint & Configuration",
    nameTr: "Uç Nokta ve Yapılandırma",
    descriptionEn:
      "How computers, mobile devices and other endpoints are securely configured, maintained and protected.",
    descriptionTr:
      "Bilgisayarların, mobil cihazların ve diğer uç noktaların güvenli şekilde nasıl yapılandırıldığını, sürdürüldüğünü ve korunduğunu değerlendirir.",
  },

  {
    id: "NET",
    code: "CCR-NET",
    nameEn: "Network Security",
    nameTr: "Ağ Güvenliği",
    descriptionEn:
      "How business networks, wireless access and network boundaries are protected and managed.",
    descriptionTr:
      "İş ağlarının, kablosuz erişimin ve ağ sınırlarının nasıl korunduğunu ve yönetildiğini değerlendirir.",
  },

  {
    id: "DAT",
    code: "CCR-DAT",
    nameEn: "Data Protection",
    nameTr: "Veri Koruma",
    descriptionEn:
      "How sensitive business and personal information is identified, protected and handled.",
    descriptionTr:
      "Hassas işletme ve kişisel bilgilerin nasıl belirlendiğini, korunduğunu ve işlendiğini değerlendirir.",
  },

  {
    id: "BCK",
    code: "CCR-BCK",
    nameEn: "Backup & Recovery",
    nameTr: "Yedekleme ve Kurtarma",
    descriptionEn:
      "How critical business information is backed up, tested and recoverable following disruption.",
    descriptionTr:
      "Kritik işletme bilgilerinin nasıl yedeklendiğini, test edildiğini ve kesinti sonrasında nasıl kurtarılabildiğini değerlendirir.",
  },

  {
    id: "IR",
    code: "CCR-IR",
    nameEn: "Detection & Incident Response",
    nameTr: "Tespit ve Olay Müdahalesi",
    descriptionEn:
      "How the organisation identifies, manages and responds to potential cyber-security incidents.",
    descriptionTr:
      "Kuruluşun olası siber güvenlik olaylarını nasıl tespit ettiğini, yönettiğini ve bunlara nasıl müdahale ettiğini değerlendirir.",
  },

  {
    id: "AWR",
    code: "CCR-AWR",
    nameEn: "People & Security Awareness",
    nameTr: "İnsan ve Güvenlik Farkındalığı",
    descriptionEn:
      "How employees and other users are supported in understanding and managing cyber-security responsibilities.",
    descriptionTr:
      "Çalışanların ve diğer kullanıcıların siber güvenlik sorumluluklarını anlamalarının ve yönetmelerinin nasıl desteklendiğini değerlendirir.",
  },

  {
    id: "IOT",
    code: "CCR-IOT",
    nameEn: "IoT & Connected Devices",
    nameTr: "IoT ve Bağlantılı Cihazlar",
    descriptionEn:
      "How connected devices such as CCTV, POS systems, printers, sensors and access-control systems are identified and secured.",
    descriptionTr:
      "CCTV, POS sistemleri, yazıcılar, sensörler ve erişim kontrol sistemleri gibi bağlantılı cihazların nasıl belirlendiğini ve güvenliğinin nasıl sağlandığını değerlendirir.",
  },
];