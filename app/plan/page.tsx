"use client";

import { useState } from "react";
import Link from "next/link";
import DocumentationRenderer from "../components/DocumentationRenderer";

export default function PlanPage() {
  const [markdown, setMarkdown] = useState<string>(() => {
    try {
      return sessionStorage.getItem("generatedPlanMarkdown") || "";
    } catch {
      // ignore access issues
      return "";
    }
  });

  if (!markdown) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          Nenhuma trilha encontrada
        </h1>
        <p className="text-foreground/80 mb-6">
          Gere uma trilha primeiro para visualizar o conteúdo aqui.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--brand-secondary)]/20 transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/60"
        >
          Voltar para início
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <DocumentationRenderer markdown={markdown} />
      
      <div className="mt-12 flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition"
        >
          ← Voltar para início
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[var(--brand-secondary)]/20 transition hover:brightness-[1.05]"
        >
          🖨️ Imprimir Trilha
        </button>
      </div>
    </section>
  );
}

