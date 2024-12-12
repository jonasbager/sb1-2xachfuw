import { type Job } from '@/types';

export const stages = [
  {
    title: 'Not Started',
    jobs: [
      {
        id: '1',
        company: 'Tech Innovators',
        position: 'Full Stack Engineer',
        deadline: new Date('2024-04-20'),
        matchRate: 92,
        connections: 5,
        requiredDocs: ['cv', 'cover_letter', 'recommendations'] as const,
      },
    ],
  },
  {
    title: 'In Progress',
    jobs: [
      {
        id: '2',
        company: 'Example Corp',
        position: 'Senior Frontend Developer',
        deadline: new Date('2024-04-15'),
        matchRate: 85,
        connections: 3,
        requiredDocs: ['cv', 'cover_letter'] as const,
      },
    ],
  },
  {
    title: 'Submitted',
    jobs: [
      {
        id: '3',
        company: 'Future Systems',
        position: 'React Developer',
        deadline: new Date('2024-04-10'),
        matchRate: 78,
        connections: 2,
        requiredDocs: ['cv'] as const,
      },
    ],
  },
  {
    title: 'Interview',
    jobs: [],
  },
] as const;