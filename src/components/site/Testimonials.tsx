import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Eduardo Lago",
    role: "Paciente",
    initials: "EL",
    color: "bg-[#0076a8]",
    text: "Chegamos exaustos e sem saber conversar. Em poucos meses reaprendemos a nos ouvir — hoje o dia a dia é muito mais leve e generoso entre nós.",
  },
  {
    name: "Marina Alves",
    role: "Paciente há 2 anos",
    initials: "MA",
    color: "bg-[#b0008b]",
    text: "A ansiedade dominava minhas manhãs. A terapia me devolveu o controle e uma rotina que eu realmente consigo sustentar.",
  },
  {
    name: "Rodrigo Lemos",
    role: "Terapia domiciliar",
    initials: "RL",
    color: "bg-[#45a300]",
    text: "Depois da cirurgia, sair de casa era impossível. Receber a psicóloga aqui fez toda a diferença na minha recuperação emocional.",
  },
  {
    name: "Camila e Théo",
    role: "Terapia de casais",
    initials: "CT",
    color: "bg-[#f59a00]",
    text: "Saímos de cada sessão com algo concreto para praticar. É acolhimento com método, e isso mudou nosso casamento.",
  },
  {
    name: "Lúcia Freitas",
    role: "Paciente",
    initials: "LF",
    color: "bg-[#d63a3a]",
    text: "Encontrei um espaço seguro para falar das minhas inseguranças. O apoio profissional foi fundamental para minha estabilidade emocional.",
  },
  {
    name: "Arthur Medeiros",
    role: "Paciente há 1 ano",
    initials: "AM",
    color: "bg-[#7c3aed]",
    text: "Foi uma jornada incrível de autoconhecimento. Aprender a lidar com meus limites transformou completamente minha forma de viver.",
  },
];

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const maxPage = testimonials.length - 1;

  const next = () => setPage((p) => Math.min(p + 1, Math.max(0, maxPage - (cardsPerView - 1))));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section id="feedback" className="relative w-full bg-gradient-to-b from-white via-[#dcf1f0] to-[#c2e8e7] pt-20 pb-12 lg:pt-[100px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bcecec] via-[#d6f2f2] to-transparent opacity-80 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-[32px] leading-[1.15] font-bold text-[#052835] sm:text-[42px]">
              O que nossos pacientes dizem
            </h2>
          </div>
        </Reveal>

        <div className="relative flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="hidden lg:flex z-10 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db5b2] text-white transition-all disabled:opacity-50 disabled:pointer-events-none hover:bg-[#189b98]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="w-full overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(calc(-${page} * (100% / ${cardsPerView}) - ${page} * (24px / ${cardsPerView})))` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-none md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <article className="relative flex h-full min-h-[300px] flex-col justify-between rounded-[24px] border border-white/40 bg-white/40 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-xl transition-all hover:bg-white/50">
                    <div>
                      <div className="flex gap-1 text-[#F59E0B]">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-6 text-[15px] font-medium leading-[1.6] text-[#2c404a]">“{t.text}”</p>
                    </div>
                    
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white font-display text-sm font-semibold ${t.color}`}>
                          {t.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-display text-[15px] font-bold text-[#1a2b33]">{t.name}</p>
                          <p className="truncate text-[13px] text-[#4a6370]">{t.role}</p>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={page >= Math.max(0, maxPage - (cardsPerView - 1))}
            className="hidden lg:flex z-10 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db5b2] text-white transition-all disabled:opacity-50 disabled:pointer-events-none hover:bg-[#189b98]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Mobile controls */}
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1db5b2] text-white disabled:opacity-50"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={page >= Math.max(0, maxPage - (cardsPerView - 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1db5b2] text-white disabled:opacity-50"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
