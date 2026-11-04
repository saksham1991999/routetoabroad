/**
 * 404 page copy — typed per-locale dictionary, same pattern as the other
 * page dictionaries. The 404 is one statically built page serving every
 * missing URL, so the locale is resolved at runtime from the requested
 * URL's prefix by an inline script in src/pages/404.astro; the English
 * strings double as the crawler-visible markup defaults.
 */
import type { Locale } from '../../lib/i18n';

export interface NotFoundStrings {
  title: string;
  heading: string;
  sub: string;
  goHome: string;
  fitCheck: string;
  hintPre: string;
  education: string;
  tourism: string;
  trade: string;
  guides: string;
}

export const NOT_FOUND: Record<Locale, NotFoundStrings> = {
  en: {
    title: 'Page Not Found',
    heading: 'That page is not on this route.',
    sub: 'The link is old, mistyped, or the page has moved. Nothing lost.',
    goHome: 'Go home',
    fitCheck: 'Start the fit check',
    hintPre: 'Or try: ',
    education: 'Education',
    tourism: 'Tourism',
    trade: 'Trade',
    guides: 'Guides',
  },
  zh: {
    title: '页面不存在',
    heading: '这个页面不在这条路线上。',
    sub: '链接已过期、输入有误，或页面已迁移。没有丢失任何内容。',
    goHome: '返回首页',
    fitCheck: '开始适配检查',
    hintPre: '或者试试：',
    education: '留学',
    tourism: '旅游',
    trade: '贸易',
    guides: '指南',
  },
  fr: {
    title: 'Page introuvable',
    heading: 'Cette page n’est pas sur cet itinéraire.',
    sub: 'Le lien est ancien, mal saisi, ou la page a été déplacée. Rien n’est perdu.',
    goHome: 'Retour à l’accueil',
    fitCheck: 'Commencer le test',
    hintPre: 'Ou essayez : ',
    education: 'Études',
    tourism: 'Tourisme',
    trade: 'Commerce',
    guides: 'Guides',
  },
  ar: {
    title: 'الصفحة غير موجودة',
    heading: 'هذه الصفحة ليست على هذا المسار.',
    sub: 'الرابط قديم أو مكتوب بشكل خاطئ أو تم نقل الصفحة. لم يُفقد شيء.',
    goHome: 'العودة للرئيسية',
    fitCheck: 'ابدأ فحص التوافق',
    hintPre: 'أو جرّب: ',
    education: 'التعليم',
    tourism: 'السياحة',
    trade: 'التجارة',
    guides: 'الدلائل',
  },
  es: {
    title: 'Página no encontrada',
    heading: 'Esa página no está en esta ruta.',
    sub: 'El enlace es antiguo, está mal escrito o la página se ha mudado. No se ha perdido nada.',
    goHome: 'Ir al inicio',
    fitCheck: 'Empezar el fit check',
    hintPre: 'O prueba: ',
    education: 'Educación',
    tourism: 'Turismo',
    trade: 'Comercio',
    guides: 'Guías',
  },

  de: {
    title: 'Seite nicht gefunden',
    heading: 'Diese Seite ist nicht auf dieser Route.',
    sub: 'Der Link ist alt, falsch getippt oder die Seite ist umgezogen. Nichts verloren.',
    goHome: 'Zur Startseite',
    fitCheck: 'Eignungscheck starten',
    hintPre: 'Oder versuchen Sie: ',
    education: 'Bildung',
    tourism: 'Tourismus',
    trade: 'Handel',
    guides: 'Guides',
  },

  ja: {
    title: 'ページが見つかりません',
    heading: 'そのページはこのルート上にありません。',
    sub: 'リンクが古い、入力ミス、またはページが移動しました。失ったものはありません。',
    goHome: 'ホームへ戻る',
    fitCheck: 'マッチング診断を始める',
    hintPre: 'またはこちら：',
    education: '教育',
    tourism: '観光',
    trade: '貿易',
    guides: 'ガイド',
  },

  pt: {
    title: 'Página não encontrada',
    heading: 'Essa página não está nesta rota.',
    sub: 'O link está antigo, foi digitado errado ou a página mudou de lugar. Nada foi perdido.',
    goHome: 'Ir para o início',
    fitCheck: 'Iniciar avaliação de perfil',
    hintPre: 'Ou tente: ',
    education: 'Educação',
    tourism: 'Turismo',
    trade: 'Comércio',
    guides: 'Guias',
  },

  hi: {
    title: 'पृष्ठ नहीं मिला',
    heading: 'वह पृष्ठ इस रूट पर नहीं है।',
    sub: 'लिंक पुराना है, ग़लत टाइप हुआ है, या पृष्ठ हट गया है। कुछ भी खोया नहीं।',
    goHome: 'मुखपृष्ठ पर जाएँ',
    fitCheck: 'फ़िट जाँच शुरू करें',
    hintPre: 'या आज़माएँ: ',
    education: 'शिक्षा',
    tourism: 'पर्यटन',
    trade: 'व्यापार',
    guides: 'गाइड',
  },
};
