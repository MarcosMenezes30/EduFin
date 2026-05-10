import { useMemo, useState } from "react";
import type { ChatMessageViewModel } from "../../application/dto/DashboardViewModel";

interface ChatbotPanelProps {
  initialMessages: ChatMessageViewModel[];
  attentionMessage: string;
}

const suggestions = [
  "Como acelerar minha reserva?",
  "Onde posso reduzir gastos?",
  "Qual meta priorizar agora?",
];

export function ChatbotPanel({
  initialMessages,
  attentionMessage,
}: ChatbotPanelProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const canSend = draft.trim().length > 0;

  const reply = useMemo(
    () =>
      `Com base no seu painel, eu comecaria por este ponto: ${attentionMessage}`,
    [attentionMessage],
  );

  function sendMessage(messageText = draft) {
    const text = messageText.trim();

    if (!text) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text },
      { sender: "assistant", text: reply },
    ]);
    setDraft("");
  }

  return (
    <article className="panel chatbot-panel">
      <div className="panel-header">
        <p className="eyebrow">Assistente virtual</p>
        <h2>Simulacao de chatbot com IA</h2>
      </div>

      <div className="chatbot-window" aria-live="polite">
        {messages.map((message, index) => (
          <div
            className={`chat-message ${message.sender}`}
            key={`${message.sender}-${index}-${message.text}`}
          >
            <span className="chat-author">
              {message.sender === "assistant" ? "Assistente" : "Usuario"}
            </span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="quick-prompts" aria-label="Perguntas sugeridas">
        {suggestions.map((suggestion) => (
          <button
            type="button"
            key={suggestion}
            onClick={() => sendMessage(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>

      <form
        className="chat-input"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <label className="sr-only" htmlFor="chat-question">
          Pergunta para a assistente financeira
        </label>
        <input
          id="chat-question"
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Pergunte sobre metas, gastos ou planejamento"
        />
        <button type="submit" disabled={!canSend}>
          Enviar
        </button>
      </form>
    </article>
  );
}
