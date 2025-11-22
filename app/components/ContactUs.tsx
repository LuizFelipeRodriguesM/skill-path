import LearningPathGenerator from "./LearningPathGenerator";

export default function ContactUs() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="md:flex md:items-start md:justify-between md:gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Crie sua trilha de aprendizagem
          </h2>
          <p className="mt-4 text-foreground/80 text-lg">
            Preencha o formulário e nossa IA gerará uma trilha personalizada com conteúdos gratuitos, cronograma semanal e recomendações exclusivas.
          </p>
          <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-6 text-sm text-foreground/70">
            Campos considerados:
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Objetivo profissional</li>
              <li>Área de interesse</li>
              <li>Nível atual</li>
              <li>Tempo disponível</li>
              <li>Prazo (opcional)</li>
              <li>Formato preferido (opcional)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <LearningPathGenerator />
        </div>
      </div>
    </section>
  );
}


