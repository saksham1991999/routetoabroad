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
    },
    bio: {
      en: 'Fifteen years across India–China logistics and trade operations. Minhaj leads RouteToAbroad from the New Delhi office and keeps the Guangzhou desk honest about what can actually be delivered.',
      zh: '在印中物流与贸易运营领域深耕十五年。Minhaj 在新德里办公室统筹 RouteToAbroad，并确保广州团队对“什么真正做得到”保持坦诚。',
      fr: 'Quinze ans de logistique et de commerce entre l’Inde et la Chine. Minhaj dirige RouteToAbroad depuis le bureau de New Delhi et garde le bureau de Canton honnête sur ce qui peut réellement être livré.',
      ar: 'خمسة عشر عاماً في عمليات اللوجستيات والتجارة بين الهند والصين. يقود Minhaj فريق RouteToAbroad من مكتب نيودلهي، ويُبقي مكتب قوانغتشو صادقاً بشأن ما يمكن تسليمه فعلاً.',
      es: 'Quince años en logística y comercio entre India y China. Minhaj dirige RouteToAbroad desde la oficina de Nueva Delhi y mantiene honesta a la mesa de Cantón sobre lo que realmente se puede entregar.',
    },
    initials: 'MS',
    linkedin: 'https://www.linkedin.com/in/minhajalshukoor',
    verified: true,
  },
  vijeesh: {
    id: 'vijeesh',
    name: 'Vijeesh Vijayan',
    role: {
      en: 'Co-founder & Director, Education',
      zh: '联合创始人兼教育总监',
      fr: 'Cofondateur & directeur, Études',
      ar: 'المؤسس المشارك ومدير قسم التعليم',
      es: 'Cofundador y director, Educación',
    },
    bio: {
      en: 'Owns academic matching and student files — which university, which programme, which documents, and what happens after landing. Vijeesh has walked hundreds of students from first enquiry to campus registration.',
      zh: '负责学业匹配与学生档案——选哪所大学、哪个专业、备齐哪些材料，以及落地之后的一切。Vijeesh 已陪伴数百名学生从首次咨询走到校园注册。',
      fr: 'Pilote l’orientation académique et les dossiers étudiants — quelle université, quel programme, quels documents, et que se passe-t-il après l’arrivée. Vijeesh a accompagné des centaines d’étudiants de la première demande à l’inscription sur le campus.',
      ar: 'مسؤول عن المطابقة الأكاديمية وملفات الطلاب — أي جامعة وأي برنامج وأي مستندات، وما يحدث بعد الوصول. رافق Vijeesh مئات الطلاب من أول استفسار حتى التسجيل في الحرم الجامعي.',
      es: 'Responsable del emparejamiento académico y de los expedientes estudiantiles — qué universidad, qué programa, qué documentos y qué ocurre tras aterrizar. Vijeesh ha acompañado a cientos de estudiantes desde la primera consulta hasta la matrícula en el campus.',
    },
    initials: 'VV',
    linkedin: 'https://www.linkedin.com/in/vijeeshvijayan',
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
    },
    bio: {
      en: 'Wrote her CSC scholarship diary for RouteToAbroad while completing clinical rotations in Beijing.',
      zh: '在北京完成临床轮转期间，为 RouteToAbroad 撰写她的 CSC 奖学金日记。',
      fr: 'A écrit son journal de bourse CSC pour RouteToAbroad tout en effectuant ses stages cliniques à Pékin.',
      ar: 'كتبت مذكراتها عن منحة CSC لصالح RouteToAbroad أثناء إتمامها التدويرات السريرية في بكين.',
      es: 'Escribió su diario de la beca CSC para RouteToAbroad mientras completaba sus rotaciones clínicas en Pekín.',
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
    },
    bio: {
      en: 'Contributor on student life in Beijing — food, transport, and the things orientation week never covers.',
      zh: '撰写北京留学生活的稿件——吃饭、交通，以及开学迎新周永远不会讲到的事。',
      fr: 'Contributeur sur la vie étudiante à Pékin — cuisine, transports, et tout ce que la semaine d’intégration ne couvre jamais.',
      ar: 'مساهم في محتوى حياة الطلاب في بكين — الطعام والمواصلات والأمور التي لا تغطيها أسبوع التهيئة أبداً.',
      es: 'Colaborador sobre la vida estudiantil en Pekín — comida, transporte y esas cosas que la semana de orientación nunca cubre.',
    },
    initials: 'RS',
    verified: false,
  },
};
