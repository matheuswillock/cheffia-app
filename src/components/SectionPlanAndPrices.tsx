import { PlanAndPrices } from "./PlanAndPrices";

export function SectionPlanAndPrices() {
  const cardPlanAndPrices = [
    {
      planTitle: "Básico",
      price: "R$ 99/mês",
      description: [
        "Até 100 pedidos/mês",
        "Suporte por email",
        "QR Code personalizado",
      ],
      isSelected: false,
    },
    {
      planTitle: "Profissional",
      price: "R$ 199/mês",
      description: [
        "Até 500 pedidos/mês",
        "Suporte prioritário",
        "Análise de dados básica",
      ],
      isSelected: true,
    },
    {
      planTitle: "Enterprise",
      price: "Personalizado",
      description: [
        "Pedidos ilimitados",
        "Suporte 24/7",
        "Análise de dados avançada",
      ],
      isSelected: false,
    },
  ];

  return (
    <section className="pricing py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Planos e Preços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardPlanAndPrices.map((card) => (
          <PlanAndPrices
            planTitle={card.planTitle}
            price={card.price}
            description={card.description}
            isSelected={card.isSelected}
          />
        ))}
      </div>
    </section>
  );
}