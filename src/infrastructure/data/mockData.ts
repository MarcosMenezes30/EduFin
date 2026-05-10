import type { EducationContent } from "../../domain/entities/EducationContent";
import type { FinancialGoal } from "../../domain/entities/FinancialGoal";
import type { TutorialContent } from "../../domain/entities/TutorialContent";
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
  {
    id: "t9",
    description: "Consultoria pontual",
    category: "Renda extra",
    amount: 350,
    date: "2026-04-30",
    type: "income",
  },
  {
    id: "t10",
    description: "Mercado de reposicao",
    category: "Alimentacao",
    amount: 186,
    date: "2026-04-30",
    type: "expense",
  },
  {
    id: "t11",
    description: "Transporte para reuniao",
    category: "Mobilidade",
    amount: 44,
    date: "2026-04-30",
    type: "expense",
  },
  {
    id: "t12",
    description: "Cafe de trabalho",
    category: "Alimentacao",
    amount: 32,
    date: "2026-04-30",
    type: "expense",
  },
  {
    id: "t13",
    description: "Mensalidade da academia",
    category: "Saude",
    amount: 129,
    date: "2026-04-28",
    type: "expense",
  },
  {
    id: "t14",
    description: "Curso de planilhas",
    category: "Educacao",
    amount: 210,
    date: "2026-04-27",
    type: "expense",
  },
  {
    id: "t15",
    description: "Jantar de fim de semana",
    category: "Lazer",
    amount: 260,
    date: "2026-04-26",
    type: "expense",
  },
  {
    id: "t16",
    description: "Rendimento de investimento",
    category: "Renda extra",
    amount: 95,
    date: "2026-04-25",
    type: "income",
  },
  {
    id: "t17",
    description: "Internet residencial",
    category: "Servicos",
    amount: 142,
    date: "2026-04-23",
    type: "expense",
  },
  {
    id: "t18",
    description: "Supermercado complementar",
    category: "Alimentacao",
    amount: 340,
    date: "2026-04-20",
    type: "expense",
  },
  {
    id: "t19",
    description: "Uber e metro",
    category: "Mobilidade",
    amount: 118,
    date: "2026-04-18",
    type: "expense",
  },
  {
    id: "t20",
    description: "Cinema e restaurante",
    category: "Lazer",
    amount: 310,
    date: "2026-04-16",
    type: "expense",
  },
  {
    id: "t21",
    description: "Salario marco",
    category: "Renda principal",
    amount: 8200,
    date: "2026-03-05",
    type: "income",
  },
  {
    id: "t22",
    description: "Aluguel marco",
    category: "Moradia",
    amount: 2200,
    date: "2026-03-10",
    type: "expense",
  },
  {
    id: "t23",
    description: "Supermercado marco",
    category: "Alimentacao",
    amount: 1080,
    date: "2026-03-12",
    type: "expense",
  },
  {
    id: "t24",
    description: "Cartao marco",
    category: "Lazer",
    amount: 840,
    date: "2026-03-17",
    type: "expense",
  },
  {
    id: "t25",
    description: "Plano de saude marco",
    category: "Saude",
    amount: 540,
    date: "2026-03-08",
    type: "expense",
  },
  {
    id: "t26",
    description: "Freelance marco",
    category: "Renda extra",
    amount: 900,
    date: "2026-03-22",
    type: "income",
  },
  {
    id: "t27",
    description: "Salario fevereiro",
    category: "Renda principal",
    amount: 8100,
    date: "2026-02-05",
    type: "income",
  },
  {
    id: "t28",
    description: "Aluguel fevereiro",
    category: "Moradia",
    amount: 2200,
    date: "2026-02-10",
    type: "expense",
  },
  {
    id: "t29",
    description: "Supermercado fevereiro",
    category: "Alimentacao",
    amount: 990,
    date: "2026-02-13",
    type: "expense",
  },
  {
    id: "t30",
    description: "Manutencao notebook",
    category: "Educacao",
    amount: 420,
    date: "2026-02-18",
    type: "expense",
  },
  {
    id: "t31",
    description: "Salario janeiro",
    category: "Renda principal",
    amount: 8000,
    date: "2026-01-05",
    type: "income",
  },
  {
    id: "t32",
    description: "Aluguel janeiro",
    category: "Moradia",
    amount: 2150,
    date: "2026-01-10",
    type: "expense",
  },
  {
    id: "t33",
    description: "Ferias planejadas",
    category: "Lazer",
    amount: 1250,
    date: "2026-01-19",
    type: "expense",
  },
  {
    id: "t34",
    description: "Salario dezembro",
    category: "Renda principal",
    amount: 7900,
    date: "2025-12-05",
    type: "income",
  },
  {
    id: "t35",
    description: "Aluguel dezembro",
    category: "Moradia",
    amount: 2150,
    date: "2025-12-10",
    type: "expense",
  },
  {
    id: "t36",
    description: "Presentes de fim de ano",
    category: "Lazer",
    amount: 980,
    date: "2025-12-20",
    type: "expense",
  },
  {
    id: "t37",
    description: "Decimo terceiro",
    category: "Renda extra",
    amount: 4200,
    date: "2025-12-15",
    type: "income",
  },
  {
    id: "t38",
    description: "Salario novembro",
    category: "Renda principal",
    amount: 7900,
    date: "2025-11-05",
    type: "income",
  },
  {
    id: "t39",
    description: "Aluguel novembro",
    category: "Moradia",
    amount: 2150,
    date: "2025-11-10",
    type: "expense",
  },
  {
    id: "t40",
    description: "Assinaturas novembro",
    category: "Servicos",
    amount: 240,
    date: "2025-11-14",
    type: "expense",
  },
  {
    id: "t41",
    description: "Salario setembro",
    category: "Renda principal",
    amount: 7800,
    date: "2025-09-05",
    type: "income",
  },
  {
    id: "t42",
    description: "Aluguel setembro",
    category: "Moradia",
    amount: 2100,
    date: "2025-09-10",
    type: "expense",
  },
  {
    id: "t43",
    description: "Viagem curta",
    category: "Lazer",
    amount: 1350,
    date: "2025-09-22",
    type: "expense",
  },
  {
    id: "t44",
    description: "Salario julho",
    category: "Renda principal",
    amount: 7600,
    date: "2025-07-05",
    type: "income",
  },
  {
    id: "t45",
    description: "Aluguel julho",
    category: "Moradia",
    amount: 2050,
    date: "2025-07-10",
    type: "expense",
  },
  {
    id: "t46",
    description: "Curso intensivo",
    category: "Educacao",
    amount: 780,
    date: "2025-07-18",
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
    intro:
      "Reserva financeira nao precisa nascer grande. Ela precisa nascer constante, caber no fluxo do mes e proteger voce de depender de credito quando surge um imprevisto.",
    sections: [
      {
        title: "Defina o primeiro marco",
        body:
          "Em vez de mirar direto em seis meses de custo de vida, comece com um alvo menor: R$ 500, R$ 1.000 ou uma conta essencial coberta. Esse marco cria tracao e deixa a meta menos abstrata.",
      },
      {
        title: "Use um valor automatico",
        body:
          "Escolha um valor semanal ou mensal que nao pressione o orcamento. Automatizar evita depender de memoria ou motivacao, e transforma a reserva em uma conta fixa a seu favor.",
      },
      {
        title: "Separe reserva de investimento",
        body:
          "A reserva precisa estar acessivel e ter baixo risco. O objetivo aqui nao e maximizar rendimento, e garantir liquidez para emergencias sem vender ativos ou entrar no cartao.",
      },
    ],
    checklist: [
      "Escolha um primeiro alvo simples para a reserva.",
      "Programe um aporte automatico no dia seguinte ao recebimento.",
      "Guarde a reserva em uma conta separada do dinheiro de uso diario.",
    ],
    nextStep:
      "Use o saldo projetado do mes para definir um aporte inicial pequeno e repita por quatro semanas antes de aumentar o valor.",
  },
  {
    id: "c2",
    title: "Cartao de credito: limite nao e renda",
    category: "Consumo consciente",
    readingTime: "4 min",
    takeaway: "Usar o cartao com teto definido reduz compras por impulso.",
    intro:
      "O limite do cartao e uma ferramenta de pagamento, nao uma extensao da renda. Quando ele vira dinheiro disponivel na cabeca, a fatura passa a competir com aluguel, mercado e metas.",
    sections: [
      {
        title: "Crie um teto proprio",
        body:
          "Defina um limite menor que o oferecido pelo banco. Um bom ponto de partida e separar apenas a parte do orcamento destinada a compras variaveis e lazer.",
      },
      {
        title: "Acompanhe a fatura durante o mes",
        body:
          "Esperar a fatura fechar tira tempo de reacao. Conferir semanalmente ajuda a perceber se o consumo esta acelerando antes que ele comprometa o saldo.",
      },
      {
        title: "Evite parcelar consumo recorrente",
        body:
          "Parcelas de mercado, aplicativos, restaurantes e assinaturas criam uma renda futura ja comprometida. Reserve parcelamento para compras planejadas e realmente necessarias.",
      },
    ],
    checklist: [
      "Defina um teto mensal para uso do cartao.",
      "Revise a fatura uma vez por semana.",
      "Separe compras planejadas de compras por impulso.",
    ],
    nextStep:
      "Compare o gasto atual de lazer e servicos com seu teto ideal e ajuste o limite usado no proximo ciclo.",
  },
  {
    id: "c3",
    title: "Metodo pratico para revisar gastos invisiveis",
    category: "Controle de gastos",
    readingTime: "6 min",
    takeaway: "Assinaturas e microcompras somadas podem financiar metas reais.",
    intro:
      "Gastos invisiveis parecem pequenos demais para importar, mas somados podem ocupar o mesmo espaco de uma meta importante. O segredo e procurar recorrencia, nao culpa.",
    sections: [
      {
        title: "Procure repeticao",
        body:
          "Assinaturas, aplicativos, entregas, tarifas e pequenas compras aparecem com baixo valor individual. Liste tudo que se repetiu no mes e some por categoria.",
      },
      {
        title: "Classifique por uso real",
        body:
          "Separe cada gasto em tres grupos: uso frequente, uso ocasional e sem uso. O terceiro grupo deve ser cancelado primeiro; o segundo pode ter pausa temporaria.",
      },
      {
        title: "Transforme corte em destino",
        body:
          "Cortar por cortar dura pouco. Redirecione o valor economizado para uma meta visivel, como reserva, viagem ou notebook. Assim a economia ganha recompensa concreta.",
      },
    ],
    checklist: [
      "Liste assinaturas e compras pequenas dos ultimos 30 dias.",
      "Cancele ou pause o que nao teve uso real.",
      "Redirecione o valor economizado para uma meta.",
    ],
    nextStep:
      "Comece revisando a categoria Servicos e mova qualquer economia para a meta mais prioritaria.",
  },
];

