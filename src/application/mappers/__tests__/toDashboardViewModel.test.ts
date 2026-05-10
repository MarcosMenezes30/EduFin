import { describe, expect, it } from "vitest";
import { FinancialHealthCalculator } from "../../../domain/services/FinancialHealthCalculator";
import { GetDashboardData } from "../../../domain/use-cases/GetDashboardData";
import { InMemoryFinancialDataRepository } from "../../../infrastructure/repositories/InMemoryFinancialDataRepository";
import { toDashboardViewModel } from "../toDashboardViewModel";

describe("toDashboardViewModel", () => {
  it("formats dashboard data and keeps category shares at 100 percent", async () => {
    const data = await new GetDashboardData(
      new InMemoryFinancialDataRepository(),
      new FinancialHealthCalculator(),
    ).execute();
    const viewModel = toDashboardViewModel(data);
    const totalShare = viewModel.cashFlowCategories.reduce(
      (sum, category) => sum + category.share,
      0,
    );

    expect(viewModel.summaryCards).toHaveLength(4);
    expect(viewModel.financialHealthLabel).toBe("Saude financeira excelente");
    expect(viewModel.attentionMessage).toContain("moradia");
    expect(viewModel.periodDescription).toBe("Últimos 30 dias");
    expect(viewModel.goals[0]).toMatchObject({
      id: "g1",
      progress: 57,
      status: "on-track",
    });
    expect(totalShare).toBe(100);
    expect(viewModel.topExpenses[0].title).toBe("Aluguel");
  });
});
