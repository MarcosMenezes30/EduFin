export interface FinancialSummary {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  savingsRate: number;
  largestExpenseCategory: string;
  expenseCategoryTotals: Record<string, number>;
  financialHealthStatus: "excellent" | "healthy" | "attention" | "critical";
}
