import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in"; 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {AiOutlineMenu} from "react-icons/ai";
import { div } from "framer-motion/client";

export default function Home() {
  const[menuOpen, setMenuOpen] = useState(false); //controla a visibilidade do menu

  return (
    <div className="container mx-auto px-4 text-zinc-600">
      <header className="py-6 relative">
        <nav className="flex justify-between items-center">
          <h1 className="text-4x l fonte-bold text-red-600"></h1>

          <div className="relative"></div>

        </nav>
      </header>
        
    </div>
  )
}


function FeatureCard({ title, description }) {
  return (
    <div className="feature-card text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, highlight }) {
  return (
    <div className={`pricing-card border rounded-lg p-6 text-center ${highlight ? 'bg-red-600 text-white' : 'border-gray-200'}`}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className={`text-3xl font-bold mb-6 ${highlight ? '' : 'text-red-600'}`}>{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button variant={highlight ? "outline" : "solid"} className={highlight ? "bg-white text-red-600" : "text-red-600"}>
        {highlight ? "Contate-nos" : "Escolher Plano"}
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-zinc-600">
      <header className="py-6">
        <nav className="flex justify-between items-center ">
          <h1 className="text-4xl font-bold text-red-600">Cheffia</h1>
          <div>
            {["Recursos", "Preços"].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="mr-4 text-zinc-700 hover:text-red-600 text-xl font-semibold"
              >
                {item}
              </Button>
            ))}
            <Button className="bg-red-600 text-white hover:bg-red-700 text-xl font-semibold">
              Começar
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero text-center py-20">
          <WordFadeIn
            words="Simplifique os pedidos com Cheffia."
            className="text-4xl font-bold text-gray-800"
          />
          <p className="text-xl mb-8 text-gray-600">
            O Cheffia é a solução completa para gerenciar pedidos, melhorar a
            experiência do cliente e aumentar suas vendas.
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
            Começar
          </Button>
        </section>

        <section className="features py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "QR Code Personalizado", description: "Cada restaurante recebe um QR code único para fácil acesso ao menu digital." },
              { title: "Pedidos Digitais", description: "Clientes fazem pedidos diretamente pelo smartphone, reduzindo erros e agilizando o processo." },
              { title: "Pagamento Integrado", description: "Diversas opções de pagamento digital, incluindo Pix, NuPay, Samsung Pay, Apple Pay e Google Pay." }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="pricing py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Planos e Preços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Básico", price: "R$ 99/mês", features: ["Até 100 pedidos/mês", "Suporte por email", "QR Code personalizado"], highlight: false },
              { title: "Profissional", price: "R$ 199/mês", features: ["Até 500 pedidos/mês", "Suporte prioritário", "Análise de dados básica"], highlight: true },
              { title: "Enterprise", price: "Personalizado", features: ["Pedidos ilimitados", "Suporte 24/7", "Análise de dados avançada"], highlight: false }
            ].map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </section>

      </main>

      <footer className="py-6 text-center text-gray-600">
        <p>&copy; 2023 Cheffia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
