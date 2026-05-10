import type { EducationContent } from "../../domain/entities/EducationContent";
import type { FinancialGoal } from "../../domain/entities/FinancialGoal";
import type { TutorialContent } from "../../domain/entities/TutorialContent";
import type { Transaction } from "../../domain/entities/Transaction";
import type { FinancialDataRepository } from "../../domain/repositories/FinancialDataRepository";
import {
  mockEducationContents,
  mockGoals,
  mockTutorialContents,
  mockTransactions,
} from "../data/mockData";

export class InMemoryFinancialDataRepository
  implements FinancialDataRepository
{
  async getTransactions(): Promise<Transaction[]> {
    return Promise.resolve([...mockTransactions]);
  }

  async getGoals(): Promise<FinancialGoal[]> {
    return Promise.resolve([...mockGoals]);
  }

  async getEducationContents(): Promise<EducationContent[]> {
    return Promise.resolve([...mockEducationContents]);
  }

  async getTutorialContents(): Promise<TutorialContent[]> {
    return Promise.resolve([...mockTutorialContents]);
  }
}
