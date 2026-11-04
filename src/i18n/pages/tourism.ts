/**
 * Tourism pillar page copy — every user-visible string on the shared
 * TourismPage component, keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations that follow the terminology
 * already established in src/i18n/ui.ts and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * TourismStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface TourismCircuit {
  title: string;
  text: string;
}

export interface TourismStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb label for this pillar (BaseLayout + PageHero crumbs). */
  crumb: string;
  /** JSON-LD Service copy (surfaces in search results). */
  schema: {
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
  };
  hero: {
    eyebrow: string;
    /** Instrument marker (kept identical across locales). */
    index: string;
    title: string;
    lede: string;
    facts: { label: string; value: string }[];
    primaryCta: string;
    secondaryCta: string;
    /** Anchor-jump labels, in section order (destinations → faq). */
    jumps: [string, string, string, string, string];
  };
  /** Full-width image band under the hero. */
  heroBand: { alt: string; caption: string };
  destinations: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** Label above the city chips row. */
    cityGuides: string;
    /** Card order is fixed by the component (China first, then Japan). */
    cards: { name: string; alt: string; circuits: TourismCircuit[] }[];
  };
  modes: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: { name: string; text: string; points: string[] }[];
  };
  care: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: { name: string; text: string }[];
  };
  plan: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Guarantee card, split at the <strong> boundary. */
    promise: { eyebrow: string; strong: string; rest: string };
  };
  faq: { eyebrow: string; index: string; title: string; more: string };
}

