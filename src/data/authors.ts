/**
 * Authors for blog posts and guides. Only verified people get author pages.
 * Student contributors are quoted with their programme, not staff titles.
 * Names are real people (never localized); roles and bios are localized.
 * zh/fr/ar/es role/bio strings are machine-assisted and need native-speaker
 * review, matching the rest of the i18n layer.
 */
import { type Locale } from '../lib/i18n';

export interface Author {
  id: string;
  name: string;
  /** Localized role/title line. */
  role: Record<Locale, string>;
  /** Localized short bio. */
  bio: Record<Locale, string>;
  image?: string;
  initials: string;
  linkedin?: string;
  verified: boolean;
}

export const AUTHORS: Record<string, Author> = {
  minhaj: {
    id: 'minhaj',
    name: 'Minhaj Al Shukoor',
    role: {
      en: 'Founder & CEO',
      zh: '创始人兼 CEO',
      fr: 'Fondateur & CEO',
      ar: 'المؤسس والرئيس التنفيذي',
      es: 'Fundador y CEO',
      de: 'Gründer & CEO',
      ja: '創業者・CEO',
      pt: 'Fundador e CEO',
      hi: 'संस्थापक और CEO',
    },
    bio: {
      en: 'Works across India–China logistics and trade operations. Minhaj leads RouteToAbroad from the New Delhi office and keeps the Guangzhou desk honest about what can actually be delivered.',
      zh: '在印中物流与贸易运营领域深耕十五年。Minhaj 在新德里办公室统筹 RouteToAbroad，并确保广州团队对“什么真正做得到”保持坦诚。',
      fr: 'Quinze ans de logistique et de commerce entre l’Inde et la Chine. Minhaj dirige RouteToAbroad depuis le bureau de New Delhi et garde le bureau de Canton honnête sur ce qui peut réellement être livré.',
      ar: 'خمسة عشر عاماً في عمليات اللوجستيات والتجارة بين الهند والصين. يقود Minhaj فريق RouteToAbroad من مكتب نيودلهي، ويُبقي مكتب قوانغتشو صادقاً بشأن ما يمكن تسليمه فعلاً.',
      es: 'Quince años en logística y comercio entre India y China. Minhaj dirige RouteToAbroad desde la oficina de Nueva Delhi y mantiene honesta a la mesa de Cantón sobre lo que realmente se puede entregar.',
      de: 'Fünfzehn Jahre Erfahrung in Indien–China-Logistik und Handelsabläufen. Minhaj führt RouteToAbroad vom New-Delhi-Büro aus und hält den Guangzhouer Desk ehrlich, was tatsächlich lieferbar ist.',
      ja: 'インドと中国の物流・貿易業務に15年。MinhajはニューデリーオフィスからRouteToAbroadを率い、広州デスクが「本当に実現できること」に対して誠実であり続けるよう見守っています。',
      pt: 'Quinze anos em logística e operações de comércio entre a Índia e a China. Minhaj lidera a RouteToAbroad do escritório de Nova Délhi e mantém a mesa de Guangzhou honesta sobre o que realmente pode ser entregue.',
      hi: 'भारत–चीन लॉजिस्टिक्स और ट्रेड संचालन में पंद्रह वर्ष। Minhaj नई दिल्ली दफ़्तर से RouteToAbroad का नेतृत्व करते हैं और गुआंगझू डेस्क को इस बात में ईमानदार रखते हैं कि वास्तव में क्या दिया जा सकता है।',
    },
    initials: 'MS',
    linkedin: 'https://www.linkedin.com/in/minhajalshukoor',
    verified: true,
  },
  ananya: {
    id: 'ananya',
    name: 'Ananya Krishnan',
    role: {
      en: 'MBBS, Peking University (Class of 2024)',
      zh: '北京大学 MBBS（2024 届）',
      fr: 'MBBS, Université de Pékin (promotion 2024)',
      ar: 'MBBS، جامعة بكين (دفعة 2024)',
      es: 'MBBS, Universidad de Pekín (promoción 2024)',
      de: 'MBBS, Peking University (Jahrgang 2024)',
      ja: '北京大学 MBBS（2024年卒）',
      pt: 'MBBS, Peking University (turma de 2024)',
      hi: 'MBBS, पेकिंग यूनिवर्सिटी (2024 बैच)',
    },
    bio: {
      en: 'Wrote her CSC scholarship diary for RouteToAbroad while completing clinical rotations in Beijing.',
      zh: '在北京完成临床轮转期间，为 RouteToAbroad 撰写她的 CSC 奖学金日记。',
      fr: 'A écrit son journal de bourse CSC pour RouteToAbroad tout en effectuant ses stages cliniques à Pékin.',
      ar: 'كتبت مذكراتها عن منحة CSC لصالح RouteToAbroad أثناء إتمامها التدويرات السريرية في بكين.',
      es: 'Escribió su diario de la beca CSC para RouteToAbroad mientras completaba sus rotaciones clínicas en Pekín.',
      de: 'Schrieb ihr CSC-Stipendien-Tagebuch für RouteToAbroad, während sie in Peking ihre klinischen Rotationen absolvierte.',
      ja: '北京での臨床実習を進めながら、RouteToAbroadのためにCSC奨学金ダイアリーを執筆しました。',
      pt: 'Escreveu seu diário da bolsa CSC para a RouteToAbroad enquanto concluía os estágios clínicos em Pequim.',
      hi: 'पेकिंग में क्लिनिकल रोटेशन पूरे करते हुए RouteToAbroad के लिए अपनी CSC छात्रवृत्ति डायरी लिखी।',
    },
    initials: 'AK',
    verified: false,
  },
  rohan: {
    id: 'rohan',
    name: 'Rohan Sharma',
    role: {
      en: 'B.Tech CS, Beijing Jiaotong University (Class of 2025)',
      zh: '北京交通大学 B.Tech 计算机专业（2025 届）',
      fr: 'B.Tech informatique, Université Jiaotong de Pékin (promotion 2025)',
      ar: 'بكالوريوس هندسة الحاسوب، جامعة بكين جياوتونغ (دفعة 2025)',
      es: 'B.Tech en Informática, Universidad Jiaotong de Pekín (promoción 2025)',
      de: 'B.Tech Informatik, Beijing Jiaotong University (Jahrgang 2025)',
      ja: '北京交通大学 B.Tech（コンピュータサイエンス、2025年卒）',
      pt: 'B.Tech em Ciência da Computação, Beijing Jiaotong University (turma de 2025)',
      hi: 'B.Tech कंप्यूटर साइंस, बीजिंग जियाओटोंग यूनिवर्सिटी (2025 बैच)',
    },
    bio: {
      en: 'Contributor on student life in Beijing — food, transport, and the things orientation week never covers.',
      zh: '撰写北京留学生活的稿件——吃饭、交通，以及开学迎新周永远不会讲到的事。',
      fr: 'Contributeur sur la vie étudiante à Pékin — cuisine, transports, et tout ce que la semaine d’intégration ne couvre jamais.',
      ar: 'مساهم في محتوى حياة الطلاب في بكين — الطعام والمواصلات والأمور التي لا تغطيها أسبوع التهيئة أبداً.',
      es: 'Colaborador sobre la vida estudiantil en Pekín — comida, transporte y esas cosas que la semana de orientación nunca cubre.',
      de: 'Beiträger zum Thema Studentenleben in Peking — Essen, Verkehr und all das, was die Orientierungswoche nie abdeckt.',
      ja: '北京の学生生活について寄稿——食事、交通、そしてオリエンテーション週間では決して扱われないこと。',
      pt: 'Colaborador sobre a vida estudantil em Pequim — comida, transporte e as coisas que a semana de integração nunca cobre.',
      hi: 'बीजिंग में छात्र जीवन पर योगदानकर्ता — खाना, परिवहन, और वे चीज़ें जिन्हें ओरिएंटेशन हफ़्ता कभी कवर नहीं करता।',
    },
    initials: 'RS',
    verified: false,
  },
};
