import { useDashboardData } from "./presentation/hooks/useDashboardData";

function PieChart({
  items,
}: {
  items: Array<{ category: string; share: number; color: string }>;
}) {
  const radius = 76;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;

  return (
    <div className="pie-chart-card">
      <svg
        className="pie-chart"
        viewBox="0 0 200 200"
        role="img"
        aria-label="Distribuicao de despesas por categoria"
      >
        <circle cx="100" cy="100" r={radius} className="pie-chart-base" />
        {items.map((item) => {
          const dashLength = (item.share / 100) * circumference;
          const segment = (
            <circle
              key={item.category}
              cx="100"
              cy="100"
              r={radius}
              className="pie-chart-segment"
              style={{
                stroke: item.color,
                strokeDasharray: `${dashLength} ${circumference - dashLength}`,
                strokeDashoffset: -currentOffset,
              }}
            />
          );
          currentOffset += dashLength;
          return segment;
        })}
      </svg>

      <div className="pie-chart-center">
        <span>Custos</span>
        <strong>por categoria</strong>
      </div>
    </div>
  );
}

function App() {
  const { data, loading } = useDashboardData();

  if (loading || !data) {
    return (
      <main className="shell loading-shell">
        <section className="loading-card">
          <p className="eyebrow">Trilha Financeira</p>
          <h1>Preparando demonstracao do MVP...</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Painel financeiro pessoal</p>
          <h1>Controle seu dinheiro com clareza, metas e orientacao pratica.</h1>
          <p className="hero-text">
            Uma experiencia de usuario focada em acompanhamento financeiro real:
            gastos, objetivos, relacao entre renda e despesas e apoio educativo
            em um unico ambiente.
          </p>
        </div>

        
      </section>

      <section className="summary-grid">
        {data.summaryCards.map((card) => (
          <article className={`summary-card tone-${card.tone}`} key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <p>{card.helper}</p>
          </article>
        ))}
      </section>

      <section className="content-grid primary-grid">
        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Distribuicao das despesas</p>
            <h2>Custos por categoria</h2>
          </div>

          <div className="chart-layout">
            <PieChart items={data.cashFlowCategories} />

            <div className="category-list">
              {data.cashFlowCategories.map((item) => (
                <div className="category-item" key={item.category}>
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
                  <div className="progress-track">
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
        </article>

        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Objetivos financeiros</p>
            <h2>Reservas em andamento</h2>
          </div>

          <div className="goal-list">
            {data.goals.map((goal) => (
              <div className="goal-item" key={goal.title}>
                <div className="goal-topline">
                  <strong>{goal.title}</strong>
                  <span>{goal.progress}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill cool"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p>
                  {goal.currentAmount} de {goal.targetAmount} ate {goal.dueDate}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid secondary-grid">
        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Leituras do mes</p>
            <h2>Insights de controle financeiro</h2>
          </div>

          <div className="insights-grid">
            {data.insights.map((insight) => (
              <div className={`insight-card tone-${insight.tone}`} key={insight.title}>
                <span>{insight.title}</span>
                <strong>{insight.value}</strong>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Despesas principais</p>
            <h2>Maiores compromissos recentes</h2>
          </div>

          <div className="expense-list">
            {data.topExpenses.map((expense) => (
              <div className="expense-item" key={`${expense.title}-${expense.date}`}>
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
      </section>

      <section className="content-grid tertiary-grid">
        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Educacao financeira</p>
            <h2>Conteudos recomendados</h2>
          </div>

          <div className="education-list">
            {data.educationCards.map((card) => (
              <div className="education-card" key={card.title}>
                <span className="tag">
                  {card.category} • {card.readingTime}
                </span>
                <strong>{card.title}</strong>
                <p>{card.takeaway}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel chatbot-panel">
          <div className="panel-header">
            <p className="eyebrow">Assistente virtual</p>
            <h2>Exemplo de chatbot com IA</h2>
          </div>

          <div className="chatbot-window">
            {data.chatbotMessages.map((message, index) => (
              <div
                className={`chat-message ${message.sender}`}
                key={`${message.sender}-${index}`}
              >
                <span className="chat-author">
                  {message.sender === "assistant" ? "Assistente" : "Usuario"}
                </span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <span>Pergunte sobre metas, gastos, poupanca ou planejamento.</span>
            <button type="button">Enviar</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
