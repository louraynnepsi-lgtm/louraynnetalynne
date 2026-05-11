import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE, whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";
import aboutImg from "@/assets/louraynne-about.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Louraynne Talynne | Neuropsicóloga em Goiânia" },
      { name: "description", content: "Conheça Louraynne Talynne, neuropsicóloga e psicóloga clínica em Goiânia, com 7 anos de experiência em avaliação, diagnóstico e reabilitação neuropsicológica." },
      { property: "og:title", content: "Sobre — Louraynne Talynne" },
      { property: "og:description", content: "Atendimento humano, ético e baseado em ciência para crianças, adolescentes, adultos e idosos." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Layout>
      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Sobre mim</p>
            <h1 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              Louraynne Talynne
            </h1>
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

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-white font-medium hover:opacity-95"
            >
              <MessageCircle size={18} /> Conversar no WhatsApp
            </a>
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
    </Layout>
  );
}
