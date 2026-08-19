// Edit this file to update all portfolio content in one place.

export const profile = {
  name: 'Alex Antony',
  role: 'Software Engineer & AI/ML Developer',
  tagline: 'Building full-stack apps and AI-powered tools, end to end.',
  intro:
    'MCA graduate who likes turning ideas into working products — from LLM-based interview coaches to real-time traffic detection systems. Currently exploring the intersection of applied AI and full-stack development.',
  resumeUrl: '/resume.pdf',
  email: 'alexantony013@gmail.com',
  github: 'https://github.com/alex0077-git',
  linkedin: 'https://www.linkedin.com/in/alex-antony-9586173b1',
}

export const about = {
  bio: [
    'I’m an MCA graduate from College of Engineering, Chengannur (APJ Abdul Kalam Technological University), with a B.Sc. in Mathematics.',
    'I enjoy building hands-on projects across full-stack web development and applied AI — currently exploring LLM tooling, computer vision, and shipping products end-to-end rather than just studying theory.',
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'SQL'],
    },
    {
      category: 'Frameworks',
      items: ['React.js', 'React Native', 'Next.js', 'FastAPI', 'Flask', 'Django', 'Tailwind CSS'],
    },
    {
      category: 'AI / ML',
      items: ['LangChain', 'Groq API (LLaMA 3.3 70B)', 'YOLOv8'],
    },
    {
      category: 'Tools',
      items: ['Git/GitHub', 'Docker', 'MySQL', 'REST APIs'],
    },
  ],
}

export type Project = {
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  featured?: boolean
}

  export const projects: Project[] = [
  {
    name: 'Second Brain',
    description:
      'Bilingual (English/Malayalam) AI-powered learning app that explains any technical topic with a real-world analogy, then uses a spaced-repetition engine and AI-generated self-test questions to help you actually retain it. Built with a FastAPI + RAG (ChromaDB) backend and a React Native (Expo) frontend.',
    tech: ['FastAPI', 'React Native', 'Expo', 'Groq API', 'ChromaDB', 'RAG'],
    github: 'https://github.com/alex0077-git/Second-Brain',
    featured: true,
  },
  {
    name: 'AI Interview Coach',
    description:
      'LLM-powered mock interview platform that gives real-time feedback on answers using LangChain and Groq’s LLaMA 3.3 70B, with a FastAPI backend and React frontend.',
    tech: ['LangChain', 'Groq API', 'FastAPI', 'React.js'],
    github: 'https://github.com/alex0077-git/Ai-Interview-Coach',
    featured: true,
  },
  {
    name: 'Smart Traffic Management System',
    description:
      'Real-time traffic detection and management system using YOLOv8 for vehicle detection, with a Flask backend and React dashboard. Built as my MCA final-year project.',
    tech: ['YOLOv8', 'Flask', 'React.js'],
    github: 'https://github.com/alex0077-git/Smart-Traffic-Management',
    featured: true,
  },
  {
    name: 'AutoCare — Vehicle Service Management System',
    description:
      'Full-stack workshop management platform connecting customers, service managers, mechanics, and admins. Customers book service slots, track vehicles, and view service history, while managers assign mechanics and admins oversee pricing, bookings, and complaints through role-based dashboards.',
    tech: ['Django', 'Python', 'Bootstrap 5', 'SQLite'],
    github: 'https://github.com/alex0077-git/Autocare',
  },
  {
    name: 'GameHub',
    description:
      'React Native mobile app built as a hub for mini-games, with a home screen and game catalog. Currently features "Mind Reader" — an interactive card-trick game that guesses a number the user is thinking of using a binary elimination algorithm.',
    tech: ['React Native', 'Expo'],
    github: 'https://github.com/alex0077-git/GameHubApp',
  },
  
]


export type TimelineItem = {
  title: string
  place: string
  period: string
  detail: string
}

export const timeline: TimelineItem[] = [
  {
    title: 'MCA — Master of Computer Applications',
    place: 'College of Engineering, Chengannur (APJ Abdul Kalam Technological University)',
    period: '2024 — 2026 · Graduated',
    detail:
      'Final-year project: real-time traffic management system using YOLOv8. Built AI and full-stack projects alongside coursework.',
  },
  {
    title: 'B.Sc. Mathematics',
    place: 'Undergraduate',
    period: 'Graduated',
    detail:
      'Foundational background in mathematics, carried into applied AI and machine learning work.',
  },
]
