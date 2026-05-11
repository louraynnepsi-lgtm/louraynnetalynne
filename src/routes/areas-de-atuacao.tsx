import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { areas } from "@/lib/areas";
import { whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/areas-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — Avaliação Neuropsicológica, TDAH, TEA | Goiânia" },
      { name: "description", content: "Avaliação neuropsicológica, reabilitação, TDAH, TEA, transtornos de aprendizagem, ansiedade e altas habilidades. Atendimento em Goiânia e online." },
      { property: "og:title", content: "Áreas de Atuação — Louraynne Talynne" },
      { property: "og:description", content: "Cuidado clínico especializado em neuropsicologia e psicoterapia (TCC)." },
    ],
  }),
  component: Areas,
});

function Areas() {
  return (
    <Layout>
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Áreas de Atuação</p>
          <h1 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
            Especialidades clínicas
          </h1>
          <p className="mt-5 text-foreground/75">
            Atendimento técnico e humanizado em diferentes demandas neuropsicológicas e psicoterápicas, para crianças, adolescentes, adultos e idosos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 font-display text-xl text-primary">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-secondary/50 p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl text-primary">Ainda com dúvidas sobre qual atendimento?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/75">
            Posso te orientar sobre o melhor caminho clínico para a sua demanda ou da pessoa que você cuida.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-white font-medium hover:opacity-95"
          >
            <MessageCircle size={18} /> Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