export const TOURISM: Record<Locale, TourismStrings> = {
  en: {
    meta: {
      title: 'China & Japan Tours — Private, Group & Business Travel',
      description:
        'Curated journeys through China and Japan: imperial circuits, Li River scenery, Kyoto in spring, Canton Fair trips and educational group tours — with visa concierge and a 24/7 travel desk.',
    },
    crumb: 'Tourism',
    schema: {
      serviceName: 'China & Japan tours',
      serviceDescription:
        'Private, group and business travel design across China and Japan with visa concierge, bilingual guides and 24/7 support.',
      serviceType: 'Tourism services',
    },
    hero: {
      eyebrow: 'Tourism',
      index: 'TRV / 02',
      title: 'Discover East Asia. Your way.',
      lede: 'Private journeys, educational group tours and business delegations through China and Japan — designed by people who live there, briefed on your diet, and supported 24/7 while you travel.',
      facts: [
        { label: 'Countries', value: 'China · Japan' },
        { label: 'Style', value: 'Private · groups' },
        { label: 'Support', value: '24/7 desk' },
        { label: 'Visas', value: 'L · M · F handled' },
      ],
      primaryCta: 'Plan a journey',
      secondaryCta: 'See destinations',
      jumps: ['Destinations', 'Ways to travel', 'Care', 'Plan', 'FAQ'],
    },
    heroBand: {
      alt: 'A traveller looking out over the Great Wall of China at Mutianyu in golden light',
      caption: 'Mutianyu Great Wall · 70 km from Beijing',
    },
    destinations: {
      eyebrow: 'Destinations',
      index: '01 / 04',
      title: 'Two countries, done properly',
      lede: 'We run circuits we have walked ourselves — not brochure compilations.',
      cityGuides: 'City guides',
      cards: [
        {
          name: 'China — The Middle Kingdom',
          alt: 'Bamboo rafts on the Li River beneath karst peaks',
          circuits: [
            { title: 'Imperial Heritage', text: 'Beijing & Xi\'an — Great Wall, Forbidden City, Terracotta Army, 8 days.' },
            { title: 'Li River & Guilin', text: 'Karst peaks, bamboo rafts, Yangshuo villages, 5 days.' },
            { title: 'Greater Bay Area', text: 'Guangzhou, Shenzhen, Hong Kong connection, business-add-on friendly.' },
          ],
        },
        {
          name: 'Japan — Nippon Traditions',
          alt: 'A pagoda framed by cherry blossoms in Kyoto',
          circuits: [
            { title: 'Golden Route', text: 'Tokyo → Kyoto → Osaka, temples and street food, 8–10 days.' },
            { title: 'Kyoto Zen', text: 'Temples, tea ceremony, Arashiyama, Nara day trip, 4 days.' },
            { title: 'Tokyo Tech', text: 'Shibuya, teamLab, Akihabara, day trips to Nikko or Kamakura.' },
          ],
        },
      ],
    },
    modes: {
      eyebrow: 'Ways to travel',
      index: '02 / 04',
      title: 'Three modes, one standard',
      lede: 'However you travel with us, the care package underneath is the same.',
      items: [
        {
          name: 'Cultural immersion',
          text: 'Private journeys with bilingual guides, pre-vetted restaurants (vegetarian and halal handled), and pacing built for the people actually travelling.',
          points: ['Private guide & driver', 'Curated food experiences', 'Dietary preferences handled'],
        },
        {
          name: 'Business delegations',
          text: 'Factory tours, supplier meetings, Canton Fair itineraries and chamber introductions — run with our trade desk in Guangzhou.',
          points: ['Canton Fair packages', 'Factory & supplier visits', 'Interpreters included'],
        },
        {
          name: 'Custom & group travel',
          text: 'Families, corporate offsites, school and college educational tours. Groups of 8+ get dedicated planning and discounted rates.',
          points: ['Educational tours (45-student scale)', 'Corporate offsites', 'Family multi-gen trips'],
        },
      ],
    },
    care: {
      eyebrow: 'Comprehensive care',
      index: '03 / 04',
      title: 'The 100% peace-of-mind package',
      lede: 'Six things handled before you ask, so the trip is the only thing on your mind.',
      items: [
        { name: 'Visa concierge', text: 'L, M, F and multi-country files prepared and booked end to end.' },
        { name: 'Priority flights & rail', text: 'Internal flights and high-speed rail booked the moment sales open.' },
        { name: 'Premium stays', text: 'Hotels we have slept in, not just seen on booking sites.' },
        { name: 'Smart itineraries', text: 'Day plans with rest built in — no 14-site death marches.' },
        { name: 'Local transport', text: 'Drivers, metro cards, rides — sorted before you land.' },
        { name: '24/7 desk', text: 'WhatsApp support in your timezone for the whole trip.' },
      ],
    },
    plan: {
      eyebrow: 'Start planning',
      title: 'Tell us the trip in your head',
      lede: 'Dates, people, must-sees, dietary needs. We come back with a day-wise draft itinerary — free, before anything is paid.',
      promise: {
        eyebrow: 'Our promise',
        strong: 'Full refund up to 30 days before departure.',
        rest: 'Within 30 days, we refund everything recoverable from suppliers — and show you the receipts. No hidden cancellation fees on our side.',
      },
    },
    faq: { eyebrow: 'Tourism FAQ', index: '04 / 04', title: 'Before you pack', more: 'All tourism FAQs' },
  },

  zh: {
    meta: {
      title: '中国和日本旅游 — 私人、团体与商务行程',
      description:
        '精心策划的中国与日本之旅：帝国古迹线路、漓江山水、春日京都、广交会商务行与教育团体游——配签证代办与 24/7 旅行服务台。',
    },
    crumb: '旅游',
    schema: {
      serviceName: '中国和日本旅游',
      serviceDescription: '覆盖中国和日本的私人、团体与商务旅行设计，含签证代办、双语导游与 24/7 支持。',
      serviceType: '旅游服务',
    },
    hero: {
      eyebrow: '旅游',
      index: 'TRV / 02',
      title: '探索东亚。按你的方式。',
      lede: '贯穿中国和日本的私人行程、教育团体游与商务考察——由当地人设计、按你的饮食习惯准备，旅途中 24/7 全程支持。',
      facts: [
        { label: '国家', value: '中国 · 日本' },
        { label: '形式', value: '私人 · 团体' },
        { label: '支持', value: '24/7 服务台' },
        { label: '签证', value: 'L · M · F 全代办' },
      ],
      primaryCta: '规划一次行程',
      secondaryCta: '查看目的地',
      jumps: ['目的地', '出行方式', '全程保障', '规划', 'FAQ'],
    },
    heroBand: {
      alt: '金色光线下，一位旅行者在慕田峪眺望中国长城',
      caption: '慕田峪长城 · 距北京 70 公里',
    },
    destinations: {
      eyebrow: '目的地',
      index: '01 / 04',
      title: '两个国家，都按正路来',
      lede: '我们只运营自己亲自走过的线路——不是宣传册的拼盘。',
      cityGuides: '城市指南',
      cards: [
        {
          name: '中国 — 中原之国',
          alt: '喀斯特峰林下的漓江竹筏',
          circuits: [
            { title: '帝国古迹', text: '北京与西安——长城、故宫、兵马俑，8 天。' },
            { title: '漓江与桂林', text: '喀斯特峰林、竹筏漂流、阳朔村落，5 天。' },
            { title: '大湾区', text: '广州、深圳，可衔接香港，也适合叠加商务行程。' },
          ],
        },
        {
          name: '日本 — 和风传统',
          alt: '京都樱花掩映下的宝塔',
          circuits: [
            { title: '黄金路线', text: '东京 → 京都 → 大阪，寺庙与街头美食，8–10 天。' },
            { title: '京都禅意', text: '寺庙、茶道、岚山、奈良一日游，4 天。' },
            { title: '东京科技', text: '涩谷、teamLab、秋叶原，日光或镰仓一日游。' },
          ],
        },
      ],
    },
    modes: {
      eyebrow: '出行方式',
      index: '02 / 04',
      title: '三种方式，一个标准',
      lede: '无论你以哪种方式与我们同行，底层的保障都是同一套。',
      items: [
        {
          name: '文化深度游',
          text: '双语导游陪同的私人行程，提前甄选的餐厅（照顾素食与清真），节奏按真正出行的人来设计。',
          points: ['私人导游与司机', '精心策划的美食体验', '照顾饮食禁忌'],
        },
        {
          name: '商务考察',
          text: '工厂参观、供应商会面、广交会行程与商会引荐——与我们在广州的贸易团队协同执行。',
          points: ['广交会套餐', '工厂与供应商拜访', '配翻译'],
        },
        {
          name: '定制与团体游',
          text: '家庭出游、企业团建、中小学与高校研学游。8 人以上团体享专属规划与优惠价。',
          points: ['研学游（45 人规模）', '企业团建', '家庭多代同游'],
        },
      ],
    },
    care: {
      eyebrow: '全方位保障',
      index: '03 / 04',
      title: '100% 安心套餐',
      lede: '六件事在你开口之前就办好，让你心里只有旅程本身。',
      items: [
        { name: '签证管家', text: 'L、M、F 及多国签证材料从准备到递送全程代办。' },
        { name: '优先机票与高铁', text: '内部航班和高铁票在开售第一时间锁定。' },
        { name: '精选住宿', text: '全是我们自己住过的酒店，不是订房网站上看看而已。' },
        { name: '聪明行程', text: '把休息编进每日计划——绝无一天赶 14 个景点的死亡行军。' },
        { name: '当地交通', text: '司机、地铁卡、用车——在你落地前就安排妥当。' },
        { name: '24/7 服务台', text: '全程按你的时区提供 WhatsApp 支持。' },
      ],
    },
    plan: {
      eyebrow: '开始规划',
      title: '把你脑子里的那趟旅行告诉我们',
      lede: '日期、人数、必看景点、饮食需求。我们会回你一份逐日行程草稿——免费，付款之前。',
      promise: {
        eyebrow: '我们的承诺',
        strong: '出发前 30 天全额退款。',
        rest: '30 天以内，我们退还从供应商处能追回的全部款项——并把凭证给你看。我们这边不收任何隐藏取消费。',
      },
    },
    faq: { eyebrow: '旅游常见问题', index: '04 / 04', title: '收拾行李之前', more: '查看全部旅游 FAQ' },
  },

  fr: {
    meta: {
      title: 'Tours Chine & Japon — Voyages privés, groupes et affaires',
      description:
        'Voyages choisis en Chine et au Japon : circuits impériaux, paysages de la rivière Li, Kyoto au printemps, séjours Canton Fair et tours de groupes éducatifs — avec conciergerie de visas et assistance voyage 24/7.',
    },
    crumb: 'Tourisme',
    schema: {
      serviceName: 'Tours Chine & Japon',
      serviceDescription:
        'Conception de voyages privés, en groupe et d’affaires en Chine et au Japon, avec conciergerie de visas, guides bilingues et assistance 24/7.',
      serviceType: 'Services touristiques',
    },
    hero: {
      eyebrow: 'Tourisme',
      index: 'TRV / 02',
      title: 'Découvrir l’Asie de l’Est. À votre façon.',
      lede: 'Voyages privés, tours de groupes éducatifs et délégations d’affaires en Chine et au Japon — conçus par des gens qui y vivent, informés de votre régime alimentaire, avec une assistance 24/7 pendant le voyage.',
      facts: [
        { label: 'Pays', value: 'Chine · Japon' },
        { label: 'Style', value: 'Privé · groupes' },
        { label: 'Assistance', value: 'Desk 24/7' },
        { label: 'Visas', value: 'L · M · F gérés' },
      ],
      primaryCta: 'Planifier un voyage',
      secondaryCta: 'Voir les destinations',
      jumps: ['Destinations', 'Façons de voyager', 'Assistance', 'Planifier', 'FAQ'],
    },
    heroBand: {
      alt: 'Une voyageuse contemplant la Grande Muraille de Chine à Mutianyu dans une lumière dorée',
      caption: 'Grande Muraille de Mutianyu · à 70 km de Pékin',
    },
    destinations: {
      eyebrow: 'Destinations',
      index: '01 / 04',
      title: 'Deux pays, faits comme il faut',
      lede: 'Nous n’opérons que des circuits que nous avons parcourus nous-mêmes — pas des compilations de brochure.',
      cityGuides: 'Guides de ville',
      cards: [
        {
          name: 'Chine — L’Empire du Milieu',
          alt: 'Radeaux en bambou sur la rivière Li sous les pitons karstiques',
          circuits: [
            { title: 'Héritage impérial', text: 'Pékin & Xi’an — Grande Muraille, Cité Interdite, armée en terre cuite, 8 jours.' },
            { title: 'Rivière Li & Guilin', text: 'Pitons karstiques, radeaux en bambou, villages de Yangshuo, 5 jours.' },
            { title: 'Grande Baie', text: 'Canton, Shenzhen, connexion Hong Kong, idéal avec un volet professionnel.' },
          ],
        },
        {
          name: 'Japon — Traditions du Nippon',
          alt: 'Une pagode encadrée de cerisiers en fleurs à Kyoto',
          circuits: [
            { title: 'Route dorée', text: 'Tokyo → Kyoto → Osaka, temples et street food, 8–10 jours.' },
            { title: 'Kyoto zen', text: 'Temples, cérémonie du thé, Arashiyama, excursion à Nara, 4 jours.' },
            { title: 'Tokyo tech', text: 'Shibuya, teamLab, Akihabara, excursions à Nikko ou Kamakura.' },
          ],
        },
      ],
    },
    modes: {
      eyebrow: 'Façons de voyager',
      index: '02 / 04',
      title: 'Trois modes, un seul standard',
      lede: 'Quoi que vous voyagiez avec nous, le socle d’assistance reste le même.',
      items: [
        {
          name: 'Immersion culturelle',
          text: 'Voyages privés avec guides bilingues, restaurants présélectionnés (végétarien et halal gérés) et un rythme pensé pour ceux qui voyagent vraiment.',
          points: ['Guide et chauffeur privés', 'Expériences gastronomiques choisies', 'Régimes alimentaires gérés'],
        },
        {
          name: 'Délégations d’affaires',
          text: 'Visites d’usines, rendez-vous fournisseurs, itinéraires Canton Fair et introductions en chambre de commerce — avec notre cellule trade à Canton.',
          points: ['Packs Canton Fair', 'Visites d’usines et fournisseurs', 'Interprètes inclus'],
        },
        {
          name: 'Sur mesure & groupes',
          text: 'Familles, séminaires d’entreprise, voyages scolaires et universitaires. Les groupes de 8+ bénéficient d’un suivi dédié et de tarifs dégressifs.',
          points: ['Tours éducatifs (45 étudiants)', 'Séminaires d’entreprise', 'Voyages familiaux multigénérationnels'],
        },
      ],
    },
    care: {
      eyebrow: 'Assistance complète',
      index: '03 / 04',
      title: 'Le pack 100 % sérénité',
      lede: 'Six choses réglées avant que vous ne demandiez, pour que le voyage reste votre seule préoccupation.',
      items: [
        { name: 'Conciergerie de visas', text: 'Dossiers L, M, F et multi-pays préparés et réservés de bout en bout.' },
        { name: 'Vols & train prioritaires', text: 'Vols intérieurs et train à grande vitesse réservés dès l’ouverture des ventes.' },
        { name: 'Hébergements premium', text: 'Des hôtels où nous avons dormi, pas juste vus sur des sites de réservation.' },
        { name: 'Itinéraires intelligents', text: 'Des programmes journaliers avec du repos intégré — pas de marches forcées à 14 sites.' },
        { name: 'Transport local', text: 'Chauffeurs, cartes de métro, courses — réglés avant votre atterrissage.' },
        { name: 'Desk 24/7', text: 'Un support WhatsApp dans votre fuseau horaire pendant tout le voyage.' },
      ],
    },
    plan: {
      eyebrow: 'Commencer à planifier',
      title: 'Décrivez-nous le voyage que vous avez en tête',
      lede: 'Dates, voyageurs, incontournables, régimes alimentaires. Nous revenons avec un itinéraire provisoire jour par jour — gratuit, avant tout paiement.',
      promise: {
        eyebrow: 'Notre promesse',
        strong: 'Remboursement intégral jusqu’à 30 jours avant le départ.',
        rest: 'Dans les 30 jours, nous remboursons tout ce qui est récupérable auprès des prestataires — et nous vous montrons les reçus. Aucun frais d’annulation caché de notre côté.',
      },
    },
    faq: { eyebrow: 'FAQ Tourisme', index: '04 / 04', title: 'Avant de faire vos valises', more: 'Toutes les FAQ tourisme' },
  },

  ar: {
    meta: {
      title: 'جولات الصين واليابان — سفر خاص وجماعي ورحلات أعمال',
      description:
        'رحلات منتقاة عبر الصين واليابان: مسارات إمبراطورية، مناظر نهر Li، كيوتو في الربيع، رحلات معرض كانتن وجولات مجموعات تعليمية — مع خدمة تأشيرات ومكتب سفر على مدار الساعة.',
    },
    crumb: 'السياحة',
    schema: {
      serviceName: 'جولات الصين واليابان',
      serviceDescription: 'تصميم سفر خاص وجماعي وفعاليات أعمال في الصين واليابان مع خدمة تأشيرات ومرشدين ثنائيي اللغة ودعم على مدار الساعة.',
      serviceType: 'خدمات سياحية',
    },
    hero: {
      eyebrow: 'السياحة',
      index: 'TRV / 02',
      title: 'اكتشف شرق آسيا. بطريقتك.',
      lede: 'رحلات خاصة وجولات مجموعات تعليمية ووفود أعمال عبر الصين واليابان — تصممها أشخاص يعيشون هناك، ويُبلَّغون عن احتياجاتك الغذائية، وبدعم على مدار الساعة أثناء السفر.',
      facts: [
        { label: 'الدول', value: 'الصين · اليابان' },
        { label: 'الأسلوب', value: 'خاص · مجموعات' },
        { label: 'الدعم', value: 'مكتب 24/7' },
        { label: 'التأشيرات', value: 'L · M · F ننجزها' },
      ],
      primaryCta: 'خطط رحلة',
      secondaryCta: 'شاهد الوجهات',
      jumps: ['الوجهات', 'طرق السفر', 'الرعاية الكاملة', 'التخطيط', 'الأسئلة الشائعة'],
    },
    heroBand: {
      alt: 'مسافر يطل على سور الصين العظيم في متنييو بضوء ذهبي',
      caption: 'سور متنييو العظيم · على بعد 70 كم من بكين',
    },
    destinations: {
      eyebrow: 'الوجهات',
      index: '01 / 04',
      title: 'بلدان، بالطريقة الصحيحة',
      lede: 'نشغّل مسارات سلكناها بأنفسنا — لا تجميعات من الكتيبات.',
      cityGuides: 'أدلة المدن',
      cards: [
        {
          name: 'الصين — المملكة الوسطى',
          alt: 'قوارب البامبو على نهر Li تحت القمم الكارستية',
          circuits: [
            { title: 'الإرث الإمبراطوري', text: 'بكين وشيآن — سور الصين والمدينة المحرمة وجيش التراكوتا، 8 أيام.' },
            { title: 'نهر Li وغويلين', text: 'قمم كارستية وقوارب بامبو وقرى يانغشو، 5 أيام.' },
            { title: 'دلتا الخليج الكبرى', text: 'قوانغتشو وشنتجن وربط هونغ كونغ، مناسبة لإضافة برنامج أعمال.' },
          ],
        },
        {
          name: 'اليابان — تقاليد نيبن',
          alt: 'معبد بوذي محاط بأزهار الكرز في كيوتو',
          circuits: [
            { title: 'الطريق الذهبي', text: 'طوكيو → كيوتو → أوساكا، معابد وطعام الشارع، 8–10 أيام.' },
            { title: 'كيوتو الزن', text: 'معابد وحفل شاي وأراشياما ورحلة نهارية إلى نارا، 4 أيام.' },
            { title: 'طوكيو التقنية', text: 'شيبويا وteamLab وأكيهابارا ورحلات نهارية إلى نيكو أو كاماكورا.' },
          ],
        },
      ],
    },
    modes: {
      eyebrow: 'طرق السفر',
      index: '02 / 04',
      title: 'ثلاثة أنماط، معيار واحد',
      lede: 'أيًا كانت طريقة سفرك معنا، حزمة الرعاية من التحت واحدة.',
      items: [
        {
          name: 'انغماس ثقافي',
          text: 'رحلات خاصة بمرشدين ثنائيي اللغة ومطاعم مفحوصة مسبقًا (النباتي والحلال مشمولان) ووتيرة مصممة لمن يسافرون فعلًا.',
          points: ['مرشد وسائق خاصان', 'تجارب طعام منتقاة', 'مراعاة القيود الغذائية'],
        },
        {
          name: 'وفود أعمال',
          text: 'زيارات مصانع ولقاءات موردين وبرامج معرض كانتن وتعريف بالغرف التجارية — بالتنسيق مع مكتب التجارة في قوانغتشو.',
          points: ['باقات معرض كانتن', 'زيارات مصانع وموردين', 'مترجمون مشمولون'],
        },
        {
          name: 'رحلات مخصصة وجماعية',
          text: 'عائلات وفعاليات شركات ورحلات تعليمية للمدارس والجامعات. المجموعات من 8+ تحصل على تخطيط مخصص وأسعار مخفضة.',
          points: ['رحلات تعليمية (45 طالبًا)', 'فعاليات شركات', 'رحلات عائلية متعددة الأجيال'],
        },
      ],
    },
    care: {
      eyebrow: 'رعاية شاملة',
      index: '03 / 04',
      title: 'حزمة راحة البال 100%',
      lede: 'ستة أمور ننجزها قبل أن تسأل، ليبقى السفر همّك الوحيد.',
      items: [
        { name: 'خدمة التأشيرات', text: 'ملفات L وM وF والدول المتعددة نجهزها ونحجزها من البداية للنهاية.' },
        { name: 'رحلات وقطارات ذات أولوية', text: 'الرحلات الداخلية والقطارات فائقة السرعة تُحجز لحظة فتح البيع.' },
        { name: 'إقامات مميزة', text: 'فنادق نم فيها فعلًا، لا مجرد ما نراه على مواقع الحجز.' },
        { name: 'برامج ذكية', text: 'خطط يومية فيها راحة مدمجة — لا مسيرات مرهقة بـ14 موقعًا.' },
        { name: 'مواصلات محلية', text: 'سائقون وبطاقات مترو ووسائل تنقل — مرتبة قبل هبوطك.' },
        { name: 'مكتب 24/7', text: 'دعم واتساب في منطقتك الزمنية طوال الرحلة.' },
      ],
    },
    plan: {
      eyebrow: 'ابدأ التخطيط',
      title: 'أخبرنا بالرحلة التي في خيالك',
      lede: 'التواريخ والأشخاص والمعالم غير القابلة للتفويت والاحتياجات الغذائية. نعود إليك بمسودة مسار يوم بيوم — مجانًا، قبل دفع أي شيء.',
      promise: {
        eyebrow: 'وعدنا',
        strong: 'استرداد كامل حتى 30 يومًا قبل المغادرة.',
        rest: 'خلال 30 يومًا، نسترد كل ما يمكن استرداده من الموردين — ونريك الإيصالات. لا رسوم إلغاء خفية من جهتنا.',
      },
    },
    faq: { eyebrow: 'أسئلة السياحة الشائعة', index: '04 / 04', title: 'قبل أن تحزم حقائبك', more: 'كل أسئلة السياحة الشائعة' },
  },

  es: {
    meta: {
      title: 'Tours de China y Japón — Viajes privados, grupos y negocios',
      description:
        'Viajes seleccionados por China y Japón: circuitos imperiales, paisaje del río Li, Kioto en primavera, viajes a la Canton Fair y tours grupales educativos — con gestión de visados y mesa de viajes 24/7.',
    },
    crumb: 'Turismo',
    schema: {
      serviceName: 'Tours de China y Japón',
      serviceDescription:
        'Diseño de viajes privados, grupales y de negocios por China y Japón con gestión de visados, guías bilingües y soporte 24/7.',
      serviceType: 'Servicios turísticos',
    },
    hero: {
      eyebrow: 'Turismo',
      index: 'TRV / 02',
      title: 'Descubre Asia Oriental. A tu manera.',
      lede: 'Viajes privados, tours grupales educativos y delegaciones de negocios por China y Japón — diseñados por gente que vive allí, informados de tu alimentación y con soporte 24/7 mientras viajas.',
      facts: [
        { label: 'Países', value: 'China · Japón' },
        { label: 'Estilo', value: 'Privado · grupos' },
        { label: 'Soporte', value: 'Mesa 24/7' },
        { label: 'Visados', value: 'L · M · F gestionados' },
      ],
      primaryCta: 'Planear un viaje',
      secondaryCta: 'Ver destinos',
      jumps: ['Destinos', 'Formas de viajar', 'Cuidados', 'Planear', 'FAQ'],
    },
    heroBand: {
      alt: 'Una viajera contemplando la Gran Muralla China en Mutianyu con luz dorada',
      caption: 'Gran Muralla de Mutianyu · a 70 km de Pekín',
    },
    destinations: {
      eyebrow: 'Destinos',
      index: '01 / 04',
      title: 'Dos países, bien hechos',
      lede: 'Operamos circuitos que hemos recorrido nosotros mismos — no recopilaciones de folleto.',
      cityGuides: 'Guías de ciudad',
      cards: [
        {
          name: 'China — El Reino del Medio',
          alt: 'Balsas de bambú en el río Li bajo picos kársticos',
          circuits: [
            { title: 'Herencia imperial', text: 'Pekín y Xi\'an — Gran Muralla, Ciudad Prohibida, Ejército de Terracota, 8 días.' },
            { title: 'Río Li y Guilin', text: 'Picos kársticos, balsas de bambú, pueblos de Yangshuo, 5 días.' },
            { title: 'Gran Área de la Bahía', text: 'Cantón, Shenzhen, conexión con Hong Kong, compatible con un añadido de negocios.' },
          ],
        },
        {
          name: 'Japón — Tradiciones de Nippon',
          alt: 'Una pagoda enmarcada por cerezos en flor en Kioto',
          circuits: [
            { title: 'Ruta dorada', text: 'Tokio → Kioto → Osaka, templos y comida callejera, 8–10 días.' },
            { title: 'Kioto zen', text: 'Templos, ceremonia del té, Arashiyama, excursión a Nara, 4 días.' },
            { title: 'Tokio tech', text: 'Shibuya, teamLab, Akihabara, excursiones a Nikko o Kamakura.' },
          ],
        },
      ],
    },
    modes: {
      eyebrow: 'Formas de viajar',
      index: '02 / 04',
      title: 'Tres modos, un solo estándar',
      lede: 'Sin importar cómo viajes con nosotros, el paquete de cuidados de debajo es el mismo.',
      items: [
        {
          name: 'Inmersión cultural',
          text: 'Viajes privados con guías bilingües, restaurantes preseleccionados (vegetariano y halal resueltos) y un ritmo pensado para quienes realmente viajan.',
          points: ['Guía y conductor privados', 'Experiencias gastronómicas curadas', 'Preferencias alimentarias resueltas'],
        },
        {
          name: 'Delegaciones de negocios',
          text: 'Visitas a fábricas, reuniones con proveedores, itinerarios de la Canton Fair y presentaciones en cámaras — junto a nuestra mesa de comercio en Cantón.',
          points: ['Paquetes Canton Fair', 'Visitas a fábricas y proveedores', 'Intérpretes incluidos'],
        },
        {
          name: 'A medida y grupos',
          text: 'Familias, retiros corporativos, viajes educativos de colegios y universidades. Los grupos de 8+ reciben planificación dedicada y tarifas reducidas.',
          points: ['Viajes educativos (45 estudiantes)', 'Retiros corporativos', 'Viajes familiares multigeneracionales'],
        },
      ],
    },
    care: {
      eyebrow: 'Cuidado integral',
      index: '03 / 04',
      title: 'El paquete 100% de tranquilidad',
      lede: 'Seis cosas resueltas antes de que las pidas, para que el viaje sea lo único en tu mente.',
      items: [
        { name: 'Concierge de visados', text: 'Expedientes L, M, F y multi-país preparados y reservados de principio a fin.' },
        { name: 'Vuelos y tren prioritarios', text: 'Vuelos internos y tren de alta velocidad reservados en cuanto se abre la venta.' },
        { name: 'Alojamientos premium', text: 'Hoteles donde hemos dormido, no solo vistos en webs de reservas.' },
        { name: 'Itinerarios inteligentes', text: 'Planes diarios con descanso integrado — nada de marchas forzadas de 14 sitios.' },
        { name: 'Transporte local', text: 'Conductores, tarjetas de metro, traslados — resueltos antes de aterrizar.' },
        { name: 'Mesa 24/7', text: 'Soporte por WhatsApp en tu franja horaria durante todo el viaje.' },
      ],
    },
    plan: {
      eyebrow: 'Empezar a planear',
      title: 'Cuéntanos el viaje que tienes en la cabeza',
      lede: 'Fechas, personas, imprescindibles, necesidades alimentarias. Volvemos con un borrador de itinerario día a día — gratis, antes de pagar nada.',
      promise: {
        eyebrow: 'Nuestra promesa',
        strong: 'Reembolso total hasta 30 días antes de la salida.',
        rest: 'Dentro de los 30 días, reembolsamos todo lo recuperable de los proveedores — y te enseñamos los recibos. Sin tarifas de cancelación ocultas de nuestro lado.',
      },
    },
    faq: { eyebrow: 'FAQ de Turismo', index: '04 / 04', title: 'Antes de hacer la maleta', more: 'Todas las FAQ de turismo' },
  },
};
