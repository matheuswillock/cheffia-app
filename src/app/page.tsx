import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";

export default function Home() {
  return (
    <div className="container mx-auto px-4 text-zinc-600">
      <header className="py-6">
        <nav className="flex justify-between items-center ">
          <h1 className="text-4xl font-bold text-red-600">Cheffia</h1>
          <div>
            <Button
              variant="ghost"
              className="mr-4 text-zinc-700 hover:text-red-600 text-xl font-semibold"
            >
              Recursos
            </Button>
            <Button
              variant="ghost"
              className="mr-4 text-zinc-700 hover:text-red-600 text-xl font-semibold"
            >
              Preços
            </Button>
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
            <div className="feature-card text-center">
              <h3 className="text-xl font-semibold mb-4">
                QR Code Personalizado
              </h3>
              <p>
                Cada restaurante recebe um QR code único para fácil acesso ao
                menu digital.
              </p>
            </div>
            <div className="feature-card text-center">
              <h3 className="text-xl font-semibold mb-4">Pedidos Digitais</h3>
              <p>
                Clientes fazem pedidos diretamente pelo smartphone, reduzindo
                erros e agilizando o processo.
              </p>
            </div>
            <div className="feature-card text-center">
              <h3 className="text-xl font-semibold mb-4">
                Pagamento Integrado
              </h3>
              <p>
                Diversas opções de pagamento digital, incluindo Pix, NuPay,
                Samsung Pay, Apple Pay e Google Pay.
              </p>
            </div>
          </div>
        </section>

        <section className="pricing py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Planos e Preços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Básico
              </h3>
              <p className="text-3xl font-bold mb-6 text-red-600">R$ 99/mês</p>
              <ul className="mb-6">
                <li>Até 100 pedidos/mês</li>
                <li>Suporte por email</li>
                <li>QR Code personalizado</li>
              </ul>
              <Button variant="outline">Escolher Plano</Button>
            </div>
            <div className="pricing-card border border-gray-200 rounded-lg p-6 text-center bg-red-600 text-white">
              <h3 className="text-2xl font-semibold mb-4">Profissional</h3>
              <p className="text-3xl font-bold mb-6">R$ 199/mês</p>
              <ul className="mb-6">
                <li>Até 500 pedidos/mês</li>
                <li>Suporte prioritário</li>
                <li>Análise de dados básica</li>
              </ul>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Escolher Plano
              </Button>
            </div>
            <div className="pricing-card border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">Personalizado</p>
              <ul className="mb-6">
                <li>Pedidos ilimitados</li>
                <li>Suporte 24/7</li>
                <li>Análise de dados avançada</li>
              </ul>
              <Button variant="outline">Contate-nos</Button>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-6 text-center text-gray-600">
        <p>&copy; 2023 Cheffia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
