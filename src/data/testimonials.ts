export type TestimonialCategory = 'education' | 'tourism' | 'trade';

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  category: TestimonialCategory;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ananya',
    quote: "RouteToAbroad didn't just find me a university; they found me a future. The scholarship coverage for my MBBS at Peking University was seamless, and the on-ground support made China feel like home.",
    name: 'Ananya Krishnan',
    role: 'MBBS, Peking University (Class of 2024)',
    category: 'education',
    image: '/assets/images/testimonial_ananya.jpg',
  },
  {
    id: 'rohan',
    quote: "I was skeptical about studying engineering abroad, but the team at RouteToAbroad walked me through every step — from university shortlisting to settling into Beijing. I secured a CSC scholarship I didn't even know I qualified for.",
    name: 'Rohan Sharma',
    role: 'B.Tech Computer Science, BJTU Beijing (Class of 2025)',
    category: 'education',
    image: '/assets/images/student_1.svg',
  },
  {
    id: 'priya',
    quote: "Our group tour to Shanghai and Beijing was nothing short of extraordinary. Every detail — hotels, guides, itinerary — was curated perfectly. We felt taken care of at every step, even with dietary preferences handled without a single hiccup.",
    name: 'Priya Mehta',
    role: 'Educational Group Tour, Shanghai & Beijing (2024)',
    category: 'tourism',
    image: '/assets/images/student_3.svg',
  },
  {
    id: 'meera',
    quote: "As a working professional pursuing an MBA at Fudan University, I needed an advisor who understood the academic and cultural transition. RouteToAbroad was that partner — they handled everything from documentation to accommodation search.",
    name: 'Meera Nair',
    role: 'MBA, Fudan University (Class of 2025)',
    category: 'education',
    image: '/assets/images/student_2.svg',
  },
  {
    id: 'arjun',
    quote: "Sourcing electronics components from China was always a headache — until we engaged RouteToAbroad's trade team. They verified three factories, negotiated pricing, and managed our first FCL shipment end-to-end. Our supply chain has never been more reliable.",
    name: 'Arjun Patel',
    role: 'Founder, Apex Components India — Trade Client (2024)',
    category: 'trade',
    image: '/assets/images/student_4.svg',
  },
];
