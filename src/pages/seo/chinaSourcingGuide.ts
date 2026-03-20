import {
  Briefcase,
  Globe,
  Truck,
  CheckCircle2,
  FileText,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

const pageData = {
  title: 'China Sourcing Guide 2026 | Find & Verify Suppliers | RouteToAbroad',
  description: 'Expert guide to sourcing products from China. Learn how to find verified manufacturers, verify factory credentials, negotiate prices, and manage quality control for successful importing.',
  keywords: 'sourcing from china, china supplier verification, find factory in china, china manufacturing, OEM china, private label china',
  heroTitle: 'China Sourcing Guide 2026',
  heroDescription: 'Your definitive resource for finding, vetting, and working with Chinese manufacturers. From initial search to final delivery, we guide you through every step.',
  canonical: 'https://routetoabroad.com/trade/china-sourcing-guide',
  breadcrumbItems: [
    { name: 'Trade', url: '/trade' },
    { name: 'China Sourcing Guide', url: '/trade/china-sourcing-guide' },
  ],
  features: [
    {
      icon: Globe,
      title: 'Verified Factory Network',
      description: 'Access to 5000+ pre-verified manufacturers across all major industrial zones.',
    },
    {
      icon: ShieldCheck,
      title: 'Factory Audits',
      description: 'Physical verification of factory existence, capacity, and ethical compliance.',
    },
    {
      icon: CheckCircle2,
      title: 'Sample Verification',
      description: 'We receive, test, and validate samples before you commit to bulk orders.',
    },
    {
      icon: FileText,
      title: 'Contract Protection',
      description: 'Bilingual contracts with clear specifications, payment terms, and penalties.',
    },
    {
      icon: Truck,
      title: 'End-to-End Logistics',
      description: 'From factory floor to your warehouse with real-time tracking.',
    },
    {
      icon: Briefcase,
      title: 'Negotiation Support',
      description: 'Expert bilingual negotiators ensure fair pricing and terms.',
    },
  ],
  stats: [
    { value: '5000+', label: 'Verified Suppliers' },
    { value: '24hr', label: 'Response Time' },
    { value: '100%', label: 'Factory Verified' },
    { value: '15+', label: 'Industrial Zones' },
  ],
  faqs: [
    {
      question: 'How do I find reliable suppliers in China?',
      answer: 'Avoid relying solely on Alibaba or online directories. We perform on-ground factory visits to verify actual manufacturing capability, check business licenses, and assess production capacity before making any introductions.',
    },
    {
      question: 'What is the typical MOQ (Minimum Order Quantity)?',
      answer: 'MOQs vary by industry: electronics typically start at 500-1000 units, textiles at 500-1000 pieces, and machinery can be as low as 1 unit. We specialize in negotiating flexible MOQs for growing businesses.',
    },
    {
      question: 'How do you protect against fraud?',
      answer: 'Our verification process includes: business license verification, factory visit reports with photos and videos, third-party credit checks, staged payment structure (never 100% advance), and escrow services for first-time engagements.',
    },
    {
      question: 'Can you help with OEM and private label products?',
      answer: 'Absolutely. We help you find factories that specialize in OEM and white-label production, manage the entire customization process including packaging design, and ensure quality consistency across batches.',
    },
    {
      question: 'What are the typical payment terms?',
      answer: 'Standard terms are 30% deposit via T/T and 70% against copy of Bill of Lading. For first-time engagements, we recommend using escrow or shorter payment cycles. LC arrangements available for established enterprise clients.',
    },
  ],
  relatedPages: [
    { title: 'India-China Trade Guide', href: '/trade/india-china-trade-guide-2026', description: 'Comprehensive guide to India-China trade operations.' },
    { title: 'Factory Audit Guide', href: '/trade/factory-audit-guide-china', description: 'How to audit and verify factories in China.' },
    { title: 'Customs Clearance Guide', href: '/trade/india-china-customs-clearance-guide', description: 'Navigate Indian customs for China imports.' },
  ],
  ctaButtons: [
    { label: 'Start Sourcing', href: '/contact', icon: MessageSquare },
    { label: 'Get Quote', href: '/contact', icon: FileText },
  ],
  type: 'trade' as const,
};

export default pageData;
