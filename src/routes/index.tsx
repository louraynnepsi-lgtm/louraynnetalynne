import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { whatsappLink, SITE } from "@/lib/site";
import { areas } from "@/lib/areas";
import { ArrowRight, Calendar, MessageCircle, ShieldCheck, Sparkles, Video } from "lucide-react";
import heroImg from "@/assets/louraynne-hero.jpg";

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

function Home() {
  return (
    <Layout>
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
              <Link to="/sobre" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                Conheça meu trabalho
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{SITE.crp}</p>

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

      {/* ÁREAS */}
      <section className="py-20 md:py-28">
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
              <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md hover:shadow-pink/5">
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

      {/* COMO FUNCIONA */}
      <section className="bg-secondary/60 py-20 md:py-28">
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

      {/* SOBRE RESUMIDO */}
      <section className="py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Sobre mim</p>
            <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
              Acolhimento humano e clareza clínica
            </h2>
            <p className="mt-5 text-foreground/80">
              Sou Louraynne Talynne, neuropsicóloga e psicóloga clínica com 7 anos de experiência. Atuo com avaliação, diagnóstico e reabilitação neuropsicológica, além de psicoterapia baseada na Terapia Cognitivo-Comportamental.
            </p>
            <Link
              to="/sobre"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Saiba mais <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-3xl border border-border bg-secondary/60 p-8 md:p-10">
            <Calendar size={28} className="text-accent" />
            <h3 className="mt-4 font-display text-2xl text-primary">Pronto para o primeiro passo?</h3>
            <p className="mt-3 text-sm text-foreground/75">
              Atendimento presencial em Goiânia/GO e online. Avaliação online disponível apenas para adultos (+18).
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-white text-sm font-medium hover:opacity-95"
            >
              <MessageCircle size={16} /> Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS placeholder */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="container-editorial text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Provas sociais</p>
          <h2 className="mt-3 font-display text-3xl text-primary">Depoimentos em breve</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/70">
            Espaço reservado para experiências reais de pacientes que autorizaram a divulgação dos seus relatos.
          </p>
        </div>
      </section>
    </Layout>
  );
}
