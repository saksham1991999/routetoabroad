/** Testimonials ported from v1 (verbatim client quotes). */
import { type Locale } from '../lib/i18n';
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  category: 'education' | 'tourism' | 'trade';
  image?: string;
}

const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: 'ananya',
    quote:
      "RouteToAbroad didn't just find me a university; they found me a future. The scholarship coverage for my MBBS at Peking University was seamless, and the on-ground support made China feel like home.",
    name: 'Ananya Krishnan',
    role: 'MBBS, Peking University (Class of 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote:
      "I was skeptical about studying engineering abroad, but the team walked me through every step — from university shortlisting to settling into Beijing. I secured a CSC scholarship I didn't even know I qualified for.",
    name: 'Rohan Sharma',
    role: 'B.Tech Computer Science, BJTU Beijing (Class of 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote:
      'Our group tour to Shanghai and Beijing was nothing short of extraordinary. Every detail — hotels, guides, itinerary — was curated perfectly. We felt taken care of at every step, even with dietary preferences handled without a single hiccup.',
    name: 'Priya Mehta',
    role: 'Educational Group Tour, Shanghai & Beijing (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote:
      'As a working professional pursuing an MBA at Fudan University, I needed an advisor who understood the academic and cultural transition. RouteToAbroad handled everything from documentation to accommodation search.',
    name: 'Meera Nair',
    role: 'MBA, Fudan University (Class of 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote:
      "Sourcing electronics components from China was always a headache — until we engaged RouteToAbroad's trade team. They verified three factories, negotiated pricing, and managed our first FCL shipment end-to-end. Our supply chain has never been more reliable.",
    name: 'Arjun Patel',
    role: 'Founder, Apex Components India — Trade Client (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_EN: string[] = [
  'Placed at Tsinghua University — Rahul M.',
  'Full MBBS scholarship — Priya S.',
  'Sourcing 40ft containers monthly — TechTrade India',
  'Educational tour to Shanghai — 45 students',
  'CSC award, Fudan University — Meera N.',
  'Factory audit passed — Apex Components',
];

