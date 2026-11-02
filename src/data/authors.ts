/**
 * Authors for blog posts and guides. Only verified people get author pages.
 * Student contributors are quoted with their programme, not staff titles.
 */
export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
  linkedin?: string;
  verified: boolean;
}

export const AUTHORS: Record<string, Author> = {
  minhaj: {
    id: 'minhaj',
    name: 'Minhaj Al Shukoor',
    role: 'Founder & CEO',
    bio: 'Fifteen years across India–China logistics and trade operations. Minhaj leads RouteToAbroad from the New Delhi office and keeps the Guangzhou desk honest about what can actually be delivered.',
    initials: 'MS',
    linkedin: 'https://www.linkedin.com/in/minhajalshukoor',
    verified: true,
  },
  vijeesh: {
    id: 'vijeesh',
    name: 'Vijeesh Vijayan',
    role: 'Co-founder & Director, Education',
    bio: 'Owns academic matching and student files — which university, which programme, which documents, and what happens after landing. Vijeesh has walked hundreds of students from first enquiry to campus registration.',
    initials: 'VV',
    linkedin: 'https://www.linkedin.com/in/vijeeshvijayan',
    verified: true,
  },
  ananya: {
    id: 'ananya',
    name: 'Ananya Krishnan',
    role: 'MBBS, Peking University (Class of 2024)',
    bio: 'Wrote her CSC scholarship diary for RouteToAbroad while completing clinical rotations in Beijing.',
    initials: 'AK',
    verified: false,
  },
  rohan: {
    id: 'rohan',
    name: 'Rohan Sharma',
    role: 'B.Tech CS, Beijing Jiaotong University (Class of 2025)',
    bio: 'Contributor on student life in Beijing — food, transport, and the things orientation week never covers.',
    initials: 'RS',
    verified: false,
  },
};
