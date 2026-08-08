import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, HeartHandshake, Home } from "lucide-react";
import individual from "@/assets/therapy-individual.jpg";
import couples from "@/assets/therapy-couples.jpg";
import home from "@/assets/therapy-home.jpg";
import guidance from "@/assets/expert-guidance.jpg";
import { Reveal } from "./Reveal";

const badges = [
  { icon: ShieldCheck, label: "Sigilo e ética profissional" },
  { icon: HeartHandshake, label: "Atendimento acolhedor" },
  { icon: Home, label: "Domiciliar e presencial" },
];

const services = [
  {
    image: individual,
    title: "Terapia Individual",
    text: "Um espaço só seu para compreender emoções, aliviar a ansiedade e reencontrar direção nas escolhas do dia a dia.",
  },
  {
    image: couples,
    title: "Terapia de Casais",
    text: "Reconstruímos a comunicação e o vínculo com técnicas que transformam conflitos em conversas seguras.",
  },
  {
    image: home,
    title: "Terapia Domiciliar",
    text: "Levamos o cuidado até a sua casa, mantendo o mesmo rigor clínico em um ambiente familiar e confortável.",
  },
  {
    image: guidance,
    title: "Acompanhamento Psiquiátrico",
    text: "Avaliação clínica integrada à psicoterapia, com acompanhamento próximo e revisões periódicas do plano.",
  },
];

export function Services() {
  const [page, setPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPage = services.length - 1;
  const next = () => setPage((p) => Math.min(p + 1, Math.max(0, maxPage - (cardsPerView - 1))));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section id="servicos" className="relative w-full bg-[#f4f8f8] py-20 lg:py-[120px] overflow-hidden z-0">
      {/* Brilho Azul Claro Centralizado Garantido */}
      <div 
        className="absolute left-1/2 bottom-0 -z-10 h-[1200px] w-[1600px] -translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #5ee5e5 0%, rgba(94,229,229,0) 60%)' }}
      ></div>

      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
            <div className="min-w-0">
              <p className="font-display text-sm font-medium tracking-[0.14em] text-primary uppercase">
                Serviços psiquiátricos
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[32px] leading-[1.15] font-bold sm:text-[40px]">
                Terapias desenhadas para o seu momento de vida
              </h2>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                aria-label="Serviço anterior"
                onClick={prev}
                disabled={page === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7a9b9a] text-[#2c404a] transition-all hover:bg-white/50 disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Próximo serviço"
                onClick={next}
                disabled={page >= Math.max(0, maxPage - (cardsPerView - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1db5b2] text-white transition-all hover:bg-[#189b98] disabled:pointer-events-none disabled:opacity-50"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden px-1">
          <div 
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(calc(-${page} * (100% / ${cardsPerView}) - ${page} * (24px / ${cardsPerView})))` }}
          >
            {services.map((s, i) => (
              <div key={s.title} className="w-full flex-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <article className="relative flex h-full min-h-[420px] lg:min-h-[480px] flex-col overflow-hidden rounded-[24px] border border-white/60 bg-white/10 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-xl">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-[220px] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl font-bold text-[#052835]">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.6] font-medium text-[#2f4f4e]">
                      {s.text}
                    </p>
                    <a
                      href="#agendar"
                      className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-semibold transition-all ${
                        i === 1
                          ? "bg-[#1db5b2] text-white hover:bg-[#189b98] shadow-md"
                          : "border border-[#7a9b9a] bg-transparent text-[#2c404a] hover:bg-white/50"
                      }`}
                    >
                      Ler mais <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <Reveal>
            <ul className="grid gap-6 rounded-[32px] border border-white/20 bg-gradient-to-r from-[#0b3c4f]/80 to-[#1db5b2]/70 p-6 shadow-lg backdrop-blur-xl sm:grid-cols-3 lg:p-8">
              {badges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex min-w-0 items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white shadow-sm backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold text-white/95">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
