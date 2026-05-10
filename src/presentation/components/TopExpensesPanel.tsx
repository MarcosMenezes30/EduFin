import type { ExpenseViewModel } from "../../application/dto/DashboardViewModel";

interface TopExpensesPanelProps {
  expenses: ExpenseViewModel[];
}

export function TopExpensesPanel({ expenses }: TopExpensesPanelProps) {
  return (
    <article className="panel">
      <div className="panel-header">
        <p className="eyebrow">Despesas principais</p>
        <h2>Maiores compromissos recentes</h2>
      </div>

      <div className="expense-list">
        {expenses.map((expense) => (
          <div className="expense-item" key={expense.id}>
            <div>
              <strong>{expense.title}</strong>
              <p>
                {expense.category} • {expense.date}
              </p>
            </div>
            <span className="expense-amount">{expense.amount}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
