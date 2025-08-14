export interface InterviewSection {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string;
}

export interface InterviewSectionsData {
  interviewSections: InterviewSection[];
}
