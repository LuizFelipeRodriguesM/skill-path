function Step({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white font-semibold">
          {index}
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-foreground/70">{description}</p>
    </div>
  );
}

function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-6">
      <h4 className="font-medium">{title}</h4>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="glass-container rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Como funciona</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step
            index={1}
            title="Conte sobre você"
            description="Informe objetivo profissional, área de interesse, nível e tempo disponível."
          />
          <Step
            index={2}
            title="Geramos sua trilha"
            description="Uma sequência semanal com conteúdos gratuitos, práticos e focados."
          />
          <Step
            index={3}
            title="Evolua de forma contínua"
            description="Acompanhe tarefas por semana e recomendações para avançar com confiança."
          />
        </div>

        <h3 className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
          Benefícios
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Benefit
            title="Personalização com IA"
            description="Recomendações alinhadas ao seu perfil e objetivos (simulado no MVP)."
          />
          <Benefit
            title="Conteúdo acessível"
            description="Links gratuitos e de qualidade: docs, vídeos, cursos e exercícios."
          />
          <Benefit
            title="Foco no mercado"
            description="Habilidades com demanda real: versionamento, projetos práticos e deploy."
          />
        </div>
      </div>
    </section>
  );
}


