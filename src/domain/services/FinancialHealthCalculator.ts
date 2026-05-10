import type { FinancialSummary } from "../entities/FinancialSummary";
import type { Transaction } from "../entities/Transaction";

export class FinancialHealthCalculator {
  calculateSummary(transactions: Transaction[]): FinancialSummary {
    const validTransactions = transactions.filter(
      (transaction) => Number.isFinite(transaction.amount) && transaction.amount >= 0,
    );

    const totalIncome = validTransactions
      .filter((transaction) => transaction.type === "income")
      .reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const totalExpenses = validTransactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const balance = totalIncome - totalExpenses;
    const savingsRate = totalIncome === 0 ? 0 : (balance / totalIncome) * 100;

    const expenseCategoryTotals = validTransactions
      .filter((transaction) => transaction.type === "expense")
      .reduce<Record<string, number>>((accumulator, transaction) => {
        accumulator[transaction.category] =
          (accumulator[transaction.category] ?? 0) + transaction.amount;
        return accumulator;
      }, {});

    const largestExpenseCategory =
      Object.entries(expenseCategoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      "Sem dados";

    const financialHealthStatus = this.classifyFinancialHealth(savingsRate, balance);

    return {
      totalIncome,
      totalExpenses,
      balance,
      savingsRate,
      largestExpenseCategory,
      expenseCategoryTotals,
      financialHealthStatus,
    };
  }

  private classifyFinancialHealth(
    savingsRate: number,
    balance: number,
  ): FinancialSummary["financialHealthStatus"] {
    if (balance < 0) {
      return "critical";
    }

    if (savingsRate >= 30) {
      return "excellent";
    }

    if (savingsRate >= 15) {
      return "healthy";
    }

    return "attention";
  }
}
