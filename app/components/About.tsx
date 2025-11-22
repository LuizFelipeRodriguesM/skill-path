export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
        Sobre o SkillPath
      </h2>
      <p className="mt-4 text-foreground/80 text-center max-w-3xl mx-auto">
        O SkillPath utiliza inteligência artificial para gerar trilhas de aprendizagem
        personalizadas com base no seu perfil, interesses e objetivos. Na versão atual (MVP),
        a recomendação é simulada por regras bem definidas — a arquitetura já está preparada
        para integrar IA real no futuro.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-white/15 bg-white/5 p-6">
          <h3 className="font-medium text-lg">Por que importa</h3>
          <p className="mt-3 text-sm text-foreground/70">
            O mercado evolui mais rápido do que conseguimos acompanhar. O SkillPath
            direciona seu estudo para o que realmente importa, economizando tempo.
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-white/5 p-6">
          <h3 className="font-medium text-lg">Como ajuda</h3>
          <p className="mt-3 text-sm text-foreground/70">
            Planos semanais práticos, com conteúdos gratuitos, focados em objetivos
            profissionais reais.
          </p>
        </div>
      </div>
    </section>
  );
}


