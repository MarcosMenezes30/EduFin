export interface TutorialContent {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  takeaway: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  checklist: string[];
  nextStep: string;
}
