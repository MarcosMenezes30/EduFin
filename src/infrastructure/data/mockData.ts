import type { EducationContent } from "../../domain/entities/EducationContent";
import type { FinancialGoal } from "../../domain/entities/FinancialGoal";
import type { Transaction } from "../../domain/entities/Transaction";

export const mockTransactions: Transaction[] = [
  {
    id: "t1",
    description: "Salário",
    category: "Renda principal",
    amount: 8200,
    date: "2026-04-05",
    type: "income",
  },
  {
    id: "t2",
    description: "Freelance",
    category: "Renda extra",
    amount: 1400,
    date: "2026-04-12",
    type: "income",
  },
  {
    id: "t3",
    description: "Aluguel",
    category: "Moradia",
    amount: 2200,
    date: "2026-04-10",
    type: "expense",
  },
  {
    id: "t4",
    description: "Supermercado",
    category: "Alimentacao",
    amount: 980,
    date: "2026-04-09",
    type: "expense",
  },
  {
    id: "t5",
    description: "Cartao de credito",
    category: "Lazer",
    amount: 760,
    date: "2026-04-13",
    type: "expense",
  },
  {
    id: "t6",
    description: "Transporte por app",
    category: "Mobilidade",
    amount: 420,
    date: "2026-04-08",
    type: "expense",
  },
  {
    id: "t7",
    description: "Plano de saude",
    category: "Saude",
    amount: 540,
    date: "2026-04-11",
    type: "expense",
  },
  {
    id: "t8",
    description: "Assinaturas digitais",
    category: "Servicos",
    amount: 185,
    date: "2026-04-14",
    type: "expense",
  },
];

export const mockGoals: FinancialGoal[] = [
  {
    id: "g1",
    title: "Reserva de emergencia",
    currentAmount: 6800,
    targetAmount: 12000,
    dueDate: "2026-09-30",
  },
  {
    id: "g2",
    title: "Viagem de ferias",
    currentAmount: 3200,
    targetAmount: 8000,
    dueDate: "2026-11-20",
  },
  {
    id: "g3",
    title: "Notebook novo",
    currentAmount: 2100,
    targetAmount: 6500,
    dueDate: "2026-10-15",
  },
];

export const mockEducationContents: EducationContent[] = [
  {
    id: "c1",
    title: "Como montar uma reserva sem travar o fluxo do mes",
    category: "Planejamento",
    readingTime: "5 min",
    takeaway: "Comece com metas pequenas e automatize um valor fixo por semana.",
  },
  {
    id: "c2",
    title: "Cartao de credito: limite nao e renda",
    category: "Consumo consciente",
    readingTime: "4 min",
    takeaway: "Usar o cartao com teto definido reduz compras por impulso.",
  },
  {
    id: "c3",
    title: "Metodo pratico para revisar gastos invisiveis",
    category: "Controle de gastos",
    readingTime: "6 min",
    takeaway: "Assinaturas e microcompras somadas podem financiar metas reais.",
  },
];
