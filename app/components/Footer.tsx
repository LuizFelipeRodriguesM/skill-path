export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-60" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} SkillPath. Todos os direitos reservados.</p>
          <nav className="flex items-center gap-5">
            <a href="#about" className="hover:text-foreground/90">Sobre</a>
            <a href="#services" className="hover:text-foreground/90">Como funciona</a>
            <a href="#contact" className="hover:text-foreground/90">Criar trilha</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}


