export interface SummaryCardViewModel {
  label: string;
  value: string;
  helper: string;
  tone: "green" | "yellow" | "blue" | "red";
}

export interface CashFlowCategoryViewModel {
  category: string;
  amount: string;
  share: number;
  rawAmount: number;
  color: string;
}

export interface GoalViewModel {
  title: string;
  progress: number;
  currentAmount: string;
  targetAmount: string;
  dueDate: string;
}

export interface InsightViewModel {
  title: string;
  value: string;
  description: string;
  tone: "green" | "yellow" | "blue";
}

export interface ExpenseViewModel {
  title: string;
  category: string;
  amount: string;
  date: string;
}

export interface EducationCardViewModel {
  title: string;
  category: string;
  readingTime: string;
  takeaway: string;
}

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
  chatbotMessages: ChatMessageViewModel[];
  attentionMessage: string;
}
