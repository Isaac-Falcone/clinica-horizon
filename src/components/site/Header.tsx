import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contato", href: "#agendar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-background/95 shadow-header backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" fill="none">
            <path d="M10 6v20" stroke="#1a2b33" strokeWidth="3" strokeLinecap="round" />
            <path d="M22 6v20" stroke="#1a2b33" strokeWidth="3" strokeLinecap="round" />
            <path d="M10 18c4-5 8-5 12 0" stroke="#1db5b2" strokeWidth="3" strokeLinecap="round" />
            <circle cx="16" cy="11" r="2.5" fill="#1db5b2" />
          </svg>
          <span className={`truncate font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
            Clínica <span className="text-primary">Horizon</span>
          </span>
        </a>

        <nav className={`hidden items-center gap-6 font-display text-sm font-medium lg:flex rounded-full px-6 py-2.5 transition-all duration-300 ${
          scrolled ? "bg-background/80 shadow-sm border border-border" : "bg-white/10 backdrop-blur-md border border-white/20"
        }`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors duration-300 hover:opacity-70 ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <a 
            href="#agendar" 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A2633] to-[#124258] px-6 py-2.5 font-display text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            Contato <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={`carousel-ctrl h-11 w-11 justify-self-end lg:hidden ${scrolled || open ? "" : "border-primary-foreground/40 text-primary-foreground"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-5 mb-4 rounded-card bg-card p-6 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-4 font-display font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground transition-opacity duration-300 ease-in-out hover:opacity-70"
              >
                {l.label}
              </a>
            ))}
            <a href="#agendar" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
