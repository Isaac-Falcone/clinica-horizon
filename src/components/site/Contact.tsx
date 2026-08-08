import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(100, "Máximo de 100 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(255, "Máximo de 255 caracteres"),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(20, "Máximo de 20 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais (mín. 10 caracteres)")
    .max(1000, "Máximo de 1000 caracteres"),
  antispam: z.string().trim().regex(/^4$/, "Resposta incorreta. Dica: 2+2=4")
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fields = [
  { name: "name", type: "text", placeholder: "Nome (obrigatório)" },
  { name: "email", type: "email", placeholder: "E-mail (obrigatório)" },
  { name: "phone", type: "tel", placeholder: "Telefone (obrigatório)" },
] as const;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Revise os campos destacados para continuar.");
      return;
    }

    setErrors({});
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Mensagem enviada! Nossa equipe responde em até 24h.");
    }, 700);
  };

  const inputClass = (field: keyof Errors) =>
    `w-full rounded-md border-0 bg-white/40 px-5 py-3.5 text-[15px] font-medium text-[#1a3d4a] transition-all outline-none placeholder:text-[#3b5e5c] focus:ring-2 focus:ring-[#1db5b2] focus:bg-white/70 ${
      errors[field] ? "ring-2 ring-red-500" : ""
    }`;

  return (
    <section id="contato" className="relative w-full bg-gradient-to-b from-[#c2e8e7] via-[#ebf7f7] to-[#f4fbfc] py-12 lg:py-[80px] overflow-hidden">
      {/* Background Glow extending from above */}
      <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bcecec] via-[#d6f2f2] to-transparent opacity-60 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          
          {/* Left Column - Info & Map */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[32px] border border-white/40 bg-[#7eb6b5]/20 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-xl lg:p-12">
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-[#052835]">Telefone</h3>
                <p className="mt-1 text-[15px] font-medium text-[#1a3d4a]">(85) 0000-0000</p>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-[#052835]">E-mail</h3>
                <p className="mt-1 text-[15px] font-medium text-[#1a3d4a]">contato@clinicahorizon.com</p>
              </div>
              <div className="mb-8">
                <h3 className="font-display text-xl font-bold text-[#052835]">Localização</h3>
                <p className="mt-1 text-[15px] font-medium text-[#1a3d4a]">Av. Beira Mar, 1420 — Meireles, Fortaleza/CE</p>
              </div>

              <div className="mt-auto overflow-hidden rounded-[20px] shadow-sm border-[6px] border-white/50 backdrop-blur-sm bg-white/20">
                <iframe
                  title="Mapa da Clínica Horizon em Fortaleza"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.358253181816!2d-38.508544!3d-3.725916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7487b332b4b45%3A0xcaf5bf8c763b0638!2sAv.%20Beira%20Mar%2C%201420%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060165-121!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] md:h-[420px] w-full opacity-90 transition-opacity hover:opacity-100 mix-blend-multiply filter contrast-[0.9]"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Column - Form */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-[32px] border border-white/40 bg-white/30 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-xl lg:p-12">
              <h2 className="font-display text-[28px] font-bold text-[#052835] sm:text-[34px]">
                Entre em Contato
              </h2>
              <p className="mt-4 mb-8 text-[14px] sm:text-[15px] leading-[1.6] font-medium text-[#2f4f4e]">
                Escolha o canal mais confortável para você. O primeiro contato é sempre acolhedor, sigiloso e sem compromisso.
                Caso nos envie uma mensagem, geralmente respondemos em até 1 dia útil.
              </p>

              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                {fields.map((f) => (
                  <div key={f.name}>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      className={inputClass(f.name)}
                      aria-invalid={Boolean(errors[f.name])}
                    />
                    {errors[f.name] && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors[f.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Mensagem"
                    className={`${inputClass("message")} resize-none`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
                  )}
                </div>

                <div className="mt-2">
                  <label htmlFor="antispam" className="block mb-2 text-[14px] font-medium text-[#2f4f4e]">
                    *Quanto é 2+2? (Anti-spam)
                  </label>
                  <input
                    id="antispam"
                    name="antispam"
                    type="text"
                    placeholder="Digite aqui"
                    className={inputClass("antispam")}
                    aria-invalid={Boolean(errors.antispam)}
                  />
                  {errors.antispam && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.antispam}</p>
                  )}
                </div>

                <div className="mt-4">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-[#1db5b2] px-8 py-3.5 font-display text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#189b98] disabled:opacity-70 disabled:pointer-events-none w-fit">
                    {sending ? "Enviando..." : "Enviar"} <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
