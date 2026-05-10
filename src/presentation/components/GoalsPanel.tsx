import type { GoalViewModel } from "../../application/dto/DashboardViewModel";

interface GoalsPanelProps {
  goals: GoalViewModel[];
}

const statusLabels: Record<GoalViewModel["status"], string> = {
  "on-track": "Em ritmo",
  completed: "Concluida",
  attention: "Requer aporte",
};

export function GoalsPanel({ goals }: GoalsPanelProps) {
  return (
    <article className="panel">
      <div className="panel-header">
        <p className="eyebrow">Objetivos financeiros</p>
        <h2>Reservas em andamento</h2>
      </div>

      <div className="goal-list">
        {goals.map((goal) => (
          <div className="goal-item" key={goal.id}>
            <div className="goal-topline">
              <strong>{goal.title}</strong>
              <span>{goal.progress}%</span>
            </div>
            <div
              className="progress-track"
              aria-label={`${goal.title}: ${goal.progress}% concluido`}
            >
              <div
                className="progress-fill cool"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            <p>
              {goal.currentAmount} de {goal.targetAmount} ate {goal.dueDate}
            </p>
            <div className="goal-meta">
              <span>{statusLabels[goal.status]}</span>
              <span>{goal.monthlyPace}/mes sugerido</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
