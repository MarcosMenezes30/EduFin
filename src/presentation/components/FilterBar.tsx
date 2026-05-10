import type { CSSProperties } from "react";
import type {
  DashboardFilterOptions,
  DashboardFlowFilter,
  DashboardPeriod,
  DashboardQuery,
} from "../../domain/use-cases/GetDashboardData";

interface FilterBarProps {
  query: DashboardQuery;
  options: DashboardFilterOptions;
  activeFiltersDescription: string;
  onChange: (query: DashboardQuery) => void;
}

export function FilterBar({
  query,
  options,
  activeFiltersDescription,
  onChange,
}: FilterBarProps) {
  const activePeriodIndex = Math.max(
    0,
    options.periods.findIndex((period) => period.value === query.period),
  );
  const periodSwitcherStyle = {
    "--period-count": options.periods.length,
    "--period-index": activePeriodIndex,
  } as CSSProperties;

  return (
    <section className="filter-bar" aria-label="Filtros do dashboard">
      <div className="filter-bar-header">
        <strong>Visualização</strong>
        <span>{activeFiltersDescription}</span>
      </div>

      <div className="period-switcher-shell">
        <div
          className="period-switcher"
          aria-label="Período"
          style={periodSwitcherStyle}
        >
          <span className="period-switcher-indicator" aria-hidden="true" />
          {options.periods.map((period) => (
            <button
              className={period.value === query.period ? "active" : ""}
              type="button"
              key={period.value}
              aria-label={`${period.label}: ${period.description}`}
              onClick={() =>
                onChange({
                  ...query,
                  period: period.value as DashboardPeriod,
                })
              }
            >
              <span>{period.label}</span>
              <small>{period.days}d</small>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-controls">
        <label className="filter-field">
          <span>Objetivo</span>
          <select
            value={query.goalId}
            onChange={(event) =>
              onChange({
                ...query,
                goalId: event.target.value,
              })
            }
          >
            {options.goals.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-field">
          <span>Categoria</span>
          <select
            value={query.category}
            onChange={(event) =>
              onChange({
                ...query,
                category: event.target.value,
              })
            }
          >
            {options.categories.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-field">
          <span>Lançamentos</span>
          <select
            value={query.flow}
            onChange={(event) =>
              onChange({
                ...query,
                flow: event.target.value as DashboardFlowFilter,
              })
            }
          >
            {options.flows.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
