/**
 * Universities index copy — every user-visible string on the shared
 * UniversitiesIndexPage component, keyed by locale. English is the source of
 * truth; zh/fr/ar/es are machine-assisted translations that follow the
 * terminology already established in src/i18n/ui.ts and still need
 * native-speaker review. Entry frontmatter (names, intros, cities) renders
 * whatever the collection carries and is NOT duplicated here.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * UniversitiesIndexStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface UniversitiesIndexStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  crumb: string;
  hero: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    facts: { label: string; value: string }[];
    action: string;
  };
  /** ArticleCard meta line — composed as `${estLabel} ${founded}`. */
  card: { estLabel: string };
}

export const UNIVERSITIES_INDEX: Record<Locale, UniversitiesIndexStrings> = {
  en: {
    meta: {
      title: 'Chinese University Profiles for International Students',
      description:
        'Honest profiles of the universities we place into: Peking, Tsinghua, Fudan, Zhejiang and Shanghai Jiao Tong — programmes, real costs, admission realities and FAQs.',
    },
    crumb: 'Universities',
    hero: {
      eyebrow: 'Universities',
      index: 'UNI / 08',
      title: 'The five we place into most.',
      lede: 'Not a rankings mirror — working profiles with real fee ranges, admission realities and what each campus is actually like.',
      facts: [
        { label: 'Profiles', value: '05 universities' },
        { label: 'Cities', value: 'Beijing · Shanghai · Hangzhou' },
        { label: 'Status', value: 'MOE-listed' },
        { label: 'Fees', value: 'Real ranges' },
      ],
      action: 'Get a shortlist',
    },
    card: { estLabel: 'est.' },
  },

  zh: {
    meta: {
      title: '中国大学档案 — 国际学生指南',
      description:
        '我们申请院校的坦诚档案：北京大学、清华大学、复旦大学、浙江大学和上海交通大学——专业设置、真实费用、录取实情与常见问题。',
    },
    crumb: '大学',
    hero: {
      eyebrow: '大学',
      index: '大学 / 08',
      title: '我们申请最多的五所。',
      lede: '不是排名的复制品——而是可用的档案：真实费用区间、录取实情，以及每座校园的真实模样。',
      facts: [
        { label: '档案数', value: '05 所大学' },
        { label: '城市', value: '北京 · 上海 · 杭州' },
        { label: '资质', value: '教育部名单内' },
        { label: '费用', value: '真实区间' },
      ],
      action: '获取候选名单',
    },
    card: { estLabel: '建于' },
  },

  fr: {
    meta: {
      title: 'Profils des universités chinoises pour étudiants internationaux',
      description:
        'Des profils honnêtes des universités où nous plaçons : Pékin, Tsinghua, Fudan, Zhejiang et Shanghai Jiao Tong — programmes, coûts réels, réalités d’admission et FAQ.',
    },
    crumb: 'Universités',
    hero: {
      eyebrow: 'Universités',
      index: 'UNIS / 08',
      title: 'Les cinq où nous plaçons le plus.',
      lede: 'Pas un miroir des classements — des profils de travail avec de vraies fourchettes de frais, les réalités d’admission et ce que chaque campus vaut vraiment.',
      facts: [
        { label: 'Profils', value: '05 universités' },
        { label: 'Villes', value: 'Pékin · Shanghai · Hangzhou' },
        { label: 'Statut', value: 'Agréées MOE' },
        { label: 'Frais', value: 'Fourchettes réelles' },
      ],
      action: 'Recevoir une présélection',
    },
    card: { estLabel: 'fondée en' },
  },

  ar: {
    meta: {
      title: 'ملفات الجامعات الصينية للطلاب الدوليين',
      description:
        'ملفات صادقة للجامعات التي نُوظف فيها: بكين، تسينغهوا، فودان، تشجيانغ وشنغهاي جياو تونغ — البرامج والتكاليف الحقيقية وواقع القبول والأسئلة الشائعة.',
    },
    crumb: 'الجامعات',
    hero: {
      eyebrow: 'الجامعات',
      index: 'جامعات / 08',
      title: 'الخمس التي نُوظف فيها أكثر.',
      lede: 'ليست نسخة من التصنيفات — بل ملفات عملية بنطاقات رسوم حقيقية وواقع قبول وصورة دقيقة عن كل حرم جامعي.',
      facts: [
        { label: 'الملفات', value: '05 جامعات' },
        { label: 'المدن', value: 'بكين · شنغهاي · هانغتشو' },
        { label: 'الاعتماد', value: 'ضمن قائمة وزارة التعليم' },
        { label: 'الرسوم', value: 'نطاقات حقيقية' },
      ],
      action: 'احصل على قائمة مختصرة',
    },
    card: { estLabel: 'تأسست عام' },
  },

  es: {
    meta: {
      title: 'Perfiles de universidades chinas para estudiantes internacionales',
      description:
        'Perfiles honestos de las universidades donde colocamos: Pekín, Tsinghua, Fudan, Zhejiang y Shanghai Jiao Tong — programas, costes reales, realidad de admisiones y FAQ.',
    },
    crumb: 'Universidades',
    hero: {
      eyebrow: 'Universidades',
      index: 'UNIV / 08',
      title: 'Las cinco donde más colocamos.',
      lede: 'No un espejo de rankings — perfiles de trabajo con rangos de matrícula reales, la realidad de las admisiones y cómo es cada campus de verdad.',
      facts: [
        { label: 'Perfiles', value: '05 universidades' },
        { label: 'Ciudades', value: 'Pekín · Shanghái · Hangzhou' },
        { label: 'Estado', value: 'Reconocidas por el MOE' },
        { label: 'Matrícula', value: 'Rangos reales' },
      ],
      action: 'Recibe tu selección',
    },
    card: { estLabel: 'fundada en' },
  },
};
