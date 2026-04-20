import { useEffect, useState } from "react";
import { toDashboardViewModel } from "../../application/mappers/toDashboardViewModel";
import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { FinancialHealthCalculator } from "../../domain/services/FinancialHealthCalculator";
import { GetDashboardData } from "../../domain/use-cases/GetDashboardData";
import { InMemoryFinancialDataRepository } from "../../infrastructure/repositories/InMemoryFinancialDataRepository";

interface UseDashboardDataResult {
  data: DashboardViewModel | null;
  loading: boolean;
}

export function useDashboardData(): UseDashboardDataResult {
  const [data, setData] = useState<DashboardViewModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repository = new InMemoryFinancialDataRepository();
    const calculator = new FinancialHealthCalculator();
    const getDashboardData = new GetDashboardData(repository, calculator);

    getDashboardData
      .execute()
      .then((result) => setData(toDashboardViewModel(result)))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
