import type { DashboardData } from "../../domain/use-cases/GetDashboardData";
import { formatCurrency, formatShortDate } from "../utils/formatters";
import type {
  CashFlowCategoryViewModel,
  DashboardViewModel,
} from "../dto/DashboardViewModel";

const categoryColors = [
  "#B91C1C",
  "#DC2626",
  "#EF4444",
  "#F87171",
  "#7F1D1D",
  "#991B1B",
  "#64748B",
  "#111827",
];

const healthLabels: Record<DashboardData["summary"]["financialHealthStatus"], string> = {
  excellent: "Saude financeira excelente",
  healthy: "Saude financeira em equilibrio",
  attention: "Saude financeira pede atencao",
  critical: "Saude financeira critica",
};

export function toDashboardViewModel(data: DashboardData): DashboardViewModel {
  const expenseTransactions = data.transactions.filter(
    (transaction) => transaction.type === "expense",
  );

  const categoryEntries = Object.entries(data.summary.expenseCategoryTotals).sort(
    (a, b) => b[1] - a[1],
  );
  const categoryShares = distributePercentages(
    categoryEntries.map(([, amount]) => amount),
    data.summary.totalExpenses,
  );

  const cashFlowCategories = categoryEntries.map<CashFlowCategoryViewModel>(
    ([category, amount], index) => ({
      id: category,
      category,
      amount: formatCurrency(amount),
      rawAmount: amount,
      share: categoryShares[index] ?? 0,
      color: categoryColors[index % categoryColors.length],
    }),
  );

  const summaryCards = [
    {
      id: "income",
      label: "Receita no período",
      value: formatCurrency(data.summary.totalIncome),
      helper: `Entradas registradas no periodo ${data.periodDescription.toLowerCase()}`,
      tone: "green" as const,
    },
    {
      id: "expenses",
      label: "Despesas totais",
      value: formatCurrency(data.summary.totalExpenses),
      helper: `Maior foco no recorte: ${data.summary.largestExpenseCategory}`,
      tone: "red" as const,
    },
    {
      id: "balance",
      label: "Saldo projetado",
      value: formatCurrency(data.summary.balance),
      helper: "Valor disponivel apos os compromissos do recorte",
      tone: "blue" as const,
    },
    {
      id: "savings-rate",
      label: "Taxa de poupança",
      value: `${data.summary.savingsRate.toFixed(0)}%`,
      helper: healthLabels[data.summary.financialHealthStatus],
      tone: "yellow" as const,
    },
  ];

  const goals = data.goals.map((goal) => ({
    id: goal.id,
    title: goal.title,
    progress: Math.min(
      100,
      goal.targetAmount <= 0
        ? 0
        : Math.round((goal.currentAmount / goal.targetAmount) * 100),
    ),
    currentAmount: formatCurrency(goal.currentAmount),
    targetAmount: formatCurrency(goal.targetAmount),
    dueDate: formatShortDate(goal.dueDate),
    status: getGoalStatus(goal.currentAmount, goal.targetAmount),
    monthlyPace: formatCurrency(
      Math.max(goal.targetAmount - goal.currentAmount, 0) / 6,
    ),
  }));

  const educationCards = data.contents.map((content) => ({
    id: content.id,
    title: content.title,
    category: content.category,
    readingTime: content.readingTime,
    takeaway: content.takeaway,
    intro: content.intro,
    sections: content.sections,
    checklist: content.checklist,
    nextStep: content.nextStep,
  }));

  const tutorialCards = data.tutorials.map((tutorial) => ({
    id: tutorial.id,
    title: tutorial.title,
    category: tutorial.category,
    readingTime: tutorial.readingTime,
    takeaway: tutorial.takeaway,
    intro: tutorial.intro,
    sections: tutorial.sections,
    checklist: tutorial.checklist,
    nextStep: tutorial.nextStep,
  }));

  const incomeExpenseRatio =
    data.summary.totalExpenses === 0
      ? null
      : data.summary.totalIncome / data.summary.totalExpenses;

  const monthlyFreeCash = Math.max(data.summary.balance, 0);

  const insights = [
    {
      id: "income-expense-ratio",
      title: "Relacao ganho x gasto",
      value: incomeExpenseRatio === null ? "Sem saídas" : `${incomeExpenseRatio.toFixed(2)}x`,
      description: "Quanto sua renda cobre suas despesas mensais atuais.",
      tone: "blue" as const,
    },
    {
      id: "monthly-free-cash",
      title: "Potencial de aporte",
      value: formatCurrency(monthlyFreeCash),
      description: "Valor que pode ser distribuido entre reserva e objetivos.",
      tone: "green" as const,
    },
    {
      id: "attention-category",
      title: "Sinal de alerta",
      value: data.summary.largestExpenseCategory,
      description: "Categoria que mais merece revisao neste momento.",
      tone: "yellow" as const,
    },
  ];

  const topExpenses = expenseTransactions
    .slice()
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 4)
    .map((transaction) => ({
      id: transaction.id,
      title: transaction.description,
      category: transaction.category,
      amount: formatCurrency(transaction.amount),
      date: formatShortDate(transaction.date),
    }));

  const chatbotMessages = [
    {
      sender: "assistant" as const,
      text: "Oi! Sou sua assistente financeira. Posso explicar seus gastos e sugerir proximos passos.",
    },
    {
      sender: "user" as const,
      text: "Como posso guardar mais dinheiro para a viagem sem comprometer minhas contas?",
    },
    {
      sender: "assistant" as const,
      text: "Seu saldo projetado permite um aporte mensal. A recomendacao seria revisar lazer e servicos para aumentar a reserva da viagem.",
    },
  ];

  return {
    summaryCards,
    cashFlowCategories,
    goals,
    insights,
    topExpenses,
    educationCards,
    tutorialCards,
    chatbotMessages,
    attentionMessage: buildAttentionMessage(data.summary.largestExpenseCategory),
    financialHealthLabel: healthLabels[data.summary.financialHealthStatus],
    emptyStateMessage:
      data.transactions.length === 0
        ? "Nenhum lançamento encontrado para os filtros e período selecionados."
        : null,
    query: data.query,
    filterOptions: data.filterOptions,
    periodLabel: data.periodLabel,
    periodDescription: data.periodDescription,
    activeFiltersDescription: buildActiveFiltersDescription(data),
  };
}

