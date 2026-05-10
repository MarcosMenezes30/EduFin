import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import type { DashboardQuery } from "../../domain/use-cases/GetDashboardData";
import { FilterBar } from "../components/FilterBar";
import { Hero } from "../components/Hero";
import { PageHeader } from "../components/PageHeader";
import { SummaryGrid } from "../components/SummaryGrid";

interface OverviewPageProps {
  data: DashboardViewModel;
  query: DashboardQuery;
  onQueryChange: (query: DashboardQuery) => void;
}

export function OverviewPage({ data, query, onQueryChange }: OverviewPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Visão geral"
        title="Gestão financeira"
        description="Visão consolidada da sua renda, despesas, saldo e saúde financeira."
      />

      <FilterBar
        query={query}
        options={data.filterOptions}
        activeFiltersDescription={data.activeFiltersDescription}
        onChange={onQueryChange}
      />

      <Hero
        attentionMessage={data.attentionMessage}
        financialHealthLabel={data.financialHealthLabel}
      />

      {data.emptyStateMessage ? (
        <section className="empty-banner">{data.emptyStateMessage}</section>
      ) : null}

      <SummaryGrid cards={data.summaryCards} />
    </>
  );
}
