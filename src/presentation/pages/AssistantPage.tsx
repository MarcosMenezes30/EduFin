import type { DashboardViewModel } from "../../application/dto/DashboardViewModel";
import { ChatbotPanel } from "../components/ChatbotPanel";
import { PageHeader } from "../components/PageHeader";

interface AssistantPageProps {
  data: DashboardViewModel;
}

export function AssistantPage({ data }: AssistantPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Assistente"
        title="Orientação financeira"
        description="Converse com a simulação de assistente e explore próximos passos para seu plano."
      />

      <section className="single-page-section">
        <ChatbotPanel
          initialMessages={data.chatbotMessages}
          attentionMessage={data.attentionMessage}
        />
      </section>
    </>
  );
}
