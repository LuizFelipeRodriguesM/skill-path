# 🚀 SkillPath - IA que cria trilhas de aprendizagem para as carreiras do futuro

*"Aprenda hoje o que o futuro vai exigir amanhã."*

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Sobre o Projeto

SkillPath é uma plataforma inovadora que utiliza inteligência artificial para gerar trilhas de aprendizagem personalizadas, preparando jovens para as carreiras emergentes do futuro. Através de um processo simples e intuitivo, o usuário responde a um breve questionário e recebe uma jornada estruturada de desenvolvimento profissional.

### 🎯 Problema que Resolve

O mercado de trabalho evolui mais rápido do que as pessoas conseguem aprender. Novas tecnologias surgem diariamente, mas muitos jovens não sabem:
- Que habilidades desenvolver
- Como se preparar para carreiras que ainda estão nascendo
- Onde estudar e por onde começar

### 💡 Nossa Solução

SkillPath democratiza o acesso ao conhecimento, oferecendo:
- **Personalização com IA**: Trilhas adaptadas ao perfil individual
- **Conteúdo Acessível**: Foco em recursos gratuitos e de qualidade
- **Abordagem Prática**: Projetos reais e aplicações imediatas
- **Simplicidade**: Processo intuitivo em poucos minutos

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológico

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4.0 com design system customizado
- **IA**: Groq SDK (Llama 3.3 70B)
- **Validação**: Zod para schemas robustos
- **Markdown**: React Markdown com sanitização (rehype-sanitize, remark-gfm)

### Estrutura do Projeto

```
skill-path/
├── app/                          # Next.js App Router
│   ├── api/generate-path/        # API Route para geração de trilhas
│   ├── components/               # Componentes React
│   │   ├── Hero.tsx             # Seção principal da landing
│   │   ├── LearningPathGenerator.tsx # Formulário multi-etapa
│   │   ├── DocumentationRenderer.tsx # Renderização de Markdown
│   │   └── ...
│   ├── plan/                    # Página de resultado da trilha
│   └── globals.css              # Estilos globais e variáveis CSS
├── api/                         # Backend/API services
│   ├── services/groq.service.ts # Serviço de integração com Groq
│   ├── types/                   # Tipos TypeScript
│   └── validators/              # Schemas de validação Zod
└── public/                      # Assets estáticos
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Chave da API Groq ([obter aqui](https://console.groq.com/))

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/skill-path.git
   cd skill-path
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```

   Adicione sua chave da API Groq:
   ```env
   GROQ_API_KEY=sua_chave_aqui
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📖 Como Usar

### Fluxo do Usuário

1. **Landing Page**: Apresentação da proposta e benefícios
2. **Formulário de Perfil**: Coleta de dados pessoais (nome, email, telefone)
3. **Questionário**: Objetivo profissional, área de interesse, nível atual, tempo disponível
4. **Geração da Trilha**: IA processa as informações e cria conteúdo personalizado
5. **Resultado**: Página com trilha estruturada em formato de documentação técnica

### Funcionalidades Principais

#### 🧠 Geração com IA
- Sistema de prompts otimizado para educação técnica
- Conteúdo estruturado em 8 tópicos principais
- Adaptação automática à experiência do usuário

#### 📚 Trilhas Personalizadas
- **Estrutura**: Visão geral → tópicos detalhados → conclusão
- **Conteúdo**: Conceitos fundamentais, exemplos práticos, projetos
- **Avaliação**: Quiz de 3 perguntas por tópico com correção automática

#### 🎨 Design System
- **Cores**: Azul primário (#71BBD4) e secundário (#345F97)
- **Glassmorphism**: Efeitos de transparência e blur
- **Responsivo**: Mobile-first com breakpoints otimizados

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 🤖 Integração com IA

### Serviço Groq

O sistema utiliza o modelo **Llama 3.3 70B Versatile** para gerar conteúdo educacional de alta qualidade. A implementação inclui:

- **System Prompt**: Template estruturado para conteúdo educacional
- **User Prompt**: Personalização baseada no perfil do usuário
- **Validação**: Schemas Zod para entrada e saída consistentes

### Exemplo de Prompt

```typescript
// System prompt estruturado para gerar conteúdo educacional
const systemPrompt = `Você é um especialista em educação que cria trilhas de aprendizagem personalizadas...

ESTRUTURA OBRIGATÓRIA:
# 🎯 [Nome da Trilha Personalizada]
## 📋 Visão Geral
[Introdução motivadora...]
// ... mais estrutura detalhada
`;
```

## 📱 Componentes Principais

### LearningPathGenerator
Formulário multi-etapa com:
- Validação em tempo real
- Estado persistente entre etapas
- UX otimizada com feedback visual

### DocumentationRenderer
Sistema de renderização de Markdown com:
- Sanitização de HTML
- Suporte a GitHub Flavored Markdown
- Syntax highlighting para código

### Design System
Variáveis CSS customizadas:
```css
--brand-primary: #71BBD4;
--brand-secondary: #345F97;
/* Suporte a dark/light mode */
```

## 🧪 Validação e Testes

### Schemas Zod
Validação robusta de dados:
```typescript
// Exemplo de schema de validação
const userProfileSchema = z.object({
  objective: z.string().min(5).max(120),
  area: z.enum(["Desenvolvimento Web", "IA/ML", "Dados", "Design", "DevOps"]),
  level: z.enum(["iniciante", "intermediário", "avançado"]),
  weeklyTime: z.number().min(1).max(20),
  // ... outros campos
});
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático em cada push

### Outras Opções
- **Netlify**: Funciona perfeitamente com Next.js
- **Railway**: Boa opção para full-stack
- **Docker**: Containerize para qualquer plataforma

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes
- Mantenha consistência com o design system existente
- Adicione testes para novas funcionalidades
- Siga as convenções de código (ESLint)
- Documente mudanças significativas

## 📈 Roadmap

### Próximas Features
- [ ] Sistema de autenticação (NextAuth)
- [ ] Persistência de dados (PostgreSQL + Prisma)
- [ ] Dashboard de progresso do usuário
- [ ] Comunidade e compartilhamento de trilhas
- [ ] Integração com plataformas de aprendizado
- [ ] Notificações e lembretes

### Melhorias Técnicas
- [ ] Testes automatizados (Jest + Testing Library)
- [ ] CI/CD pipeline
- [ ] Analytics e telemetria
- [ ] PWA capabilities
- [ ] Internacionalização (i18n)

## 📞 Suporte

Para suporte técnico ou sugestões:
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/skill-path/issues)
- **Discussions**: [GitHub Discussions](https://github.com/seu-usuario/skill-path/discussions)
- **Email**: contato@skillpath.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **Groq** por fornecer acesso à API de IA
- **Next.js** pela incrível framework
- **Tailwind CSS** pelo sistema de design utilitário
- **Comunidade Open Source** pelo ecossistema rico

---

**SkillPath** - Democratizando o acesso ao conhecimento e preparando jovens para o futuro do trabalho.

Desenvolvido com ❤️ por Equipe FIAP
