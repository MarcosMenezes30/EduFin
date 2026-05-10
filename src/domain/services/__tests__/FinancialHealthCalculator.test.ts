import { describe, expect, it } from "vitest";
import { FinancialHealthCalculator } from "../FinancialHealthCalculator";
import type { Transaction } from "../../entities/Transaction";

describe("FinancialHealthCalculator", () => {
  it("calculates income, expenses, balance, savings rate and category totals", () => {
    const transactions: Transaction[] = [
      {
        id: "income-1",
        description: "Salario",
        category: "Renda",
        amount: 5000,
        date: "2026-04-01",
        type: "income",
      },
      {
        id: "expense-1",
        description: "Aluguel",
        category: "Moradia",
        amount: 1500,
        date: "2026-04-02",
        type: "expense",
      },
      {
        id: "expense-2",
        description: "Mercado",
        category: "Alimentacao",
        amount: 500,
        date: "2026-04-03",
        type: "expense",
      },
    ];

    const summary = new FinancialHealthCalculator().calculateSummary(transactions);

    expect(summary.totalIncome).toBe(5000);
    expect(summary.totalExpenses).toBe(2000);
    expect(summary.balance).toBe(3000);
    expect(summary.savingsRate).toBe(60);
    expect(summary.largestExpenseCategory).toBe("Moradia");
    expect(summary.expenseCategoryTotals).toEqual({
      Alimentacao: 500,
      Moradia: 1500,
    });
    expect(summary.financialHealthStatus).toBe("excellent");
  });

  it("ignores invalid negative amounts and classifies negative balance as critical", () => {
    const transactions: Transaction[] = [
      {
        id: "income-1",
        description: "Renda",
        category: "Renda",
        amount: 1000,
        date: "2026-04-01",
        type: "income",
      },
      {
        id: "expense-1",
        description: "Conta",
        category: "Casa",
        amount: 1200,
        date: "2026-04-02",
        type: "expense",
      },
      {
        id: "invalid-1",
        description: "Valor invalido",
        category: "Erro",
        amount: -300,
        date: "2026-04-03",
        type: "expense",
      },
    ];

    const summary = new FinancialHealthCalculator().calculateSummary(transactions);

    expect(summary.totalExpenses).toBe(1200);
    expect(summary.balance).toBe(-200);
    expect(summary.financialHealthStatus).toBe("critical");
    expect(summary.expenseCategoryTotals).not.toHaveProperty("Erro");
  });
});
