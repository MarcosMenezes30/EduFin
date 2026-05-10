import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { EducationPanel } from "../components/EducationPanel";
import { PageHeader } from "../components/PageHeader";

interface EducationPageProps {
  data: DashboardViewModel;
  onOpenLesson: (lessonId: string) => void;
}

export function EducationPage({ data, onOpenLesson }: EducationPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Conteúdo"
        title="Educação financeira"
        description="Conteúdos curtos e acionáveis conectados ao seu comportamento financeiro."
      />

      <section className="single-page-section">
        <EducationPanel
          cards={data.educationCards}
          onSelectCard={(card) => onOpenLesson(card.id)}
        />
      </section>
    </>
  );
}
