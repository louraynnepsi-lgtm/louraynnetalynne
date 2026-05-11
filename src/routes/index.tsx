import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { whatsappLink, SITE } from "@/lib/site";
import { areas } from "@/lib/areas";
import { ArrowRight, Calendar, GraduationCap, MapPin, MessageCircle, ShieldCheck, Sparkles, User, Video } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/louraynne-hero.jpg";
import aboutImg from "@/assets/louraynne-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louraynne Talynne — Neuropsicóloga em Goiânia | Avaliação Neuropsicológica" },
      { name: "description", content: "Neuropsicóloga e psicóloga clínica em Goiânia. Avaliação neuropsicológica, laudo, reabilitação e psicoterapia (TCC) para crianças, adolescentes, adultos e idosos." },
      { property: "og:title", content: "Louraynne Talynne — Neuropsicóloga em Goiânia" },
      { property: "og:description", content: "Avaliação, diagnóstico e reabilitação neuropsicológica com acolhimento e embasamento científico." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Badge({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-foreground/80 backdrop-blur">
      <Icon size={14} className="text-accent" /> {children}
    </div>
  );
}

const steps = [
  { n: "01", t: "Entrevista inicial", d: "Acolhimento, escuta e compreensão da queixa principal e histórico." },
  { n: "02", t: "Investigação clínica", d: "Análise contextual, anamnese detalhada e definição das hipóteses." },
  { n: "03", t: "Aplicação de testes", d: "Bateria de instrumentos validados, conduzida com cuidado e ética." },
  { n: "04", t: "Emissão de laudo", d: "Documento técnico claro, com diagnóstico e considerações clínicas." },
  { n: "05", t: "Direcionamento e reabilitação", d: "Plano terapêutico individualizado e encaminhamentos necessários." },
];

const capacitacoes = [
  { title: "Graduação em Psicologia", desc: "Formação acadêmica em Psicologia." },
  { title: "Especialização em Neuropsicologia", desc: "Aprofundamento em avaliação e reabilitação neuropsicológica." },
  { title: "Capacitação em Terapia Cognitivo-Comportamental", desc: "Abordagem clínica baseada em evidências." },
  { title: "Cursos complementares", desc: "Atualização contínua em TDAH, TEA, transtornos de aprendizagem e altas habilidades." },
];

function Home() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Louraynne!%0A%0ANome: ${form.nome}%0AE-mail: ${form.email}%0A%0A${form.mensagem}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <span id="top" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background" />
        <div className="container-editorial grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {SITE.crp}
            </p>
            <h1 className="font-display text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Neuropsicóloga e <em className="not-italic text-accent">Psicóloga</em> Clínica
            </h1>
            <p className="mt-5 text-lg text-foreground/80 max-w-xl">
              Avaliação, diagnóstico e reabilitação neuropsicológica com acolhimento e embasamento científico.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">
              Atendimento individualizado para crianças, adolescentes, adultos e idosos, com investigação clínica completa e direcionamento terapêutico baseado em ciência.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium shadow-lg shadow-emerald-900/10 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} /> Agendar pelo WhatsApp
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#sobre" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                Conheça meu trabalho
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge icon={ShieldCheck}>7 anos de experiência</Badge>
              <Badge icon={Video}>Presencial e online</Badge>
              <Badge icon={Sparkles}>Avaliação e reabilitação</Badge>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-secondary to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary/60">
              <img
                src={heroImg}
                alt="Louraynne Talynne, neuropsicóloga e psicóloga clínica"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Sobre mim</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Louraynne Talynne</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {SITE.role} · {SITE.crp}
            </p>

            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Sou Louraynne Talynne, neuropsicóloga e psicóloga clínica com <strong className="text-primary">7 anos de experiência</strong>. Atuo com avaliação, diagnóstico e reabilitação neuropsicológica de crianças, adolescentes, adultos e idosos, além de psicoterapia baseada na Terapia Cognitivo-Comportamental.
              </p>
              <p>
                Meu trabalho une <em className="text-accent not-italic font-medium">acolhimento humano</em>, clareza clínica e embasamento científico. Acredito em um atendimento individualizado, ético e direcionado às necessidades únicas de cada paciente.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "7+", v: "anos de experiência clínica" },
                { k: "100%", v: "atendimento individualizado" },
                { k: "On/Off", v: "presencial e online" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-secondary/50 p-5">
                  <div className="font-display text-3xl text-primary">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-secondary to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={aboutImg}
                alt="Louraynne Talynne em consultório"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Áreas de Atuação</p>
            <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
              Cuidado clínico em diferentes etapas da vida
            </h2>
            <p className="mt-4 text-foreground/75">
              Atendimento técnico e humanizado, desenvolvido a partir das necessidades únicas de cada paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Processo</p>
            <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
              Como funciona a avaliação neuropsicológica
            </h2>
            <p className="mt-4 text-foreground/75">
              Um percurso clínico cuidadoso, do acolhimento inicial à entrega do laudo e direcionamento terapêutico.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-background p-6">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="mt-3 font-display text-lg text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CAPACITAÇÕES */}
      <section id="capacitacoes" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Capacitações</p>
            <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
              Formação e atualização contínua
            </h2>
            <p className="mt-4 text-foreground/75">
              A prática clínica é sustentada por estudo constante.
            </p>
          </div>

          <ol className="relative mt-12 border-l border-border pl-8 md:pl-10 space-y-6">
            {capacitacoes.map((it, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] md:-left-[50px] top-1 grid h-9 w-9 place-items-center rounded-full bg-background border border-border text-primary">
                  <GraduationCap size={16} />
                </span>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-display text-xl text-primary">{it.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{it.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Calendar size={28} className="text-accent" />
                <h3 className="mt-4 font-display text-2xl text-primary sm:text-3xl">Pronto para o primeiro passo?</h3>
                <p className="mt-3 text-sm text-foreground/75 max-w-xl">
                  Atendimento presencial em Goiânia/GO e online. Avaliação online disponível apenas para adultos (+18).
                </p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium hover:opacity-95"
              >
                <MessageCircle size={16} /> Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Contato</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Vamos conversar</h2>
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
