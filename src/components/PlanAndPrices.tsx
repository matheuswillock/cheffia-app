import { Button } from "./ui/button";

interface PropsPlanAndPrices {
  PlanTitle: string;
  Price: string;
  Description: string[];
  CallToActionValue: string;
  IsSelected: boolean
}

export function PlanAndPrices({ PlanTitle, Price, Description, CallToActionValue, IsSelected}: PropsPlanAndPrices) {
  const infosColors = IsSelected
    ? "bg-red-600 text-primaryColor"
    : "";

  const titleColor = IsSelected 
  ? "" 
  : "text-primaryColor";
  
  const priceColor = IsSelected
    ? ""
    : "text-3xl font-bold mb-6 text-red-600";
  
  return (
    <div
      className={`flex flex-col gap-2  pricing-card border border-gray-200 rounded-xl p-6 text-center ${infosColors}`}
    >
      <h3 className={`text-3xl font-semibold my-4 ${titleColor}`}>
        {PlanTitle}
      </h3>

      <p className={`text-4xl font-bold mb-6 ${priceColor}`}>{Price}</p>

      <ul className="mb-6">
        {Description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Button
        size="lg"
        variant="outline"
        className={`mb-3`}
      >
        {CallToActionValue !== "" ? CallToActionValue : "Escolher Plano"}
      </Button>
    </div>
  );
}