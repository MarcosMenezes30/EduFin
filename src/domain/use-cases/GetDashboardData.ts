import type { EducationContent } from "../entities/EducationContent";
import type { FinancialGoal } from "../entities/FinancialGoal";
import type { FinancialSummary } from "../entities/FinancialSummary";
import type { TutorialContent } from "../entities/TutorialContent";
import type { Transaction } from "../entities/Transaction";
import type { FinancialDataRepository } from "../repositories/FinancialDataRepository";
import { FinancialHealthCalculator } from "../services/FinancialHealthCalculator";

export type DashboardPeriod =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "semester"
  | "yearly";

export type DashboardFlowFilter = "all" | "income" | "expense";

export interface DashboardQuery {
  period: DashboardPeriod;
  category: string;
  goalId: string;
  flow: DashboardFlowFilter;
}

export interface DashboardFilterOption {
  value: string;
  label: string;
}

export interface DashboardPeriodOption extends DashboardFilterOption {
  days: number;
  description: string;
}

export interface DashboardFilterOptions {
  periods: DashboardPeriodOption[];
  categories: DashboardFilterOption[];
  goals: DashboardFilterOption[];
  flows: DashboardFilterOption[];
}

export interface DashboardData {
  transactions: Transaction[];
  goals: FinancialGoal[];
  contents: EducationContent[];
  tutorials: TutorialContent[];
  summary: FinancialSummary;
  query: DashboardQuery;
  filterOptions: DashboardFilterOptions;
  periodLabel: string;
  periodDescription: string;
}

export const defaultDashboardQuery: DashboardQuery = {
  period: "monthly",
  category: "all",
  goalId: "all",
  flow: "all",
};

const periodOptions: DashboardPeriodOption[] = [
  {
    value: "daily",
    label: "Diário",
    days: 1,
    description: "Hoje",
  },
  {
    value: "weekly",
    label: "Semanal",
    days: 7,
    description: "Últimos 7 dias",
  },
  {
    value: "monthly",
    label: "Mensal",
    days: 30,
    description: "Últimos 30 dias",
  },
  {
    value: "quarterly",
    label: "Trimestral",
    days: 90,
    description: "Últimos 90 dias",
  },
  {
    value: "semester",
    label: "Semestral",
    days: 180,
    description: "Últimos 180 dias",
  },
  {
    value: "yearly",
    label: "Anual",
    days: 365,
    description: "Últimos 365 dias",
  },
];

const flowOptions: DashboardFilterOption[] = [
  { value: "all", label: "Todos os lançamentos" },
  { value: "income", label: "Entradas" },
  { value: "expense", label: "Saídas" },
];

export class GetDashboardData {
  constructor(
    private readonly repository: FinancialDataRepository,
    private readonly calculator: FinancialHealthCalculator,
  ) {}

  async execute(query: DashboardQuery = defaultDashboardQuery): Promise<DashboardData> {
    const [transactions, goals, contents, tutorials] = await Promise.all([
      this.repository.getTransactions(),
      this.repository.getGoals(),
      this.repository.getEducationContents(),
      this.repository.getTutorialContents(),
    ]);

    const normalizedQuery = {
      ...defaultDashboardQuery,
      ...query,
    };
    const period = periodOptions.find(
      (option) => option.value === normalizedQuery.period,
    ) ?? periodOptions[2];
    const referenceDate = getReferenceDate(transactions);
    const periodStartDate = subtractDays(referenceDate, period.days - 1);
    const periodTransactions = transactions.filter((transaction) => {
      const transactionDate = parseISODate(transaction.date);
      return transactionDate >= periodStartDate && transactionDate <= referenceDate;
    });
    const filteredTransactions = periodTransactions.filter((transaction) => {
      const categoryMatches =
        normalizedQuery.category === "all" ||
        transaction.category === normalizedQuery.category;
      const flowMatches =
        normalizedQuery.flow === "all" || transaction.type === normalizedQuery.flow;

      return categoryMatches && flowMatches;
    });
    const filteredGoals =
      normalizedQuery.goalId === "all"
        ? goals
        : goals.filter((goal) => goal.id === normalizedQuery.goalId);
    const summary = this.calculator.calculateSummary(filteredTransactions);
    const filterOptions = buildFilterOptions(transactions, goals);

    return {
      transactions: filteredTransactions,
      goals: filteredGoals,
      contents,
      tutorials,
      summary,
      query: normalizedQuery,
      filterOptions,
      periodLabel: period.label,
      periodDescription: period.description,
    };
  }
}

function buildFilterOptions(
  transactions: Transaction[],
  goals: FinancialGoal[],
): DashboardFilterOptions {
  const categoryOptions = Array.from(
    new Set(transactions.map((transaction) => transaction.category)),
  )
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((category) => ({
      value: category,
      label: category,
    }));

  return {
    periods: periodOptions,
    categories: [{ value: "all", label: "Todas as categorias" }, ...categoryOptions],
    goals: [
      { value: "all", label: "Todos os objetivos" },
      ...goals.map((goal) => ({
        value: goal.id,
        label: goal.title,
      })),
    ],
    flows: flowOptions,
  };
}

function getReferenceDate(transactions: Transaction[]): Date {
  if (transactions.length === 0) {
    return new Date();
  }

  const latestTimestamp = Math.max(
    ...transactions.map((transaction) => parseISODate(transaction.date).getTime()),
  );

  return new Date(latestTimestamp);
}

function parseISODate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function subtractDays(date: Date, days: number): Date {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() - days);
  return nextDate;
}
