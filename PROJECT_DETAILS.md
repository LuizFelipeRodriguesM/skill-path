📘 NOME DO PROJETO

SkillPath – IA que cria trilhas de aprendizagem para as carreiras do futuro

⸻

🚀 SLOGAN

“Aprenda hoje o que o futuro vai exigir amanhã.”

⸻

🎯 PROBLEMA

O mercado de trabalho está evoluindo mais rápido do que a capacidade das pessoas de aprender.
Novas tecnologias surgem diariamente e grande parte dos jovens não sabe:
	•	que habilidades desenvolver
	•	como se preparar para carreiras que ainda estão nascendo
	•	onde estudar
	•	por onde começar

Empresas sofrem com falta de talentos capacitados, e pessoas sofrem com falta de direcionamento.

⸻

💡 SOLUÇÃO

SkillPath é uma plataforma que utiliza inteligência artificial para gerar trilhas de aprendizagem personalizadas com base no perfil, nos interesses e nos objetivos profissionais de cada usuário.

É uma forma simples, rápida e inclusiva de preparar jovens para carreiras emergentes — mesmo aquelas que ainda estão sendo criadas.

⸻

⚙ COMO FUNCIONA (fluxo do usuário)
	1.	O usuário acessa a landing page e entende o propósito.
	2.	Preenche um formulário rápido com:
	•	área de interesse
	•	nível atual
	•	tempo disponível
	•	objetivo profissional
	3.	A IA (simulada no MVP, real no futuro) gera uma trilha personalizada.
	4.	O usuário recebe:
	•	plano semanal de estudos
	•	links de conteúdo gratuito (docs, vídeos, cursos)
	•	recomendações de evolução
	5.	Ele pode salvar ou revisar sua trilha (botão meramente ilustrativo na V1).

⸻

🧩 FUNCIONALIDADES DA V1 (MVP – 1 semana)

1. Landing Page
	•	Explicação clara da proposta
	•	Seção “Como funciona”
	•	Seção “Por que importa”
	•	Botão “Criar minha trilha”

2. Formulário de Perfil

Inputs essenciais:
	•	Objetivo profissional
	•	Área de interesse
	•	Nível atual
	•	Tempo disponível

3. Geração de Trilha Personalizada (simulada)

Com base no input do usuário, você mostra uma trilha como:

Exemplo – Área: Desenvolvimento Web
	•	Semana 1: Fundamentos (HTML, CSS, lógica)
	•	Semana 2: JavaScript + prática
	•	Semana 3: Projeto simples
	•	Semana 4: Git, versionamento e deploy

Exemplo – Área: IA
	•	Semana 1: Python básico
	•	Semana 2: NumPy, Pandas
	•	Semana 3: Machine Learning (conceitos)
	•	Semana 4: Projeto simples com IA generativa

4. Página da Trilha Gerada

Com:
	•	Título
	•	Descrição
	•	Tarefas por semana
	•	Recomendações da IA
	•	Links de estudo
	•	Botão “Salvar trilha” (fake)

Visual limpo e profissional. Você domina isso.

⸻

📄 DOCUMENTO DE VISÃO (V1 – entregar para professor)

Título: SkillPath — Plataforma de Reskilling Personalizado com IA

Responsável: Luiz Felipe Rodrigues

1. Contexto

O futuro do trabalho exige aprendizado contínuo, novas habilidades e adaptação constante. Jovens e empresas enfrentam desafios para acompanhar esse ritmo acelerado. Reskilling e upskilling tornam-se elementos essenciais na construção de carreiras sustentáveis.

2. Problema

Faltam ferramentas acessíveis, personalizadas e alinhadas às tendências do mercado para orientar estudantes e profissionais iniciantes em jornadas de desenvolvimento. A maioria estuda sem direção clara e perde tempo com conteúdos desconectados de seus objetivos.

3. Solução

O SkillPath utiliza inteligência artificial para recomendar trilhas de aprendizagem personalizadas. Na V1, a IA é simulada por lógica de programação, mas a estrutura já está preparada para suportar IA real no futuro.

4. Objetivos do Projeto
	•	Apoiar aprendizado contínuo
	•	Facilitar entrada em carreiras emergentes
	•	Democratizar acesso ao conhecimento
	•	Criar uma experiência simples, rápida e prática

5. Público-Alvo

Jovens de 15–29 anos em busca de direção profissional
Estudantes
Profissionais em transição de carreira

