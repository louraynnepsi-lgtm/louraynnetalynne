import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

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
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">L</span>
          <span className="hidden sm:block font-display text-lg leading-tight text-primary">
            {SITE.name}
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-sans">
              {SITE.crp}
            </span>
          </span>
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
