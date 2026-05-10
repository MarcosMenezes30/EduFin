import type { EducationContent } from "../entities/EducationContent";
import type { FinancialGoal } from "../entities/FinancialGoal";
import type { TutorialContent } from "../entities/TutorialContent";
import type { Transaction } from "../entities/Transaction";

export interface FinancialDataRepository {
  getTransactions(): Promise<Transaction[]>;
  getGoals(): Promise<FinancialGoal[]>;
  getEducationContents(): Promise<EducationContent[]>;
  getTutorialContents(): Promise<TutorialContent[]>;
}
