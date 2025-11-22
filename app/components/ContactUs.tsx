'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // MVP: simula envio
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="glass-container rounded-2xl p-8 md:p-12">
        <div className="md:flex md:items-start md:justify-between md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Crie sua trilha de aprendizagem
            </h2>
            <p className="mt-3 text-foreground/80">
              Preencha seus dados para receber uma trilha personalizada (simulada no MVP).
            </p>
            <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-5 text-sm text-foreground/70">
              Campos considerados:
              <ul className="mt-2 list-disc pl-5">
                <li>Objetivo profissional</li>
                <li>Área de interesse</li>
                <li>Nível atual</li>
                <li>Tempo disponível</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-foreground/80">Nome</label>
                <input
                  required
                  type="text"
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition placeholder:text-foreground/40 focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-foreground/80">Email</label>
                <input
                  required
                  type="email"
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition placeholder:text-foreground/40 focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                  placeholder="voce@email.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-foreground/80">Objetivo profissional</label>
                <input
                  required
                  type="text"
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition placeholder:text-foreground/40 focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                  placeholder="Ex.: Desenvolvedor Front-end"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-foreground/80">Área de interesse</label>
                <select
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Desenvolvimento Web</option>
                  <option>Inteligência Artificial</option>
                  <option>Ciência de Dados</option>
                  <option>Design de Produto</option>
                  <option>Cibersegurança</option>
                  <option>Cloud & DevOps</option>
                </select>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm text-foreground/80">Nível atual</label>
                  <select
                    required
                    className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-foreground/80">Tempo disponível</label>
                  <select
                    required
                    className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:ring-2 focus:ring-[var(--brand-primary)]/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Até 5h/semana</option>
                    <option>5–10h/semana</option>
                    <option>10–20h/semana</option>
                    <option>Mais de 20h/semana</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting || sent}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--brand-secondary)]/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/60 disabled:opacity-60"
              >
                {sent ? 'Enviado!' : submitting ? 'Enviando...' : 'Gerar trilha (MVP)'}
              </button>
              <p className="text-xs text-foreground/60">
                Observação: este envio é uma simulação para o MVP e não persiste dados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


