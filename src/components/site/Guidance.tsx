import guidanceImage from "@/assets/expert-guidance.jpg";
import { Reveal } from "./Reveal";
import { Award, Brain, Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Diagnóstico cuidadoso",
    text: "Escuta aprofundada e avaliação clínica antes de qualquer conduta terapêutica.",
  },
  {
    icon: Sparkles,
    title: "Ferramentas para o cotidiano",
    text: "Estratégias práticas que você aplica no trabalho, na família e nos relacionamentos.",
  },
];

export function Guidance() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0da1a1] via-[#46e6e6] to-[#eaf5f5] py-12 md:py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative pb-10 lg:pb-0">
            <img
              src={guidanceImage}
              alt="Terapeuta atenta anotando durante sessão com paciente"
              loading="lazy"
              width={912}
              height={1104}
              className="w-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              style={{ borderRadius: "160px 24px 160px 24px", aspectRatio: "4 / 4.6" }}
            />
            {/* Badge translúcido flutuante estilo referência */}
            <div className="absolute -left-6 top-10 flex h-32 w-32 items-center justify-center rounded-full border-[4px] border-[#1db5b2]/30 bg-[#1db5b2]/90 p-4 text-center shadow-lg backdrop-blur-md">
              <div className="absolute inset-2 rounded-full border border-white/40 border-dashed"></div>
              <div className="flex flex-col items-center gap-1 text-white">
                <Award className="h-6 w-6" />
                <p className="font-display text-[10px] font-bold uppercase tracking-widest leading-tight">Equipe Certificada</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <h2 className="font-display text-[32px] leading-[1.1] font-bold text-[#052835] sm:text-[36px] md:text-[42px]">
            Orientação Especializada
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-[1.6] text-[#1a3d4a] font-medium">
            Terapia não é apenas falar sobre o passado: é aprender a habitar o presente com mais
            clareza. Cada plano terapêutico combina técnicas cognitivo-comportamentais, abordagem
            psicodinâmica e práticas de regulação emocional — para que o progresso apareça nas
            pequenas decisões do seu dia.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map(({ title, text }) => (
              <div key={title} className="relative rounded-[24px] border border-white/60 bg-white/10 p-7 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-xl">
                <h3 className="font-display text-lg font-bold text-[#052835]">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#2f4f4e] font-medium">{text}</p>
              </div>
            ))}
          </div>

          <a href="#agendar" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#1db5b2] px-8 py-3.5 font-display text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#189b98]">
            Falar com um especialista <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
