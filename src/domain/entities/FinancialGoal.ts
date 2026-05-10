import type { ISODateString } from "./Transaction";

export interface FinancialGoal {
  id: string;
  title: string;
  currentAmount: number;
  targetAmount: number;
  dueDate: ISODateString;
}
