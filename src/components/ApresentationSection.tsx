import { title } from "process";
import { ApresentationItem } from "./ApresentationItem";

export function ApresentationSection() {
  const items = [
    {
      title: "QR Code Personalizado",
      description:
        "Cada restaurante recebe um QR code único para fácil acesso ao menu digital.",
    },
    {
      title: "Pedidos Digitais",
      description:
        "Clientes fazem pedidos diretamente pelo smartphone, reduzindo erros e agilizando o processo.",
    },
    {
      title: "Pagamento Integrado",
      description:
        "Diversas opções de pagamento digital, incluindo Pix, NuPay, SamsungPay, Apple Pay e Google Pay.",
    },
  ];

  return (
    <section className="features py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Recursos principais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((i) => (
          <ApresentationItem
            ItemTitle={i.title}
            ItemDescription={i.description}
          />
        ))}
      </div>
    </section>
  );
}