import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("changes the dashboard visualization by period and filters", async () => {
    const user = userEvent.setup();

    render(<App />);

    await screen.findByRole("heading", { name: /gestão financeira/i });

    await user.click(screen.getByRole("button", { name: /semanal/i }));
    expect((await screen.findAllByText(/últimos 7 dias/i)).length).toBeGreaterThan(0);

    await user.selectOptions(screen.getByLabelText(/categoria/i), "Lazer");
    expect((await screen.findAllByText(/lazer/i)).length).toBeGreaterThan(0);

    await user.selectOptions(screen.getByLabelText(/lançamentos/i), "expense");
    expect((await screen.findAllByText(/saídas/i)).length).toBeGreaterThan(0);
  });

  it("opens an education lesson from the content page", async () => {
    const user = userEvent.setup();

    render(<App />);

    await screen.findByRole("heading", { name: /gestão financeira/i });

    await user.click(screen.getAllByRole("button", { name: /^educação$/i })[0]);
    await user.click(
      screen.getByRole("button", {
        name: /como montar uma reserva sem travar o fluxo do mes/i,
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: /como montar uma reserva sem travar o fluxo do mes/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/defina o primeiro marco/i)).toBeInTheDocument();
    expect(screen.getByText(/próximo passo/i)).toBeInTheDocument();
  });

  it("opens a tutorial from the tutorials page", async () => {
    const user = userEvent.setup();

    render(<App />);

    await screen.findByRole("heading", { name: /gestão financeira/i });

    await user.click(screen.getAllByRole("button", { name: /^tutoriais$/i })[0]);
    await user.click(
      screen.getByRole("button", {
        name: /como utilizar a plataforma da melhor forma/i,
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: /como utilizar a plataforma da melhor forma/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/comece pelo dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar para tutoriais/i })).toBeInTheDocument();
  });

  it("renders the dashboard and sends a local chatbot message", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /gestão financeira/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/sua principal oportunidade/i)).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: /assistente/i })[0]);

    await user.type(
      screen.getByLabelText(/pergunta para a assistente financeira/i),
      "Como economizar mais?",
    );
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Como economizar mais?")).toBeInTheDocument();
    expect(screen.getAllByText(/com base no seu painel/i)).toHaveLength(1);
  });
});
