import { Youtube, Instagram, Facebook } from "lucide-react";

const col1 = [
  { label: "É a escolha certa para você?", href: "#" },
  { label: "Como ajudamos", href: "#" },
  { label: "Conheça a equipe", href: "#" },
];

const col2 = [
  { label: "Seus primeiros passos", href: "#" },
  { label: "Para Médicos e Encaminhamentos", href: "#" },
  { label: "Contato", href: "#agendar" },
];

export function Footer() {
  return (
    <footer className="w-full pt-10">
      <div className="w-full rounded-t-[40px] bg-gradient-to-r from-[#032330] to-[#128a93] text-white lg:rounded-t-[80px]">
        <div className="mx-auto w-full max-w-[1400px] px-8 py-12 sm:px-16 sm:py-16 lg:px-24 lg:pt-20 lg:pb-12">
          {/* Top Section */}
          <div className="flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-center">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" fill="none">
                <path d="M10 6v20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <path d="M22 6v20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <path d="M10 18c4-5 8-5 12 0" stroke="#2cd4d4" strokeWidth="3" strokeLinecap="round" />
                <circle cx="16" cy="11" r="2.5" fill="#2cd4d4" />
              </svg>
              <span className="font-display text-[26px] font-bold tracking-tight text-white">
                Clínica <span className="font-normal text-[#2cd4d4]">Horizon</span>
              </span>
            </div>
            <a
              href="mailto:contato@clinicahorizon.com"
              className="font-display text-[20px] font-light tracking-wide text-white transition-opacity hover:opacity-80 lg:text-[24px]"
            >
              contato@clinicahorizon.com
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/30"></div>

          {/* Middle Section */}
          <div className="grid gap-16 pt-16 lg:grid-cols-[1fr_auto] lg:gap-32 lg:pt-20">
            <div className="max-w-md">
              <h2 className="font-display text-[32px] font-bold leading-[1.2] text-white lg:text-[38px]">
                Pronto para começar?<br />
                Vamos nos conectar hoje.
              </h2>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:gap-24">
              <div>
                <h3 className="mb-6 font-display text-[17px] font-semibold text-white">Navegação</h3>
                <ul className="flex flex-col gap-5">
                  {col1.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[14px] font-medium text-white/90 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 font-display text-[17px] font-semibold text-white">Navegação</h3>
                <ul className="flex flex-col gap-5">
                  {col2.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[14px] font-medium text-white/90 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-24 flex flex-col items-center justify-between gap-6 sm:flex-row lg:mt-32">
            <p className="text-[13px] font-medium text-white/80">
              Copyright 2026 © Clínica Horizon • Todos os direitos reservados
            </p>
            <div className="flex items-center gap-5 text-white">
              <a href="#" className="transition-transform hover:scale-110">
                <Youtube className="h-[18px] w-[18px]" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <Facebook className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
