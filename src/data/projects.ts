import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "vuk507",
    title: "VUK 507 — Merkezi Yönetim Sistemi",
    company: "PayEra",
    role: "Software Developer / System Owner",
    description:
      "VUK 507 kapsamındaki merkezi yönetim sisteminin uçtan uca yönetimi: üretim/test sunucuları ve veritabanları, backend-frontend koordinasyonu, diğer projelerle entegrasyonlar, dağıtım ve canlı operasyon süreçleri. Python ile iç araçlar geliştirip saha ekiplerine ve müşterilere teknik destek sağladım.",
    tech: ["Python", "SQL", "Windows Server", "RESTful API"],
  },
  {
    id: "datecs-okc",
    title: "DATECS — Yeni Nesil ÖKC",
    company: "PayEra",
    role: "Software Developer / System Owner",
    description:
      "Yeni nesil ödeme kaydedici cihaz (ÖKC) projesinin sunucu, veritabanı ve backend altyapısından sorumluyum. Tüm sistem mimarisini sıfırdan tasarlayıp veritabanı tasarımı ve backend mimarisi geliştirmesine liderlik ediyorum.",
    tech: ["Sistem Mimarisi", "Veritabanı Tasarımı", "Backend"],
  },
  {
    id: "pawsome",
    title: "Pawsome",
    company: "Neon Apps",
    role: "iOS Developer",
    description:
      "Swift ile uçtan uca geliştirilip App Store'da yayınlanan iOS uygulaması. Geliştirme, test ve mağaza yayın süreçlerinin tamamında aktif rol aldım; Firebase kurulumu, yapılandırması ve entegrasyonunu yönettim.",
    tech: ["Swift", "UIKit", "Firebase"],
  },
  {
    id: "mygini",
    title: "MyGini — Loyalty Uygulaması (ABD)",
    company: "Verisoft",
    role: "Database Developer",
    description:
      "ABD'de kullanılan DB-first bir sadakat uygulamasının veritabanı katmanında çalıştım. Müşteri ihtiyaçlarına göre stored procedure, function ve trigger geliştirdim; değişiklikleri test ortamlarında doğrulayıp production dağıtımlarını yönettim.",
    tech: ["MSSQL", "Stored Procedure", "DB-first"],
  },
  {
    id: "totalenergies",
    title: "TotalEnergies — Loyalty Uygulaması",
    company: "Verisoft",
    role: "Database Developer",
    description:
      "Total istasyonlarında kullanılan akaryakıt sadakat uygulamasının veritabanı geliştirmesine katkı sağladım. Kampanya ve ödül mantığına ait veritabanı yapılarını MSSQL ile geliştirdim; test ve canlıya alma süreçlerini destekledim.",
    tech: ["MSSQL", "Kampanya Mantığı", "DB-first"],
  },
  {
    id: "tsk-akmer",
    title: "TSK AKMER — Akıllı Kart Projesi",
    company: "Verisoft",
    role: "Database Developer",
    description:
      "Oracle tabanlı askeri akıllı kart sisteminde çalıştım. Kimlik verilerini tanımlı kurallara göre işleyerek basılabilir kart formatları ürettim; kart basım makinelerine veri aktarımı ve PowerBuilder ile geliştirilen masaüstü uygulamaya katkı sağladım.",
    tech: ["Oracle", "PowerBuilder", "Veri Dönüşümü"],
  },
];
