export interface Mentee {
  id: number;
  name: string;
  program: string;
  progress: number;
  nextSession: string;
  status: 'Active' | 'Graduating' | 'Inactive';
}