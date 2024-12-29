interface PropsPlanAndPrices {
  PlanTitle: string;
  Price: string;
  Description: string[];
  IsSelected: boolean
}

export function PlanAndPrices({ PlanTitle, Price, Description, IsSelected}: PropsPlanAndPrices) {
  const infosColors = IsSelected
    ? "bg-buttonSecondary text-buttonTextSecondary border-cardBorderHighlight "
    : "bg-cardBackground border-cardBorder";

  const titleColor = IsSelected ? "" : "colorPrimary";
  
  const priceColor = IsSelected
    ? ""
    : "text-3xl font-bold mb-6 text-buttonPrimary";
  
  return (
    <button
      className={`flex flex-col items-center justify-center gap-2  border-2  rounded-xl p-6 text-center ${infosColors}
      transition-all duration-300 ease-in-out 
      hover:scale-110 hover:shadow-lg`}
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
    </button>
  );
}