import type { CashFlowCategoryViewModel } from "../../application/dto/DashboardViewModel";

interface PieChartProps {
  items: CashFlowCategoryViewModel[];
}

export function PieChart({ items }: PieChartProps) {
  const radius = 76;
  const circumference = 2 * Math.PI * radius;
  const segments = items.reduce<
    Array<{ item: CashFlowCategoryViewModel; dashLength: number; offset: number }>
  >((accumulator, item) => {
    const offset = accumulator.reduce(
      (currentOffset, segment) => currentOffset + segment.dashLength,
      0,
    );

    return [
      ...accumulator,
      {
        item,
        dashLength: (item.share / 100) * circumference,
        offset,
      },
    ];
  }, []);

  return (
    <div className="pie-chart-card">
      <svg
        className="pie-chart"
        viewBox="0 0 200 200"
        role="img"
        aria-label="Distribuicao de despesas por categoria"
      >
        <circle cx="100" cy="100" r={radius} className="pie-chart-base" />
        {segments.map(({ item, dashLength, offset }) => (
          <circle
            key={item.id}
            cx="100"
            cy="100"
            r={radius}
            className="pie-chart-segment"
            style={{
              stroke: item.color,
              strokeDasharray: `${dashLength} ${circumference - dashLength}`,
              strokeDashoffset: -offset,
            }}
          />
        ))}
      </svg>

      <div className="pie-chart-center">
        <span>Custos</span>
        <strong>por categoria</strong>
      </div>
    </div>
  );
}
