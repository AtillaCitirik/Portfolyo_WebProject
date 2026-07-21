# CLAUDE.md — Portfolyo Web Sitesi Mimari & Geliştirme Rehberi

Bu dosya, projeyi geliştiren yapay zekâ (Claude Code vb.) ve insan geliştiriciler için
**tek doğruluk kaynağıdır**. Kod yazmadan önce okunmalı, verilen kurallara uyulmalıdır.

---

## 1. Mimari Prensipler

Bu bir React uygulaması olduğu için klasik "class tabanlı OOP" kullanılmaz; ama
istenen **temiz mimari, kapsülleme ve genişletilebilirlik ruhu** aynen korunur. React'te
bunun karşılığı şu prensiplerdir:

1. **Tek Sorumluluk (SRP):** Her komponent/dosya tek bir iş yapar. Bir komponent hem
   veri çekip hem karmaşık dönüşüm yapıp hem de 200 satır JSX render ediyorsa bölünmelidir.
2. **Veri ile Görünümün Ayrılması (Separation of Concerns):** İçerik (metinler, proje
   listesi, yetenekler) `src/data/` içinde durur. Komponentler bu veriyi **sadece
   render eder**, içine sabit metin gömmez.
3. **Kapsülleme (Encapsulation):** Bir komponentin stili, tipleri ve mantığı kendi
   yanında durur. Bir bölümü silince geride çöp kalmamalı.
4. **Kompozisyon > Kalıtım:** Büyük komponentler, küçük yeniden kullanılabilir
   komponentlerin birleşiminden oluşur (`Card`, `Tag`, `Section` gibi).
5. **Açık/Kapalı Prensibi (OCP):** Yeni içerik eklemek için **kod değil, veri**
   değiştirilir. Yeni bir proje eklemek = `projects.ts` dizisine bir nesne eklemek.
6. **DRY:** Aynı JSX/stil iki yerde tekrarlanıyorsa ortak bir komponente/utility'e taşınır.

### 1.1. Dil: TypeScript'e Geçiş

Proje şu an düz JavaScript. Hedef **TypeScript**. Yeni yazılan her dosya `.ts`/`.tsx`
olmalı. Geçiş için önerilen ilk adım (kullanıcı onayıyla):

1. `typescript`, `@types/react`, `@types/react-dom` ekle, `tsconfig.json` oluştur.
2. `vite.config.js` → `vite.config.ts`.
3. Dosyaları teker teker `.jsx` → `.tsx`, `.js` → `.ts` çevir; `any` kullanmaktan kaçın.
4. Veri modelleri için `src/types/` altında `interface`'ler tanımla.

TypeScript aktif olana kadar mevcut `.jsx` dosyaları JS kurallarıyla korunur; **yeni
kod TS ile yazılır.**

---

## 2. Klasör Yapısı

Hedef yapı (yeni dosyalar buna göre eklenir):

```
src/
├── main.tsx                 # Uygulama giriş noktası
├── App.tsx                  # Sayfa iskeleti: bölümleri sıralar
├── components/
│   ├── layout/              # Sayfa çatısı: Navbar, Footer
│   ├── sections/            # Sayfa bölümleri: Hero, About, Projects, Skills, Contact
│   └── ui/                  # Küçük tekrar kullanılabilir parçalar: Card, Tag, Section, Button
├── data/                    # TÜM içerik burada: projects.ts, skills.ts, siteConfig.ts ...
├── types/                   # Ortak TypeScript interface/type tanımları
├── hooks/                   # Özel React hook'ları (ör. useScrollSpy)
├── styles/                  # Global stiller: index.css, değişkenler (tokens)
└── assets/                  # Görseller, ikonlar, statik dosyalar
```

**Kurallar:**
- Bir komponentin CSS Module'ü **komponentin yanında** durur:
  `Projects.tsx` + `Projects.module.css`.
- `sections/` içindeki her komponent bir `<section>` sarmalar ve `id` alır (navigasyon için).
- `ui/` içindekiler "aptal" (dumb) komponentlerdir: veri bilmez, sadece `props` alır.
- Klasör başına bir `index.ts` barrel dosyası opsiyoneldir; ekleniyorsa tutarlı ekle.

---

## 3. Komponent Yazım Standartları

- **Fonksiyonel komponent + named export.** Her dosya bir komponent.
- Dosya adı `PascalCase.tsx`, komponent adıyla aynı olsun.
- Props için **açık bir `interface`** tanımla (`interface ProjectsProps { ... }`).
- İç mantık karmaşıksa (hesaplama, filtreleme) komponentin dışına saf fonksiyon ya da
  `hooks/` altına al. JSX içinde ağır iş yapma.
- `key` olarak dizinin `index`'ini değil, kararlı bir alan (`id`, `slug`) kullan.
- Erişilebilirlik: `alt`, `aria-label`, semantik etiketler (`nav`, `main`, `section`,
  `header`, `footer`) zorunlu.

