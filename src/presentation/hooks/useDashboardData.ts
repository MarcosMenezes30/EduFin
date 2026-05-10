import { useEffect, useState } from "react";
import { toDashboardViewModel } from "../../application/mappers/toDashboardViewModel";
import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { FinancialHealthCalculator } from "../../domain/services/FinancialHealthCalculator";
import type { DashboardQuery } from "../../domain/use-cases/GetDashboardData";
import { GetDashboardData } from "../../domain/use-cases/GetDashboardData";
import { InMemoryFinancialDataRepository } from "../../infrastructure/repositories/InMemoryFinancialDataRepository";

interface UseDashboardDataResult {
  data: DashboardViewModel | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export function useDashboardData(query: DashboardQuery): UseDashboardDataResult {
  const [data, setData] = useState<DashboardViewModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestVersion, setRequestVersion] = useState(0);

  useEffect(() => {
    let active = true;
    const repository = new InMemoryFinancialDataRepository();
    const calculator = new FinancialHealthCalculator();
    const getDashboardData = new GetDashboardData(repository, calculator);

    getDashboardData
      .execute(query)
      .then((result) => {
        if (active) {
          setData(toDashboardViewModel(result));
        }
      })
      .catch(() => {
        if (active) {
          setError("Nao foi possivel carregar os dados financeiros agora.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [query, requestVersion]);

  return {
    data,
    loading,
    error,
    reload: () => {
      setLoading(true);
      setError(null);
      setRequestVersion((version) => version + 1);
    },
  };
}
