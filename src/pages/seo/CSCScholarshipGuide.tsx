import ProgrammaticPage from './ProgrammaticPage';
import {
  FileText,
  Award,
  Users,
  Globe,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

const pageData = {
  title: 'CSC Scholarship Guide 2026 | Complete Application Process | RouteToAbroad',
  description: 'Step-by-step guide to applying for the China Scholarship Council (CSC) scholarship. Learn about eligibility, required documents, deadlines, and tips for successful applications.',
  keywords: 'csc scholarship, china scholarship council, chinese government scholarship, study in china free, scholarship for mbbs in china, csc application',
  heroTitle: 'CSC Scholarship Guide 2026',
  heroDescription: 'Your comprehensive roadmap to securing a fully-funded scholarship for studying in China. Expert guidance on eligibility, documentation, and application strategy.',
  canonical: 'https://routetoabroad.com/education/csc-scholarship-guide-2026',
  breadcrumbItems: [
    { name: 'Education', url: '/education' },
    { name: 'CSC Scholarship Guide', url: '/education/csc-scholarship-guide-2026' },
  ],
  features: [
    {
      icon: Award,
      title: 'Full Tuition Coverage',
      description: 'Complete waiver of tuition fees for the entire program duration.',
    },
    {
      icon: Users,
      title: 'Monthly Stipend',
      description: 'Monthly allowance of $200-300 for living expenses.',
    },
    {
      icon: Globe,
      title: 'Accommodation Support',
      description: 'On-campus housing provided or accommodation allowance included.',
    },
    {
      icon: ShieldCheck,
      title: 'Medical Insurance',
      description: 'Comprehensive health insurance during your study period.',
    },
    {
      icon: FileText,
      title: 'Streamlined Process',
      description: 'Our team handles documentation and portal submissions.',
    },
    {
      icon: CheckCircle2,
      title: 'High Success Rate',
      description: '98% success rate for clients who follow our guidance.',
    },
  ],
  stats: [
    { value: '$2M+', label: 'Scholarships Secured' },
    { value: '150+', label: 'Successful Applications' },
    { value: '98%', label: 'Success Rate' },
    { value: '6-8', label: 'Weeks Processing' },
  ],
  faqs: [
    {
      question: 'What is the CSC scholarship?',
      answer: 'The China Scholarship Council (CSC) scholarship is a prestigious fully-funded scholarship program for international students studying at Chinese universities. It covers tuition, accommodation, living allowance, and medical insurance.',
    },
    {
      question: 'Who is eligible for CSC scholarship?',
      answer: 'Eligibility varies by program but generally requires: citizenship of a country other than China, good health, academic excellence (typically 3.0+ GPA), and acceptance from a CSC-participating university. Some programs require HSK scores.',
    },
    {
      question: 'How do I apply for CSC scholarship?',
      answer: 'The process involves: 1) Apply to a Chinese university and receive admission, 2) Apply for CSC scholarship through their online portal, 3) Submit required documents including study plan and recommendations, 4) Wait for results (typically 6-8 weeks).',
    },
    {
      question: 'What documents are required for CSC application?',
      answer: 'Key documents include: passport, academic transcripts, degree certificates, study plan (800+ words), two recommendation letters, physical examination form, and language proficiency certificates (HSK for Chinese-taught programs or IELTS/TOEFL for English-taught).',
    },
    {
      question: 'What is the difference between Type A and Type B CSC scholarships?',
      answer: 'Type A is a government-to-government scholarship where your country\'s Ministry of Education nominates you. Type B is a university-direct scholarship where you apply directly to the Chinese university. Type B is more accessible and has more available slots.',
    },
  ],
  relatedPages: [
    { title: 'MBBS in China Guide', href: '/education/mbbs-in-china-complete-guide', description: 'Complete guide to pursuing MBBS in Chinese universities.' },
    { title: 'Study in China from India', href: '/education/study-in-china-from-india', description: 'Specially designed guidance for Indian students.' },
    { title: 'China Student Visa Guide', href: '/education/china-student-visa-guide', description: 'Complete visa application process explained.' },
  ],
  ctaButtons: [
    { label: 'Check Eligibility', href: '/contact', icon: CheckCircle2 },
    { label: 'Start Application', href: '/contact', icon: MessageSquare },
  ],
  type: 'education' as const,
};

export default function CSCScholarshipGuide() {
  return <ProgrammaticPage {...pageData} />;
}