6. Diferenciais
	•	Personalização com IA
	•	Conteúdo acessível e gratuito
	•	Simplicidade de uso
	•	Visual moderno e direto
	•	Foco prático e orientado ao mercado

⸻

🎨 WIREFRAME DAS TELAS (para você montar fácil)

1. Landing Page

[Header]
SkillPath | Sobre | Como funciona | Criar trilha

[Hero]
Titulo + slogan
Botão: Criar minha trilha

[Seção 1 – Sobre]
Texto explicativo

[Seção 2 – Como funciona]
Passo 1 → Passo 2 → Passo 3

[Seção 3 – Benefícios]
Cards: Personalização / IA / Futuro do Trabalho

[Footer]
Links e créditos

2. Formulário

Título: Crie sua trilha de aprendizagem

Campo: Objetivo profissional
Campo: Área de interesse (select)
Campo: Nível atual
Campo: Tempo disponível

Botão: Gerar trilha

3. Página da Trilha

[Título: Trilha Personalizada]

[Card Semanas]
Semana 1 — ...
Semana 2 — ...
Semana 3 — ...
Semana 4 — ...

[Recomendações da IA]

[Botão: Salvar trilha]


⸻

🎤 PITCH DE 1 MINUTO (para apresentar oralmente)

“Olá, meu nome é Luiz e eu apresento o SkillPath, uma plataforma que usa inteligência artificial para criar trilhas de aprendizagem personalizadas e preparar jovens para as carreiras do futuro.

Hoje, o mercado muda mais rápido do que as pessoas conseguem aprender. Muitos não sabem por onde começar, o que estudar ou como direcionar seus esforços. Isso gera frustração e falta de oportunidades.

O SkillPath resolve isso de forma simples: o usuário responde a um pequeno formulário e a plataforma gera automaticamente uma trilha personalizada — organizada por semanas, com conteúdos acessíveis e focada no objetivo profissional de cada pessoa.

Na versão atual, desenvolvi uma landing page, o formulário de perfil e o módulo de geração de trilhas. A estrutura já está pronta para integrar IA real no futuro.

O SkillPath democratiza o reskilling, reduz desigualdades e ajuda jovens a se prepararem para carreiras que ainda nem existem. É uma solução prática, escalável e totalmente alinhada ao futuro do trabalho.”

⸻

🛠 IMPLEMENTAÇÃO V1 (Landing Page pronta)

1. Componentes criados (Next.js App Router + Tailwind)
   - `app/components/Hero.tsx`: Hero com slogan, CTA “Criar minha trilha” (ancora `#contact`), fundo com gradiente usando as cores da marca e efeito sutil de grid.
   - `app/components/About.tsx`: Seção “Sobre” com proposta e contexto do produto.
   - `app/components/Services.tsx`: “Como funciona” (3 passos) e “Benefícios” (3 cards).
   - `app/components/ContactUs.tsx`: Formulário (MVP) com os campos do perfil: Nome, Email, Objetivo, Área, Nível, Tempo. Simula envio (sem persistência).
   - `app/components/Footer.tsx`: Rodapé com navegação para âncoras da página.
   - `app/page.tsx`: Montagem da landing page na ordem: Hero → About → Services → ContactUs → Footer.

2. Design System (cores e temas)
   - Variáveis globais:
     - `--brand-primary: #71BBD4`
     - `--brand-secondary: #345F97`
     - `--background`/`--foreground` com suporte a light/dark por `prefers-color-scheme`.
   - Classes utilitárias Tailwind v4 + CSS custom:
     - Classe `.glass-container` aplicada às seções principais para glassmorphism (blur, transparência, borda e sombra).
     - Gradientes e realces usam as cores de marca, com contraste adequado no dark e light.

3. Acessibilidade e UX
   - Estados de foco visíveis em botões e inputs.
   - Textos com contraste elevado e uso moderado de transparências.
   - Layout responsivo (mobile-first), grids ajustáveis por breakpoint.

4. Extensibilidade (próximos passos sugeridos)
   - Criar rota de formulário dedicada (`/form`) para geração da trilha e página de resultado (`/trilha`).
   - Integrar persistência (ex.: Supabase/Prisma + Postgres) e autenticação (ex.: NextAuth).
   - Conectar a um provedor de IA (ex.: OpenAI/Anthropic) para recomendação real.
   - Telemetria básica (ex.: Vercel Analytics) e testes de acessibilidade (ex.: axe).