function buildAttentionMessage(largestExpenseCategory: string): string {
  if (largestExpenseCategory === "Sem dados") {
    return "Selecione um período ou filtro com saídas registradas para gerar uma leitura de atenção mais precisa.";
  }

  return `Sua principal oportunidade está em revisar a categoria ${largestExpenseCategory.toLowerCase()} e redirecionar parte desse valor para metas prioritárias.`;
}

function buildActiveFiltersDescription(data: DashboardData): string {
  const category = findOptionLabel(data.filterOptions.categories, data.query.category);
  const goal = findOptionLabel(data.filterOptions.goals, data.query.goalId);
  const flow = findOptionLabel(data.filterOptions.flows, data.query.flow);

  return `${data.periodDescription} • ${category} • ${goal} • ${flow}`;
}

function findOptionLabel(
  options: Array<{ value: string; label: string }>,
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

function distributePercentages(amounts: number[], total: number): number[] {
  if (total <= 0 || amounts.length === 0) {
    return amounts.map(() => 0);
  }

  const exactShares = amounts.map((amount) => (amount / total) * 100);
  const roundedDown = exactShares.map(Math.floor);
  const remaining = 100 - roundedDown.reduce((sum, share) => sum + share, 0);

  return roundedDown.map((share, index) => {
    const decimalRank = exactShares
      .map((exactShare, rankIndex) => ({
        rankIndex,
        decimal: exactShare - Math.floor(exactShare),
      }))
      .sort((a, b) => b.decimal - a.decimal)
      .slice(0, remaining)
      .some((entry) => entry.rankIndex === index);

    return decimalRank ? share + 1 : share;
  });
}

function getGoalStatus(
  currentAmount: number,
  targetAmount: number,
): DashboardViewModel["goals"][number]["status"] {
  if (targetAmount <= 0 || currentAmount >= targetAmount) {
    return "completed";
  }

  const progress = currentAmount / targetAmount;
  return progress >= 0.35 ? "on-track" : "attention";
}
