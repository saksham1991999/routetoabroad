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

/* de — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_DE: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroad hat mir nicht nur eine Universität gefunden, sondern eine Zukunft. Die Stipendienabdeckung für meinen MBBS an der Peking University lief reibungslos, und die Betreuung vor Ort ließ mich China wie ein Zuhause fühlen.',
    name: 'Ananya Krishnan',
    role: 'MBBS, Peking University (Jahrgang 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'Ich war anfangs skeptisch, im Ausland Ingenieurwesen zu studieren, aber das Team begleitete mich durch jeden Schritt — von der Auswahl der Universitäten bis zur Ankunft in Peking. Ich bekam ein CSC-Stipendium, von dem ich nicht einmal wusste, dass ich mich dafür qualifiziere.',
    name: 'Rohan Sharma',
    role: 'B.Tech Informatik, BJTU Peking (Jahrgang 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'Unsere Gruppenreise nach Shanghai und Peking war schlicht außergewöhnlich. Jedes Detail — Hotels, Guides, Reiseroute — war perfekt kuratiert. Wir fühlten uns bei jedem Schritt betreut, selbst die Essensvorlieben wurden ohne einen einzigen Haken gehandhabt.',
    name: 'Priya Mehta',
    role: 'Bildungsgruppenreise, Shanghai & Peking (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'Als Berufstätige mit einem MBA an der Fudan University brauchte ich eine Beraterin oder einen Berater, der den akademischen und kulturellen Übergang versteht. RouteToAbroad erledigte alles — von den Unterlagen bis zur Wohnungssuche.',
    name: 'Meera Nair',
    role: 'MBA, Fudan University (Jahrgang 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'Elektronikkomponenten aus China zu beziehen war immer ein Ärgernis — bis wir das Trade-Team von RouteToAbroad einschalteten. Sie prüften drei Fabriken, verhandelten Preise und betreuten unsere erste FCL-Sendung von Anfang bis Ende. Unsere Lieferkette war nie zuverlässiger.',
    name: 'Arjun Patel',
    role: 'Gründer, Apex Components India — Handelskunde (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_DE: string[] = [
  'Aufnahme an der Tsinghua University — Rahul M.',
  'Vollstipendium für MBBS — Priya S.',
  'Sourcing von 40-Fuß-Containern monatlich — TechTrade India',
  'Bildungsreise nach Shanghai — 45 Studierende',
  'CSC-Zuwendung, Fudan University — Meera N.',
  'Fabrik-Audit bestanden — Apex Components',
];

/* ja — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_JA: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroadは大学を見つけてくれただけでなく、未来を見つけてくれました。北京大学のMBBSの奨学金手続きは一切のトラブルもなく、現地でのサポートのおかげで中国がまるで我が家のように感じられました。',
    name: 'Ananya Krishnan',
    role: 'MBBS、北京大学（2024年卒）',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: '海外で工学を学ぶことには半信半疑でしたが、チームは大学選びから北京での生活の立ち上げまで、一つひとつのステップを伴走してくれました。自分が応募資格があることさえ知らなかったCSC奨学金を獲得しました。',
    name: 'Rohan Sharma',
    role: 'コンピュータサイエンス学部、北京交通大学（2025年卒）',
    category: 'education',
  },
  {
    id: 'priya',
    quote: '上海と北京への団体ツアーは、言いようのないほど素晴らしいものでした。ホテル、ガイド、旅程——すべての細部が完璧に仕上げられていました。食事の好みまですべてのステップで手厚く、一度もつまずきがありませんでした。',
    name: 'Priya Mehta',
    role: '教育団体ツアー、上海・北京（2024）',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: '復旦大学でMBAを学ぶ社会人として、学問的・文化的な移行を理解してくれるアドバイザーが必要でした。書類準備から住まい探しまで、RouteToAbroadがすべて対応してくれました。',
    name: 'Meera Nair',
    role: 'MBA、復旦大学（2025年卒）',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: '中国からの電子部品の調達はいつも頭痛の種でした——RouteToAbroadの貿易チームに依頼するまでは。3つの工場を検証し、価格を交渉し、初めてのFCL出荷を最後まで管理してくれました。サプライチェーンは今までで一番信頼できるものになりました。',
    name: 'Arjun Patel',
    role: '創業者、Apex Components India — 貿易顧客（2024）',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_JA: string[] = [
  '清華大学に合格 — Rahul M.',
  'MBBS全額奨学金 — Priya S.',
  '毎月40フィートコンテナを調達 — TechTrade India',
  '上海教育ツアー — 学生45名',
  'CSC奨学金、復旦大学 — Meera N.',
  '工場監査に合格 — Apex Components',
];

/* pt — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_PT: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'A RouteToAbroad não apenas encontrou uma universidade para mim; encontrou um futuro. A cobertura da bolsa para meu MBBS na Peking University foi impecável, e o suporte local fez a China parecer um lar.',
    name: 'Ananya Krishnan',
    role: 'MBBS, Peking University (turma de 2024)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'Eu era cético quanto a estudar engenharia no exterior, mas a equipe me acompanhou em cada etapa — da pré-seleção de universidades à adaptação em Pequim. Consegui uma bolsa CSC para a qual nem sabia que tinha direito.',
    name: 'Rohan Sharma',
    role: 'B.Tech em Ciência da Computação, BJTU Pequim (turma de 2025)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'Nossa viagem em grupo a Xangai e Pequim foi simplesmente extraordinária. Cada detalhe — hotéis, guias, roteiro — foi curado com perfeição. Nos sentimos cuidados a cada passo, mesmo com as preferências alimentares resolvidas sem um único contratempo.',
    name: 'Priya Mehta',
    role: 'Viagem em grupo educativa, Xangai e Pequim (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'Como profissional em atividade fazendo um MBA na Fudan University, eu precisava de um consultor que entendesse a transição acadêmica e cultural. A RouteToAbroad cuidou de tudo, da documentação à procura de moradia.',
    name: 'Meera Nair',
    role: 'MBA, Fudan University (turma de 2025)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'Comprar componentes eletrônicos na China sempre foi uma dor de cabeça — até contratarmos a equipe de comércio da RouteToAbroad. Eles verificaram três fábricas, negociaram preços e geriram nossa primeira carga FCL de ponta a ponta. Nossa cadeia de suprimentos nunca foi tão confiável.',
    name: 'Arjun Patel',
    role: 'Fundador, Apex Components India — Cliente de comércio (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_PT: string[] = [
  'Aprovado na Tsinghua University — Rahul M.',
  'Bolsa integral de MBBS — Priya S.',
  'Comprando contêineres de 40 pés todo mês — TechTrade India',
  'Viagem educativa a Xangai — 45 estudantes',
  'Bolsa CSC, Fudan University — Meera N.',
  'Auditoria de fábrica aprovada — Apex Components',
];

/* hi — machine-assisted translation (meaning translated, names kept accurate). */
const TESTIMONIALS_HI: Testimonial[] = [
  {
    id: 'ananya',
    quote: 'RouteToAbroad ने सिर्फ़ मेरे लिए एक विश्वविद्यालय नहीं खोजा; उसने मेरे लिए एक भविष्य खोजा। पेकिंग यूनिवर्सिटी में मेरे MBBS की छात्रवृत्ति कवरेज सहज रही, और वहाँ के सपोर्ट ने चीन को घर जैसा महसूस करा दिया।',
    name: 'Ananya Krishnan',
    role: 'MBBS, पेकिंग यूनिवर्सिटी (2024 बैच)',
    category: 'education',
  },
  {
    id: 'rohan',
    quote: 'विदेश में इंजीनियरिंग पढ़ने को लेकर मैं संशय में था, पर टीम ने हर कदम में मेरा साथ दिया — यूनिवर्सिटी शॉर्टलिस्टिंग से बीजिंग में बसने तक। मुझे CSC छात्रवृत्ति मिली, जिसके लिए मैं पात्र हूँ यह तो मुझे पता ही नहीं था।',
    name: 'Rohan Sharma',
    role: 'B.Tech कंप्यूटर साइंस, BJTU बीजिंग (2025 बैच)',
    category: 'education',
  },
  {
    id: 'priya',
    quote: 'शंघाई और बीजिंग की हमारी ग्रुप ट्रिप कमाल की रही। हर ब्योरा — होटल, गाइड, कार्यक्रम — बेहतरीन तरीके से सुसज्जित था। हर कदम पर हमें देखभाल मिली, यहाँ तक कि खाने की पसंदें भी बिना किसी अड़चन के संभाली गईं।',
    name: 'Priya Mehta',
    role: 'शैक्षिक ग्रुप टूर, शंघाई और बीजिंग (2024)',
    category: 'tourism',
  },
  {
    id: 'meera',
    quote: 'फ़ुदान यूनिवर्सिटी में MBA करती हुई कामकाजी प्रोफेशनल के नाते मुझे ऐसे सलाहकार की ज़रूरत थी जो शैक्षिक और सांस्कृतिक बदलाव को समझे। दस्तावेज़ों से लेकर आवास तलाश तक RouteToAbroad ने सब संभाला।',
    name: 'Meera Nair',
    role: 'MBA, फ़ुदान यूनिवर्सिटी (2025 बैच)',
    category: 'education',
  },
  {
    id: 'arjun',
    quote: 'चीन से इलेक्ट्रॉनिक कंपोनेंट ख़रीदना हमेशा सिरदर्द था — जब तक हमने RouteToAbroad की ट्रेड टीम के साथ काम शुरू किया। उन्होंने तीन फ़ैक्टरियाँ सत्यापित कीं, क़ीमतों पर बातचीत की और हमारी पहली FCL शिपमेंट को शुरू से अंत तक संभाला। हमारी सप्लाई चेन पहले से कहीं ज़्यादा भरोसेमंद है।',
    name: 'Arjun Patel',
    role: 'संस्थापक, Apex Components India — ट्रेड ग्राहक (2024)',
    category: 'trade',
  },
];

