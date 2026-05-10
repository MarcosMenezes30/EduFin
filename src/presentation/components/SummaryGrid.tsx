import type { SummaryCardViewModel } from "../../application/dto/DashboardViewModel";

interface SummaryGridProps {
  cards: SummaryCardViewModel[];
}

export function SummaryGrid({ cards }: SummaryGridProps) {
  return (
    <section className="summary-grid" aria-label="Resumo financeiro">
      {cards.map((card) => (
        <article className={`summary-card tone-${card.tone}`} key={card.id}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <p>{card.helper}</p>
        </article>
      ))}
    </section>
  );
}
