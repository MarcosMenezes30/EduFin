interface HeroProps {
  financialHealthLabel: string;
  attentionMessage: string;
}

export function Hero({ financialHealthLabel, attentionMessage }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Painel financeiro pessoal</p>
        <h1>Controle seu dinheiro com clareza, metas e orientacao pratica.</h1>
        <p className="hero-text">
          Uma experiencia focada em acompanhamento financeiro real: gastos,
          objetivos, relacao entre renda e despesas e apoio educativo em um
          unico ambiente.
        </p>
      </div>

      <aside className="hero-highlight" aria-label="Diagnostico financeiro">
        <span className="highlight-label">Diagnostico do mes</span>
        <strong>{financialHealthLabel}</strong>
        <p>{attentionMessage}</p>
      </aside>
    </section>
  );
}
