export interface Job {
  id: string;
  company: string;
  position: string;
  deadline: Date;
  matchRate: number;
  connections: number;
  requiredDocs: Array<'cv' | 'cover_letter' | 'recommendations'>;
}