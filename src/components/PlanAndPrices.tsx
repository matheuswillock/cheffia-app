interface PropsPlanAndprices {
  planTitle: string;
  price: string;
  description: string[];
  isSelected: boolean
}

export function PlanAndPrices({ planTitle, price, description, isSelected}: PropsPlanAndprices) {
  const infosColors = isSelected
    ? "bg-buttonSecondary text-buttonTextSecondary border-cardBorderHighlight "
    : "bg-cardBackground border-cardBorder";

  const titleColor = isSelected ? "" : "colorPrimary";
  
  const priceColor = isSelected
    ? ""
    : "text-3xl font-bold mb-6 text-buttonPrimary";
  
  const cardClasses = `
    flex flex-col items-center justify-center gap-2 
    border-2 rounded-xl p-6 text-center
    transition-all duration-300 ease-in-out 
    hover:scale-110 hover:shadow-lg
    ${
      isSelected
        ? "bg-buttonSecondary text-buttonTextSecondary border-cardBorderHighlight"
        : "bg-cardBackground border-cardBorder"
    }
  `;

  const titleClasses = `text-3xl font-semibold my-4 ${
    !isSelected ? "colorPrimary" : ""
  }`;
  const priceClasses = `text-4xl font-bold mb-6 ${
    !isSelected ? "text-buttonPrimary" : ""
  }`;


  return (
    <button
      className={cardClasses}
      type="button"
      role="radio"
      aria-checked={isSelected}
    >
      <h3 className={`text-3xl font-semibold my-4 ${titleColor}`}>
        {planTitle}
      </h3>

      <p className={`text-4xl font-bold mb-6 ${priceColor}`}>{price}</p>

      <ul className="mb-6" role="list">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </button>
  );
}