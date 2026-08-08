import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#agendar");
    };
    
    // Check initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const close = () => {
    window.history.pushState(null, "", " ");
    setIsOpen(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    
    // Simulating quick send
    window.setTimeout(() => {
      setSending(false);
      event.currentTarget.reset();
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
      close();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-[450px] overflow-hidden rounded-[24px] bg-[#1db5b2] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <p className="font-display text-sm font-bold tracking-widest text-white/80 uppercase">
            Agendamento
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            Fale Conosco
          </h2>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-white/90">
            Deixe seus dados e nossa equipe de acolhimento entrará em contato para agendar seu primeiro atendimento.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Seu nome completo"
            className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/50"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Seu telefone (WhatsApp)"
            className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/50"
          />
          <textarea
            name="reason"
            rows={2}
            placeholder="Qual o motivo do contato? (Opcional)"
            className="w-full resize-none rounded-xl border-0 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/50"
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-display text-[15px] font-bold text-[#107070] shadow-md transition-all hover:scale-[1.02] hover:bg-gray-50 hover:shadow-lg disabled:opacity-70"
          >
            {sending ? "Enviando..." : "Solicitar Contato"}
          </button>
        </form>
      </div>
    </div>
  );
}
