import { ApresentationSection } from "@/components/ApresentationSection";
import { SectionPlanAndPrices } from "@/components/SectionPlanAndPrices";
import { SideBar } from "@/components/SideBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-secondaryColor">
      <SideBar />

      <main className="my-32">
        <section className="hero text-center py-20">
          <WordFadeIn
            words="Simplifique os pedidos com Cheffia."
            className="text-6xl font-bold text-primaryColor"
          />

          <p className="tracking-normal text-4xl mt-4 mb-8 text-secondaryColor">
            O Cheffia é a solução completa para gerenciar pedidos, melhorar a
            experiência do cliente e aumentar suas vendas.
          </p>

          <Button
            size="xl"
            className="bg-red-600 text-primaryColor hover:bg-red-700"
          >
            Começar
          </Button>
        </section>
        <ApresentationSection />
        <SectionPlanAndPrices />
      </main>

      <footer className="py-6 text-center text-secondaryColor">
        <p>&copy; 2023 Cheffia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
