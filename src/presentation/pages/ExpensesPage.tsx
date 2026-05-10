import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { ExpenseCategoryPanel } from "../components/ExpenseCategoryPanel";
import { PageHeader } from "../components/PageHeader";
import { TopExpensesPanel } from "../components/TopExpensesPanel";

interface ExpensesPageProps {
  data: DashboardViewModel;
}

export function ExpensesPage({ data }: ExpensesPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Financeiro"
        title="Despesas e categorias"
        description="Entenda onde o dinheiro está concentrado e quais compromissos merecem revisão."
      />

      <section className="content-grid page-grid">
        <ExpenseCategoryPanel categories={data.cashFlowCategories} />
        <TopExpensesPanel expenses={data.topExpenses} />
      </section>
    </>
  );
}
