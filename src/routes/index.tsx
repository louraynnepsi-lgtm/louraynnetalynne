import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { whatsappLink, SITE } from "@/lib/site";
import { areas } from "@/lib/areas";
import {
  ArrowRight,
  Calendar,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  User,
  Video,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/louraynne-hero.jpg";
import aboutImg from "@/assets/louraynne-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louraynne Talynne — Neuropsicóloga em Goiânia | Avaliação Neuropsicológica" },
      {
        name: "description",
        content:
          "Neuropsicóloga e psicóloga clínica em Goiânia. Avaliação neuropsicológica, laudo, reabilitação e psicoterapia (TCC) para crianças, adolescentes, adultos e idosos.",
      },
      { property: "og:title", content: "Louraynne Talynne — Neuropsicóloga em Goiânia" },
      {
        property: "og:description",
        content: "Avaliação, diagnóstico e reabilitação neuropsicológica com acolhimento e embasamento científico.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Badge({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs text-foreground/80">
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
  { title: "Graduação em Psicologia", desc: "Formação acadêmica sólida em Psicologia Clínica, com base teórica e prática supervisionada." },
  { title: "Especialização em Neuropsicologia", desc: "Aprofundamento em avaliação, diagnóstico e reabilitação neuropsicológica em diferentes faixas etárias." },
  { title: "Capacitação em Terapia Cognitivo-Comportamental (TCC)", desc: "Abordagem clínica baseada em evidências, voltada ao manejo da ansiedade e regulação emocional." },
  { title: "Cursos complementares e atualização contínua", desc: "Aperfeiçoamento permanente em TDAH, TEA, transtornos de aprendizagem e altas habilidades/superdotação." },
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

      {/* HERO — two-column split */}
      <section className="relative lg:h-[calc(100svh-72px)] lg:min-h-[600px] lg:max-h-[820px] lg:flex lg:flex-col">
        <div className="grid md:grid-cols-2 lg:flex-1 lg:min-h-0">
          {/* LEFT */}
          <div className="bg-background lg:flex lg:items-center">
            <div className="mx-auto max-w-xl px-5 py-10 md:px-10 md:py-12 lg:py-8 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-secondary px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {SITE.crp}
              </span>

              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-accent">
                Neuropsicologia clínica · Avaliação · Reabilitação · Psicoterapia
              </p>

              <h1 className="mt-3 font-display text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
                Cuidado clínico para a sua <em className="not-italic text-accent">saúde mental</em>
              </h1>

              <p className="mt-6 text-lg text-foreground/80">
                Avaliação neuropsicológica, reabilitação cognitiva e psicoterapia (TCC) com escuta atenta, ética profissional e ciência aplicada.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Atendimento para crianças, adolescentes, adultos e idosos — presencial em Goiânia/GO e online em todo o Brasil.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium shadow-lg shadow-emerald-900/10 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={18} /> Agendar minha avaliação
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#sobre" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                  Conheça meu trabalho
                </a>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Psicóloga registrada no CFP · {SITE.crp}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <Badge icon={ShieldCheck}>+7 anos de experiência clínica</Badge>
                <Badge icon={Video}>Presencial e online</Badge>
                <Badge icon={Sparkles}>Laudo técnico incluso</Badge>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-secondary">
            <div className="relative h-full min-h-[360px] md:min-h-[480px] lg:min-h-[560px]">
              <img
                src={heroImg}
                alt="Louraynne Talynne, neuropsicóloga e psicóloga clínica em Goiânia"
                className="absolute inset-0 h-full w-full object-cover object-center md:object-top rounded-t-[2rem] md:rounded-tl-[2rem] md:rounded-tr-none"
              />
              <div className="absolute right-5 top-5 md:right-8 md:top-8 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-xs font-medium text-primary shadow-md">
                Goiânia/GO &amp; Online
              </div>
              <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 rounded-2xl bg-primary/95 backdrop-blur px-4 py-3 text-xs font-medium text-primary-foreground shadow-lg max-w-[80%]">
                <span className="block text-[10px] uppercase tracking-[0.18em] opacity-80">Espaço acolhedor</span>
                <span className="mt-0.5 block text-sm">Atendimento humano e individualizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="border-t border-secondary bg-background">
          <div className="container-editorial grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-secondary">
            {[
              { k: "7+", v: "Anos de experiência clínica" },
              { k: "7", v: "Especialidades atendidas" },
              { k: "On/Off", v: "Presencial e online" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-8 text-center">
                <div className="font-display text-4xl text-primary">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
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
                Sou Louraynne Talynne, neuropsicóloga e psicóloga clínica com mais de <strong className="text-primary">7 anos de experiência</strong> dedicados ao cuidado integral da saúde mental. Atendo crianças, adolescentes, adultos e idosos em todas as fases da vida.
              </p>
              <p>
                Atuo com <em className="text-accent not-italic font-medium">avaliação neuropsicológica, reabilitação cognitiva e psicoterapia</em> baseada na Terapia Cognitivo-Comportamental (TCC). Cada atendimento é construído com escuta ética, clareza diagnóstica e embasamento científico — porque cuidar da mente exige técnica, sensibilidade e responsabilidade.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "7+", v: "Anos de experiência" },
                { k: "Laudo", v: "Técnico incluso" },
                { k: "On/Off", v: "Presencial e online" },
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
                alt="[FOTO] Louraynne Talynne em consultório"
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
              Cuidado clínico em todas as fases da vida
            </h2>
            <p className="mt-4 text-foreground/75">
              Da infância à terceira idade, um atendimento técnico, ético e profundamente humano — direcionado às necessidades únicas de cada paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:lg:col-start-2 [&>*:nth-last-child(1)]:sm:col-span-2 [&>*:nth-last-child(1)]:lg:col-span-1">
            {areas.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
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
                  <p className="mt-3 text-sm text-foreground/75">{it.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Calendar size={28} className="text-accent" />
                <h3 className="mt-4 font-display text-2xl text-primary sm:text-3xl">Pronto para o primeiro passo?</h3>
                <p className="mt-3 text-sm text-foreground/75 max-w-xl">
                  Vagas limitadas para garantir um cuidado verdadeiramente individualizado. Atendimento presencial em Goiânia/GO e online em todo o Brasil.
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
              Estou aqui para ouvir você. Envie sua mensagem pelo WhatsApp ou pelo formulário ao lado e responderei pessoalmente, com toda a discrição que esse momento merece.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-accent mt-0.5 shrink-0" /> {SITE.address}</li>
              <li className="flex items-center gap-3"><User size={18} className="text-accent" /> Atendimento particular</li>
              <li className="flex items-center gap-3"><Video size={18} className="text-accent" /> Presencial e online</li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-accent" />
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {SITE.whatsappDisplay}
                </a>
              </li>
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium transition-opacity hover:opacity-95"
            >
              <MessageCircle size={16} /> Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* MAPA */}
      <section id="localizacao" className="scroll-mt-24 bg-secondary/40 py-16 md:py-20">
        <div className="container-editorial">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Onde atendo</p>
              <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">Consultório em Goiânia/GO</h2>
              <p className="mt-4 text-foreground/75">
                Espaço acolhedor e reservado, pensado para o cuidado clínico. Atendimento presencial em Goiânia e online em todo o Brasil.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-accent mt-0.5 shrink-0" /> {SITE.address}</li>
                <li className="flex items-center gap-3"><User size={18} className="text-accent" /> Recepção mediante agendamento</li>
              </ul>
              <a
                href={whatsappLink("Olá, Louraynne! Gostaria de agendar um atendimento no consultório.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-white font-medium hover:opacity-95"
              >
                <MessageCircle size={18} /> Agendar atendimento
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-md">
              <iframe
                title="Mapa — Rua C-154, 139, Jd. América, Goiânia/GO"
                src="https://www.google.com/maps?q=Rua%20C-154%2C%20139%2C%20Jardim%20Am%C3%A9rica%2C%20Goi%C3%A2nia%2C%20GO%2C%2074275-070&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] md:h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
