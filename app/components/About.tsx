export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="glass-container rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Sobre o SkillPath
        </h2>
        <p className="mt-4 text-foreground/80">
          O SkillPath utiliza inteligência artificial para gerar trilhas de aprendizagem
          personalizadas com base no seu perfil, interesses e objetivos. Na versão atual (MVP),
          a recomendação é simulada por regras bem definidas — a arquitetura já está preparada
          para integrar IA real no futuro.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-white/5 p-5">
            <h3 className="font-medium">Por que importa</h3>
            <p className="mt-2 text-sm text-foreground/70">
              O mercado evolui mais rápido do que conseguimos acompanhar. O SkillPath
              direciona seu estudo para o que realmente importa, economizando tempo.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 p-5">
            <h3 className="font-medium">Como ajuda</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Planos semanais práticos, com conteúdos gratuitos, focados em objetivos
              profissionais reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


