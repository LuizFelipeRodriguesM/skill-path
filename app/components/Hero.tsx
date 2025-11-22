 
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden h-screen">
      <header className="absolute inset-x-0 top-0 z-10 mt-8">
        <div className="mx-auto max-w-7xl px-8 py-6 relative flex items-center justify-center">
          <a href="#" className="absolute left-8 top-1/2 -translate-y-1/2 text-white font-semibold tracking-tight">
            SkillPath
          </a>
          <nav className="hidden md:flex items-center gap-14 text-sm text-foreground/80">
            <a href="#home" className="transition-colors hover:text-white">Início</a>
            <a href="#about" className="transition-colors hover:text-white">Sobre</a>
            <a href="#services" className="transition-colors hover:text-white">Serviços</a>
            <a href="#contact" className="transition-colors hover:text-white">Contato</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex absolute right-8 top-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[var(--brand-secondary)]/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/60"
          >
            Criar minha trilha
          </a>
          <button
            aria-label="Abrir menu"
            className="md:hidden absolute right-8 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-foreground/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M4 7.5h16M4 12h16M4 16.5h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(113,187,212,0.18),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(52,95,151,0.18),transparent_40%)]" />
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-primary)]/20 blur-[120px]" />
        <div className="absolute -top-24 -left-24 h-[50vh] w-[50vh] rounded-full bg-[var(--brand-secondary)]/25 blur-[120px]" />
        <div className="absolute -bottom-24 left-1/2 h-[40vh] w-[90vw] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-black/60 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-8 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="rounded-2xl p-8 md:p-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs md:text-sm text-foreground/80 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
            SkillPath — IA para trilhas de aprendizagem
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Aprenda hoje o que o futuro<br className="hidden md:block" /> vai exigir amanhã
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-foreground/70">
            Trilha de estudos personalizada com IA. Simples, prática e focada no seu objetivo profissional.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--brand-secondary)]/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/60"
            >
              Criar minha trilha
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground/90 shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


