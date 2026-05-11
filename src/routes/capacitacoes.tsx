import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/capacitacoes")({
  head: () => ({
    meta: [
      { title: "Capacitações — Louraynne Talynne | Neuropsicóloga Goiânia" },
      { name: "description", content: "Formações, especializações e capacitações em neuropsicologia, reabilitação cognitiva e Terapia Cognitivo-Comportamental." },
      { property: "og:title", content: "Capacitações — Louraynne Talynne" },
      { property: "og:description", content: "Formação clínica e científica contínua." },
    ],
  }),
  component: Capacitacoes,
});

const items = [
  { year: "—", title: "Graduação em Psicologia", desc: "Formação acadêmica em Psicologia." },
  { year: "—", title: "Especialização em Neuropsicologia", desc: "Aprofundamento em avaliação e reabilitação neuropsicológica." },
  { year: "—", title: "Capacitação em Terapia Cognitivo-Comportamental", desc: "Abordagem clínica baseada em evidências." },
  { year: "—", title: "Cursos complementares", desc: "Atualização contínua em TDAH, TEA, transtornos de aprendizagem e altas habilidades." },
];

function Capacitacoes() {
  return (
    <Layout>
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Capacitações</p>
          <h1 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
            Formação e atualização contínua
          </h1>
          <p className="mt-5 text-foreground/75">
            A prática clínica é sustentada por estudo constante. Abaixo, um panorama da minha trajetória de formação — em breve, conteúdo atualizado com detalhes completos.
          </p>
        </div>

        <ol className="relative mt-14 border-l border-border pl-8 md:pl-10 space-y-8">
          {items.map((it, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] md:-left-[50px] top-1 grid h-9 w-9 place-items-center rounded-full bg-secondary border border-border text-primary">
                <GraduationCap size={16} />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-accent">{it.year}</div>
                <h2 className="mt-2 font-display text-xl text-primary">{it.title}</h2>
                <p className="mt-2 text-sm text-foreground/75">{it.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}
