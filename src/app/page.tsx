import { ApresentationSection } from "@/components/ApresentationSection";
import { SectionPlanAndPrices } from "@/components/SectionPlanAndPrices";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import PulsatingButton from "@/components/ui/pulsating-button";
import TypingAnimation from "@/components/ui/typing-animation";
import WordFadeIn from "@/components/ui/word-fade-in";
import WordRotate from "@/components/ui/word-rotate";

export default function Home() {
  return (
    <div className="container h-full mx-auto p-4 text-secondary">
      <SideBar />

      <main className="">
        <section className=" flex flex-col justify-items-center items-center hero text-center py-20 gap-4">
          <div>
            <WordRotate
              words={["Simplifique os pedidos com Cheffia."]}
              className="text-6xl font-bold text-colorPrimary"
            />
            <WordRotate
              className="tracking-normal text-3xl mt-1 mb-8 text-colorSecondary"
              words={[
                "O Cheffia é a solução completa para gerenciar pedidos, melhorar a experiência do cliente e aumentar suas vendas.",
              ]}
            />
          </div>

          <PulsatingButton
            className=" text-buttonTextPrimary bg-buttonPrimary max-w-96 h-24 px-20 text-4xl font-semibold "
            pulseColor="#FFB845"
          >
            Começar
          </PulsatingButton>
        </section>
        <ApresentationSection />
        <SectionPlanAndPrices />
      </main>

      <div className="mb-52 text-center text-secondary w-full ">
        <p>&copy; 2023 Cheffia. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
