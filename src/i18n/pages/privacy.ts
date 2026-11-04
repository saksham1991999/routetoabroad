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

  de: {
    meta: {
      title: 'Datenschutzerklärung',
      description:
        'Was RouteToAbroad sammelt (nur Anfragefelder), was wir niemals tun (Werbung, Tracker von Drittanbietern) und wie Sie uns zu Ihren Daten erreichen.',
    },
    hero: {
      eyebrow: 'Rechtliches',
      title: 'Datenschutzerklärung',
      lede: 'Kurz, weil die Praxis kurz ist: Wir sammeln, was Ihre Anfrage benötigt — und nichts weiter.',
    },
    updated: 'Zuletzt aktualisiert: November 2025',
    sections: {
      collect: {
        h: '1. Was wir sammeln',
        p: 'Wenn Sie auf dieser Website eine Anfrage oder ein Formular absenden, sammeln wir die von Ihnen ausgefüllten Felder — in der Regel Name, E-Mail, Telefonnummer sowie die Nachricht oder Studiengangsdetails, die Sie mitteilen. Wir verwenden sie ausschließlich, um Ihre Anfrage zu beantworten und, wenn Sie fortfahren, Ihre Akte zu betreuen.',
      },
      never: {
        h: '2. Was wir niemals tun',
        p: 'Diese Website setzt keine Werbe-Cookies und führt keine Tracking-Skripte von Drittanbietern aus. Wir verkaufen, vermieten oder teilen Ihre Daten nicht mit Werbetreibenden. Punkt.',
      },
      storage: {
        h: '3. Funktionale Speicherung',
        p: 'Einige kleine Zustände liegen im lokalen Speicher Ihres Browsers: Ihre Hell-/Dunkel-Präferenz, Ihr gespeicherter Fortschritt in der Dokumenten-Checkliste, die Werte aus Kostenrechner, Eignungscheck und Zeitplaner, Ihr Gespräch mit dem KI-Assistenten sowie ein Merker, der sich merkt, dass Sie die Startseiten-Intro bereits gesehen haben. Nichts davon verlässt Ihr Gerät.',
      },
      forms: {
        h: '4. Formularverarbeitung',
        p: 'Anfrageformulare erreichen unser Team über Formspree (Formspree, Inc.), das die Übermittlung in unserem Auftrag ausschließlich zu dem Zweck verarbeitet, sie uns zuzustellen. Unser KI-Assistent sendet — sofern Sie ihn nutzen — das Gespräch an unseren Sprachmodell-Anbieter, um Antworten zu erzeugen; Gespräche werden nicht für Werbung verwendet.',
      },
      retention: {
        h: '5. Aufbewahrung',
        p: 'Anfragenkorrespondenz wird aufbewahrt, solange Ihre Akte aktiv ist, und aus Service- und Rechtsgründen noch eine angemessene Zeit danach. Bitten Sie uns um Löschung Ihrer Daten, so tun wir es — vorbehaltlich dokumentarischer Pflichten.',
      },
      rights: {
        h: '6. Ihre Rechte',
        pre: 'Sie können erfragen, was wir über Sie speichern, Korrekturen verlangen oder die Löschung beantragen — schreiben Sie an ',
        post: '. Wir antworten innerhalb einer Arbeitswoche.',
      },
      contact: {
        h: '7. Kontakt',
        label: 'Fragen zu dieser Richtlinie:',
      },
    },
  },

  ja: {
    meta: {
      title: 'プライバシーポリシー',
      description: 'RouteToAbroad が収集するもの（お問い合わせの入力項目のみ）、決して行わないこと（広告、第三者トラッカー）、そしてデータに関するお問い合わせ先。',
    },
    hero: {
      eyebrow: '法的事項',
      title: 'プライバシーポリシー',
      lede: '短いのは、運用が短いからです。お問い合わせに必要な情報だけを収集し、それ以上は何も取りません。',
    },
    updated: '最終更新：2025 年 11 月',
    sections: {
      collect: {
        h: '1. 収集する情報',
        p: '本サイトでお問い合わせやフォームを送信される際、ご入力いただいた項目 — 通常は氏名、メールアドレス、電話番号、およびご共有いただいたメッセージやプログラムの詳細 — を収集します。これらはお問い合わせへのお答えと、ご依頼進行後の案件処理にのみ使用します。',
      },
      never: {
        h: '2. 決して行わないこと',
        p: '本サイトは広告用 Cookie を設定せず、第三者のトラッキングスクリプトも実行しません。マーケターへのデータの販売、貸与、共有は一切行いません。以上です。',
      },
      storage: {
        h: '3. 機能的な保存',
        p: 'ブラウザのローカルストレージにはいくつかの小さな状態が保存されます：ライト/ダークテーマの設定、書類チェックリストの保存された進捗、費用計算ツール・マッチング診断・タイムラインプランナーに入力した値、AI アシスタントとの会話、そしてホームページのイントロをすでにご覧になったことを記憶するフラグ。いずれも端末の外に出ることはありません。',
      },
      forms: {
        h: '4. フォームの処理',
        p: 'お問い合わせフォームは Formspree（Formspree, Inc.）経由で私たちのチームに届きます。同社は当社に代わって、送信内容を当社に届けるためだけに処理を行います。AI アシスタントをご利用の場合、回答を生成するために会話が当社の言語モデル提供元へ送信されます。会話が広告に使われることはありません。',
      },
      retention: {
        h: '5. 保存期間',
        p: 'お問い合わせのやり取りは、案件が有効な間、およびサービス・法的な理由によりその後合理的な期間保存されます。データの削除をご請求いただければ、記録保存義務の範囲内で対応いたします。',
      },
      rights: {
        h: '6. お客様の権利',
        pre: '当社が保有するご自身の情報の開示、訂正、削除をご請求いただけます — 次の宛先までご連絡ください：',
        post: '。1 週間（営業日ベース）以内にご返信します。',
      },
      contact: {
        h: '7. お問い合わせ',
        label: '本ポリシーに関するご質問：',
      },
    },
  },

  pt: {
    meta: {
      title: 'Política de Privacidade',
      description:
        'O que a RouteToAbroad coleta (apenas os campos da consulta), o que nunca fazemos (anúncios, rastreadores de terceiros) e como nos contatar sobre os seus dados.',
    },
    hero: {
      eyebrow: 'Jurídico',
      title: 'Política de Privacidade',
      lede: 'Curta, porque a prática é curta: coletamos o que a sua consulta exige — e nada mais.',
    },
    updated: 'Última atualização: novembro de 2025',
    sections: {
      collect: {
        h: '1. O que coletamos',
        p: 'Quando você envia uma consulta ou formulário neste site, coletamos os campos que você preenche — normalmente nome, e-mail, telefone e a mensagem ou os detalhes do programa que compartilha. Usamos esses dados apenas para responder à sua consulta e, se você seguir adiante, para conduzir o seu processo.',
      },
      never: {
        h: '2. O que nunca fazemos',
        p: 'Este site não instala cookies de publicidade e não executa scripts de rastreamento de terceiros. Não vendemos, alugamos ou compartilhamos os seus dados com agentes de marketing. Ponto.',
      },
      storage: {
        h: '3. Armazenamento funcional',
        p: 'Alguns pequenos estados vivem no armazenamento local do seu navegador: a sua preferência de tema claro/escuro, o progresso salvo na checklist de documentos, os valores que você insere na calculadora de custos, na avaliação de perfil e no planejador de cronograma, a sua conversa com o assistente de IA e um marcador que lembra que você já viu a introdução da página inicial. Nada disso sai do seu dispositivo.',
      },
      forms: {
        h: '4. Processamento de formulários',
        p: 'Os formulários de consulta chegam à nossa equipe por meio do Formspree (Formspree, Inc.), que processa o envio em nosso nome apenas para entregá-lo a nós. Nosso assistente de IA, se você o usar, envia a conversa ao nosso provedor de modelo de linguagem para gerar respostas; as conversas não são usadas para publicidade.',
      },
      retention: {
        h: '5. Conservação',
        p: 'A correspondência de consultas é mantida enquanto o seu processo está ativo e por um período razoável depois, por razões de serviço e jurídicas. Peça-nos a exclusão dos seus dados e a faremos, sem prejuízo das obrigações de guarda de registros.',
      },
      rights: {
        h: '6. Os seus direitos',
        pre: 'Você pode perguntar o que temos sobre você, pedir correções ou pedir a exclusão — escreva para ',
        post: '. Respondemos em uma semana útil.',
      },
      contact: {
        h: '7. Contato',
        label: 'Perguntas sobre esta política:',
      },
    },
  },

  hi: {
    meta: {
      title: 'गोपनीयता नीति',
      description:
        'RouteToAbroad क्या एकत्र करता है (केवल पूछताछ फ़ील्ड), क्या कभी नहीं करता (विज्ञापन, थर्ड-पार्टी ट्रैकर), और अपने डेटा पर बात करने के लिए हमसे कैसे जुड़ें।',
    },
    hero: {
      eyebrow: 'कानूनी',
      title: 'गोपनीयता नीति',
      lede: 'छोटी, क्योंकि प्रथा छोटी है: हम आपकी पूछताछ की आवश्यकता की चीज़ें एकत्र करते हैं — और उससे अधिक कुछ नहीं।',
    },
    updated: 'अंतिम अपडेट: नवंबर 2025',
    sections: {
      collect: {
        h: '1. हम क्या एकत्र करते हैं',
        p: 'जब आप इस साइट पर पूछताछ या फ़ॉर्म भेजते हैं, तो हम आपके भरे हुए फ़ील्ड एकत्र करते हैं — आमतौर पर नाम, ईमेल, फ़ोन नंबर, और आपका संदेश या प्रोग्राम विवरण। हम इनका उपयोग केवल आपकी पूछताछ का उत्तर देने और, आगे बढ़ने पर, आपकी फ़ाइल चलाने के लिए करते हैं।',
      },
      never: {
        h: '2. हम कभी क्या नहीं करते',
        p: 'यह साइट विज्ञापन कुकीज़ नहीं लगाती और तीसरे पक्ष के ट्रैकिंग स्क्रिप्ट नहीं चलाती। हम मार्केटरों के साथ आपका डेटा नहीं बेचते, न किराए पर देते हैं, न साझा करते हैं। बस।',
      },
      storage: {
        h: '3. कार्यात्मक भंडारण',
        p: 'आपके ब्राउज़र के लोकल स्टोरेज में कुछ छोटी स्थितियाँ रहती हैं: आपकी लाइट/डार्क थीम पसंद, दस्तावेज़ चेकलिस्ट टूल में आपकी सहेजी गई प्रगति, लागत कैलकुलेटर, फ़िट जाँच और समय-योजना टूल में डाले गए मान, AI सहायक से आपकी बातचीत, और एक चिह्न जो याद रखता है कि आपने होमपेज इंट्रो देख ली है। इनमें से कुछ भी आपके डिवाइस से बाहर नहीं जाता।',
      },
      forms: {
        h: '4. फ़ॉर्म प्रोसेसिंग',
        p: 'पूछताछ फ़ॉर्म Formspree (Formspree, Inc.) के ज़रिए हमारी टीम तक पहुँचते हैं, जो हमारी ओर से प्रस्तुति केवल हम तक पहुँचाने के लिए संसाधित करता है। हमारा AI सहायक, यदि आप उसका उपयोग करते हैं, उत्तर बनाने के लिए बातचीत हमारे भाषा-मॉडल प्रदाता को भेजता है; बातचीत का उपयोग विज्ञापन के लिए नहीं होता।',
      },
      retention: {
        h: '5. प्रतिधारण',
        p: 'पूछताछ का पत्राचार तब तक रखा जाता है जब तक आपकी फ़ाइल सक्रिय है, और सेवा व कानूनी कारणों से उसके बाद भी एक उचित अवधि तक। अपना डेटा मिटाने को कहें और हम कर देंगे — अभिलेख-रखर्खाव दायित्वों के अधीन।',
      },
      rights: {
        h: '6. आपके अधिकार',
        pre: 'आप पूछ सकते हैं कि हमारे पास आपका क्या है, सुधार माँग सकते हैं या मिटाने का अनुरोध कर सकते हैं — लिखें ',
        post: ' पर। हम एक कार्य सप्ताह में उत्तर देते हैं।',
      },
      contact: {
        h: '7. संपर्क',
        label: 'इस नीति पर प्रश्न:',
      },
    },
  },
};
