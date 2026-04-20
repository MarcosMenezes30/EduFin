import type { FinancialSummary } from "../entities/FinancialSummary";
import type { Transaction } from "../entities/Transaction";

export class FinancialHealthCalculator {
  calculateSummary(transactions: Transaction[]): FinancialSummary {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const totalExpenses = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const balance = totalIncome - totalExpenses;
    const savingsRate = totalIncome === 0 ? 0 : (balance / totalIncome) * 100;

    const expenseCategoryMap = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce<Record<string, number>>((accumulator, transaction) => {
        accumulator[transaction.category] =
          (accumulator[transaction.category] ?? 0) + transaction.amount;
        return accumulator;
      }, {});

    const largestExpenseCategory =
      Object.entries(expenseCategoryMap).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      "Sem dados";

    return {
      totalIncome,
      totalExpenses,
      balance,
      savingsRate,
      largestExpenseCategory,
    };
  }
}