5. Locais relevantes no código
   - Estilos globais: `app/globals.css` (variáveis, tema, `.glass-container`).
   - Metadados do app: `app/layout.tsx` (título e descrição ajustados para SkillPath).
   - Seções da landing: `app/components/*.tsx`.

6. Ancoragem de navegação
   - `#about`, `#services`, `#contact` já configuradas para navegação interna e CTAs.

⸻

🤖 AGENTE GERADOR DE FORMULÁRIO (MVP)

Objetivo
	•	Propor e padronizar um formulário curto para captar dados mínimos e opcionais do usuário, a fim de gerar uma trilha de aprendizagem personalizada.

Escopo na V1
	•	Formulário com no máximo 6 campos.
	•	Campos essenciais: Objetivo profissional, Área de interesse, Nível atual, Tempo disponível (horas/semana).
	•	Campos opcionais: Prazo (semanas/meses), Formato preferido de estudo (vídeo/texto/curso), Disponibilidade semanal detalhada, Idioma.

Fluxo
	1.	Usuário clica em “Criar minha trilha” e é direcionado para `/form`.
	2.	Agente define/entrega o schema do formulário (JSON) com rótulos, tipos, validações e opções.
	3.	Usuário preenche e envia; o módulo de geração (simulado) cria a trilha e redireciona para `/trilha`.

Regras do agente
	•	Usar linguagem simples e inclusiva (pt-BR), rótulos curtos e descrições objetivas.
	•	Validar campos: 
		–	Nível: { iniciante, intermediário, avançado }.
		–	Tempo semanal: 1–20 horas.
		–	Prazo (opcional): 2–26 semanas.
	•	Retornar sempre JSON válido (sem comentários) com `version`, `title`, `fields` e `ui`.
	•	Nunca ultrapassar 6 campos totais na V1.

Contrato (JSON – schema do formulário)

```json
{
  "version": "1.0",
  "title": "Crie sua trilha de aprendizagem",
  "fields": [
    {
      "id": "objective",
      "label": "Objetivo profissional",
      "type": "text",
      "placeholder": "Ex.: Desenvolvedor Frontend júnior",
      "required": true,
      "maxLength": 120
    },
    {
      "id": "area",
      "label": "Área de interesse",
      "type": "select",
      "options": ["Desenvolvimento Web", "IA/ML", "Dados", "Design", "DevOps"],
      "required": true
    },
    {
      "id": "level",
      "label": "Nível atual",
      "type": "select",
      "options": ["iniciante", "intermediário", "avançado"],
      "required": true
    },
    {
      "id": "weeklyTime",
      "label": "Tempo disponível (h/semana)",
      "type": "number",
      "min": 1,
      "max": 20,
      "required": true
    },
    {
      "id": "deadlineWeeks",
      "label": "Prazo (semanas)",
      "type": "number",
      "min": 2,
      "max": 26,
      "required": false
    },
    {
      "id": "preferredFormat",
      "label": "Formato preferido",
      "type": "multi-select",
      "options": ["vídeo", "artigo", "curso", "documentação"],
      "required": false
    }
  ],
  "ui": {
    "layout": "two-column",
    "submitLabel": "Gerar trilha"
  }
}
```

Prompt base do agente (sugestão)

```text
Você é um agente que projeta formulários curtos para captar dados que permitirão gerar uma trilha de aprendizagem personalizada. Responda SOMENTE com JSON válido seguindo o contrato abaixo e em pt-BR. Máximo de 6 campos.

Contrato:
{
  "version": "string",
  "title": "string",
  "fields": [ { "id": "string", "label": "string", "type": "text|number|select|multi-select", "required": true|false, "placeholder?": "string", "options?": ["string"], "min?": number, "max?": number, "maxLength?": number } ],
  "ui": { "layout": "one-column|two-column", "submitLabel": "string" }
}

Contexto do produto: SkillPath gera trilhas semanais com conteúdos gratuitos com base em objetivo, área, nível e tempo disponível do usuário.
```

Próximo passo recomendado (execução)
	•	Criar a rota `/form` que renderiza o schema acima e valida entradas.
	•	Implementar o gerador simulado de trilha que consome o payload e redireciona para `/trilha`.
	•	Armazenar submissões em memória/localStorage e preparar integração futura com banco/IA real.