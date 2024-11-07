


import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";
import { FiMenu, FiX } from "react-icons/fi"; 
import "../app/page.css"




export default function Home() {
  
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <div className="text-zinc-600">
      <header className="py-6">
        <nav className="flex justify-between items-center">
          <h1>Cheffia</h1>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              className="text-zinc-700 hover:text-red-600 text-xl font-semibold"
            >
              Recursos
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-700 hover:text-red-600 text-xl font-semibold"
            >
              Preços
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-700 hover:text-red-600 text-xl font-semibold"
            >
              Login
              <Link href="/login" passHref></Link>
            </Button>
          </div>

          {/* Botão de menu para dispositivos móveis */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu lateral para dispositivos móveis */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 bg-red-600 text-white p-4 rounded-lg">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="w-full text-left text-lg font-semibold hover:text-red-300"
          >
            Recursos
          </Button>
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="w-full text-left text-lg font-semibold hover:text-red-300"
          >
            Preços
          </Button>
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="w-full text-left text-lg font-semibold hover:text-red-300"
          >
            Login
          </Button>
        </div>
      )}

      <main>
        <section className="hero text-center py-20">
          <WordFadeIn
            words="Simplifique os pedidos com Cheffia."
            className="text-4xl font-bold text-red-800"
          />
          <br /> <br /><br />
          <p className="text-xl mb-8 text-gray-800 font-semibold">
            O Cheffia é a solução completa para gerenciar pedidos, melhorar a
            experiência do cliente e aumentar suas vendas.
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
            Começar
          </Button>
        </section>
      </main>

      <footer >
        <p>&copy; 2023 Cheffia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
