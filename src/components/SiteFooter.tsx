import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/60">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">L</span>
            <span className="font-display text-xl text-primary">{SITE.name}</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {SITE.role}. Atendimento humanizado, ético e baseado em ciência.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{SITE.crp}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-primary mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
            <li><a href="#areas" className="hover:text-primary">Áreas de Atuação</a></li>
            <li><a href="#processo" className="hover:text-primary">Processo</a></li>
            <li><a href="#capacitacoes" className="hover:text-primary">Capacitações</a></li>
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-primary mb-4">Contato</h3>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> {SITE.city}</li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                <Instagram size={16} className="text-accent" /> Instagram
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-editorial py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</span>
          <span>{SITE.crp}</span>
        </div>
      </div>
    </footer>
  );
}
