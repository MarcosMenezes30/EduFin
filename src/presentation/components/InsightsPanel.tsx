import type { InsightViewModel } from "../../application/dto/DashboardViewModel";

interface InsightsPanelProps {
  insights: InsightViewModel[];
}

export function InsightsPanel({ insights }: InsightsPanelProps) {
  return (
    <article className="panel">
      <div className="panel-header">
        <p className="eyebrow">Leituras do mes</p>
        <h2>Insights de controle financeiro</h2>
      </div>

      <div className="insights-grid">
        {insights.map((insight) => (
          <div className={`insight-card tone-${insight.tone}`} key={insight.id}>
            <span>{insight.title}</span>
            <strong>{insight.value}</strong>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
