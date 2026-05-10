import type { CashFlowCategoryViewModel } from "../../application/dto/DashboardViewModel";
import { PieChart } from "./PieChart";

interface ExpenseCategoryPanelProps {
  categories: CashFlowCategoryViewModel[];
}

export function ExpenseCategoryPanel({ categories }: ExpenseCategoryPanelProps) {
  return (
    <article className="panel">
      <div className="panel-header">
        <p className="eyebrow">Distribuicao das despesas</p>
        <h2>Custos por categoria</h2>
      </div>

      {categories.length === 0 ? (
        <p className="empty-copy">Nenhuma despesa registrada neste periodo.</p>
      ) : (
        <div className="chart-layout">
          <PieChart items={categories} />

          <div className="category-list">
            {categories.map((item) => (
              <div className="category-item" key={item.id}>
                <div className="category-copy">
                  <div className="category-title">
                    <span
                      className="legend-dot"
                      style={{ backgroundColor: item.color }}
                    />
                    <strong>{item.category}</strong>
                  </div>
                  <span>{item.amount}</span>
                </div>
                <div
                  className="progress-track"
                  aria-label={`${item.category}: ${item.share}% das despesas`}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: `${item.share}%`,
                      background: item.color,
                    }}
                  />
                </div>
                <small>{item.share}% das despesas</small>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
