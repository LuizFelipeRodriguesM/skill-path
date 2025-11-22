import Groq from "groq-sdk";
import { env } from "@/app/lib/env";
import type { GroqChatMessage, LearningPathResponse } from "../types/learning-path.types";
import type { ValidatedUserProfile } from "../validators/learning-path.validator";

/**
 * Service for interacting with GROQ API
 */
export class GroqService {
  private client: Groq;
  private readonly model = "llama-3.3-70b-versatile";

  constructor() {
    this.client = new Groq({
      apiKey: env.GROQ_API_KEY,
    });
  }

  /**
   * Generate a learning path based on user profile
   */
  async generateLearningPath(
    profile: ValidatedUserProfile
  ): Promise<LearningPathResponse> {
    const systemPrompt = this.buildSystemPrompt();
    const userPrompt = this.buildUserPrompt(profile);

    const messages: GroqChatMessage[] = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ];

    try {
      const completion = await this.client.chat.completions.create({
        messages,
        model: this.model,
        temperature: 0.7,
        max_tokens: 2500,
        top_p: 0.9,
      });

      const markdown = completion.choices[0]?.message?.content || "";

      return {
        markdown,
        generatedAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error calling GROQ API:", error);
      throw new Error("Falha ao gerar trilha de aprendizagem");
    }
  }

  /**
   * Build system prompt for the AI agent
   */
  private buildSystemPrompt(): string {
    return `Você é um especialista em educação e desenvolvimento de carreira que cria trilhas de aprendizagem personalizadas para o SkillPath.

Sua missão é gerar uma trilha estruturada, prática e motivadora em formato Markdown seguindo EXATAMENTE esta estrutura:

# 🎯 Sua Trilha de Aprendizagem Personalizada

## 📋 Perfil e Objetivos
[Resuma o objetivo profissional, área escolhida e contexto do usuário de forma motivadora]

## 🗓️ Plano Semanal

### Semana 1: [Título da Semana]
**Objetivo:** [objetivo claro da semana]

**Conteúdo:**
- [Tópico 1 com breve explicação]
- [Tópico 2 com breve explicação]
- [Tópico 3 com breve explicação]

**Recursos Recomendados:**
- 📺 [Link de vídeo relevante]
- 📄 [Link de artigo/documentação]
- 💻 [Link de curso/tutorial]

**Entrega Prática:**
[Pequeno projeto ou exercício para aplicar o conhecimento]

---

[Repita para 3-4 semanas dependendo do prazo e tempo disponível]

## 💡 Recomendações da IA

### Para Maximizar Seu Aprendizado:
- [Dica 1 personalizada]
- [Dica 2 personalizada]
- [Dica 3 personalizada]

### Próximos Passos Após Concluir:
- [Sugestão 1 de evolução]
- [Sugestão 2 de evolução]

## ❓ Perguntas para Reflexão
1. [Pergunta reflexiva sobre objetivos]
2. [Pergunta sobre desafios esperados]
3. [Pergunta sobre aplicação prática]

---

**Lembre-se:** O aprendizado é uma jornada. Celebre cada pequena conquista! 🚀

IMPORTANTE:
- Use APENAS recursos gratuitos e acessíveis (YouTube, MDN, freeCodeCamp, Coursera gratuito, documentações oficiais)
- Links devem ser reais e funcionais
- Adapte o ritmo ao tempo disponível do usuário
- Seja específico e prático
- Use emojis para tornar visualmente agradável
- Linguagem motivadora e inclusiva`;
  }

  /**
   * Build user prompt with profile data
   */
  private buildUserPrompt(profile: ValidatedUserProfile): string {
    const formatsList = profile.preferredFormat?.join(", ") || "qualquer formato";
    const deadline = profile.deadlineWeeks
      ? `${profile.deadlineWeeks} semanas`
      : "flexível";

    return `Crie uma trilha de aprendizagem personalizada com os seguintes dados:

**Objetivo Profissional:** ${profile.objective}
**Área de Interesse:** ${profile.area}
**Nível Atual:** ${profile.level}
**Tempo Disponível:** ${profile.weeklyTime}h por semana
**Prazo:** ${deadline}
**Formato Preferido:** ${formatsList}

Gere uma trilha focada, realista e motivadora que leve a pessoa do ponto atual até o objetivo dela.`;
  }
}

// Singleton instance
export const groqService = new GroqService();

