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
      callToActionValue: "",
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
      callToActionValue: "",
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
      callToActionValue: "Contate-nos",
      isSelected: false,
    },
  ];

  return (
    <section className="pricing py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-primaryColor">
        Planos e Preços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardPlanAndPrices.map((card) => (
          <PlanAndPrices
            PlanTitle={card.planTitle}
            Price={card.price}
            Description={card.description}
            CallToActionValue={card.callToActionValue}
            IsSelected={card.isSelected}
          />
        ))}
      </div>
    </section>
  );
}