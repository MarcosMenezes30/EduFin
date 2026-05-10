import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { LearningContentViewModel } from "../../application/dto/DashboardViewModel";

interface LessonPageProps {
  lesson: LearningContentViewModel;
  backLabel?: string;
  onBack: () => void;
}

export function LessonPage({
  lesson,
  backLabel = "Voltar para Educação",
  onBack,
}: LessonPageProps) {
  return (
    <>
      <button className="back-link" type="button" onClick={onBack}>
        <ArrowLeft size={18} aria-hidden="true" />
        {backLabel}
      </button>

      <article className="lesson-page">
        <header className="lesson-hero">
          <span className="tag">
            {lesson.category} • {lesson.readingTime}
          </span>
          <h1>{lesson.title}</h1>
          <p>{lesson.intro}</p>
        </header>

        <div className="lesson-body">
          <section className="lesson-section">
            <h2>Ideias principais</h2>
            <div className="lesson-section-list">
              {lesson.sections.map((section) => (
                <div className="lesson-topic" key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="lesson-aside">
            <section>
              <h2>Checklist prático</h2>
              <ul>
                {lesson.checklist.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="next-step">
              <span>Próximo passo</span>
              <p>{lesson.nextStep}</p>
            </section>
          </aside>
        </div>
      </article>
    </>
  );
}