const MARQUEE_ITEMS_HI: string[] = [
  'त्सिंगहुआ यूनिवर्सिटी में प्रवेश — Rahul M.',
  'पूर्ण MBBS छात्रवृत्ति — Priya S.',
  'हर महीने 40 फ़ीट कंटेनर सोर्सिंग — TechTrade India',
  'शंघाई शैक्षिक यात्रा — 45 छात्र',
  'CSC छात्रवृत्ति, फ़ुदान यूनिवर्सिटी — Meera N.',
  'फ़ैक्टरी ऑडिट पास — Apex Components',
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
  de: TESTIMONIALS_DE,
  ja: TESTIMONIALS_JA,
  pt: TESTIMONIALS_PT,
  hi: TESTIMONIALS_HI,
};

/** Short proof-strip lines under the pillar rows. */
export const MARQUEE_ITEMS: Record<Locale, string[]> = {
  en: MARQUEE_ITEMS_EN,
  zh: MARQUEE_ITEMS_ZH,
  fr: MARQUEE_ITEMS_FR,
  ar: MARQUEE_ITEMS_AR,
  es: MARQUEE_ITEMS_ES,
  de: MARQUEE_ITEMS_DE,
  ja: MARQUEE_ITEMS_JA,
  pt: MARQUEE_ITEMS_PT,
  hi: MARQUEE_ITEMS_HI,
};
