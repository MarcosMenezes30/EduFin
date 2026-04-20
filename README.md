# EduFin

> Plataforma de gestão e educação financeira pessoal — MVP demonstrativo

---

## Visão geral

A **EduFin** é um MVP pensado para mostrar, de forma visual e objetiva, como uma plataforma pode ajudar pessoas a entender sua vida financeira, acompanhar metas e receber orientações educativas conectadas ao próprio comportamento de consumo.

O protótipo não é apenas um painel de gastos. É a combinação entre **análise financeira acessível** e **educação contextualizada** — entregando ao usuário clareza, direção e aprendizado no mesmo lugar.

---

## O que o MVP entrega

| Funcionalidade | Descrição |
|---|---|
| 📊 Dashboard financeiro | Receita, despesas, saldo projetado e taxa de poupança em um painel único |
| 🔍 Leitura de atenção | Identificação da principal oportunidade de melhoria financeira |
| 🍕 Distribuição por categoria | Gráfico visual dos gastos por tipo |
| 🧾 Custos recentes | Lista dos principais lançamentos para leitura rápida |
| 🎯 Metas com progresso | Acompanhamento visual de objetivos como reserva de emergência, viagem e equipamentos |
| 📈 Indicadores ganho × gasto | Relação entre receita e despesa e potencial de aporte |
| 📚 Educação contextualizada | Cards com recomendações de conteúdo conectadas à situação financeira do usuário |
| 🤖 Mock de chatbot com IA | Demonstração visual da futura camada de assistência com LLM |

---

## Por que essas funcionalidades foram priorizadas

### Clareza antes de sofisticação
O primeiro valor percebido pelo usuário é enxergar rapidamente sua situação atual. A visão consolidada gera entendimento imediato e aumenta a confiança no produto.

### Metas como condutoras de comportamento
A plataforma não serve apenas para "olhar gastos". Metas com progresso visual conduzem o usuário a objetivos concretos — reserva de emergência, qualificação profissional, aquisição de bens.

### Educação como diferencial estratégico
O produto não apenas informa: ele orienta. Mesmo no MVP, isso se expressa por meio de recomendações educativas curtas, acionáveis e conectadas ao contexto financeiro exibido.

### Arquitetura preparada para crescer
A base foi estruturada em camadas desde o início para facilitar manutenção, testes, troca de fontes de dados e adição futura de inteligência artificial, autenticação e integrações — sem retrabalho estrutural.

---

## Dores que a solução resolve

| Dor | Funcionalidade | Ganho gerado |
|---|---|---|
| Falta de visibilidade sobre a própria situação financeira | Dashboard com resumo do período | Entende de imediato quanto entra, quanto sai e qual o saldo |
| Dificuldade para identificar excessos e padrões de gasto | Distribuição de despesas por categoria | Percebe onde está o maior consumo e age com mais consciência |
| Sensação de que poupar é um objetivo distante | Metas com barra de progresso | Objetivos ganham acompanhamento visual e motivador |
| Ausência de orientação prática no momento da decisão | Cards educativos contextualizados | Recebe aprendizados acionáveis sem precisar buscar informação fora da plataforma |
| Ferramentas que mostram dados, mas não educam | Combinação entre análise e educação financeira | Amplia autonomia, maturidade financeira e possibilidade de mudança de comportamento |

---

## Stack e arquitetura

### Tecnologias do MVP

- **React + TypeScript** — interface e tipagem do projeto
- **Vite** — desenvolvimento rápido e build enxuto
- **CSS responsivo** — suporte a desktop e mobile

### Arquitetura em camadas

```
src/
├── domain/          # Entidades, contratos de repositório e casos de uso
├── application/     # Mapeamento entre domínio e interface
├── infrastructure/  # Implementações concretas (repositório em memória com dados simulados)
└── presentation/    # Hooks e componentes de UI
```

Essa organização permite substituir a fonte de dados simulada por uma API real sem reescrever a lógica principal da aplicação.

---

## Como executar

```bash
npm install
npm run dev
```

---

## Evolução recomendada

### Stack sugerida para o produto completo

| Camada | Tecnologia |
|---|---|
| API e regras de negócio | Node.js |
| Persistência | PostgreSQL |
| Cache e performance | Redis |
| Ingestão de transações | Open Finance / conectores bancários |
| Inteligência e personalização | LLMs supervisionados |
| Recomendação de conteúdo | Motor de recomendação por perfil e comportamento |
| Observabilidade | Ferramentas de BI e monitoramento |

### Desafios e estratégias

**Dados financeiros confiáveis**
Iniciar com importação manual e evoluir para integrações Open Finance com validação e conciliação de dados.

**Recomendações realmente úteis**
Combinar regras de negócio explícitas com LLMs supervisionados, mantendo rastreabilidade e revisão humana.

**Educar sem sobrecarregar**
Entregar conteúdos curtos, acionáveis e contextualizados ao momento financeiro da pessoa.

**Segurança e privacidade**
Criptografia, controle de acesso, trilhas de auditoria e política clara de governança de dados.

### Próximos passos sugeridos

1. Cadastro e autenticação de usuários
2. Persistência de histórico financeiro e metas em banco de dados
3. Importação manual ou automática de transações
4. Trilhas educativas personalizadas por perfil
5. Motor de insights com IA e explicações contextualizadas