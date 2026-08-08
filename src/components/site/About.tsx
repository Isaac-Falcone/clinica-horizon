import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/forest-landscape.png";
import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

const stats = [
  { value: 26, suffix: "+", label: "Anos de Experiência" },
  { value: 6, suffix: "K+", label: "Tratamentos de Sucesso" },
  { value: 99, suffix: "%", label: "Taxa de Satisfação" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-[44px] leading-none font-bold text-current lg:text-[48px]">
      {display}
      {suffix}
    </span>
  );
}

const highlights = [
  "Equipe multidisciplinar com supervisão clínica contínua",
  "Atendimento domiciliar para quem precisa de mais conforto",
  "Planos terapêuticos personalizados e baseados em evidências",
];

export function About() {
  return (
    <section id="sobre" className="relative z-0 w-full -mt-[30px] lg:-mt-[60px]">
      <div className="grid lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="relative flex h-full flex-col justify-center p-6 pt-[80px] sm:p-10 sm:pt-[140px] min-h-[450px] lg:min-h-[550px] lg:p-24 lg:pt-[160px]">
            <div className="absolute inset-0 z-0">
              <img
                src={aboutImage}
                alt="Natureza serena com rio e flores"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 max-w-lg">
              <h2 className="font-display text-[32px] leading-[1.1] font-bold text-[#1a2b33] sm:text-[36px] md:text-[44px]">
                Sobre nossa prática
              </h2>
              <p className="mt-6 text-[15px] sm:text-base leading-[1.6] text-[#2c404a] font-medium">
                A Clínica Horizon nasceu do encontro entre a psiquiatria contemporânea e a escuta
                verdadeiramente acolhedora. Há mais de duas décadas acompanhamos pessoas e casais em
                processos de transformação — no consultório, em ambiente calmo e reservado, ou na casa
                do paciente, quando o deslocamento é um obstáculo.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {highlights.map((item) => (
                  <li key={item} className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1db5b2] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-[1.5] text-[#2c404a] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="relative flex h-full flex-col justify-center bg-gradient-to-br from-[#8fc6c6] to-[#619c9b] overflow-hidden p-8 py-16 sm:p-10 sm:pt-[140px] lg:p-24 lg:pt-[160px]">
            {/* SVG Concentric Circles */}
            <svg 
              className="absolute -bottom-[20%] -left-[10%] w-[80%] max-w-[500px] h-auto opacity-10 pointer-events-none" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="0" cy="200" r="180" stroke="white" strokeWidth="1" />
              <circle cx="0" cy="200" r="140" stroke="white" strokeWidth="1.5" />
              <circle cx="0" cy="200" r="100" stroke="white" strokeWidth="2" />
              <circle cx="0" cy="200" r="60" stroke="white" strokeWidth="2.5" />
            </svg>

            <div className="relative z-10 grid gap-10 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-white drop-shadow-sm">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-base leading-[1.4] font-medium text-white/95">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="relative z-10 mt-12">
              <a 
                href="#agendar" 
                className="inline-flex items-center gap-2 rounded-full bg-[#1db5b2] px-8 py-3.5 font-display text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#189b98]"
              >
                Agendar Consulta <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

