import heroImage from "@/assets/hero-landscape.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative z-10">
      <div className="relative">
        <img
          src={heroImage}
          alt="Montanhas serenas ao amanhecer, símbolo de calma e amplitude emocional"
          width={1920}
          height={1200}
          className="h-[92vh] min-h-[560px] w-full object-cover rounded-b-[40px] md:rounded-b-[60px]"
        />
        <div
          className="absolute inset-0 rounded-b-[40px] md:rounded-b-[60px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,38,48,0.55) 0%, rgba(9,38,48,0.35) 45%, rgba(9,38,48,0.75) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-alt/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Clínica de psicoterapia avançada
              </span>

              <h1 className="mt-6 font-display text-[36px] leading-[1.08] font-bold text-primary-foreground sm:text-[44px] md:text-[52px] lg:text-[64px]">
                <em className="font-normal italic">Psicoterapia</em> para Indivíduos e Casais
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-primary-foreground/85 lg:text-lg">
                Nossa abordagem une práticas psiquiátricas modernas com uma compreensão holística do
                bem-estar mental, mostrando como a terapia é fundamental para os desafios do dia a
                dia.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="#agendar" className="btn-primary text-base justify-center">
                  Agende sua Consulta
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border-[1.5px] border-primary-foreground/50 px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-foreground"
                >
                  Conhecer serviços
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
