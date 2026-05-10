import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { GoalsPanel } from "../components/GoalsPanel";
import { PageHeader } from "../components/PageHeader";

interface GoalsPageProps {
  data: DashboardViewModel;
}

export function GoalsPage({ data }: GoalsPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Objetivos"
        title="Metas financeiras"
        description="Acompanhe reserva, viagem, compras planejadas e o ritmo de aporte sugerido."
      />

      <section className="single-page-section">
        <GoalsPanel goals={data.goals} />
      </section>
    </>
  );
}
