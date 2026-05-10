import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { InsightsPanel } from "../components/InsightsPanel";
import { PageHeader } from "../components/PageHeader";

interface InsightsPageProps {
  data: DashboardViewModel;
}

export function InsightsPage({ data }: InsightsPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Análises"
        title="Insights financeiros"
        description="Veja sinais de atenção, potencial de aporte e relação entre ganhos e gastos."
      />

      <section className="single-page-section">
        <InsightsPanel insights={data.insights} />
      </section>
    </>
  );
}
