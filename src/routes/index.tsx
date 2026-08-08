import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Guidance } from "@/components/site/Guidance";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ContactModal } from "@/components/site/ContactModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Horizon | Psicoterapia para Indivíduos e Casais" },
      {
        name: "description",
        content:
          "Clínica de psicoterapia com atendimento domiciliar e presencial para indivíduos e casais. Agende sua consulta e cuide do seu bem-estar mental.",
      },
      { property: "og:title", content: "Clínica Horizon | Psicoterapia para Indivíduos e Casais" },
      {
        property: "og:description",
        content:
          "Terapia individual, de casais e domiciliar com abordagem moderna e acolhedora. Agende sua consulta na Clínica Horizon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Guidance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
