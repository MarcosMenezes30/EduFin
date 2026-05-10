import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { EducationPanel } from "../components/EducationPanel";
import { PageHeader } from "../components/PageHeader";

interface TutorialsPageProps {
  data: DashboardViewModel;
  onOpenTutorial: (tutorialId: string) => void;
}

export function TutorialsPage({ data, onOpenTutorial }: TutorialsPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Tutoriais"
        title="Tutoriais da plataforma"
        description="Guias em texto para usar a EduFin melhor, preparar integrações e organizar sua rotina financeira."
      />

      <section className="single-page-section">
        <EducationPanel
          cards={data.tutorialCards}
          eyebrow="Tutoriais"
          title="Guias disponíveis"
          onSelectCard={(card) => onOpenTutorial(card.id)}
        />
      </section>
    </>
  );
}
