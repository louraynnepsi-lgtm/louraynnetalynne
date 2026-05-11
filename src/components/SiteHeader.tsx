import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import logoFull from "@/assets/logo-full.png";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#processo", label: "Processo" },
  { href: "#capacitacoes", label: "Capacitações" },
  { href: "#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center" onClick={() => setOpen(false)} aria-label={SITE.name}>
          <img src={logoFull} alt={`${SITE.name} — ${SITE.role}`} className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-white text-sm font-medium hover:opacity-95"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="container-editorial flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-white text-sm font-medium"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
