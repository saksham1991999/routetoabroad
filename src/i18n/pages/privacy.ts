/**
 * Privacy policy copy — keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations following the terminology in
 * src/i18n/ui.ts and still need native-speaker review. Facts (email, phone,
 * office address) are never inlined here — the component interpolates them
 * from src/lib/site.ts so they can't drift.
 */
import type { Locale } from '../../lib/i18n';

export interface PrivacyStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  updated: string;
  sections: {
    collect: { h: string; p: string };
    never: { h: string; p: string };
    storage: { h: string; p: string };
    forms: { h: string; p: string };
    retention: { h: string; p: string };
    /** Split around the mailto link (the link text is SITE.email itself). */
    rights: { h: string; pre: string; post: string };
    /** Label heading the SITE-fact line. */
    contact: { h: string; label: string };
  };
}

export const PRIVACY: Record<Locale, PrivacyStrings> = {
  en: {
    meta: {
      title: 'Privacy Policy',
      description:
        'What RouteToAbroad collects (enquiry fields only), what we never do (ads, third-party trackers), and how to reach us about your data.',
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Privacy policy',
      lede: 'Short, because the practice is short: we collect what your enquiry needs, and nothing else.',
    },
    updated: 'Last updated: November 2025',
    sections: {
      collect: {
        h: '1. What we collect',
        p: 'When you submit an enquiry or form on this site, we collect the fields you fill in — typically your name, email, phone number, and the message or programme details you share. We use them only to respond to your enquiry and, if you proceed, to run your file.',
      },
      never: {
        h: '2. What we never do',
        p: 'This site sets no advertising cookies and runs no third-party tracking scripts. We do not sell, rent, or share your data with marketers. Full stop.',
      },
      storage: {
        h: '3. Functional storage',
        p: 'A few small pieces of state live in your browser’s local storage: your light/dark theme preference, your saved progress on the document checklist tool, the values you enter into the cost calculator, fit check and timeline planner, your conversation with the AI assistant, and a flag that remembers you have already seen the homepage intro. None of it leaves your device.',
      },
      forms: {
        h: '4. Form processing',
        p: 'Enquiry forms are delivered to our team through Formspree (Formspree, Inc.), which processes the submission on our behalf solely to deliver it to us. Our AI assistant, if you use it, sends the conversation to our language-model provider to generate replies; conversations are not used for advertising.',
      },
      retention: {
        h: '5. Retention',
        p: 'Enquiry correspondence is kept while your file is active and for a reasonable period afterwards for service and legal reasons. Ask us to delete your data and we will, subject to record-keeping obligations.',
      },
      rights: {
        h: '6. Your rights',
        pre: 'You can ask what we hold about you, ask for corrections, or ask for deletion — write to ',
        post: '. We respond within one working week.',
      },
      contact: {
        h: '7. Contact',
        label: 'Questions about this policy:',
      },
    },
  },

  zh: {
    meta: {
      title: '隐私政策',
      description: 'RouteToAbroad 收集什么（仅咨询表单字段）、绝不做什么（广告、第三方追踪），以及如何就你的数据联系我们。',
    },
    hero: {
      eyebrow: '法律',
      title: '隐私政策',
      lede: '篇幅很短，因为做法很简单：我们只收集你的咨询所需要的信息，除此之外一概不收。',
    },
    updated: '最后更新：2025 年 11 月',
    sections: {
      collect: {
        h: '1. 我们收集什么',
        p: '当你在本站提交咨询或表单时，我们会收集你填写的字段——通常是姓名、邮箱、电话号码，以及你分享的留言或课程信息。我们只将其用于回复你的咨询，以及在你推进之后为你办理申请。',
      },
      never: {
        h: '2. 我们绝不做什么',
        p: '本站不设置广告 Cookie，也不运行第三方追踪脚本。我们不出售、不出租、不与营销方共享你的数据。仅此而已。',
      },
      storage: {
        h: '3. 功能性存储',
        p: '你的浏览器本地存储中有几小段状态：你的明暗主题偏好、你在文件清单工具中的保存进度、你在费用计算器 / 适配检查 / 时间线规划中输入的数值、你与 AI 助手的对话，以及记录你是否看过首页开场动画的标记。它们都不会离开你的设备。',
      },
      forms: {
        h: '4. 表单处理',
        p: '咨询表单通过 Formspree（Formspree, Inc.）送达我们的团队，它仅代我们处理提交内容以便送达。我们的 AI 助手（如果你使用）会把对话发送给我们的语言模型服务商以生成回复；对话内容不用于广告。',
      },
      retention: {
        h: '5. 保留期限',
        p: '咨询往来记录在你的档案有效期内保留，之后因服务和法律原因再保留一段合理时间。你可以要求我们删除你的数据，我们会照做，但须遵守记录留存义务。',
      },
      rights: {
        h: '6. 你的权利',
        pre: '你可以询问我们掌握了你哪些信息、要求更正或要求删除——写信至 ',
        post: '。我们会在一个工作周内回复。',
      },
      contact: {
        h: '7. 联系我们',
        label: '关于本政策的疑问：',
      },
    },
  },

  fr: {
    meta: {
      title: 'Politique de confidentialité',
      description:
        'Ce que RouteToAbroad collecte (uniquement les champs du formulaire), ce que nous ne faisons jamais (pub, traqueurs tiers), et comment nous contacter au sujet de vos données.',
    },
    hero: {
      eyebrow: 'Légal',
      title: 'Politique de confidentialité',
      lede: 'Courte, parce que la pratique est courte : nous collectons ce que votre demande exige, et rien d’autre.',
    },
    updated: 'Dernière mise à jour : novembre 2025',
    sections: {
      collect: {
        h: '1. Ce que nous collectons',
        p: 'Lorsque vous envoyez une demande via ce site, nous collectons les champs que vous remplissez — généralement votre nom, e-mail, numéro de téléphone, et le message ou les détails de programme que vous partagez. Nous ne les utilisons que pour répondre à votre demande et, si vous poursuivez, pour instruire votre dossier.',
      },
      never: {
        h: '2. Ce que nous ne faisons jamais',
        p: 'Ce site ne dépose aucun cookie publicitaire et n’exécute aucun script de suivi tiers. Nous ne vendons, ne louons et ne partageons pas vos données avec des marketeurs. Point.',
      },
      storage: {
        h: '3. Stockage fonctionnel',
        p: 'Quelques petites données vivent dans le stockage local de votre navigateur : votre préférence de thème clair/sombre, votre progression sauvegardée sur la liste de documents, les valeurs saisies dans le calculateur de coûts, le test de compatibilité et le planificateur, votre conversation avec l’assistant IA, ainsi qu’un indicateur mémorisant que vous avez déjà vu l’introduction de la page d’accueil. Aucune ne quitte votre appareil.',
      },
      forms: {
        h: '4. Traitement des formulaires',
        p: 'Les formulaires de demande sont acheminés à notre équipe via Formspree (Formspree, Inc.), qui traite l’envoi en notre nom uniquement pour nous le transmettre. Notre assistant IA, si vous l’utilisez, envoie la conversation à notre fournisseur de modèle de langage pour générer les réponses ; les conversations ne servent pas à la publicité.',
      },
      retention: {
        h: '5. Conservation',
        p: 'Les échanges de demande sont conservés pendant que votre dossier est actif, puis pendant une durée raisonnable pour des raisons de service et juridiques. Demandez-nous de supprimer vos données et nous le ferons, sous réserve des obligations d’archivage.',
      },
      rights: {
        h: '6. Vos droits',
        pre: 'Vous pouvez demander ce que nous détenons à votre sujet, demander une correction ou une suppression — écrivez à ',
        post: '. Nous répondons sous une semaine ouvrée.',
      },
      contact: {
        h: '7. Contact',
        label: 'Questions sur cette politique :',
      },
    },
  },

  ar: {
    meta: {
      title: 'سياسة الخصوصية',
      description: 'ما يجمعه RouteToAbroad (حقول الاستفسار فقط)، وما لا نفعله أبدًا (إعلانات، متتبعات خارجية)، وكيف تتواصل معنا بخصوص بياناتك.',
    },
    hero: {
      eyebrow: 'قانوني',
      title: 'سياسة الخصوصية',
      lede: 'قصيرة لأن الممارسة قصيرة: نجمع ما يحتاجه استفسارك، ولا شيء غير ذلك.',
    },
    updated: 'آخر تحديث: نوفمبر 2025',
    sections: {
      collect: {
        h: '1. ما نجمعه',
        p: 'عند إرسال استفسار أو نموذج على هذا الموقع، نجمع الحقول التي تعبئها — عادةً اسمك وبريدك ورقم هاتفك والرسالة أو تفاصيل البرنامج التي تشاركها. نستخدمها فقط للرد على استفسارك، وإن واصلت، لإدارة ملفك.',
      },
      never: {
        h: '2. ما لا نفعله أبدًا',
        p: 'هذا الموقع لا يضع كوكيز إعلانية ولا يشغّل سكربتات تتبع خارجية. لا نبيع بياناتك ولا نؤجرها ولا نشاركها مع المسوّقين. نقطة.',
      },
      storage: {
        h: '3. تخزين وظيفي',
        p: 'عدة أجزاء صغيرة من البيانات تعيش في التخزين المحلي لمتصفحك: تفضيلك للوضع الفاتح/الداكن، وتقدمك المحفوظ في أداة قائمة المستندات، والقيم التي تُدخلها في حاسبة التكاليف وفحص التوافق ومخطط الجدول الزمني، ومحادثتك مع المساعد الذكي، وعلامة تذكّر أنك شاهدت مقدم الصفحة الرئيسية. لا شيء منها يغادر جهازك.',
      },
      forms: {
        h: '4. معالجة النماذج',
        p: 'تصل نماذج الاستفسار إلى فريقنا عبر Formspree (Formspree, Inc.)، وهي تعالج الإرسال نيابةً عننا بغرض توصيله إلينا فقط. مساعدنا الذكي، إن استخدمته، يرسل المحادثة إلى مزوّد نموذج اللغة لدينا لتوليد الردود؛ لا تُستخدم المحادثات في الإعلانات.',
      },
      retention: {
        h: '5. مدة الاحتفاظ',
        p: 'تُحفظ مراسلات الاستفسار ما دام ملفك نشطًا، ثم لمدة معقولة بعدها لأسباب خدمية وقانونية. اطلب منا حذف بياناتك وسنفعل، في حدود التزامات حفظ السجلات.',
      },
      rights: {
        h: '6. حقوقك',
        pre: 'يمكنك أن تسأل عمّا نحفظه عنك، أو أن تطلب تصحيحًا أو حذفًا — اكتب إلى ',
        post: '. نرد خلال أسبوع عمل واحد.',
      },
      contact: {
        h: '7. تواصل',
        label: 'أسئلة حول هذه السياسة:',
      },
    },
  },

  es: {
    meta: {
      title: 'Política de privacidad',
      description:
        'Qué recopila RouteToAbroad (solo los campos de la consulta), qué nunca hacemos (anuncios, rastreadores de terceros) y cómo contactarnos sobre tus datos.',
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Política de privacidad',
      lede: 'Corta, porque la práctica es corta: recopilamos lo que tu consulta necesita, y nada más.',
    },
    updated: 'Última actualización: noviembre de 2025',
    sections: {
      collect: {
        h: '1. Qué recopilamos',
        p: 'Cuando envías una consulta o formulario en este sitio, recopilamos los campos que rellenas — normalmente tu nombre, correo, teléfono y el mensaje o los detalles del programa que compartes. Los usamos solo para responder a tu consulta y, si continúas, para gestionar tu expediente.',
      },
      never: {
        h: '2. Qué nunca hacemos',
        p: 'Este sitio no instala cookies publicitarias ni ejecuta scripts de rastreo de terceros. No vendemos, alquilamos ni compartimos tus datos con marketers. Punto.',
      },
      storage: {
        h: '3. Almacenamiento funcional',
        p: 'Algunos pequeños datos viven en el almacenamiento local de tu navegador: tu preferencia de tema claro/oscuro, tu progreso guardado en la lista de documentos, los valores que introduces en la calculadora de costes, el fit check y el planificador, tu conversación con el asistente de IA y una marca que recuerda que ya viste la introducción de la portada. Ninguno sale de tu dispositivo.',
      },
      forms: {
        h: '4. Procesamiento de formularios',
        p: 'Los formularios de consulta llegan a nuestro equipo a través de Formspree (Formspree, Inc.), que procesa el envío en nuestro nombre únicamente para hacérnoslo llegar. Nuestro asistente de IA, si lo usas, envía la conversación a nuestro proveedor de modelos de lenguaje para generar respuestas; las conversaciones no se usan para publicidad.',
      },
      retention: {
        h: '5. Conservación',
        p: 'La correspondencia de consultas se conserva mientras tu expediente está activo y durante un periodo razonable después, por razones de servicio y legales. Pídenos borrar tus datos y lo haremos, sin perjuicio de las obligaciones de conservación de registros.',
      },
      rights: {
        h: '6. Tus derechos',
        pre: 'Puedes preguntar qué tenemos sobre ti, pedir correcciones o pedir el borrado — escribe a ',
        post: '. Respondemos en una semana laboral.',
      },
      contact: {
        h: '7. Contacto',
        label: 'Preguntas sobre esta política:',
      },
    },
  },
};
