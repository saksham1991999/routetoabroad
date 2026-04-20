import ProgrammaticPage from './ProgrammaticPage';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  FileText,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

const pageData = {
  title: 'Complete Guide to MBBS in China 2026 | Fees, Scholarships & Universities | RouteToAbroad',
  description: 'Everything you need to know about studying MBBS in China. Complete guide covering top universities, scholarship options, visa process, fees, and career prospects for Indian students.',
  keywords: 'mbbs in china, study medicine in china, china mbbs guide, mbbs fees china, csc scholarship medicine, mbbs abroad, china medical university',
  heroTitle: 'Your Complete Guide to MBBS in China',
  heroDescription: 'Discover world-class medical education in China. Our comprehensive guide covers everything from university selection and scholarship applications to visa processing and career pathways.',
  heroImage: '/assets/images/guide_mbbs_hero.webp',
  heroImageAlt: 'Modern university campus building reflected in water',
  canonical: 'https://routetoabroad.com/education/mbbs-in-china-complete-guide',
  breadcrumbItems: [
    { name: 'Education', url: '/education' },
    { name: 'MBBS in China Guide', url: '/education/mbbs-in-china-complete-guide' },
  ],
  features: [
    {
      icon: GraduationCap,
      title: 'WHO-Recognized Universities',
      description: 'All our partner universities are listed in the WHO World Directory of Medical Schools and recognized by medical councils worldwide.',
    },
    {
      icon: Award,
      title: 'CSC Scholarships Available',
      description: 'Full tuition coverage with monthly stipends through the China Scholarship Council program for eligible candidates.',
    },
    {
      icon: BookOpen,
      title: 'English-Taught Curriculum',
      description: 'MBBS programs taught entirely in English with clinical training in Mandarin during later years.',
    },
    {
      icon: ShieldCheck,
      title: '100% Visa Success Rate',
      description: 'Our experienced team ensures hassle-free visa processing with documented success for 500+ students.',
    },
    {
      icon: Users,
      title: 'On-Ground Support',
      description: 'Airport pickup, accommodation assistance, and ongoing student support throughout your studies.',
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'End-to-end application support including transcript evaluation, translations, and embassy filing.',
    },
  ],
  stats: [
    { value: '15+', label: 'Partner Universities' },
    { value: '500+', label: 'Students Placed' },
    { value: '100%', label: 'Visa Success' },
    { value: '$2M+', label: 'Scholarships Secured' },
  ],
  faqs: [
    {
      question: 'Is MBBS in China recognized in India?',
      answer: 'Yes, MBBS degrees from Chinese universities are recognized in India provided the university is listed in the WHO World Directory of Medical Schools and approved by the National Medical Commission (NMC). All universities we partner with meet these criteria.',
    },
    {
      question: 'What is the total cost of MBBS in China?',
      answer: 'Total costs vary by university but typically range from $3,000 to $8,000 per year for tuition, plus $1,000-2,000 for accommodation. With CSC scholarships, tuition can be fully covered along with a monthly stipend of $200-300.',
    },
    {
      question: 'What is the duration of MBBS in China?',
      answer: 'The MBBS program in China is typically 6 years, including 5 years of classroom and clinical training plus 1 year of internship. The internship can be completed in China or in your home country.',
    },
    {
      question: 'Is knowing Mandarin required for MBBS in China?',
      answer: 'For the first few years, most programs are taught in English. However, you will need to pass HSK 4 (Chinese language proficiency test) before starting clinical rotations to communicate with patients.',
    },
    {
      question: 'Can I get a scholarship for MBBS in China?',
      answer: 'Yes, the China Scholarship Council (CSC) offers full scholarships covering tuition, accommodation, and monthly stipends. University-specific scholarships are also available. Our team helps identify the best scholarship opportunities for your profile.',
    },
  ],
  relatedPages: [
    { title: 'CSC Scholarship Guide', href: '/education/csc-scholarship-guide-2026', description: 'Complete step-by-step guide to applying for Chinese Government Scholarships.' },
    { title: 'China Student Visa Guide', href: '/education/china-student-visa-guide', description: 'Everything about X1 and X2 visa categories for students.' },
    { title: 'Top Universities in China', href: '/education', description: 'Explore our partner universities and their programs.' },
  ],
  ctaButtons: [
    { label: 'Apply for MBBS', href: '/contact', icon: MessageSquare },
    { label: 'Download Guide', href: '/contact', icon: FileText },
  ],
  type: 'education' as const,
};

export default function MBBSInChinaGuide() {
  return <ProgrammaticPage {...pageData} />;
}