**Örnek iskelet:**

```tsx
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { Card } from "../ui/Card";

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projeler</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 4. Veri Katmanı (İçerik)

Backend olmadığı için içerik = statik veri. **Kural: metin/liste komponente değil,
`src/data/`ya yazılır.**

- Her veri dosyası tipi ile birlikte gelir (TS'te). Örnek:

```ts
// src/types/project.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

// src/data/projects.ts
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Portfolyo Web Sitesi",
    description: "React + TypeScript ile yazılmış kişisel portfolyo.",
    tech: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/...",
  },
];
```

- Site geneli sabitler (isim, e-posta, sosyal linkler, menü öğeleri) `src/data/siteConfig.ts`
  içinde tek yerden yönetilir. Aynı bilgi iki yerde tutulmaz.

---

## 5. Stil: CSS Modules

- Her komponentin kendi `*.module.css` dosyası olur; global sınıf sızıntısı olmaz.
- **Renk, boşluk, font gibi değerler CSS değişkenleri (design tokens) ile yönetilir.**
  `src/styles/` içinde `:root` altında tanımlanır, modüller bunları kullanır:

```css
/* styles/tokens.css */
:root {
  --color-bg: #0e0e11;
  --color-text: #e8e8ea;
  --color-accent: #6c8cff;
  --space-md: 1rem;
  --radius: 12px;
}
```

- Modül içinde sabit renk/hardcode değer yazma; token kullan (`var(--color-accent)`).
- Responsive tasarım zorunlu: mobil öncelikli (mobile-first), `@media` ile büyüt.
- Tek bir global reset/temel stil dosyası olur (`styles/index.css`); geri kalan her şey modül.

---

## 6. Yeni Bir Şey Eklerken (En Sık Senaryolar)

Bu bölüm "sonradan kolay eklenebilsin" isteğinin somut karşılığıdır.

**Yeni proje/yetenek eklemek:** Sadece ilgili `src/data/*.ts` dosyasına bir nesne ekle.
Komponente dokunma.

**Yeni bir bölüm (section) eklemek** (ör. "Deneyim", "Blog"):
1. `src/types/` altında veri tipini tanımla (gerekiyorsa).
2. `src/data/` altında içeriğini yaz.
3. `src/components/sections/Experience.tsx` + `Experience.module.css` oluştur.
4. `App.tsx` içinde uygun sıraya ekle.
5. Navigasyonda görünmesi gerekiyorsa `siteConfig.ts` menü listesine `id` ile ekle.

**Yeni tekrar kullanılabilir parça** (buton, rozet): `src/components/ui/` altına ekle,
props ile tam parametrik yap, veri gömme.

---

## 7. Kalite Kuralları (Yapılacaklar / Yapılmayacaklar)

**Yap:**
- Küçük, tek işlevli komponentler yaz.
- Değişiklikten sonra `npm run lint` çalıştır; hataları temizle.
- İçeriği daima `data/`ya koy.
- İsimlendirmede İngilizce kullan (değişken/fonksiyon/dosya). Kullanıcıya görünen
  metinler Türkçe olabilir.
- Tekrarlanan JSX'i ortak komponente çıkar.

**Yapma:**
- Backend, API çağrısı, veritabanı ekleme (kullanıcı açıkça istemedikçe).
- Gereksiz bağımlılık kurma (küçük iş için ağır kütüphane).
- Inline sabit renk/boşluk yazma (token kullan).
- 150+ satırlık dev komponentler bırakma.
- `any` tipi, `key={index}`, erişilebilirliği yok sayma.
- Kullanılmayan dosya/kod/`console.log` bırakma.

---

## 8. Komutlar

```bash
npm install       # Bağımlılıkları kur
npm run dev       # Geliştirme sunucusu (HMR)
npm run build     # Üretim derlemesi
npm run preview   # Derlenmiş çıktıyı önizle
npm run lint      # ESLint
```

---

## 9. Yapay Zekâ İçin Çalışma Talimatı

Bu projede kod üretirken:

1. **Önce bu dosyayı esas al.** Bir kural burada varsa ona uy; yoksa mevcut kodun
   mevcut biçemini takip et.
2. Değişiklik yaparken **mevcut mimariyi bozma**; klasör yapısına ve isimlendirmeye uy.
3. Bir özellik eklerken **en küçük, en izole çözümü** seç; alakasız dosyaları değiştirme.
4. Emin olmadığın mimari kararlarda (yeni kütüphane, yapı değişikliği) **önce kullanıcıya sor.**
5. İş bitince gerçekçi ol: lint geçtiyse söyle, atlanan bir şey varsa belirt.
6. Kullanıcıyla iletişim Türkçe; kod ve teknik isimler İngilizce.