export const mockTutorialContents: TutorialContent[] = [
  {
    id: "tutorial-platform",
    title: "Como utilizar a plataforma da melhor forma?",
    category: "Primeiros passos",
    readingTime: "7 min",
    takeaway:
      "Use o dashboard para decidir, as metas para priorizar e os conteúdos para transformar diagnóstico em hábito.",
    intro:
      "A EduFin funciona melhor quando você usa cada área com uma intenção clara: entender o cenário, escolher um foco e acompanhar a evolução com frequência.",
    sections: [
      {
        title: "Comece pelo dashboard",
        body:
          "Abra a visão geral para conferir receita, despesas, saldo e taxa de poupança. Troque o período para comparar curto e longo prazo antes de tomar decisões.",
      },
      {
        title: "Use filtros para responder perguntas",
        body:
          "Filtrar por categoria ou tipo de lançamento ajuda a investigar dúvidas específicas, como quanto saiu em lazer ou quanto entrou de renda extra no período.",
      },
      {
        title: "Conecte diagnóstico e ação",
        body:
          "Depois de identificar um sinal de atenção, vá para metas, educação ou assistente. A plataforma foi pensada para transformar leitura financeira em próximo passo.",
      },
    ],
    checklist: [
      "Revise o dashboard pelo menos uma vez por semana.",
      "Compare mensal e trimestral antes de ajustar hábitos.",
      "Use a aba Educação quando aparecer uma categoria de atenção.",
    ],
    nextStep:
      "Faça uma revisão semanal começando pelo período Semanal e depois compare com o Mensal.",
  },
  {
    id: "tutorial-bank-integration",
    title: "Como integrar a plataforma com seu banco?",
    category: "Integrações",
    readingTime: "6 min",
    takeaway:
      "A integração bancária deve priorizar segurança, consentimento e conferência das categorias importadas.",
    intro:
      "Neste MVP a integração bancária ainda é simulada, mas o fluxo ideal deve ser claro: conectar, autorizar, importar, revisar e acompanhar.",
    sections: [
      {
        title: "Escolha a instituição",
        body:
          "O primeiro passo de uma integração real seria selecionar banco ou carteira digital. A conexão precisa deixar claro quais dados serão acessados e por quanto tempo.",
      },
      {
        title: "Autorize com consentimento",
        body:
          "A autorização deve acontecer em ambiente seguro, com escopo limitado. A plataforma não deve pedir senha diretamente; o consentimento precisa ser revogável.",
      },
      {
        title: "Revise a primeira importação",
        body:
          "Depois da importação, confira categorias, datas e valores. A qualidade dos insights depende da classificação correta dos lançamentos.",
      },
    ],
    checklist: [
      "Conferir quais dados serão compartilhados.",
      "Revisar lançamentos importados antes de confiar nos relatórios.",
      "Corrigir categorias recorrentes para melhorar os próximos diagnósticos.",
    ],
    nextStep:
      "Quando a integração real existir, comece importando apenas um período curto para validar a classificação.",
  },
  {
    id: "tutorial-create-goals",
    title: "Como criar metas?",
    category: "Planejamento",
    readingTime: "5 min",
    takeaway:
      "Uma boa meta tem valor-alvo, prazo, prioridade e um aporte viável dentro do saldo do período.",
    intro:
      "Metas ajudam a transformar sobra de caixa em direção. O segredo é criar objetivos específicos e acompanhar o ritmo de aporte com regularidade.",
    sections: [
      {
        title: "Dê nome e propósito",
        body:
          "Evite metas genéricas. Em vez de 'guardar dinheiro', use 'Reserva de emergência' ou 'Notebook novo'. O nome deve lembrar por que a meta importa.",
      },
      {
        title: "Defina valor e prazo",
        body:
          "O valor-alvo mostra o tamanho do objetivo; o prazo revela o aporte necessário. Se o aporte ficar pesado, ajuste prazo ou prioridade.",
      },
      {
        title: "Priorize com responsabilidade",
        body:
          "Reserva de emergência costuma vir antes de objetivos de consumo. Depois dela, distribua o saldo entre metas que trazem segurança, qualidade de vida ou renda futura.",
      },
    ],
    checklist: [
      "Criar um título claro para a meta.",
      "Definir valor-alvo e data limite.",
      "Comparar aporte necessário com o saldo projetado.",
    ],
    nextStep:
      "Escolha uma meta prioritária e use o potencial de aporte do dashboard como referência inicial.",
  },
  {
    id: "tutorial-change-expenses",
    title: "Como mudar minhas despesas?",
    category: "Controle financeiro",
    readingTime: "6 min",
    takeaway:
      "Mudança sustentável começa pelas categorias com maior impacto e menor perda de qualidade de vida.",
    intro:
      "Reduzir despesas não precisa ser uma lista de cortes aleatórios. O melhor caminho é descobrir o padrão, escolher uma categoria e testar uma mudança pequena.",
    sections: [
      {
        title: "Ataque uma categoria por vez",
        body:
          "Tentar mudar tudo ao mesmo tempo gera cansaço. Escolha a categoria com maior peso ou maior desperdício percebido e acompanhe por algumas semanas.",
      },
      {
        title: "Separe necessidade de hábito",
        body:
          "Alguns gastos são essenciais; outros são repetição automática. A mudança mais fácil costuma estar nos hábitos que acontecem sem decisão consciente.",
      },
      {
        title: "Redirecione o valor economizado",
        body:
          "Quando uma despesa cai, envie a diferença para uma meta. Isso torna a economia visível e evita que o dinheiro seja absorvido por outro gasto.",
      },
    ],
    checklist: [
      "Escolher uma categoria para revisar primeiro.",
      "Definir uma redução realista para o próximo período.",
      "Enviar a economia para uma meta específica.",
    ],
    nextStep:
      "Abra o filtro de categoria no dashboard e escolha a maior despesa variável para revisar nesta semana.",
  },
];
