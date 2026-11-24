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
  controls: {
    searchLabel: string;
    searchPlaceholder: string;
    countSuffix: string;
    filterAriaLabel: string;
    filters: {
      all: string;
      medical: string;
      comprehensive: string;
      technical: string;
      whoNmcMoe: string;
      csc: string;
    };
    emptyState: string;
  };
}

export const UNIVERSITIES_INDEX: Record<Locale, UniversitiesIndexStrings> = {
  en: {
    meta: {
      title: 'Chinese University Profiles',
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
    controls: {
      searchLabel: 'Search universities',
      searchPlaceholder: 'Search by university, city, programme (e.g. MBBS, CS), or recognition (WHO, NMC, CSC)…',
      countSuffix: 'shown',
      filterAriaLabel: 'Filter universities',
      filters: {
        all: 'All',
        medical: 'Medical / MBBS',
        comprehensive: 'Comprehensive',
        technical: 'Technical',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'CSC Scholarship',
      },
      emptyState:
        'No universities match your current search and filter. Try clearing the search box or switching to “All”.',
    },
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
    controls: {
      searchLabel: '搜索大学',
      searchPlaceholder: '按大学、城市、专业（如 MBBS、计算机）或认证（WHO、NMC、CSC）搜索…',
      countSuffix: '所显示',
      filterAriaLabel: '筛选大学',
      filters: {
        all: '全部',
        medical: '医学 / MBBS',
        comprehensive: '综合类',
        technical: '理工类',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'CSC 奖学金',
      },
      emptyState: '没有符合当前搜索与筛选条件的大学。请尝试清空搜索框或切换回“全部”。',
    },
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
    controls: {
      searchLabel: 'Rechercher des universités',
      searchPlaceholder:
        'Rechercher par université, ville, programme (ex. MBBS, informatique) ou reconnaissance (OMS, NMC, CSC)…',
      countSuffix: 'affichées',
      filterAriaLabel: 'Filtrer les universités',
      filters: {
        all: 'Toutes',
        medical: 'Médecine / MBBS',
        comprehensive: 'Généralistes',
        technical: 'Techniques',
        whoNmcMoe: 'OMS / NMC / MOE',
        csc: 'Bourse CSC',
      },
      emptyState:
        'Aucune université ne correspond à votre recherche et à votre filtre. Essayez d’effacer la recherche ou de sélectionner « Toutes ».',
    },
  },

  ar: {
    meta: {
      title: 'ملفات الجامعات الصينية للطلاب الدوليين',
      description:
        'ملفات صادقة للجامعات التي يلتحق بها طلابنا أكثر: بكين، تسينغهوا، فودان، تشجيانغ وشنغهاي جياو تونغ — البرامج والتكاليف الحقيقية وواقع القبول والأسئلة الشائعة.',
    },
    crumb: 'الجامعات',
    hero: {
      eyebrow: 'الجامعات',
      index: 'جامعات / 08',
      title: 'الخمس التي يلتحق بها طلابنا أكثر.',
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
    controls: {
      searchLabel: 'البحث عن الجامعات',
      searchPlaceholder:
        'ابحث بالجامعة أو المدينة أو البرنامج (مثل MBBS أو علوم الحاسوب) أو الاعتراف (WHO، NMC، CSC)…',
      countSuffix: 'معروضة',
      filterAriaLabel: 'تصفية الجامعات',
      filters: {
        all: 'الكل',
        medical: 'الطب / MBBS',
        comprehensive: 'شاملة',
        technical: 'تقنية',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'منحة CSC',
      },
      emptyState:
        'لا توجد جامعات تطابق بحثك ومرشحك الحاليين. جرّب مسح خانة البحث أو التبديل إلى «الكل».',
    },
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
    controls: {
      searchLabel: 'Buscar universidades',
      searchPlaceholder:
        'Buscar por universidad, ciudad, programa (p. ej. MBBS, Informática) o reconocimiento (OMS, NMC, CSC)…',
      countSuffix: 'mostradas',
      filterAriaLabel: 'Filtrar universidades',
      filters: {
        all: 'Todas',
        medical: 'Medicina / MBBS',
        comprehensive: 'Integrales',
        technical: 'Técnicas',
        whoNmcMoe: 'OMS / NMC / MOE',
        csc: 'Beca CSC',
      },
      emptyState:
        'Ninguna universidad coincide con tu búsqueda y filtro actuales. Prueba a borrar el cuadro de búsqueda o cambiar a «Todas».',
    },
  },

  de: {
    meta: {
      title: 'Chinesische Universitätsprofile für internationale Studierende',
      description:
        'Ehrliche Profile der Universitäten, an die wir vermitteln: Peking, Tsinghua, Fudan, Zhejiang und Shanghai Jiao Tong — Studiengänge, echte Kosten, Zulassungsrealität und FAQs.',
    },
    crumb: 'Universitäten',
    hero: {
      eyebrow: 'Universitäten',
      index: 'UNI / 08',
      title: 'Die fünf, an die wir am häufigsten vermitteln.',
      lede: 'Kein Rankings-Spiegel — Arbeitsprofile mit echten Gebührensbandbreiten, Zulassungsrealität und dem, was jeder Campus wirklich ist.',
      facts: [
        { label: 'Profile', value: '05 Universitäten' },
        { label: 'Städte', value: 'Peking · Shanghai · Hangzhou' },
        { label: 'Status', value: 'MOE-gelistet' },
        { label: 'Gebühren', value: 'Echte Bandbreiten' },
      ],
      action: 'Shortlist erhalten',
    },
    card: { estLabel: 'gegr.' },
    controls: {
      searchLabel: 'Universitäten durchsuchen',
      searchPlaceholder:
        'Nach Universität, Stadt, Studiengang (z. B. MBBS, Informatik) oder Anerkennung (WHO, NMC, CSC) suchen…',
      countSuffix: 'angezeigt',
      filterAriaLabel: 'Universitäten filtern',
      filters: {
        all: 'Alle',
        medical: 'Medizin / MBBS',
        comprehensive: 'Volluniversitäten',
        technical: 'Technisch',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'CSC-Stipendium',
      },
      emptyState:
        'Keine Universität entspricht Ihrer aktuellen Suche und Auswahl. Leeren Sie das Suchfeld oder wechseln Sie zu „Alle“.',
    },
  },

  ja: {
    meta: {
      title: '外国人学生のための中国大学プロフィール',
      description:
        '進学先としている大学の率直なプロフィール：北京大学、清華大学、復旦大学、浙江大学、上海交通大学 — プログラム、実際の費用、入学の現実、FAQ。',
    },
    crumb: '大学',
    hero: {
      eyebrow: '大学',
      index: 'UNI / 08',
      title: '最も多く送り出す五校。',
      lede: 'ランキングのコピーではありません — 実際の学費レンジ、入学の現実、そして各キャンパスの実像を伝える実務的なプロフィールです。',
      facts: [
        { label: 'プロフィール', value: '05 大学' },
        { label: '都市', value: '北京 · 上海 · 杭州' },
        { label: '認可', value: '教育部リスト掲載' },
        { label: '学費', value: '実際のレンジ' },
      ],
      action: '候補リストを受け取る',
    },
    card: { estLabel: '設立' },
    controls: {
      searchLabel: '大学を検索',
      searchPlaceholder: '大学名・都市・プログラム（例：MBBS、CS）・認定（WHO、NMC、CSC）で検索…',
      countSuffix: '校表示',
      filterAriaLabel: '大学を絞り込む',
      filters: {
        all: 'すべて',
        medical: '医学 / MBBS',
        comprehensive: '総合大学',
        technical: '理工系',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'CSC 奨学金',
      },
      emptyState: '現在の検索条件・フィルターに一致する大学がありません。検索語を消去するか「すべて」に切り替えてください。',
    },
  },

  pt: {
    meta: {
      title: 'Perfis de universidades chinesas para estudantes internacionais',
      description:
        'Perfis honestos das universidades para onde colocamos: Pequim, Tsinghua, Fudan, Zhejiang e Shanghai Jiao Tong — programas, custos reais, realidade de admissão e FAQs.',
    },
    crumb: 'Universidades',
    hero: {
      eyebrow: 'Universidades',
      index: 'UNI / 08',
      title: 'As cinco para onde mais colocamos.',
      lede: 'Não um espelho de rankings — perfis de trabalho com faixas reais de mensalidade, realidade de admissão e como cada campus realmente é.',
      facts: [
        { label: 'Perfis', value: '05 universidades' },
        { label: 'Cidades', value: 'Pequim · Xangai · Hangzhou' },
        { label: 'Status', value: 'Listadas pelo MOE' },
        { label: 'Mensalidades', value: 'Faixas reais' },
      ],
      action: 'Receber uma lista curta',
    },
    card: { estLabel: 'fundada em' },
    controls: {
      searchLabel: 'Pesquisar universidades',
      searchPlaceholder:
        'Pesquisar por universidade, cidade, programa (ex.: MBBS, Ciência da Computação) ou reconhecimento (OMS, NMC, CSC)…',
      countSuffix: 'exibidas',
      filterAriaLabel: 'Filtrar universidades',
      filters: {
        all: 'Todas',
        medical: 'Medicina / MBBS',
        comprehensive: 'Abrangentes',
        technical: 'Técnicas',
        whoNmcMoe: 'OMS / NMC / MOE',
        csc: 'Bolsa CSC',
      },
      emptyState:
        'Nenhuma universidade corresponde à sua pesquisa e filtro atuais. Tente limpar a busca ou mudar para “Todas”.',
    },
  },

  hi: {
    meta: {
      title: 'अंतरराष्ट्रीय विद्यार्थियों के लिए चीनी विश्वविद्यालय प्रोफ़ाइल',
      description:
        'जिन विश्वविद्यालयों में हम प्रवेश दिलाते हैं, उनकी ईमानदार प्रोफ़ाइल: पेकिंग, त्सिंघुआ, फ़ुदान, झेजियांग और शंघाई जियाओ टोंग — प्रोग्राम, वास्तविक लागत, प्रवेश की सच्चाई और FAQ।',
    },
    crumb: 'विश्वविद्यालय',
    hero: {
      eyebrow: 'विश्वविद्यालय',
      index: 'UNI / 08',
      title: 'वे पाँच जहाँ हम सबसे अधिक भेजते हैं।',
      lede: 'रैंकिंग का प्रतिबिंब नहीं — काम की प्रोफ़ाइलें: वास्तविक फ़ीस रेंज, प्रवेश की सच्चाई और हर परिसर असल में कैसा है।',
      facts: [
        { label: 'प्रोफ़ाइल', value: '05 विश्वविद्यालय' },
        { label: 'शहर', value: 'बीजिंग · शंघाई · हांगझोऊ' },
        { label: 'स्थिति', value: 'MOE सूचीबद्ध' },
        { label: 'फ़ीस', value: 'वास्तविक रेंज' },
      ],
      action: 'शॉर्टलिस्ट पाएँ',
    },
    card: { estLabel: 'स्थापित' },
    controls: {
      searchLabel: 'विश्वविद्यालय खोजें',
      searchPlaceholder: 'विश्वविद्यालय, शहर, प्रोग्राम (जैसे MBBS, CS) या मान्यता (WHO, NMC, CSC) से खोजें…',
      countSuffix: 'दिखाए गए',
      filterAriaLabel: 'विश्वविद्यालय फ़िल्टर करें',
      filters: {
        all: 'सभी',
        medical: 'मेडिकल / MBBS',
        comprehensive: 'व्यापक',
        technical: 'तकनीकी',
        whoNmcMoe: 'WHO / NMC / MOE',
        csc: 'CSC छात्रवृत्ति',
      },
      emptyState:
        'आपकी वर्तमान खोज और फ़िल्टर से कोई विश्वविद्यालय मेल नहीं खाता। खोज बॉक्स साफ़ करें या “सभी” पर स्विच करें।',
    },
  },
};
