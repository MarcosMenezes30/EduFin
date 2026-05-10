import type { LearningContentViewModel } from "../../application/dto/DashboardViewModel";

interface EducationPanelProps {
  cards: LearningContentViewModel[];
  eyebrow?: string;
  title?: string;
  onSelectCard?: (card: LearningContentViewModel) => void;
}

export function EducationPanel({
  cards,
  eyebrow = "Educacao financeira",
  title = "Conteudos recomendados",
  onSelectCard,
}: EducationPanelProps) {
  return (
    <article className="panel">
      <div className="panel-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="education-list">
        {cards.map((card) => (
          <button
            className="education-card"
            type="button"
            key={card.id}
            onClick={() => onSelectCard?.(card)}
          >
            <span className="tag">
              {card.category} • {card.readingTime}
            </span>
            <strong>{card.title}</strong>
            <p>{card.takeaway}</p>
          </button>
        ))}
      </div>
    </article>
  );
}
