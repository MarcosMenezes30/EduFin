import type {
  DashboardFilterOptions,
  DashboardQuery,
} from "../../domain/use-cases/GetDashboardData";

export interface SummaryCardViewModel {
  id: string;
  label: string;
  value: string;
  helper: string;
  tone: "green" | "yellow" | "blue" | "red";
}

export interface CashFlowCategoryViewModel {
  id: string;
  category: string;
  amount: string;
  share: number;
  rawAmount: number;
  color: string;
}

export interface GoalViewModel {
  id: string;
  title: string;
  progress: number;
  currentAmount: string;
  targetAmount: string;
  dueDate: string;
  status: "on-track" | "completed" | "attention";
  monthlyPace: string;
}

export interface InsightViewModel {
  id: string;
  title: string;
  value: string;
  description: string;
  tone: "green" | "yellow" | "blue";
}

export interface ExpenseViewModel {
  id: string;
  title: string;
  category: string;
  amount: string;
  date: string;
}

export interface LearningContentViewModel {
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

export type EducationCardViewModel = LearningContentViewModel;
export type TutorialCardViewModel = LearningContentViewModel;

export interface ChatMessageViewModel {
  sender: "assistant" | "user";
  text: string;
}

export interface DashboardViewModel {
  summaryCards: SummaryCardViewModel[];
  cashFlowCategories: CashFlowCategoryViewModel[];
  goals: GoalViewModel[];
  insights: InsightViewModel[];
  topExpenses: ExpenseViewModel[];
  educationCards: EducationCardViewModel[];
  tutorialCards: TutorialCardViewModel[];
  chatbotMessages: ChatMessageViewModel[];
  attentionMessage: string;
  financialHealthLabel: string;
  emptyStateMessage: string | null;
  query: DashboardQuery;
  filterOptions: DashboardFilterOptions;
  periodLabel: string;
  periodDescription: string;
  activeFiltersDescription: string;
}