/* zh — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_ZH: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroad 不只是帮我找到一所大学，更是帮我找到了未来。北京大学 MBBS 的奖学金覆盖办理得毫无波折，落地支持让中国在我觉得像家一样。',
    name: 'Ananya Krishnan',
    role: 'MBBS，北京大学（2024 届）',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: '我原本对出国读工科心存疑虑，但团队陪我走完了每一步——从筛选大学到在北京安顿下来。我拿到了一份自己都不知道有资格申请的 CSC 奖学金。',
    name: 'Rohan Sharma',
    role: '计算机科学与技术本科，北京交通大学（2025 届）',
    category: 'education',
  },
  {
    id: 'priya',
    quote: '我们的上海和北京团体游精彩非凡。每一个细节——酒店、导游、行程——都策划得恰到好处。每一步都被照顾得很好，连饮食偏好都处理得毫无差错。',
    name: 'Priya Mehta',
    role: '教育团体游，上海与北京（2024）',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: '作为在复旦大学读 MBA 的在职人士，我需要一位真正理解学业与文化过渡的顾问。从材料准备到找房，RouteToAbroad 全部办妥。',
    name: 'Meera Nair',
    role: 'MBA，复旦大学（2025 届）',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: '从中国采购电子元件一直是件头疼的事——直到我们聘请了 RouteToAbroad 的贸易团队。他们验证了三家工厂、谈下价格，并端到端管完了我们的第一个整柜（FCL）。我们的供应链从未如此可靠。',
    name: 'Arjun Patel',
    role: 'Apex Components India 创始人 — 贸易客户（2024）',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_ZH: string[] = [
  '成功入学清华大学 — Rahul M.',
  'MBBS 全额奖学金 — Priya S.',
  '每月采购 40 尺整柜 — TechTrade India',
  '上海研学游 — 45 名学生',
  'CSC 奖学金，复旦大学 — Meera N.',
  '验厂通过 — Apex Components',
];

/* fr — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_FR: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroad ne m’a pas seulement trouvé une université ; ils m’ont trouvé un avenir. La couverture de bourse pour mon MBBS à l’Université de Pékin s’est faite sans accroc, et le soutien sur place a fait de la Chine un chez-soi.',
    name: 'Ananya Krishnan',
    role: 'MBBS, Université de Pékin (promotion 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'J’étais sceptique à l’idée d’étudier l’ingénierie à l’étranger, mais l’équipe m’a accompagné à chaque étape — de la présélection des universités à l’installation à Pékin. J’ai décroché une bourse CSC dont j’ignorais même avoir le profil.',
    name: 'Rohan Sharma',
    role: 'Licence informatique, BJTU Pékin (promotion 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'Notre voyage de groupe à Shanghai et Pékin était tout simplement extraordinaire. Chaque détail — hôtels, guides, itinéraire — était parfaitement organisé. Nous nous sommes sentis pris en charge à chaque étape, même pour les préférences alimentaires, gérées sans le moindre accroc.',
    name: 'Priya Mehta',
    role: 'Voyage de groupe éducatif, Shanghai et Pékin (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'Professionnelle en activité poursuivant un MBA à l’Université Fudan, j’avais besoin d’un conseiller qui comprenne la transition académique et culturelle. RouteToAbroad s’est occupé de tout, de la documentation à la recherche de logement.',
    name: 'Meera Nair',
    role: 'MBA, Université Fudan (promotion 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'Sourcer des composants électroniques en Chine était toujours un casse-tête — jusqu’à ce que nous engagions l’équipe commerce de RouteToAbroad. Ils ont vérifié trois usines, négocié les prix et géré notre premier FCL de bout en bout. Notre chaîne d’approvisionnement n’a jamais été aussi fiable.',
    name: 'Arjun Patel',
    role: 'Fondateur, Apex Components India — Client commerce (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_FR: string[] = [
  'Placé à l’Université Tsinghua — Rahul M.',
  'Bourse MBBS complète — Priya S.',
  'Sourcing de conteneurs 40 pieds chaque mois — TechTrade India',
  'Voyage éducatif à Shanghai — 45 étudiants',
  'Bourse CSC, Université Fudan — Meera N.',
  'Audit d’usine réussi — Apex Components',
];

/* ar — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_AR: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'لم تكتفِ RouteToAbroad بإيجاد جامعة لي، بل وجدت لي مستقبلًا. كانت تغطية المنحة لدراسة MBBS في جامعة بكين سلسة تمامًا، والدعم على الأرض جعل الصين أشعر بها كالوطن الثاني.',
    name: 'Ananya Krishnan',
    role: 'MBBS، جامعة بكين (دفعة 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'كنت متشككًا في دراسة الهندسة بالخارج، لكن الفريق سار معي خطوة بخطوة — من اختيار الجامعات حتى الاستقرار في بكين. حصلت على منحة CSC لم أكن أعلم حتى أنني مؤهل لها.',
    name: 'Rohan Sharma',
    role: 'بكالوريوس علوم الحاسب، جامعة بكين جياوتونغ (دفعة 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'كانت رحلتنا الجماعية إلى شنغهاي وبكين استثنائية بلا مبالغة. كل تفصيل — الفنادق والمرشدون والبرنامج — كان منسقًا بإتقان. شعرنا بالعناية في كل خطوة، حتى القيود الغذائية عولجت دون أي عقبة.',
    name: 'Priya Mehta',
    role: 'رحلة جماعية تعليمية، شنغهاي وبكين (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'بصفتي موظفة أدرس MBA في جامعة فودان، كنت أحتاج مستشارًا يفهم التحول الأكاديمي والثقافي. تولت RouteToAbroad كل شيء من المستندات إلى البحث عن السكن.',
    name: 'Meera Nair',
    role: 'MBA، جامعة فودان (دفعة 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'كان توريد المكونات الإلكترونية من الصين صداعًا دائمًا — إلى أن تعاقدنا مع فريق التجارة في RouteToAbroad. دققوا ثلاثة مصانع، وتفاوضوا على الأسعار، وأداروا أول شحنة FCL لدينا من البداية للنهاية. لم تكن سلسلة التوريد لدينا موثوقة كهذا من قبل.',
    name: 'Arjun Patel',
    role: 'المؤسس، Apex Components India — عميل تجارة (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_AR: string[] = [
  'قبول في جامعة تسينغهوا — Rahul M.',
  'منحة MBBS كاملة — Priya S.',
  'توريد حاويات 40 قدمًا شهريًا — TechTrade India',
  'رحلة تعليمية إلى شنغهاي — 45 طالبًا',
  'منحة CSC، جامعة فودان — Meera N.',
  'اجتياز تدقيق المصنع — Apex Components',
];

/* es — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_ES: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroad no solo me encontró una universidad; me encontró un futuro. La cobertura de la beca para mi MBBS en la Universidad de Pekín fue impecable, y el apoyo sobre el terreno hizo que China se sintiera como hogar.',
    name: 'Ananya Krishnan',
    role: 'MBBS, Universidad de Pekín (promoción de 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'Era escéptico sobre estudiar ingeniería en el extranjero, pero el equipo me acompañó en cada paso — desde la preselección de universidades hasta instalarme en Pekín. Conseguí una beca CSC para la que ni sabía que calificaba.',
    name: 'Rohan Sharma',
    role: 'Grado en Informática, BJTU Pekín (promoción de 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'Nuestro viaje en grupo a Shanghái y Pekín fue nada menos que extraordinario. Cada detalle — hoteles, guías, itinerario — estuvo organizado a la perfección. Nos sentimos cuidados en cada paso, incluso con las preferencias alimentarias resueltas sin un solo tropiezo.',
    name: 'Priya Mehta',
    role: 'Viaje grupal educativo, Shanghái y Pekín (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'Como profesional en activo cursando un MBA en la Universidad de Fudan, necesitaba un asesor que entendiera la transición académica y cultural. RouteToAbroad se encargó de todo, desde la documentación hasta la búsqueda de alojamiento.',
    name: 'Meera Nair',
    role: 'MBA, Universidad de Fudan (promoción de 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'Conseguir componentes electrónicos en China siempre era un dolor de cabeza — hasta que contratamos al equipo de comercio de RouteToAbroad. Verificaron tres fábricas, negociaron precios y gestionaron nuestro primer FCL de principio a fin. Nuestra cadena de suministro nunca había sido tan fiable.',
    name: 'Arjun Patel',
    role: 'Fundador, Apex Components India — Cliente de comercio (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_ES: string[] = [
  'Admitido en la Universidad de Tsinghua — Rahul M.',
  'Beca completa de MBBS — Priya S.',
  'Comprando contenedores de 40 pies cada mes — TechTrade India',
  'Viaje educativo a Shanghái — 45 estudiantes',
  'Beca CSC, Universidad de Fudan — Meera N.',
  'Auditoría de fábrica superada — Apex Components',
];

/**
 * Client voices — a localized page reads TESTIMONIALS[locale]. id, name,
 * category and image stay identical across locales; quote and role are
 * machine-assisted translations pending native-speaker review.
 */
export const TESTIMONIALS: Record<Locale, Testimonial[]> = {
  en: TESTIMONIALS_EN,
  zh: TESTIMONIALS_ZH,
  fr: TESTIMONIALS_FR,
  ar: TESTIMONIALS_AR,
  es: TESTIMONIALS_ES,
};

/** Short proof-strip lines under the pillar rows. */
export const MARQUEE_ITEMS: Record<Locale, string[]> = {
  en: MARQUEE_ITEMS_EN,
  zh: MARQUEE_ITEMS_ZH,
  fr: MARQUEE_ITEMS_FR,
  ar: MARQUEE_ITEMS_AR,
  es: MARQUEE_ITEMS_ES,
};
