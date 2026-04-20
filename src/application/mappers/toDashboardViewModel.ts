import type { DashboardData } from "../../domain/use-cases/GetDashboardData";
import type {
  CashFlowCategoryViewModel,
  DashboardViewModel,
} from "../dto/DashboardViewModel";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
});

const categoryColors = ["#2E7D32", "#F9A825", "#1565C0", "#C62828", "#00897B"];

export function toDashboardViewModel(data: DashboardData): DashboardViewModel {
  const expenseTransactions = data.transactions.filter(
    (transaction) => transaction.type === "expense",
  );

  const totalExpenses = data.summary.totalExpenses || 1;

  const cashFlowCategories = Object.entries(
    expenseTransactions.reduce<Record<string, number>>((accumulator, transaction) => {
      accumulator[transaction.category] =
        (accumulator[transaction.category] ?? 0) + transaction.amount;
      return accumulator;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .map<CashFlowCategoryViewModel>(([category, amount], index) => ({
      category,
      amount: currencyFormatter.format(amount),
      rawAmount: amount,
      share: Math.round((amount / totalExpenses) * 100),
      color: categoryColors[index % categoryColors.length],
    }));

  const summaryCards = [
    {
      label: "Receita mensal",
      value: currencyFormatter.format(data.summary.totalIncome),
      helper: "Entradas recorrentes registradas neste mes",
      tone: "green" as const,
    },
    {
      label: "Despesas totais",
      value: currencyFormatter.format(data.summary.totalExpenses),
      helper: `Maior foco de gasto: ${data.summary.largestExpenseCategory}`,
      tone: "red" as const,
    },
    {
      label: "Saldo projetado",
      value: currencyFormatter.format(data.summary.balance),
      helper: "Valor disponivel apos os compromissos do periodo",
      tone: "blue" as const,
    },
    {
      label: "Taxa de poupança",
      value: `${data.summary.savingsRate.toFixed(0)}%`,
      helper: "Percentual da renda que esta sobrando no mes",
      tone: "yellow" as const,
    },
  ];

  const goals = data.goals.map((goal) => ({
    title: goal.title,
    progress: Math.min(
      100,
      Math.round((goal.currentAmount / goal.targetAmount) * 100),
    ),
    currentAmount: currencyFormatter.format(goal.currentAmount),
    targetAmount: currencyFormatter.format(goal.targetAmount),
    dueDate: dateFormatter.format(new Date(goal.dueDate)),
  }));

  const educationCards = data.contents.map((content) => ({
    title: content.title,
    category: content.category,
    readingTime: content.readingTime,
    takeaway: content.takeaway,
  }));

  const incomeExpenseRatio =
    data.summary.totalExpenses === 0
      ? 0
      : data.summary.totalIncome / data.summary.totalExpenses;

  const monthlyFreeCash = Math.max(data.summary.balance, 0);

  const insights = [
    {
      title: "Relacao ganho x gasto",
      value: `${incomeExpenseRatio.toFixed(2)}x`,
      description: "Quanto sua renda cobre suas despesas mensais atuais.",
      tone: "blue" as const,
    },
    {
      title: "Potencial de aporte",
      value: currencyFormatter.format(monthlyFreeCash),
      description: "Valor que pode ser distribuido entre reserva e objetivos.",
      tone: "green" as const,
    },
    {
      title: "Sinal de alerta",
      value: data.summary.largestExpenseCategory,
      description: "Categoria que mais merece revisao neste momento.",
      tone: "yellow" as const,
    },
  ];

  const topExpenses = expenseTransactions
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 4)
    .map((transaction) => ({
      title: transaction.description,
      category: transaction.category,
      amount: currencyFormatter.format(transaction.amount),
      date: dateFormatter.format(new Date(transaction.date)),
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
    chatbotMessages,
    attentionMessage: `Sua principal oportunidade está em revisar a categoria ${data.summary.largestExpenseCategory.toLowerCase()} e redirecionar parte desse valor para metas prioritárias.`,
  };
}
