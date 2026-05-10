import {
  Bot,
  BookOpenText,
  ChartNoAxesCombined,
  Flag,
  GraduationCap,
  LayoutDashboard,
  ReceiptText,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { DashboardState } from "./presentation/components/DashboardState";
import { AppShell } from "./presentation/layout/AppShell";
import { AssistantPage } from "./presentation/pages/AssistantPage";
import { EducationPage } from "./presentation/pages/EducationPage";
import { ExpensesPage } from "./presentation/pages/ExpensesPage";
import { GoalsPage } from "./presentation/pages/GoalsPage";
import { InsightsPage } from "./presentation/pages/InsightsPage";
import { LessonPage } from "./presentation/pages/LessonPage";
import { OverviewPage } from "./presentation/pages/OverviewPage";
import { TutorialsPage } from "./presentation/pages/TutorialsPage";
import type { NavigationItem, PageId } from "./presentation/pages/types";
import { useDashboardData } from "./presentation/hooks/useDashboardData";
import {
  defaultDashboardQuery,
  type DashboardQuery,
} from "./domain/use-cases/GetDashboardData";

const navigationItems: NavigationItem[] = [
  {
    id: "overview",
    label: "Dashboard",
    group: "Visão geral",
    icon: LayoutDashboard,
  },
  {
    id: "expenses",
    label: "Despesas",
    group: "Financeiro",
    icon: ReceiptText,
  },
  {
    id: "goals",
    label: "Metas",
    group: "Planejamento",
    icon: Flag,
  },
  {
    id: "insights",
    label: "Insights",
    group: "Análises",
    icon: ChartNoAxesCombined,
  },
  {
    id: "education",
    label: "Educação",
    group: "Conteúdo",
    icon: GraduationCap,
  },
  {
    id: "assistant",
    label: "Assistente",
    group: "IA",
    icon: Bot,
  },
  {
    id: "tutorials",
    label: "Tutoriais",
    group: "Tutoriais",
    icon: BookOpenText,
  },
];

type ActiveContent =
  | { source: "education"; id: string }
  | { source: "tutorials"; id: string }
  | null;

function App() {
  const [query, setQuery] = useState<DashboardQuery>(defaultDashboardQuery);
  const { data, loading, error, reload } = useDashboardData(query);
  const [activePage, setActivePage] = useState<PageId>("overview");
  const [activeContent, setActiveContent] = useState<ActiveContent>(null);

  function updateQuery(nextQuery: DashboardQuery) {
    setActiveContent(null);
    setQuery(nextQuery);
  }

  function navigate(page: PageId) {
    setActiveContent(null);
    setActivePage(page);
  }

  const page = useMemo(() => {
    if (!data) {
      return null;
    }

    const activeLesson =
      activeContent?.source === "education"
        ? data.educationCards.find((lesson) => lesson.id === activeContent.id)
        : data.tutorialCards.find((tutorial) => tutorial.id === activeContent?.id);

    if (activeLesson) {
      return (
        <LessonPage
          lesson={activeLesson}
          backLabel={
            activeContent?.source === "tutorials"
              ? "Voltar para Tutoriais"
              : "Voltar para Educação"
          }
          onBack={() => setActiveContent(null)}
        />
      );
    }

    const pages: Record<PageId, ReactNode> = {
      overview: (
        <OverviewPage data={data} query={query} onQueryChange={updateQuery} />
      ),
      expenses: <ExpensesPage data={data} />,
      goals: <GoalsPage data={data} />,
      insights: <InsightsPage data={data} />,
      education: (
        <EducationPage
          data={data}
          onOpenLesson={(lessonId) => {
            setActivePage("education");
            setActiveContent({ source: "education", id: lessonId });
          }}
        />
      ),
      assistant: <AssistantPage data={data} />,
      tutorials: (
        <TutorialsPage
          data={data}
          onOpenTutorial={(tutorialId) => {
            setActivePage("tutorials");
            setActiveContent({ source: "tutorials", id: tutorialId });
          }}
        />
      ),
    };

    return pages[activePage];
  }, [activeContent, activePage, data, query]);

  if (loading) {
    return (
      <DashboardState
        title="Preparando demonstração do MVP..."
        message="Estamos consolidando transações, metas e conteúdos recomendados."
      />
    );
  }

  if (error || !data) {
    return (
      <DashboardState
        title="Não foi possível carregar o dashboard"
        message={error ?? "Os dados financeiros ainda não estão disponíveis."}
        actionLabel="Tentar novamente"
        onAction={reload}
      />
    );
  }

  return (
    <AppShell
      activePage={activePage}
      navigationItems={navigationItems}
      onNavigate={navigate}
    >
      {page}
    </AppShell>
  );
}

export default App;
