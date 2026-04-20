import ProgrammaticPage from './ProgrammaticPage';
import {
  Globe,
  Building2,
  Truck,
  CheckCircle2,
  FileText,
  Users,
  MessageSquare,
} from 'lucide-react';

const pageData = {
  title: 'India-China Trade Guide 2026 | Complete Import-Export Reference | RouteToAbroad',
  description: 'Comprehensive guide to India-China bilateral trade in 2026. Learn about sourcing strategies, customs procedures, quality control, logistics, and regulatory compliance for successful trade operations.',
  keywords: 'india china trade, india china import export, china sourcing guide, india china trade 2026, china supplier, import from china guide',
  heroTitle: 'India-China Trade Guide 2026',
  heroDescription: 'Navigate the $100 billion bilateral trade corridor with confidence. Expert insights on sourcing, compliance, logistics, and building sustainable supplier relationships.',
  heroImage: '/assets/images/guide_trade_hero.webp',
  heroImageAlt: 'Container terminal and logistics hub at dusk',
  canonical: 'https://routetoabroad.com/trade/india-china-trade-guide-2026',
  breadcrumbItems: [
    { name: 'Trade', url: '/trade' },
    { name: 'India-China Trade Guide', url: '/trade/india-china-trade-guide-2026' },
  ],
  features: [
    {
      icon: Globe,
      title: 'Regulatory Compliance',
      description: 'Navigate FDI rules, import restrictions, and customs regulations with expert guidance.',
    },
    {
      icon: Building2,
      title: 'Factory Verification',
      description: 'On-ground team performs mandatory factory audits before any commitment.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Control',
      description: 'AQL inspection protocols at production milestones ensure zero defects.',
    },
    {
      icon: Truck,
      title: 'Logistics Management',
      description: 'Sea freight (18-22 days) and air cargo (3-5 days) with real-time tracking.',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Complete customs documentation, HS code classification, and compliance filing.',
    },
    {
      icon: Users,
      title: 'Bilingual Communication',
      description: 'English and Mandarin-speaking team eliminates language barriers.',
    },
  ],
  stats: [
    { value: '$100B+', label: 'Bilateral Trade 2024' },
    { value: '5000+', label: 'Verified Suppliers' },
    { value: '500+', label: 'Shipments Managed' },
    { value: '18-22', label: 'Days Sea Freight' },
  ],
  faqs: [
    {
      question: 'What products can be imported from China to India?',
      answer: 'Major import categories include electronics, machinery, auto parts, textiles, chemicals, and consumer goods. However, some items require BIS certification, WPC approval, or face import restrictions. Our team helps navigate these requirements.',
    },
    {
      question: 'What are the payment terms for India-China trade?',
      answer: 'Standard terms are 30% deposit via T/T and 70% against Bill of Lading. For established relationships, LC (Letter of Credit) arrangements provide additional protection. We also advise on escrow services for first-time supplier engagements.',
    },
    {
      question: 'How long does shipping from China to India take?',
      answer: 'Sea freight from Chinese ports (Guangzhou, Shanghai, Ningbo) to Indian ports (Mundra, JNPT, Kolkata) typically takes 18-25 days. Air freight is 3-7 days but costs 5-8x more.',
    },
    {
      question: 'What certifications are required for importing electronics from China?',
      answer: 'Electronics typically require BIS certification, WPC (Wireless Planning & Coordination) approval for wireless devices, and sometimes POM (Pressing Matters) certification. Our compliance team handles all regulatory filings.',
    },
    {
      question: 'How do you ensure quality when sourcing from China?',
      answer: 'We implement a multi-stage quality control process: factory audit before commitment, AQL inspections at 20% and 80% production completion, pre-shipment inspection, and optional container loading supervision.',
    },
  ],
  relatedPages: [
    { title: 'China Sourcing Guide', href: '/trade/china-sourcing-guide', description: 'Step-by-step guide to sourcing from Chinese suppliers.' },
    { title: 'Factory Audit Guide', href: '/trade/factory-audit-guide-china', description: 'How to verify and audit factories in China.' },
    { title: 'Trade FAQ', href: '/trade/faq', description: 'Common questions about India-China trade.' },
  ],
  ctaButtons: [
    { label: 'Start Trade Inquiry', href: '/contact', icon: MessageSquare },
    { label: 'View Service Fees', href: '/trade', icon: FileText },
  ],
  type: 'trade' as const,
};

export default function IndiaChinaTradeGuide() {
  return <ProgrammaticPage {...pageData} />;
}
