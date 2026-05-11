import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE, whatsappLink } from "@/lib/site";
import { MapPin, MessageCircle, Video, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Agende sua avaliação neuropsicológica em Goiânia" },
      { name: "description", content: "Atendimento presencial em Goiânia/GO e online. Avaliação online apenas para adultos (+18). Fale pelo WhatsApp." },
      { property: "og:title", content: "Contato — Louraynne Talynne" },
      { property: "og:description", content: "Acolhimento, clareza e direcionamento terapêutico." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Louraynne!%0A%0ANome: ${form.nome}%0AE-mail: ${form.email}%0A%0A${form.mensagem}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Contato</p>
            <h1 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              Vamos conversar
            </h1>
            <p className="mt-5 text-foreground/75">
              Atendimento presencial e online com foco em acolhimento, clareza e direcionamento terapêutico.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-accent" /> {SITE.city}</li>
              <li className="flex items-center gap-3"><User size={18} className="text-accent" /> Atendimento particular</li>
              <li className="flex items-center gap-3"><Video size={18} className="text-accent" /> Presencial e online</li>
              <li className="flex items-center gap-3"><MessageCircle size={18} className="text-accent" /> Avaliação online apenas para adultos (+18)</li>
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium hover:opacity-95"
            >
              <MessageCircle size={18} /> Falar pelo WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground">{SITE.crp}</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-secondary/40 p-7 md:p-9 space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Nome</label>
              <input
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent resize-none"
                placeholder="Conte um pouco sobre sua demanda"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
