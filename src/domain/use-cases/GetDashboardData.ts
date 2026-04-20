import type { EducationContent } from "../entities/EducationContent";
import type { FinancialGoal } from "../entities/FinancialGoal";
import type { FinancialSummary } from "../entities/FinancialSummary";
import type { Transaction } from "../entities/Transaction";
import type { FinancialDataRepository } from "../repositories/FinancialDataRepository";
import { FinancialHealthCalculator } from "../services/FinancialHealthCalculator";

export interface DashboardData {
  transactions: Transaction[];
  goals: FinancialGoal[];
  contents: EducationContent[];
  summary: FinancialSummary;
}

export class GetDashboardData {
  constructor(
    private readonly repository: FinancialDataRepository,
    private readonly calculator: FinancialHealthCalculator,
  ) {}

  async execute(): Promise<DashboardData> {
    const [transactions, goals, contents] = await Promise.all([
      this.repository.getTransactions(),
      this.repository.getGoals(),
      this.repository.getEducationContents(),
    ]);

    const summary = this.calculator.calculateSummary(transactions);

    return {
      transactions,
      goals,
      contents,
      summary,
    };
  }
}
